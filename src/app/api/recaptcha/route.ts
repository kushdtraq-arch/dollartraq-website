const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

// v3 scores run from 0.0 (likely a bot) to 1.0 (likely a human); 0.5 is Google's suggested cut-off.
const MIN_SCORE = 0.5;

/**
 * Verifies a reCAPTCHA v3 token with Google. This is a route handler, so it is
 * never bundled for the browser. The secret must NOT use a NEXT_PUBLIC_ name:
 * those values are pasted into any browser code that references them.
 */
export async function POST(request: Request) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
        console.error("RECAPTCHA_SECRET_KEY is not set.");
        return Response.json({ success: false }, { status: 500 });
    }

    const body = (await request.json().catch(() => null)) as {
        token?: unknown;
        action?: unknown;
    } | null;
    const token = body?.token;
    const action = body?.action;
    if (typeof token !== "string" || !token || typeof action !== "string") {
        return Response.json({ success: false }, { status: 400 });
    }

    try {
        const res = await fetch(VERIFY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ secret, response: token }),
            cache: "no-store",
        });
        const data = (await res.json()) as {
            success?: boolean;
            score?: number;
            action?: string;
            "error-codes"?: string[];
        };

        const success =
            data.success === true &&
            data.action === action &&
            typeof data.score === "number" &&
            data.score >= MIN_SCORE;

        if (!success) {
            console.warn("reCAPTCHA check failed", {
                errors: data["error-codes"],
                score: data.score,
                action: data.action,
            });
        }
        return Response.json({ success }, { status: success ? 200 : 403 });
    } catch {
        return Response.json({ success: false }, { status: 502 });
    }
}
