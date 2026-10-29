"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getRecaptchaToken, useRecaptcha, verifyRecaptcha } from "@/lib/recaptcha-client";

export interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phone: string;
    jobTitle: string;
    company: string;
    country: string;
    businessType: string;
    featuresOfInterest: string[];
    hearAboutUs: string;
    message: string;
    subscribe: boolean;
}

const API_URL = "https://staggingapi.dollartraq.com/api/v1/contact-us";

const COUNTRY_CODES = ["+1", "+91", "+52"];

const COUNTRIES = ["United States", "India", "United Kingdom", "Canada", "Australia", "Germany", "Other"];

const BUSINESS_TYPES = ["Broker", "Carrier", "Shipper", "3PL", "Other"];

const FEATURES = ["Carrier Vetting", "Fraud Detection", "Load Tracking", "Payments", "All of the above"];

const HEAR_ABOUT_US = ["Search Engine", "Referral", "Social Media", "Event/Conference", "Other"];

interface ContactFormProps {
    heading?: string;
    subtext?: React.ReactNode;
    onSubmit?: (values: ContactFormValues) => void | Promise<void>;
    className?: string;
}

const inputClass =
    "rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500";

const labelClass = "block text-[14px] font-semibold text-gray-700 mb-2";

const errorClass = "mt-1 text-[13px] text-red-600";

// Maps camelCase form values -> the snake_case body the API expects
function toApiPayload(values: ContactFormValues) {
    return {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_country_code: values.countryCode,
        phone: values.phone,
        job_title: values.jobTitle,
        company: values.company,
        country: values.country,
        business_type: values.businessType,
        features_of_interest: values.featuresOfInterest,
        hear_about_us: values.hearAboutUs,
        message: values.message,
        subscribe_updates: values.subscribe,
    };
}

async function submitContactForm(values: ContactFormValues) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toApiPayload(values)),
    });

    let json: any = null;
    try {
        json = await res.json();
    } catch {
        
    }

    if (!res.ok || json?.status !== "success") {
        const msg = json?.message || `Request failed with status ${res.status}`;
        throw new Error(msg);
    }

    return json;
}

export const ContactForm: React.FC<ContactFormProps> = ({
    heading = "How can we help you ?",
    subtext = (
        <>
            Please submit your request below. If calling, dial 888-544-3844 for North America, or +31
            33 460 63 00 for Europe.
        </>
    ),
    onSubmit,
    className = "",
}) => {
    const [submitError, setSubmitError] = useState<string | null>(null);
    useRecaptcha();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormValues>({
        defaultValues: {
            countryCode: "+1",
            featuresOfInterest: [],
            subscribe: false,
        },
        mode: "onBlur",
    });

    const submitHandler: SubmitHandler<ContactFormValues> = async (values) => {
        setSubmitError(null);
        try {
            const token = await getRecaptchaToken("contact");
            if (!(await verifyRecaptcha(token, "contact"))) {
                throw new Error("We couldn't verify your request. Please try again.");
            }
            if (onSubmit) {
                await onSubmit(values);
            } else {
                await submitContactForm(values);
            }
            reset();
        } catch (err) {
            setSubmitError(
                err instanceof Error ? err.message : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <section className={`w-full py-16 px-4 ${className}`}>
            <div className="max-w-[900px] mx-auto text-center mb-12">
                <h1 className="text-[32px] sm:text-[38px] font-extrabold text-gray-900 tracking-tight mb-4">
                    {heading}
                </h1>
                <p className="text-[15px] md:text-base text-gray-500 leading-relaxed">
                    {subtext}
                </p>
            </div>

            <form
                onSubmit={handleSubmit(submitHandler)}
                noValidate
                className="max-w-[1120px] mx-auto bg-gray-100 rounded-3xl p-6 sm:p-10 md:p-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* First / Last name */}
                    <div>
                        <label className={labelClass} htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            className={`${inputClass} w-full`}
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            className={`${inputClass} w-full`}
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
                    </div>

                    {/* Email / Phone */}
                    <div>
                        <label className={labelClass} htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={`${inputClass} w-full`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="phone">
                            Phone
                        </label>

                        <div className="flex gap-2">
                            <select
                                className={`${inputClass} w-[92px] shrink-0 cursor-pointer`}
                                {...register("countryCode")}
                            >
                                {COUNTRY_CODES.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </select>
                            <input
                                id="phone"
                                type="tel"
                                className={`${inputClass} flex-1 min-w-0`}
                                {...register("phone", { required: "Phone number is required" })}
                            />
                        </div>
                        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                    </div>

                    {/* Job title / Company */}
                    <div>
                        <label className={labelClass} htmlFor="jobTitle">
                            Job Title
                        </label>
                        <input id="jobTitle" className={`${inputClass} w-full`} {...register("jobTitle")} />
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="company">
                            Company
                        </label>
                        <input
                            id="company"
                            className={`${inputClass} w-full`}
                            {...register("company", { required: "Company is required" })}
                        />
                        {errors.company && <p className={errorClass}>{errors.company.message}</p>}
                    </div>

                    {/* Country / Business type */}
                    <div>
                        <label className={labelClass} htmlFor="country">
                            Country
                        </label>
                        <select
                            id="country"
                            className={`${inputClass} w-full cursor-pointer`}
                            defaultValue=""
                            {...register("country", { required: "Please select a country" })}
                        >
                            <option value="" disabled>
                                Select...
                            </option>
                            {COUNTRIES.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                        {errors.country && <p className={errorClass}>{errors.country.message}</p>}
                    </div>

                    <div>
                        <label className={labelClass} htmlFor="businessType">
                            Business Type
                        </label>
                        <select
                            id="businessType"
                            className={`${inputClass} w-full cursor-pointer`}
                            defaultValue=""
                            {...register("businessType")}
                        >
                            <option value="" disabled>
                                Select...
                            </option>
                            {BUSINESS_TYPES.map((b) => (
                                <option key={b} value={b}>
                                    {b}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Features of interest — checkboxes, since the API expects an array */}
                    <div className="md:col-span-2">
                        <label className={labelClass}>Please select features of interest:</label>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {FEATURES.map((f) => (
                                <label
                                    key={f}
                                    className="flex items-center gap-2 text-[14px] text-gray-700 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        value={f}
                                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                        {...register("featuresOfInterest")}
                                    />
                                    {f}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className={labelClass} htmlFor="hearAboutUs">
                            How did you hear about us?
                        </label>
                        <select
                            id="hearAboutUs"
                            className={`${inputClass} w-full max-w-sm cursor-pointer`}
                            defaultValue=""
                            {...register("hearAboutUs")}
                        >
                            <option value="" disabled>
                                Select...
                            </option>
                            {HEAR_ABOUT_US.map((h) => (
                                <option key={h} value={h}>
                                    {h}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                        <label className={labelClass} htmlFor="message">
                            Please tell us about your company and the type of solution you would like to
                            discuss:
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className={`${inputClass} w-full resize-y`}
                            {...register("message")}
                        />
                    </div>

                    {/* Subscribe checkbox */}
                    <div className="md:col-span-2 flex items-center gap-3 mt-2">
                        <input
                            id="subscribe"
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                            {...register("subscribe")}
                        />
                        <label htmlFor="subscribe" className="text-[14px] text-gray-600 cursor-pointer">
                            Subscribe to email updates. Opt out at any time.
                        </label>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 mt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Send Request"}
                        </button>

                        {isSubmitSuccessful && !submitError && (
                            <p className="mt-3 text-[14px] text-green-700">
                                Thanks — we&apos;ve received your request and will be in touch shortly.
                            </p>
                        )}

                        {submitError && (
                            <p className="mt-3 text-[14px] text-red-600">{submitError}</p>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;