import type { FormVariant } from "@/content/appointment-form";

/**
 * The email the practice receives for each appointment request: an HTML version laid out
 * for Outlook (tables, inline styles, system fonts, no images, so nothing is blocked or
 * restyled) and the same details as plain text. Every value from the form is escaped.
 * Colours are the site's tokens: navy #182752, blue #2c6a9a, ice #eaf3f9, error #b42318.
 */

type Field = [label: string, value: string];

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** "1990-01-01" → "01/01/1990 (age 36)", the way US offices write a date of birth */
function formatDob(iso: string, now: Date) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, y, m, d] = match.map(Number);
  let age = now.getUTCFullYear() - y;
  if (now.getUTCMonth() + 1 < m || (now.getUTCMonth() + 1 === m && now.getUTCDate() < d)) age -= 1;
  return `${match[2]}/${match[3]}/${match[1]} (age ${age})`;
}

/** The office is in Bensalem, PA, so times are Eastern */
const formatSent = (date: Date) =>
  `${new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(date)} at ${new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(date)}`;

const telHref = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return `tel:${digits.length === 10 ? `+1${digits}` : digits}`;
};

const FONT = "Arial, Helvetica, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

export function buildAppointmentEmail({
  variant,
  fields,
  practiceName,
  sentAt = new Date(),
}: {
  variant: FormVariant;
  fields: Field[];
  practiceName: string;
  sentAt?: Date;
}) {
  const emergency = variant === "emergency";
  const get = (label: string) => fields.find(([key]) => key === label)?.[1] ?? "";
  const name = get("Name");
  const firstName = name.split(" ")[0] || name;
  const phone = get("Phone");
  const email = get("Email");
  const sent = formatSent(sentAt);

  // Free text (comments or the emergency description) gets its own box below the table
  const noteLabel = emergency ? "Dental emergency" : "Comments or questions";
  const note = get(noteLabel);
  const rows = fields
    .filter(([label]) => label !== noteLabel)
    .map(([label, value]): Field => [label, label === "Date of birth" ? formatDob(value, sentAt) : value]);

  const title = emergency ? "Emergency visit request" : "New appointment request";
  const subject = emergency ? `Emergency visit request: ${name}` : `Appointment request: ${name}`;
  const preheader = [name, phone, emergency ? note : get("Interested in")].filter(Boolean).join(" · ");

  const text = [
    emergency ? "New emergency visit request from the website." : "New appointment request from the website.",
    `Sent ${sent}.`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    `${noteLabel}: ${note || "None"}`,
    "",
    `Reply to this email to answer ${firstName} at ${email}.`,
  ].join("\n");

  const band = emergency ? "#b42318" : "#182752";
  const bandSoft = emergency ? "#fbe9e7" : "#c1deee";
  const badge = emergency ? "EMERGENCY" : "WEBSITE FORM";

  const detailRows = rows
    .map(([label, value], index) => {
      const border = index === 0 ? "" : "border-top:1px solid #e1e7ee;";
      let shown = esc(value);
      if (label === "Phone") shown = `<a href="${esc(telHref(value))}" style="color:#2c6a9a;text-decoration:none;font-weight:bold;">${esc(value)}</a>`;
      if (label === "Email") shown = `<a href="mailto:${esc(value)}" style="color:#2c6a9a;text-decoration:none;font-weight:bold;">${esc(value)}</a>`;
      const muted = value === "Not given" || value === "None";
      return `<tr>
              <td valign="top" width="38%" style="${border}padding:12px 12px 12px 0;font-family:${FONT};font-size:13px;line-height:20px;color:#4f5a6e;">${esc(label)}</td>
              <td valign="top" style="${border}padding:12px 0;font-family:${FONT};font-size:15px;line-height:22px;color:${muted ? "#8a94a6" : "#1f2a44"};">${shown}</td>
            </tr>`;
    })
    .join("");

  const noteBlock = note
    ? `<tr>
          <td style="padding:4px 32px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:16px 18px;background:${emergency ? "#fdf3f2" : "#f4f9fc"};border-left:4px solid ${emergency ? "#b42318" : "#5a96c4"};font-family:${FONT};">
                  <div style="font-size:13px;line-height:20px;color:#4f5a6e;margin:0 0 4px;">${esc(noteLabel)}</div>
                  <div style="font-size:15px;line-height:23px;color:#1f2a44;">${esc(note).replace(/\r?\n/g, "<br>")}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
    : "";

  const button = (href: string, label: string, primary: boolean) =>
    `<td style="padding:0 8px 8px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${primary ? band : "#ffffff"}" style="border-radius:999px;${primary ? "" : "border:1px solid #c9d4e0;"}">
                    <a href="${esc(href)}" style="display:inline-block;padding:11px 20px;font-family:${FONT};font-size:14px;font-weight:bold;line-height:18px;color:${primary ? "#ffffff" : "#182752"};text-decoration:none;border-radius:999px;">${esc(label)}</a>
                  </td>
                </tr>
              </table>
            </td>`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f6f9;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f3f6f9;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f3f6f9" style="background:#f3f6f9;">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
          <tr>
            <td style="padding:0 4px 14px;font-family:${SERIF};font-size:20px;line-height:26px;color:#182752;font-weight:bold;">
              ${esc(practiceName.replace(/ By Design$/, ""))}<span style="font-weight:normal;font-style:italic;color:#5a96c4;">${practiceName.endsWith(" By Design") ? " By Design" : ""}</span>
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="background:#ffffff;border:1px solid #e1e7ee;border-radius:14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${band}" style="background:${band};padding:26px 32px 24px;border-radius:13px 13px 0 0;">
                    <div style="font-family:${FONT};font-size:13px;line-height:16px;font-weight:bold;letter-spacing:1.5px;color:${bandSoft};margin:0 0 8px;">${badge}</div>
                    <div style="font-family:${SERIF};font-size:26px;line-height:32px;font-weight:bold;color:#ffffff;margin:0 0 6px;">${esc(title)}</div>
                    <div style="font-family:${FONT};font-size:14px;line-height:20px;color:${bandSoft};">From ${esc(name)} · ${esc(sent)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 32px 6px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        ${button(telHref(phone), `Call ${firstName}`, true)}
                        ${button(`mailto:${email}?subject=${encodeURIComponent(`Your appointment request at ${practiceName}`)}`, "Reply by email", false)}
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 32px 10px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${detailRows}
                    </table>
                  </td>
                </tr>
                ${noteBlock}
                <tr>
                  <td style="padding:14px 32px 28px;font-family:${FONT};font-size:13px;line-height:20px;color:#4f5a6e;">
                    Replying to this email goes straight to ${esc(firstName)} at ${esc(email)}.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 8px 0;font-family:${FONT};font-size:13px;line-height:18px;color:#8a94a6;text-align:center;">
              Sent by the ${emergency ? "emergency scheduling" : "appointment request"} form on the ${esc(practiceName)} website.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
