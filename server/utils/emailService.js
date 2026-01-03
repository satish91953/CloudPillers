const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

// Initialize SES Client
// If AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are provided, use them
// Otherwise, use default credential chain (IAM role, environment variables, etc.)
const sesConfig = {
  region: process.env.AWS_REGION || 'us-east-1',
};

// Only set explicit credentials if both are provided
// If not provided, AWS SDK will use default credential chain (IAM role, env vars, etc.)
if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
  sesConfig.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
}

const sesClient = new SESClient(sesConfig);

/**
 * Send email using AWS SES
 * @param {Object} options - Email options
 * @param {string|string[]} options.to - Recipient email address(es)
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML email body
 * @param {string} options.text - Plain text email body (optional)
 * @param {string} options.from - Sender email address (defaults to EMAIL_FROM env var)
 * @param {string|string[]} options.replyTo - Reply-to email address(es) (optional)
 * @param {string|string[]} options.cc - CC email address(es) (optional)
 * @param {string|string[]} options.bcc - BCC email address(es) (optional)
 * @returns {Promise<Object>} - SES response
 */
const sendEmail = async ({
  to,
  subject,
  html,
  text,
  from = process.env.EMAIL_FROM || 'noreply@cloudpillers.com',
  replyTo,
  cc,
  bcc,
}) => {
  try {
    // Validate required fields
    if (!to || !subject || (!html && !text)) {
      throw new Error('Missing required email fields: to, subject, and html/text are required');
    }

    // Ensure 'to' is an array
    const toAddresses = Array.isArray(to) ? to : [to];
    const ccAddresses = cc ? (Array.isArray(cc) ? cc : [cc]) : undefined;
    const bccAddresses = bcc ? (Array.isArray(bcc) ? bcc : [bcc]) : undefined;
    const replyToAddresses = replyTo ? (Array.isArray(replyTo) ? replyTo : [replyTo]) : undefined;

    // Prepare email parameters
    const params = {
      Source: from,
      Destination: {
        ToAddresses: toAddresses,
        ...(ccAddresses && { CcAddresses: ccAddresses }),
        ...(bccAddresses && { BccAddresses: bccAddresses }),
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          ...(html && {
            Html: {
              Data: html,
              Charset: 'UTF-8',
            },
          }),
          ...(text && {
            Text: {
              Data: text,
              Charset: 'UTF-8',
            },
          }),
        },
      },
      ...(replyToAddresses && {
        ReplyToAddresses: replyToAddresses,
      }),
    };

    // Send email
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    console.log('✅ Email sent successfully:', response.MessageId);
    return {
      success: true,
      messageId: response.MessageId,
      response,
    };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};

/**
 * Send contact form notification email
 * @param {Object} contactData - Contact form data
 * @returns {Promise<Object>}
 */
const sendContactNotification = async (contactData) => {
  const { name, email, phone, company, service, message } = contactData;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #667eea; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            ${company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            ${service ? `
            <div class="field">
              <div class="label">Service Interest:</div>
              <div class="value">${service}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}${company ? `Company: ${company}\n` : ''}${service ? `Service Interest: ${service}\n` : ''}
Message:
${message}
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM || 'admin@cloudpillers.com',
    subject: `New Contact Form Submission from ${name}`,
    html,
    text,
    replyTo: email,
  });
};

/**
 * Send assessment request notification email
 * @param {Object} assessmentData - Assessment form data
 * @returns {Promise<Object>}
 */
const sendAssessmentNotification = async (assessmentData) => {
  const { name, email, company, companySize, currentCloudSpend, services, timeline, budget, additionalInfo } = assessmentData;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #667eea; }
          .value { margin-top: 5px; }
          .tag { display: inline-block; background: #667eea; color: white; padding: 4px 8px; border-radius: 4px; margin: 2px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Assessment Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            ${companySize ? `
            <div class="field">
              <div class="label">Company Size:</div>
              <div class="value">${companySize}</div>
            </div>
            ` : ''}
            ${currentCloudSpend ? `
            <div class="field">
              <div class="label">Current Cloud Spend:</div>
              <div class="value">${currentCloudSpend}</div>
            </div>
            ` : ''}
            ${services && services.length > 0 ? `
            <div class="field">
              <div class="label">Services of Interest:</div>
              <div class="value">
                ${services.map(service => `<span class="tag">${service}</span>`).join('')}
              </div>
            </div>
            ` : ''}
            ${timeline ? `
            <div class="field">
              <div class="label">Timeline:</div>
              <div class="value">${timeline}</div>
            </div>
            ` : ''}
            ${budget ? `
            <div class="field">
              <div class="label">Budget:</div>
              <div class="value">${budget}</div>
            </div>
            ` : ''}
            ${additionalInfo ? `
            <div class="field">
              <div class="label">Additional Information:</div>
              <div class="value">${additionalInfo.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Assessment Request

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}${companySize ? `Company Size: ${companySize}\n` : ''}${currentCloudSpend ? `Current Cloud Spend: ${currentCloudSpend}\n` : ''}${services && services.length > 0 ? `Services: ${services.join(', ')}\n` : ''}${timeline ? `Timeline: ${timeline}\n` : ''}${budget ? `Budget: ${budget}\n` : ''}${additionalInfo ? `Additional Info: ${additionalInfo}\n` : ''}
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM || 'admin@cloudpillers.com',
    subject: `New Assessment Request from ${name}${company ? ` - ${company}` : ''}`,
    html,
    text,
    replyTo: email,
  });
};

/**
 * Send confirmation email to user
 * @param {string} to - Recipient email
 * @param {string} type - Email type ('contact' or 'assessment')
 * @param {string} name - User name
 * @returns {Promise<Object>}
 */
const sendConfirmationEmail = async (to, type, name) => {
  const isContact = type === 'contact';
  const subject = isContact
    ? 'Thank you for contacting CloudPillers'
    : 'Thank you for your assessment request';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${name}!</h1>
          </div>
          <div class="content">
            <p>We've received your ${isContact ? 'message' : 'assessment request'} and our team will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to explore our resources or contact us if you have any urgent questions.</p>
            <a href="${process.env.CLIENT_URL || 'https://cloudpillers.com'}" class="button">Visit Our Website</a>
            <p style="margin-top: 30px; color: #666; font-size: 14px;">
              Best regards,<br>
              The CloudPillers Team
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Thank You, ${name}!

We've received your ${isContact ? 'message' : 'assessment request'} and our team will get back to you within 24 hours.

Best regards,
The CloudPillers Team
  `;

  return sendEmail({
    to,
    subject,
    html,
    text,
  });
};

module.exports = {
  sendEmail,
  sendContactNotification,
  sendAssessmentNotification,
  sendConfirmationEmail,
};

