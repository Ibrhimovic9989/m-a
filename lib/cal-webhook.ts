import crypto from "crypto";

/**
 * Cal.com webhook trigger events.
 * Mirrors the events enabled in Cal.com → Webhooks → CA Muneer Ahmed.
 */
export type CalTriggerEvent =
  | "BOOKING_CREATED"
  | "BOOKING_REQUESTED"
  | "BOOKING_RESCHEDULED"
  | "BOOKING_CANCELLED"
  | "BOOKING_REJECTED"
  | "BOOKING_PAID"
  | "BOOKING_PAYMENT_INITIATED"
  | "BOOKING_NO_SHOW_UPDATED"
  | "MEETING_STARTED"
  | "MEETING_ENDED"
  | "RECORDING_READY"
  | "FORM_SUBMITTED"
  | "INSTANT_MEETING"
  | "OOO_CREATED"
  | string;

export type CalWebhookBody = {
  triggerEvent: CalTriggerEvent;
  createdAt?: string;
  payload: CalBookingPayload;
};

export type CalBookingPayload = {
  uid?: string;
  type?: string;
  title?: string;
  description?: string | null;
  additionalNotes?: string | null;
  customInputs?: Record<string, unknown>;
  startTime?: string;
  endTime?: string;
  location?: string;
  status?: string;
  organizer?: {
    name?: string;
    email?: string;
    timeZone?: string;
    username?: string;
  };
  attendees?: Array<{
    name?: string;
    email?: string;
    timeZone?: string;
  }>;
  eventType?: {
    slug?: string;
    title?: string;
  };
  metadata?: Record<string, unknown>;
};

/**
 * Verify Cal.com webhook signature. Cal.com sends an HMAC-SHA256 of the raw
 * request body, keyed by the webhook secret, in the `X-Cal-Signature-256`
 * header (hex-encoded).
 *
 * If CAL_WEBHOOK_SECRET is not set we accept the request and log a warning —
 * useful for local development, but production deployments must set it.
 */
export function verifyCalSignature(
  rawBody: string,
  signatureHeader: string | null
): { valid: boolean; reason?: string } {
  const secret = process.env.CAL_WEBHOOK_SECRET;

  if (!secret) {
    return {
      valid: true,
      reason: "no-secret-configured",
    };
  }
  if (!signatureHeader) {
    return { valid: false, reason: "missing-signature-header" };
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("hex");

  // Defensive: timingSafeEqual requires equal-length buffers.
  if (expected.length !== signatureHeader.length) {
    return { valid: false, reason: "length-mismatch" };
  }

  try {
    const equal = crypto.timingSafeEqual(
      Buffer.from(expected, "utf8"),
      Buffer.from(signatureHeader, "utf8")
    );
    return equal ? { valid: true } : { valid: false, reason: "digest-mismatch" };
  } catch {
    return { valid: false, reason: "compare-error" };
  }
}

/**
 * Compact, structured summary for logs — pulls the fields that matter on
 * every Cal.com booking event so we don't dump full payloads into the log
 * stream.
 */
export function summariseBooking(
  triggerEvent: CalTriggerEvent,
  payload: CalBookingPayload
) {
  return {
    event: triggerEvent,
    uid: payload?.uid,
    title: payload?.title,
    type: payload?.type,
    eventTypeSlug: payload?.eventType?.slug,
    startTime: payload?.startTime,
    endTime: payload?.endTime,
    organizer: payload?.organizer?.email,
    attendee: payload?.attendees?.[0]?.email,
    attendeeName: payload?.attendees?.[0]?.name,
    location: payload?.location,
    status: payload?.status,
  };
}

/**
 * Dispatch table — one entry per supported event. Each handler is invoked
 * after signature verification and structured logging. Keep handlers small;
 * delegate to mailers / CRM / database in their own modules later.
 */
const HANDLERS: Partial<
  Record<CalTriggerEvent, (payload: CalBookingPayload) => Promise<void> | void>
> = {
  BOOKING_CREATED: async () => {
    // TODO: send confirmation email, add to CRM, notify partner Slack/email.
  },
  BOOKING_REQUESTED: async () => {
    // TODO: alert partner to approve a pending booking.
  },
  BOOKING_RESCHEDULED: async () => {
    // TODO: send rescheduled-meeting email; update internal calendar.
  },
  BOOKING_CANCELLED: async () => {
    // TODO: free the slot internally; send cancellation acknowledgement.
  },
  BOOKING_REJECTED: async () => {
    // TODO: notify attendee + partner with reason.
  },
  BOOKING_PAID: async () => {
    // TODO: issue invoice / receipt; mark as confirmed in CRM.
  },
  BOOKING_PAYMENT_INITIATED: async () => {
    // TODO: hold the slot pending payment completion.
  },
  MEETING_STARTED: async () => {
    // TODO: optional — log into time-tracking.
  },
  MEETING_ENDED: async () => {
    // TODO: optional — trigger follow-up sequence.
  },
};

export async function dispatchCalEvent(
  triggerEvent: CalTriggerEvent,
  payload: CalBookingPayload
): Promise<void> {
  const handler = HANDLERS[triggerEvent];
  if (handler) {
    await handler(payload);
  }
}
