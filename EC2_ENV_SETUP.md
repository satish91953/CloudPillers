# EC2 Environment Setup Guide

## Important: Create Root `.env` File

Docker Compose reads environment variables from a `.env` file in the **root directory** (same level as `docker-compose.yml`), NOT from `server/.env` or `client/.env`.

## Step 1: Create Root `.env` File

On your EC2 instance, create `.env` in the root directory:

```bash
cd /path/to/CloudPillers
nano .env
```

## Step 2: Add These Variables

```env
# ============================================
# MongoDB Configuration
# ============================================
MONGO_ROOT_PASSWORD=your_secure_password_here

# ============================================
# JWT Authentication
# ============================================
JWT_SECRET=HGFDFJGKHLGKHFJDS564767899%^$%$%^%&*j

# ============================================
# AWS SES Configuration
# ============================================
# Since you have IAM role attached, leave these EMPTY
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Email Configuration
# EMAIL_FROM: Domain is verified, so this works
EMAIL_FROM=noreply@cloudpillers.com

# ADMIN_EMAIL: Must be a VERIFIED email address
# Options:
# 1. Use an email on your verified domain: admin@cloudpillers.com (verify this email in SES)
# 2. Use a verified Gmail: your-verified-gmail@gmail.com
ADMIN_EMAIL=admin@cloudpillers.com

# ============================================
# Frontend/Client Configuration
# ============================================
# Frontend URL for CORS
CLIENT_URL=https://cloudpillers.com,https://www.cloudpillers.com

# API URL for frontend build (optional, auto-detected)
VITE_API_URL=https://api.cloudpillers.com/api/v1

# ============================================
# Optional: Cloudinary (if using image uploads)
# ============================================
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Step 3: Important Notes

### ✅ IAM Role (You Have This)
- Since you have an IAM role attached to EC2, **leave AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY empty**
- The application will automatically use the IAM role credentials
- Make sure the IAM role has SES permissions

### ✅ Domain Verified
- `cloudpillers.com` domain is verified in SES
- You can send FROM any `@cloudpillers.com` email
- `EMAIL_FROM=noreply@cloudpillers.com` ✅ Works

### ⚠️ ADMIN_EMAIL Must Be Verified
- If using `admin@cloudpillers.com`, verify this email in SES Console
- Or use a Gmail address that you've verified in SES
- This is where contact form notifications will be sent

### ✅ Files You DON'T Need to Change
- `server/.env` - This is just an example file, not used by Docker
- `client/.env` - Not needed, build args in docker-compose.yml handle this

## Step 4: Verify ADMIN_EMAIL in SES

1. Go to AWS SES Console → Verified identities
2. Click "Create identity" → "Email address"
3. Enter your `ADMIN_EMAIL` (e.g., `admin@cloudpillers.com`)
4. Check email and click verification link

## Step 5: Restart Services

After creating `.env` file:

```bash
docker-compose down
docker-compose up -d --build
```

## Step 6: Test

1. Submit a contact form
2. Check logs: `docker-compose logs backend | tail -20`
3. You should see: `✅ Email sent successfully`

## Quick Checklist

- [ ] Created `.env` file in root directory (not server/ or client/)
- [ ] Set `AWS_ACCESS_KEY_ID=` and `AWS_SECRET_ACCESS_KEY=` to empty (using IAM role)
- [ ] Set `ADMIN_EMAIL` to a verified email address
- [ ] Verified `ADMIN_EMAIL` in SES Console
- [ ] Restarted services with `docker-compose up -d --build`
- [ ] Tested contact form submission

## Troubleshooting

### Emails Still Failing?
- Check if `ADMIN_EMAIL` is verified in SES
- Check IAM role has SES permissions
- Check logs: `docker-compose logs backend | grep -i ses`

### Can't Find .env File?
- Make sure it's in the root directory (same level as docker-compose.yml)
- Check: `ls -la | grep .env`

### Using Wrong .env File?
- Docker Compose reads from root `.env` file
- `server/.env` and `client/.env` are NOT used by Docker Compose

