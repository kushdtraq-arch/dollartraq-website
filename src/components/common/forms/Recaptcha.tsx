"use client";

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

interface Grecaptcha {
    render: (
        container: HTMLElement,
        params: {
            sitekey: string;
            callback: (token: string) => void;
            "expired-callback": () => void;
            "error-callback": () => void;
        }
    ) => number;
    reset: (widgetId?: number) => void;
}

declare global {
    interface Window {
        grecaptcha?: Grecaptcha;
        __onRecaptchaLoad?: () => void;
    }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const SCRIPT_SRC =
    "https://www.google.com/recaptcha/api.js?render=explicit&onload=__onRecaptchaLoad";

// Shared across every widget on the page so the script is only added once.
let scriptPromise: Promise<void> | null = null;

function loadRecaptcha(): Promise<void> {
    if (window.grecaptcha?.render) return Promise.resolve();
    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            window.__onRecaptchaLoad = () => resolve();
            const script = document.createElement("script");
            script.src = SCRIPT_SRC;
            script.async = true;
            script.defer = true;
            script.onerror = () => {
                script.remove();
                scriptPromise = null;
                reject(new Error("Failed to load reCAPTCHA."));
            };
            document.head.appendChild(script);
        });
    }
    return scriptPromise;
}

export interface RecaptchaHandle {
    /** Clears the checkbox. Call after each submit attempt (tokens are single-use). */
    reset: () => void;
}

interface RecaptchaProps {
    /** Receives the token when checked, and null when it expires or errors. */
    onChange: (token: string | null) => void;
    ref?: React.Ref<RecaptchaHandle>;
    className?: string;
}

/** Google reCAPTCHA v2 "I'm not a robot" checkbox. */
export function Recaptcha({ onChange, ref, className = "" }: RecaptchaProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetId = useRef<number | null>(null);
    const onChangeRef = useRef(onChange);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        onChangeRef.current = onChange;
    });

    useImperativeHandle(
        ref,
        () => ({
            reset: () => {
                if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
            },
        }),
        []
    );

    useEffect(() => {
        if (!SITE_KEY) {
            console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.");
            return;
        }

        let cancelled = false;
        loadRecaptcha()
            .then(() => {
                const el = containerRef.current;
                if (cancelled || !el || widgetId.current !== null || !window.grecaptcha) return;
                widgetId.current = window.grecaptcha.render(el, {
                    sitekey: SITE_KEY,
                    callback: (token) => onChangeRef.current(token),
                    "expired-callback": () => onChangeRef.current(null),
                    "error-callback": () => onChangeRef.current(null),
                });
            })
            .catch(() => {
                if (!cancelled) setLoadError(true);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className={className}>
            <div ref={containerRef} />
            {loadError && (
                <p role="alert" className="mt-1.5 text-sm text-red-600">
                    We couldn&apos;t load the reCAPTCHA check. Refresh the page and try again.
                </p>
            )}
        </div>
    );
}

export default Recaptcha;
