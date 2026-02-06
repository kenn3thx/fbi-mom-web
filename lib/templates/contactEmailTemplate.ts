export function contactEmailTemplate({
  email,
  title,
  description,
}: {
  email: string;
  title: string;
  description: string;
}) {
  return `
  <div style="background-color:#f5f5f5;padding:24px 0;">
    <div style="
      max-width:600px;
      margin:0 auto;
      background:#ffffff;
      border-radius:8px;
      overflow:hidden;
      font-family:Arial, Helvetica, sans-serif;
      box-shadow:0 2px 8px rgba(0,0,0,0.05);
    ">

      <!-- Header -->
      <div style="background:#655B50;padding:16px 24px;">
        <h2 style="
          margin:0;
          color:#ffffff;
          font-size:20px;
          font-weight:600;
        ">
          New Contact Message
        </h2>
        <p style="
          margin:4px 0 0;
          color:#eaeaea;
          font-size:13px;
        ">
          FBI MOM – Contact Form
        </p>
      </div>

      <!-- Body -->
      <div style="padding:24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
          <tr>
            <td style="padding-bottom:8px;color:#555;">
              <strong>From:</strong>
            </td>
            <td style="padding-bottom:8px;color:#000;">
              ${email}
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:16px;color:#555;">
              <strong>Subject:</strong>
            </td>
            <td style="padding-bottom:16px;color:#000;">
              ${title}
            </td>
          </tr>
        </table>

        <div style="
          border-top:1px solid #eee;
          margin:16px 0;
        "></div>

        <p style="
          margin:0 0 8px;
          font-size:14px;
          font-weight:600;
          color:#333;
        ">
          Message
        </p>

        <div style="
          background:#fafafa;
          padding:16px;
          border-radius:6px;
          font-size:14px;
          line-height:1.6;
          color:#333;
          white-space:pre-line;
        ">
          ${description}
        </div>

        <!-- CTA -->
        <div style="margin-top:24px;text-align:center;">
          <a href="mailto:${email}" style="
            display:inline-block;
            padding:10px 20px;
            background:#655B50;
            color:#ffffff;
            text-decoration:none;
            border-radius:4px;
            font-size:14px;
          ">
            Reply to this message
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="
        background:#fafafa;
        padding:16px 24px;
        font-size:12px;
        color:#888;
        text-align:center;
      ">
        This email was sent from the FBI MOM contact form.<br/>
        Please reply directly to the sender for support.
      </div>

    </div>
  </div>
  `;
}




export function contactUserConfirmationTemplate({
  email,
  title,
}: {
  email: string;
  title: string;
}) {
  return `
  <div style="background-color:#f5f5f5;padding:24px 0;">
    <div style="
      max-width:600px;
      margin:0 auto;
      background:#ffffff;
      border-radius:8px;
      overflow:hidden;
      font-family:Arial, Helvetica, sans-serif;
      box-shadow:0 2px 8px rgba(0,0,0,0.05);
    ">

      <!-- Header -->
      <div style="background:#655B50;padding:20px 24px;text-align:center;">
        <h2 style="
          margin:0;
          color:#ffffff;
          font-size:22px;
          font-weight:600;
        ">
          We received your message
        </h2>
      </div>

      <!-- Body -->
      <div style="padding:24px;">
        <p style="font-size:15px;color:#333;margin:0 0 12px;">
          Hi there,
        </p>

        <p style="font-size:15px;color:#333;line-height:1.6;margin:0 0 16px;">
          Thank you for contacting <strong>FBI MOM</strong>.
          We’ve successfully received your message and our support team is reviewing it.
        </p>

        <div style="
          background:#fafafa;
          padding:16px;
          border-radius:6px;
          font-size:14px;
          color:#333;
          margin-bottom:16px;
        ">
          <strong>Subject:</strong><br/>
          ${title}
        </div>

        <p style="font-size:14px;color:#555;line-height:1.6;margin:0 0 16px;">
          <strong>Response time:</strong><br/>
          We usually respond within <strong>24 hours</strong> (Monday–Friday).
        </p>

        <p style="font-size:14px;color:#555;line-height:1.6;margin:0;">
          If your request is urgent, please reply to this email with <strong>URGENT</strong>
          in the subject line and we’ll prioritize it.
        </p>

        <div style="margin-top:24px;text-align:center;">
          <a href="https://fbimom.com" style="
            display:inline-block;
            padding:10px 20px;
            background:#655B50;
            color:#ffffff;
            text-decoration:none;
            border-radius:4px;
            font-size:14px;
          ">
            Visit our website
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="
        background:#fafafa;
        padding:16px 24px;
        font-size:12px;
        color:#888;
        text-align:center;
      ">
        This is an automated confirmation email.<br/>
        Please do not reply unless you have additional information.
      </div>

    </div>
  </div>
  `;
}
