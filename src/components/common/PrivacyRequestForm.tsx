"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { Recaptcha, type RecaptchaHandle } from "./forms/Recaptcha";

/**
 * `value` is sent to the API exactly as written (must match the backend enum).
 * `label` is what the user sees.
 */
export const REQUEST_TYPES = [
    { value: "Access / copy of my data", label: "Access / copy of my data" },
    { value: "Portable copy", label: "Portable copy" },
    { value: "Correct my data", label: "Correct my data" },
    { value: "Delete my data", label: "Delete my data" },
    {
        value: "Opt out of sale, sharing, or targeted advertising",
        label: "Opt out of sale, sharing, or targeted advertising",
    },
    {
        value: "Limit sensitive personal information",
        label: "Limit sensitive personal information",
    },
    { value: "Withdraw consent", label: "Withdraw consent" },
    {
        value: "Dispute a score or report",
        label: "Dispute a score or report (routes to disputes@)",
    },
    {
        value: "List of third-party recipients (Oregon)",
        label: "List of third-party recipients (Oregon)",
    },
    { value: "Appeal a prior decision", label: "Appeal a prior decision" },
    { value: "Other", label: "Other" },
] as const;

export const ROLES = [
    "Broker or 3PL employee",
    "Carrier owner or principal",
    "Dispatcher",
    "Driver",
    "Insurance producer",
    "Shipper / consignee",
    "Website visitor",
    "Other",
] as const;

const MAX_FILE_MB = 5;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
const ALLOWED_MIME = ["application/pdf", "image/jpeg", "image/png"];
const ALLOWED_EXT = /\.(pdf|jpe?g|png)$/i;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;
const PHONE_PATTERN = /^[\d\s().-]+$/;
const MC_DOT_PATTERN = /^[A-Za-z0-9\s\-/,#]+$/;

/** iso = what the select stores; dial = calling code sent to the API. */
export const COUNTRY_CODES = [
    { iso: "IN", dial: "91", name: "India", flag: "🇮🇳" },
    { iso: "US", dial: "1", name: "United States", flag: "🇺🇸" },
    { iso: "CA", dial: "1", name: "Canada", flag: "🇨🇦" },
    { iso: "MX", dial: "52", name: "Mexico", flag: "🇲🇽" },
] as const;

const DEFAULT_COUNTRY = "US";

function dialFor(iso: string): string {
    return COUNTRY_CODES.find((c) => c.iso === iso)?.dial ?? "1";
}

/** Returns E.164 (e.g. +15551234567), or "" when no phone was entered. */
function formatPhone(values: Pick<PrivacyRequestFormValues, "phone" | "phoneCountry">) {
    const national = values.phone.replace(/\D/g, "").replace(/^0+/, "");
    return national ? `+${dialFor(values.phoneCountry)}${national}` : "";
}

const DEFAULT_ENDPOINT =
    process.env.NEXT_PUBLIC_PRIVACY_REQUEST_URL ??
    "https://mobility-twitter-tameness.ngrok-free.dev/api/privacy-requests";

export interface PrivacyRequestFormValues {
    fullName: string;
    email: string;
    phoneCountry: string;
    phone: string;
    company: string;
    role: string;
    mcDot: string;
    residence: string;
    requestTypes: string[];
    details: string;
    isAgent: boolean;
    agentProof: FileList | null;
    attestation: boolean;
}

export interface PrivacyRequestFormProps {
    className?: string;
    /** POST endpoint for submitting the request. */
    endpoint?: string;
    /** POST endpoint for OTP verification. Defaults to `${endpoint}/verify-otp`. */
    verifyEndpoint?: string;
    /** Called with the request ID once the OTP is verified and the request is final. */
    onSuccess?: (requestId: string) => void;
}

/* ---------- styles ---------- */
const labelCls = "block text-sm font-semibold text-gray-900";
const hintCls = "mt-1.5 text-xs text-gray-500 sm:text-sm";
const inputCls =
    "mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#015EFF] focus:ring-2 focus:ring-[#015EFF]/20 sm:text-base";
const inputErrorCls =
    "!border-red-500 focus:!border-red-500 focus:!ring-red-500/20";
const errorCls = "mt-1.5 text-sm text-red-600";
const checkRowCls =
    "flex items-start gap-2.5 text-sm leading-6 text-gray-700 sm:text-base";
const checkInputCls =
    "mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[#015EFF] focus:ring-[#015EFF]";

/* ---------- small field wrapper (keeps every column aligned) ---------- */
function Field({
    id,
    label,
    required,
    hint,
    error,
    className = "",
    children,
}: {
    id: string;
    label: string;
    required?: boolean;
    hint?: string;
    error?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={`flex min-w-0 flex-col ${className}`}>
            <label htmlFor={id} className={labelCls}>
                {label}
                {required && (
                    <span aria-hidden="true" className="text-red-600">
                        {" "}
                        *
                    </span>
                )}
            </label>
            {children}
            {error ? (
                <p id={`${id}-error`} role="alert" className={errorCls}>
                    {error}
                </p>
            ) : hint ? (
                <p id={`${id}-hint`} className={hintCls}>
                    {hint}
                </p>
            ) : null}
        </div>
    );
}

/* ---------- API helpers ---------- */
function buildBody(values: PrivacyRequestFormValues): FormData {
    const body = new FormData();
    body.append("fullName", values.fullName.trim());
    body.append("email", values.email.trim().toLowerCase());

    const phone = formatPhone(values);
    if (phone) body.append("phone", phone);

    const company = values.company.trim();
    if (company) body.append("companyName", company);

    body.append("role", values.role);

    const mcDot = values.mcDot.trim();
    if (mcDot) body.append("mcDotNumber", mcDot);

    body.append("stateOrCountry", values.residence.trim());

    // Array field in multipart: the backend only parses it as an array when
    // the key ends with [] (one entry per selected type).
    values.requestTypes.forEach((t) => body.append("requestTypes[]", t));

    body.append("details", values.details.trim());
    body.append("isAgent", values.isAgent ? "true" : "false");
    body.append("declarationAccepted", values.attestation ? "true" : "false");

    const file = values.agentProof?.[0];
    if (values.isAgent && file) body.append("proofOfAuthority", file);

    return body;
}

/** Non-agent requests are sent as application/json. */
function buildJson(values: PrivacyRequestFormValues) {
    const phone = formatPhone(values);
    const company = values.company.trim();
    const mcDot = values.mcDot.trim();

    return {
        fullName: values.fullName.trim(),
        email: values.email.trim().toLowerCase(),
        ...(phone ? { phone } : {}),
        ...(company ? { companyName: company } : {}),
        role: values.role,
        ...(mcDot ? { mcDotNumber: mcDot } : {}),
        stateOrCountry: values.residence.trim(),
        requestTypes: values.requestTypes,
        details: values.details.trim(),
        isAgent: false,
        declarationAccepted: values.attestation,
    };
}

// Skips ngrok's browser interstitial page (harmless elsewhere).
const BASE_HEADERS = {
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
};

const OTP_PATTERN = /^\d{6}$/;

async function readServerMessage(res: Response): Promise<string | null> {
    try {
        const json = await res.json();
        // Laravel-style validation errors: { errors: { field: ["msg", ...] } }
        if (
            json?.errors &&
            typeof json.errors === "object" &&
            !Array.isArray(json.errors)
        ) {
            const flat = Object.values(json.errors as Record<string, unknown>)
                .flat()
                .filter((m): m is string => typeof m === "string");
            if (flat.length) return flat.join(" ");
        }
        if (typeof json?.message === "string") return json.message;
        if (Array.isArray(json?.errors) && json.errors.length) {
            return json.errors
                .map((e: unknown) =>
                    typeof e === "string"
                        ? e
                        : (e as { message?: string })?.message ?? ""
                )
                .filter(Boolean)
                .join(" ");
        }
    } catch {
        /* non-JSON response */
    }
    return null;
}

export function PrivacyRequestForm({
    className = "",
    endpoint = DEFAULT_ENDPOINT,
    verifyEndpoint,
    onSuccess,
}: PrivacyRequestFormProps) {
    const verifyUrl =
    verifyEndpoint ??
    (endpoint ? `${endpoint.replace(/\/+$/, "")}/verify-otp` : "");

    // Step 1 (form) -> Step 2 (pending OTP) -> Step 3 (requestId = verified)
    const [pending, setPending] = useState<{
        requestId: string;
        email: string;
        phone: string;
    } | null>(null);
    const [requestId, setRequestId] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [emailOtp, setEmailOtp] = useState("");
    const [phoneOtp, setPhoneOtp] = useState("");
    const [emailOtpError, setEmailOtpError] = useState<string | null>(null);
    const [phoneOtpError, setPhoneOtpError] = useState<string | null>(null);
    const [otpError, setOtpError] = useState<string | null>(null); // server / network errors
    const [verifying, setVerifying] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const captchaRef = useRef<RecaptchaHandle>(null);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        getValues,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<PrivacyRequestFormValues>({
        mode: "onTouched",
        defaultValues: {
            fullName: "",
            email: "",
            phoneCountry: DEFAULT_COUNTRY,
            phone: "",
            company: "",
            role: "",
            mcDot: "",
            residence: "",
            requestTypes: [],
            details: "",
            isAgent: false,
            agentProof: null,
            attestation: false,
        },
    });

    const isAgent = watch("isAgent");

    // The form is much taller than the verify/success cards, so after a step
    // change the browser keeps the old scroll offset and shows unrelated page
    // content. Bring the new card into view (and focus the code field).
    useEffect(() => {
        const el = pending
            ? document.getElementById("pr-verify")
            : requestId !== null
            ? document.getElementById("pr-success")
            : null;
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "center" });
        if (pending) {
            document
                .getElementById("pr-otp")
                ?.focus({ preventScroll: true });
        }
    }, [pending, requestId]);

    const onSubmit = async (values: PrivacyRequestFormValues) => {
        setSubmitError(null);
        if (!endpoint) {
            setSubmitError(
                "This form isn't configured correctly. Please email privacy@dollartraq.com."
            );
            return;
        }
        if (!captchaToken) {
            setSubmitError("Please confirm you're not a robot.");
            return;
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30_000);

        try {
            if (!(await verifyRecaptcha(captchaToken))) {
                throw new Error("reCAPTCHA verification failed. Please try again.");
            }

            // Agent -> multipart/form-data (file attached).
            // Non-agent -> application/json.
            // Don't set Content-Type for FormData; the browser adds the boundary.
            const res = values.isAgent && values.agentProof?.[0]
                ? await fetch(endpoint, {
                      method: "POST",
                      body: buildBody(values),
                      signal: controller.signal,
                      headers: BASE_HEADERS,
                  })
                : await fetch(endpoint, {
                      method: "POST",
                      body: JSON.stringify(buildJson(values)),
                      signal: controller.signal,
                      headers: {
                          ...BASE_HEADERS,
                          "Content-Type": "application/json",
                      },
                  });

            if (!res.ok) {
                const msg = await readServerMessage(res);
                throw new Error(msg ?? `Request failed (${res.status})`);
            }

            const json = (await res.json()) as {
                status?: string;
                message?: string;
                data?: { requestId?: string };
            };

            const id = json.data?.requestId;
            if (!id) throw new Error("The server did not return a request ID.");

            setPending({
                requestId: id,
                email: values.email.trim().toLowerCase(),
                phone: formatPhone(values),
            });
            setEmailOtp("");
            setPhoneOtp("");
            setEmailOtpError(null);
            setPhoneOtpError(null);
            setOtpError(null);
            reset();
        } catch (err) {
            const aborted = err instanceof DOMException && err.name === "AbortError";
            const serverMsg =
                err instanceof Error && !aborted && !/Failed to fetch/i.test(err.message)
                    ? err.message
                    : null;

            setSubmitError(
                aborted
                    ? "The request timed out. Please try again."
                    : serverMsg
                    ? `${serverMsg} If this keeps happening, email privacy@dollartraq.com.`
                    : "We couldn't submit your request. Try again, or email privacy@dollartraq.com."
            );
        } finally {
            clearTimeout(timeout);
            // Tokens are single-use, so every attempt needs a fresh check.
            captchaRef.current?.reset();
            setCaptchaToken(null);
        }
    };

    /* ---------- OTP verification ---------- */
    const onVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!pending || verifying) return;
        if (!verifyUrl) {
            setOtpError("Verification isn't configured. Please email privacy@dollartraq.com.");
            return;
        }
        const eCode = emailOtp.trim();
        const pCode = phoneOtp.trim();
        const needsPhone = !!pending.phone;

        setEmailOtpError(null);
        setPhoneOtpError(null);
        setOtpError(null);

        let invalid = false;
        if (!OTP_PATTERN.test(eCode)) {
            setEmailOtpError("Enter the 6-digit code sent to your email.");
            invalid = true;
        }
        if (needsPhone && !OTP_PATTERN.test(pCode)) {
            setPhoneOtpError("Enter the 6-digit code sent by SMS.");
            invalid = true;
        }
        if (invalid) return;

        setVerifying(true);

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30_000);

        try {
            const res = await fetch(verifyUrl, {
                method: "POST",
                signal: controller.signal,
                headers: { ...BASE_HEADERS, "Content-Type": "application/json" },
                body: JSON.stringify({
                    requestId: pending.requestId,
                    emailOtp: eCode,
                    ...(needsPhone ? { phoneOtp: pCode } : {}),
                }),
            });

            if (!res.ok) {
                const msg = await readServerMessage(res);
                throw new Error(
                    msg ??
                        (res.status === 400 || res.status === 401
                            ? "That code is incorrect or has expired."
                            : `Verification failed (${res.status})`)
                );
            }

            const json = (await res.json()) as { data?: { requestId?: string } };
            const finalId = json.data?.requestId ?? pending.requestId;

            setRequestId(finalId);
            setPending(null);
            setEmailOtp("");
            setPhoneOtp("");
            onSuccess?.(finalId);
        } catch (err) {
            const aborted = err instanceof DOMException && err.name === "AbortError";
            setOtpError(
                aborted
                    ? "The request timed out. Please try again."
                    : err instanceof Error && !/Failed to fetch/i.test(err.message)
                    ? err.message
                    : "We couldn't verify your code. Please try again."
            );
        } finally {
            clearTimeout(timeout);
            setVerifying(false);
        }
    };

    if (requestId === null && pending) {
        const maskedPhone = pending.phone ? `•••${pending.phone.slice(-4)}` : "";
        return (
            <form
                id="pr-verify"
                onSubmit={onVerify}
                noValidate
                className={`rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 ${className}`}
            >
                <p className="text-base font-semibold text-gray-900">
                    Verify your request
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                    We sent a 6-digit code to{" "}
                    <span className="break-all font-semibold text-gray-900">
                        {pending.email}
                    </span>
                    {pending.phone ? (
                        <>
                            {" "}
                            and a separate 6-digit code by SMS to{" "}
                            <span className="font-semibold text-gray-900">
                                {maskedPhone}
                            </span>
                        </>
                    ) : null}
                    . Enter {pending.phone ? "both codes" : "it"} below to submit
                    your request.
                </p>

                <div className="mt-5 grid items-start gap-5 sm:grid-cols-2">
                    <Field
                        id="pr-otp"
                        label="Email verification code"
                        required
                        hint={`Sent to ${pending.email}`}
                        error={emailOtpError ?? undefined}
                    >
                        <input
                            id="pr-otp"
                            type="text"
                            inputMode="numeric"
                            autoComplete="off"
                            maxLength={6}
                            placeholder="123456"
                            value={emailOtp}
                            onChange={(e) => {
                                setEmailOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                                if (emailOtpError) setEmailOtpError(null);
                                if (otpError) setOtpError(null);
                            }}
                            aria-invalid={!!emailOtpError}
                            aria-describedby={
                                emailOtpError ? "pr-otp-error" : "pr-otp-hint"
                            }
                            className={`${inputCls} tracking-[0.35em] ${
                                emailOtpError ? inputErrorCls : ""
                            }`}
                        />
                    </Field>

                    {pending.phone && (
                        <Field
                            id="pr-phone-otp"
                            label="SMS verification code"
                            required
                            hint={`Sent to ${maskedPhone}`}
                            error={phoneOtpError ?? undefined}
                        >
                            <input
                                id="pr-phone-otp"
                                type="text"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                maxLength={6}
                                placeholder="123456"
                                value={phoneOtp}
                                onChange={(e) => {
                                    setPhoneOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                                    if (phoneOtpError) setPhoneOtpError(null);
                                    if (otpError) setOtpError(null);
                                }}
                                aria-invalid={!!phoneOtpError}
                                aria-describedby={
                                    phoneOtpError ? "pr-phone-otp-error" : "pr-phone-otp-hint"
                                }
                                className={`${inputCls} tracking-[0.35em] ${
                                    phoneOtpError ? inputErrorCls : ""
                                }`}
                            />
                        </Field>
                    )}
                </div>

                {otpError && (
                    <p
                        role="alert"
                        className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                        {otpError}
                    </p>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                        type="submit"
                        disabled={verifying}
                        className="rounded-lg bg-[#015EFF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0150d9] focus:outline-none focus:ring-2 focus:ring-[#015EFF] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                    >
                        {verifying ? "Verifying…" : "Verify & submit"}
                    </button>
                    <button
                        type="button"
                        disabled={verifying}
                        onClick={() => {
                            setPending(null);
                            setEmailOtp("");
                            setPhoneOtp("");
                            setEmailOtpError(null);
                            setPhoneOtpError(null);
                            setOtpError(null);
                        }}
                        className="text-sm font-medium text-gray-900 underline underline-offset-2 disabled:opacity-60"
                    >
                        Start over
                    </button>
                </div>
            </form>
        );
    }

    /* ---------- success state ---------- */
    if (requestId !== null) {
        return (
            <div
                id="pr-success"
                role="status"
                className={`rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-6 ${className}`}
            >
                <p className="text-base font-semibold text-gray-900">
                    Request received
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                    {requestId ? (
                        <>
                            Your request ID is{" "}
                            <span className="break-all font-semibold text-gray-900">
                                {requestId}
                            </span>
                            .{" "}
                        </>
                    ) : null}
                    Your identity is verified and your privacy request has been
                    submitted. Keep this ID for your records.
                </p>
                <button
                    type="button"
                    onClick={() => setRequestId(null)}
                    className="mt-4 text-sm font-medium text-gray-900 underline underline-offset-2"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    /* ---------- form ---------- */
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className={`rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 ${className}`}
        >
            <div className="grid items-start gap-x-5 gap-y-5 sm:grid-cols-2">
                <Field
                    id="pr-name"
                    label="Full name"
                    required
                    error={errors.fullName?.message}
                >
                    <input
                        id="pr-name"
                        type="text"
                        autoComplete="name"
                        maxLength={100}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "pr-name-error" : undefined}
                        className={`${inputCls} ${errors.fullName ? inputErrorCls : ""}`}
                        {...register("fullName", {
                            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                            required: "Enter your full name.",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters.",
                            },
                            pattern: {
                                value: NAME_PATTERN,
                                message:
                                    "Use letters, spaces, apostrophes, periods, or hyphens only.",
                            },
                        })}
                    />
                </Field>

                <Field
                    id="pr-email"
                    label="Email address"
                    required
                    hint="We send a verification code here."
                    error={errors.email?.message}
                >
                    <input
                        id="pr-email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        maxLength={254}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                            errors.email ? "pr-email-error" : "pr-email-hint"
                        }
                        className={`${inputCls} ${errors.email ? inputErrorCls : ""}`}
                        {...register("email", {
                            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                            required: "Enter your email address.",
                            pattern: {
                                value: EMAIL_PATTERN,
                                message: "Enter a valid email address.",
                            },
                        })}
                    />
                </Field>

                <Field
                    id="pr-phone"
                    label="Phone number"
                    hint="Optional. Choose your country code; we'll also text the code to this number."
                    error={errors.phone?.message}
                >
                    <div className="mt-1.5 flex w-full min-w-0 items-stretch gap-2">
                        <select
                            id="pr-phone-country"
                            aria-label="Country code"
                            autoComplete="tel-country-code"
                            className={`${inputCls} !mt-0 !w-[8.75rem] shrink-0 px-2`}
                            {...register("phoneCountry", {
                                onChange: () => {
                                    // Re-check the number against the new country.
                                    if (getValues("phone")) void trigger("phone");
                                },
                            })}
                        >
                            {COUNTRY_CODES.map((c) => (
                                <option key={c.iso} value={c.iso} title={c.name}>
                                    {c.flag} {c.iso} +{c.dial}
                                </option>
                            ))}
                        </select>

                        <input
                            id="pr-phone"
                            type="tel"
                            autoComplete="tel-national"
                            inputMode="tel"
                            maxLength={20}
                            placeholder="5551234567"
                            aria-invalid={!!errors.phone}
                            aria-describedby={
                                errors.phone ? "pr-phone-error" : "pr-phone-hint"
                            }
                            className={`${inputCls} !mt-0 !w-auto min-w-0 flex-1 ${
                                errors.phone ? inputErrorCls : ""
                            }`}
                            {...register("phone", {
                                validate: (v) => {
                                    const val = v.trim();
                                    if (!val) return true;
                                    if (!PHONE_PATTERN.test(val))
                                        return "Phone can contain digits, spaces, ( ) - . only. Pick the country code above instead of typing +.";
                                    const iso = getValues("phoneCountry");
                                    const national = val
                                        .replace(/\D/g, "")
                                        .replace(/^0+/, "");
                                    // IN, US, CA and MX all use 10-digit national numbers.
                                    if (national.length !== 10)
                                        return "Enter a 10-digit phone number.";
                                    if (iso === "IN" && !/^[6-9]/.test(national))
                                        return "Indian mobile numbers start with 6, 7, 8 or 9.";
                                    return true;
                                },
                            })}
                        />
                    </div>
                </Field>

                <Field
                    id="pr-company"
                    label="Company / carrier name"
                    hint="Optional."
                    error={errors.company?.message}
                >
                    <input
                        id="pr-company"
                        type="text"
                        autoComplete="organization"
                        aria-invalid={!!errors.company}
                        aria-describedby={
                            errors.company ? "pr-company-error" : "pr-company-hint"
                        }
                        className={`${inputCls} ${errors.company ? inputErrorCls : ""}`}
                        {...register("company", {
                            maxLength: {
                                value: 120,
                                message: "Company name must be 120 characters or fewer.",
                            },
                        })}
                    />
                </Field>

                <Field
                    id="pr-role"
                    label="Your role"
                    required
                    error={errors.role?.message}
                >
                    <select
                        id="pr-role"
                        aria-invalid={!!errors.role}
                        aria-describedby={errors.role ? "pr-role-error" : undefined}
                        className={`${inputCls} ${errors.role ? inputErrorCls : ""}`}
                        {...register("role", {
                            required: "Select your role.",
                            validate: (v) =>
                                (ROLES as readonly string[]).includes(v) ||
                                "Select a valid role.",
                        })}
                    >
                        <option value="">Select…</option>
                        {ROLES.map((r) => (
                            <option key={r} value={r}>
                                {r}
                            </option>
                        ))}
                    </select>
                </Field>

                <Field
                    id="pr-mc"
                    label="MC number / DOT number"
                    hint="Optional. Carriers and drivers: helps us locate your records."
                    error={errors.mcDot?.message}
                >
                    <input
                        id="pr-mc"
                        type="text"
                        placeholder="MC123456"
                        autoCapitalize="characters"
                        aria-invalid={!!errors.mcDot}
                        aria-describedby={errors.mcDot ? "pr-mc-error" : "pr-mc-hint"}
                        className={`${inputCls} ${errors.mcDot ? inputErrorCls : ""}`}
                        {...register("mcDot", {
                            validate: (v) => {
                                const val = v.trim();
                                if (!val) return true;
                                if (val.length > 40) return "Must be 40 characters or fewer.";
                                if (!MC_DOT_PATTERN.test(val) || !/\d/.test(val))
                                    return "Enter a valid MC or DOT number (e.g. MC123456).";
                                return true;
                            },
                        })}
                    />
                </Field>

                <Field
                    id="pr-state"
                    label="State or country of residence"
                    required
                    error={errors.residence?.message}
                    className="sm:col-span-2"
                >
                    <input
                        id="pr-state"
                        type="text"
                        autoComplete="address-level1"
                        placeholder="e.g. California"
                        aria-invalid={!!errors.residence}
                        aria-describedby={errors.residence ? "pr-state-error" : undefined}
                        className={`${inputCls} ${errors.residence ? inputErrorCls : ""}`}
                        {...register("residence", {
                            setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                            required: "Enter your state or country of residence.",
                            minLength: { value: 2, message: "Enter at least 2 characters." },
                            maxLength: { value: 80, message: "Must be 80 characters or fewer." },
                        })}
                    />
                </Field>
            </div>

            {/* Request types */}
            <fieldset
                aria-describedby={errors.requestTypes ? "pr-types-error" : undefined}
                className={`mt-5 min-w-0 rounded-lg border bg-white px-4 py-3 ${
                    errors.requestTypes ? "border-red-500" : "border-gray-200"
                }`}
            >
                <legend className="px-1 text-sm font-semibold text-gray-900">
                    Request type{" "}
                    <span aria-hidden="true" className="text-red-600">
                        *
                    </span>{" "}
                    <span className="font-normal text-gray-500">
                        (check all that apply)
                    </span>
                </legend>

                <div className="mt-1 grid gap-2.5 sm:grid-cols-2 sm:gap-x-6">
                    {REQUEST_TYPES.map((t) => (
                        <label key={t.value} className={checkRowCls}>
                            <input
                                type="checkbox"
                                value={t.value}
                                className={checkInputCls}
                                {...register("requestTypes", {
                                    validate: (v) =>
                                        (Array.isArray(v) && v.length > 0) ||
                                        "Select at least one request type.",
                                })}
                            />
                            <span>{t.label}</span>
                        </label>
                    ))}
                </div>

                {errors.requestTypes && (
                    <p id="pr-types-error" role="alert" className={errorCls}>
                        {errors.requestTypes.message as string}
                    </p>
                )}
            </fieldset>

            {/* Details */}
            <Field
                id="pr-details"
                label="Details"
                required
                hint="Describe the data or item your request concerns (10–2000 characters)."
                error={errors.details?.message}
                className="mt-5"
            >
                <textarea
                    id="pr-details"
                    rows={5}
                    maxLength={2000}
                    aria-invalid={!!errors.details}
                    aria-describedby={errors.details ? "pr-details-error" : "pr-details-hint"}
                    className={`${inputCls} resize-y ${errors.details ? inputErrorCls : ""}`}
                    {...register("details", {
                        setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                        required: "Describe what your request is about.",
                        minLength: {
                            value: 10,
                            message: "Please provide at least 10 characters of detail.",
                        },
                        maxLength: {
                            value: 2000,
                            message: "Details must be 2000 characters or fewer.",
                        },
                    })}
                />
            </Field>

            {/* Authorized agent */}
            <div className="mt-5">
                <label className={checkRowCls}>
                    <input
                        type="checkbox"
                        className={checkInputCls}
                        {...register("isAgent")}
                    />
                    <span>
                        I am an authorized agent submitting on someone else's behalf
                    </span>
                </label>

                {isAgent && (
                    <Field
                        id="pr-agent-proof"
                        label="Proof of authority"
                        required
                        hint={`Signed permission, power of attorney, or evidence of parental/guardian authority. PDF, JPG, or PNG, up to ${MAX_FILE_MB} MB.`}
                        error={errors.agentProof?.message as string | undefined}
                        className="mt-3"
                    >
                        <input
                            id="pr-agent-proof"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                            aria-invalid={!!errors.agentProof}
                            aria-describedby={
                                errors.agentProof
                                    ? "pr-agent-proof-error"
                                    : "pr-agent-proof-hint"
                            }
                            className={`${inputCls} file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-gray-900 ${
                                errors.agentProof ? inputErrorCls : ""
                            }`}
                            {...register("agentProof", {
                                validate: (files) => {
                                    if (!getValues("isAgent")) return true;
                                    const f = files?.[0];
                                    if (!f) return "Attach proof of authority.";
                                    const okType =
                                        ALLOWED_MIME.includes(f.type) ||
                                        ALLOWED_EXT.test(f.name);
                                    if (!okType) return "Upload a PDF, JPG, or PNG file.";
                                    if (f.size === 0) return "This file is empty.";
                                    if (f.size > MAX_FILE_BYTES)
                                        return `File must be ${MAX_FILE_MB} MB or smaller.`;
                                    return true;
                                },
                            })}
                        />
                    </Field>
                )}
            </div>

            {/* Declaration */}
            <div className="mt-5">
                <label className={checkRowCls}>
                    <input
                        type="checkbox"
                        aria-invalid={!!errors.attestation}
                        aria-describedby={errors.attestation ? "pr-attest-error" : undefined}
                        className={checkInputCls}
                        {...register("attestation", {
                            required: "You must confirm this declaration to submit.",
                        })}
                    />
                    <span>
                        I declare under penalty of perjury that I am the person (or the
                        authorized agent of the person) whose information is the subject
                        of this request, and that the information I have provided is true
                        and accurate.{" "}
                        <span aria-hidden="true" className="text-red-600">
                            *
                        </span>
                    </span>
                </label>
                {errors.attestation && (
                    <p id="pr-attest-error" role="alert" className={errorCls}>
                        {errors.attestation.message}
                    </p>
                )}
            </div>

            <Recaptcha ref={captchaRef} onChange={setCaptchaToken} className="mt-5" />

            {submitError && (
                <p
                    role="alert"
                    className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {submitError}
                </p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-[#015EFF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0150d9] focus:outline-none focus:ring-2 focus:ring-[#015EFF] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                >
                    {isSubmitting ? "Submitting…" : "Submit request"}
                </button>

                <p className="text-sm text-gray-500">
                    After you submit, we'll send a verification code to your email
                    (and by SMS if you add a phone number) to confirm your request.
                </p>
            </div>
        </form>
    );
}

export default PrivacyRequestForm;