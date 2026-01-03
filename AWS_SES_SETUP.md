# AWS SES Email Setup Guide

This guide will help you configure AWS SES (Simple Email Service) for sending emails from your CloudPillers application.

## Prerequisites

1. AWS Account
2. AWS SES service access
3. Verified email address or domain in SES

## Step 1: Set Up AWS SES

### 1.1 Create AWS Account (if you don't have one)
- Go to https://aws.amazon.com/
- Sign up for an AWS account

### 1.2 Access AWS SES Console
- Log in to AWS Console
- Navigate to **Simple Email Service (SES)**
- Select your preferred region (e.g., `us-east-1`, `us-west-2`, `eu-west-1`)

### 1.3 Verify Email Address (Sandbox Mode)
If you're in SES sandbox mode, you need to verify:
1. Go to **Verified identities** → **Create identity**
2. Choose **Email address**
3. Enter your email address (e.g., `noreply@cloudpillers.com`)
4. Click **Create identity**
5. Check your email and click the verification link

### 1.4 Request Production Access (Optional but Recommended)
To send emails to any email address:
1. Go to **Account dashboard**
2. Click **Request production access**
3. Fill out the form explaining your use case
4. Wait for approval (usually 24-48 hours)

### 1.5 Verify Domain (Recommended for Production)
For better deliverability:
1. Go to **Verified identities** → **Create identity**
2. Choose **Domain**
3. Enter your domain (e.g., `cloudpillers.com`)
4. Follow DNS verification steps
5. Add the provided DNS records to your domain

## Step 2: Create IAM User for SES

### 2.1 Create IAM User
1. Go to **IAM** → **Users** → **Create user**
2. Enter username: `cloudpillers-ses-user`
3. Click **Next**

### 2.2 Attach SES Policy
1. Select **Attach policies directly**
2. Search for `AmazonSESFullAccess` or create a custom policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
```
3. Click **Next** → **Create user**

### 2.3 Create Access Keys
1. Click on the created user
2. Go to **Security credentials** tab
3. Click **Create access key**
4. Choose **Application running outside AWS**
5. Click **Next** → **Create access key**
6. **IMPORTANT**: Copy both:
   - **Access key ID**
   - **Secret access key** (only shown once!)

## Step 3: Configure Environment Variables

### 3.1 Create `.env` file in `server/` directory

```env
# AWS SES Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_id_here
AWS_SECRET_ACCESS_KEY=your_secret_access_key_here

# Email Configuration
EMAIL_FROM=noreply@cloudpillers.com
ADMIN_EMAIL=admin@cloudpillers.com
```

### 3.2 Update Docker Compose (if using Docker)

Add to your `.env` file in the project root:

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_id_here
AWS_SECRET_ACCESS_KEY=your_secret_access_key_here
EMAIL_FROM=noreply@cloudpillers.com
ADMIN_EMAIL=admin@cloudpillers.com
```

## Step 4: Test Email Sending

### 4.1 Test from Application
1. Submit a contact form
2. Check your admin email for notification
3. Check the user's email for confirmation

### 4.2 Test via API (Optional)
```bash
curl -X POST http://localhost:5001/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## Step 5: Monitor SES

### 5.1 Check SES Dashboard
- Go to **SES Console** → **Sending statistics**
- Monitor:
  - **Sending quota**: Daily sending limit
  - **Reputation metrics**: Bounce and complaint rates
  - **Sending statistics**: Emails sent, bounces, complaints

### 5.2 Set Up CloudWatch Alarms (Optional)
1. Go to **CloudWatch** → **Alarms**
2. Create alarms for:
   - High bounce rate
   - High complaint rate
   - Sending quota usage

## Troubleshooting

### Issue: "Email address is not verified"
**Solution**: Verify your sender email address in SES console

### Issue: "Account is in sandbox mode"
**Solution**: Request production access or only send to verified emails

### Issue: "Access Denied"
**Solution**: Check IAM user permissions and access keys

### Issue: "Invalid credentials"
**Solution**: Verify AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are correct

### Issue: "Region mismatch"
**Solution**: Ensure AWS_REGION matches the region where you verified your email/domain

## Best Practices

1. **Use verified domain** instead of email addresses for better deliverability
2. **Monitor bounce and complaint rates** to maintain good sender reputation
3. **Use separate IAM user** with minimal required permissions
4. **Rotate access keys** regularly for security
5. **Set up SNS notifications** for bounces and complaints
6. **Use SES Configuration Sets** for tracking and analytics

## Cost

AWS SES Pricing (as of 2024):
- **Free Tier**: 62,000 emails/month (if sent from EC2)
- **After Free Tier**: $0.10 per 1,000 emails
- **No charge** for receiving emails

## Support

For AWS SES issues:
- AWS SES Documentation: https://docs.aws.amazon.com/ses/
- AWS Support: https://aws.amazon.com/support/

For application issues:
- Check server logs: `docker logs cloudpillers-backend`
- Check email service logs in console output

