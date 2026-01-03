# IAM Role Setup for EC2 Instance

This guide explains how to configure AWS SES using an IAM role attached to your EC2 instance.

## Benefits of Using IAM Roles

- **More Secure**: No need to store AWS credentials in environment variables
- **Automatic Rotation**: Credentials are automatically rotated by AWS
- **Easier Management**: No need to manage access keys manually
- **Best Practice**: Recommended by AWS for EC2 instances

## Step 1: Create IAM Role for SES

1. Go to **IAM Console** → **Roles** → **Create Role**

2. Select **AWS Service** → **EC2** → **Next**

3. Attach the following policy:
   - **AmazonSESFullAccess** (for full access)
   - OR create a custom policy with minimal permissions:

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

4. Name the role (e.g., `CloudPillers-SES-Role`)

5. Click **Create Role**

## Step 2: Attach Role to EC2 Instance

1. Go to **EC2 Console** → Select your instance

2. Click **Actions** → **Security** → **Modify IAM role**

3. Select your newly created role

4. Click **Update IAM role**

## Step 3: Update Environment Variables

In your `.env` file on EC2, you can now **remove** or **leave empty** these variables:

```env
# These are optional if using IAM role
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Still required
AWS_REGION=us-east-1
EMAIL_FROM=noreply@cloudpillers.com
ADMIN_EMAIL=admin@cloudpillers.com
```

The application will automatically use the IAM role credentials.

## Step 4: Verify SES Access

1. **Verify your email/domain in SES**:
   - Go to **SES Console** → **Verified identities**
   - Add and verify your sending email address or domain

2. **Check if you're in Sandbox mode**:
   - In Sandbox mode, you can only send to verified emails
   - Request production access to send to any email

3. **Test the setup**:
   ```bash
   # On your EC2 instance
   docker-compose logs backend | grep -i ses
   ```

## Step 5: Restart Services

After attaching the IAM role:

```bash
docker-compose restart backend
```

## Troubleshooting

### Error: "Unable to locate credentials"

**Solution**: Make sure the IAM role is properly attached to the EC2 instance.

```bash
# Verify role is attached
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/
```

### Error: "User is not authorized to perform: ses:SendEmail"

**Solution**: The IAM role doesn't have SES permissions. Add the SES policy to the role.

### Error: "Email address not verified"

**Solution**: Verify your sending email address in SES Console.

### Check IAM Role Permissions

```bash
# On EC2 instance, test if role is working
aws sts get-caller-identity

# If this works, the role is properly configured
```

## Environment Variables Summary

### With IAM Role (Recommended)
```env
AWS_REGION=us-east-1
EMAIL_FROM=noreply@cloudpillers.com
ADMIN_EMAIL=admin@cloudpillers.com
# AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY not needed
```

### Without IAM Role (Alternative)
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
EMAIL_FROM=noreply@cloudpillers.com
ADMIN_EMAIL=admin@cloudpillers.com
```

## Security Best Practices

1. ✅ Use IAM roles instead of access keys when possible
2. ✅ Grant minimum required permissions
3. ✅ Use separate roles for different services
4. ✅ Regularly review and audit IAM permissions
5. ✅ Enable CloudTrail to log SES API calls

## Next Steps

1. Attach the IAM role to your EC2 instance
2. Remove AWS credentials from `.env` file (or leave empty)
3. Restart the backend service
4. Test sending an email through the contact form

