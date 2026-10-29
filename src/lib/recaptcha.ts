"use server";

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

/**
 * Verifies a reCAPTCHA v2 token with Google. Runs on the server only, so the
 * secret key never reaches the browser. Tokens are single-use: reset the
 * widget after every call.
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
    // Prefer RECAPTCHA_SECRET_KEY; the NEXT_PUBLIC_ name is a fallback for the current .env.
    const secret =
        process.env.RECAPTCHA_SECRET_KEY ?? process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    if (!secret) {
        console.error("reCAPTCHA secret key is not set.");
        return false;
    }
    if (typeof token !== "string" || !token) return false;

    try {
        const res = await fetch(VERIFY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ secret, response: token }),
            cache: "no-store",
        });
        if (!res.ok) return false;

        const data = (await res.json()) as { success?: boolean };
        return data.success === true;
    } catch {
        return false;
    }
}
