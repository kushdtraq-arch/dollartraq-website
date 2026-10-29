import { useEffect } from "react";

interface Grecaptcha {
    ready: (cb: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => PromiseLike<string>;
}

declare global {
    interface Window {
        grecaptcha?: Grecaptcha;
    }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const LOAD_ERROR =
    "We couldn't load reCAPTCHA. Check your connection or ad blocker and try again.";

// Shared across the page so the script is only added once.
let scriptPromise: Promise<Grecaptcha> | null = null;

function loadRecaptcha(): Promise<Grecaptcha> {
    if (window.grecaptcha?.execute) return Promise.resolve(window.grecaptcha);
    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            const fail = () => {
                script.remove();
                scriptPromise = null;
                reject(new Error(LOAD_ERROR));
            };
            script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
            script.async = true;
            script.onerror = fail;
            script.onload = () => {
                const grecaptcha = window.grecaptcha;
                if (!grecaptcha) return fail();
                // api.js only defines ready() at first; execute() exists once it fires.
                grecaptcha.ready(() => resolve(window.grecaptcha as Grecaptcha));
            };
            document.head.appendChild(script);
        });
    }
    return scriptPromise;
}

/** Loads reCAPTCHA v3 in the background so it can score the visitor before they submit. */
export function useRecaptcha() {
    useEffect(() => {
        if (!SITE_KEY) {
            console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.");
            return;
        }
        loadRecaptcha().catch(() => {
            // Retried on submit, where the error is shown to the user.
        });
    }, []);
}

/** Gets a fresh token for `action`. Tokens expire after 2 minutes, so call this at submit time. */
export async function getRecaptchaToken(action: string): Promise<string> {
    if (!SITE_KEY) throw new Error("reCAPTCHA isn't configured. Please try again later.");
    const grecaptcha = await loadRecaptcha();
    return grecaptcha.execute(SITE_KEY, { action });
}

/** Asks our server (src/app/api/recaptcha) to check the token with Google. */
export async function verifyRecaptcha(token: string, action: string): Promise<boolean> {
    try {
        const res = await fetch("/api/recaptcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, action }),
        });
        const data = (await res.json()) as { success?: boolean };
        return data.success === true;
    } catch {
        return false;
    }
}
