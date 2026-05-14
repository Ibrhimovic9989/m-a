import { NextRequest, NextResponse } from "next/server";
import {
  CalWebhookBody,
  dispatchCalEvent,
  summariseBooking,
  verifyCalSignature,
} from "@/lib/cal-webhook";

// This endpoint receives Cal.com webhooks at https://muneerassociates.in/webhook.
// Configured in Cal.com → Settings → Webhooks → CA Muneer Ahmed.
//
// Required env vars (set in Vercel project settings):
//   CAL_WEBHOOK_SECRET — must match the "Secret" entered on the Cal.com webhook
//   CAL_API_KEY        — used for outbound calls back to Cal.com (not yet wired)
//
// Force runtime over static so we always re-evaluate per request.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "/webhook",
    source: "Muneer & Associates",
    accepts: "POST application/json (Cal.com webhook)",
  });
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-cal-signature-256");

  const result = verifyCalSignature(rawBody, signature);
  if (!result.valid) {
    console.warn("[cal-webhook] rejected:", result.reason);
    return NextResponse.json(
      { error: "Invalid signature", reason: result.reason },
      { status: 401 }
    );
  }
  if (result.reason === "no-secret-configured") {
    console.warn(
      "[cal-webhook] WARNING: CAL_WEBHOOK_SECRET is not set — accepting unsigned request."
    );
  }

  let body: CalWebhookBody;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { triggerEvent, payload } = body || ({} as CalWebhookBody);
  if (!triggerEvent || !payload) {
    return NextResponse.json(
      { error: "Missing triggerEvent or payload" },
      { status: 400 }
    );
  }

  // Compact structured log line — picked up by Vercel function logs.
  console.log("[cal-webhook]", summariseBooking(triggerEvent, payload));

  try {
    await dispatchCalEvent(triggerEvent, payload);
  } catch (err) {
    console.error("[cal-webhook] handler error:", err);
    // Still return 200 so Cal.com doesn't retry indefinitely; we own the bug.
    return NextResponse.json(
      { ok: false, error: "handler-error" },
      { status: 200 }
    );
  }

  return NextResponse.json({ ok: true, received: triggerEvent });
}
