# AWS SES Email Verification - Quick Fix

Your contact form is working, but emails are failing because the sender addresses need to be verified in AWS SES.

## Quick Steps to Fix

### Step 1: Verify Email Addresses in AWS SES

1. **Go to AWS SES Console**
   - Log in to AWS Console
   - Navigate to **Simple Email Service (SES)**
   - Make sure you're in the **US-EAST-1** region (or your configured region)

2. **Verify Sender Email (`noreply@cloudpillers.com`)**
   - Click **Verified identities** → **Create identity**
   - Choose **Email address**
   - Enter: `noreply@cloudpillers.com`
   - Click **Create identity**
   - Check the email inbox for `noreply@cloudpillers.com`
   - Click the verification link in the email

3. **Verify Admin Email (`admin@cloudpillers.com`)**
   - Repeat the same process for `admin@cloudpillers.com`
   - Or use a Gmail address that you can verify

4. **Verify Any Other Emails**
   - If you're using `satish91953@gmail.com` as ADMIN_EMAIL, verify that too
   - Go to **Verified identities** → **Create identity** → **Email address**
   - Enter the email and verify it

### Step 2: Update Environment Variables (if needed)

If you want to use a different email address that's already verified:

```env
# In your .env file on EC2
EMAIL_FROM=noreply@cloudpillers.com  # Must be verified
ADMIN_EMAIL=your-verified-email@gmail.com  # Must be verified
```

### Step 3: Restart Backend

After verifying emails:

```bash
docker-compose restart backend
```

### Step 4: Test

Submit a contact form and check:
- Contact form should submit successfully ✅
- Admin should receive notification email ✅
- User should receive confirmation email ✅

## Alternative: Verify Domain (Recommended for Production)

Instead of verifying individual emails, verify the entire domain:

1. **Go to SES Console** → **Verified identities** → **Create identity**
2. Choose **Domain**
3. Enter: `cloudpillers.com`
4. Follow DNS verification steps:
   - Add the provided TXT/CNAME records to your domain DNS
   - Wait for verification (usually 24-48 hours)
5. Once verified, you can send from **any email** on that domain:
   - `noreply@cloudpillers.com` ✅
   - `admin@cloudpillers.com` ✅
   - `contact@cloudpillers.com` ✅
   - Any email @cloudpillers.com ✅

## Current Status

✅ **Contact form is working** - submissions are being saved to database
❌ **Emails are failing** - because addresses aren't verified

After verification, emails will work automatically!

## Sandbox Mode vs Production Mode

### Sandbox Mode (Default)
- Can only send **TO** verified email addresses
- Can only send **FROM** verified email addresses
- Good for testing

### Production Mode
- Can send **TO** any email address
- Can only send **FROM** verified addresses/domains
- Request production access in SES Console → Account dashboard

## Troubleshooting

### "Email address is not verified"
- Make sure you verified the email in the correct AWS region (US-EAST-1)
- Check that the verification email was clicked
- Wait a few minutes after verification

### "Account is in sandbox mode"
- You can only send to verified emails
- Request production access to send to any email

### Still not working?
1. Check AWS region matches: `AWS_REGION=us-east-1`
2. Verify IAM role has SES permissions
3. Check backend logs: `docker-compose logs backend | grep -i ses`

