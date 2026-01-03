# EC2 Deployment Guide

This guide will help you deploy CloudPillers website on AWS EC2.

## Prerequisites

- AWS EC2 instance (Ubuntu/Amazon Linux)
- Docker and Docker Compose installed
- Domain name (optional, but recommended)
- AWS SES configured (for emails)

## Step 1: Connect to EC2 Instance

```bash
ssh -i your-key.pem ec2-user@your-ec2-ip
# or
ssh -i your-key.pem ubuntu@your-ec2-ip
```

## Step 2: Install Docker & Docker Compose

### For Ubuntu:
```bash
# Update system
sudo apt-get update

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### For Amazon Linux:
```bash
# Install Docker
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Step 3: Clone Repository

```bash
cd ~
git clone https://github.com/satish91953/CloudPillers.git
cd CloudPillers
```

## Step 4: Configure Environment Variables

Create `.env` file in the project root:

```bash
nano .env
```

Add the following (replace with your actual values):

```env
# MongoDB
MONGO_ROOT_PASSWORD=your_secure_password_here

# JWT
JWT_SECRET=your_super_secret_jwt_key_here

# AWS SES
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
EMAIL_FROM=noreply@cloudpillers.com
ADMIN_EMAIL=admin@cloudpillers.com

# Frontend URL - IMPORTANT: Use your EC2 IP or domain
# Replace 13.202.189.182 with your EC2 public IP
CLIENT_URL=http://13.202.189.182:3001

# Or if you have a domain:
# CLIENT_URL=https://cloudpillers.com

# Cloudinary (optional)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Important:** Replace `13.202.189.182` with your actual EC2 public IP address or domain name.

## Step 5: Configure Security Groups

In AWS EC2 Console, update your Security Group to allow:

- **Port 3001** (HTTP) - For frontend
- **Port 5001** (HTTP) - For backend API
- **Port 27017** (MongoDB) - Only if accessing from outside (not recommended)

Or if using a domain with SSL:
- **Port 443** (HTTPS) - For frontend
- **Port 80** (HTTP) - Redirect to HTTPS

## Step 6: Build and Start Services

```bash
# Build and start all services
docker-compose up -d --build

# Check logs
docker-compose logs -f

# Check status
docker-compose ps
```

## Step 7: Create Admin User

```bash
docker exec -it cloudpillers-backend npm run create-admin
# Follow prompts to create admin account
```

## Step 8: Access Your Application

- **Frontend:** http://YOUR_EC2_IP:3001
- **Backend API:** http://YOUR_EC2_IP:5001
- **Admin Dashboard:** http://YOUR_EC2_IP:3001/admin/login

## Step 9: Configure Frontend API URL (If Needed)

If the frontend still tries to connect to localhost, you can set the API URL explicitly:

1. Create `client/.env` file:
```bash
nano client/.env
```

2. Add:
```env
VITE_API_URL=http://YOUR_EC2_IP:5001/api/v1
```

3. Rebuild frontend:
```bash
docker-compose build frontend
docker-compose up -d frontend
```

## Troubleshooting

### CORS Error
If you see CORS errors:
1. Make sure `CLIENT_URL` in `.env` matches your actual frontend URL
2. Check that the frontend is using the correct API URL (not localhost)
3. Restart backend: `docker-compose restart backend`

### Port Already in Use
```bash
# Check what's using the port
sudo lsof -i :3001
sudo lsof -i :5001

# Kill the process if needed
sudo kill -9 <PID>
```

### Docker Build Fails
```bash
# Clean and rebuild
docker-compose down
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```

### Check Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
```

### Restart Services
```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart backend
docker-compose restart frontend
```

## Production Recommendations

### 1. Use Domain Name with SSL
- Set up Route 53 or use your domain registrar
- Use Let's Encrypt for free SSL certificates
- Update `CLIENT_URL` to use HTTPS

### 2. Use Reverse Proxy (Nginx)
Instead of exposing ports directly, use Nginx as reverse proxy:
- Port 80 → Frontend
- Port 443 → Frontend (HTTPS)
- `/api` → Backend (port 5001)

### 3. Environment Variables
- Never commit `.env` file
- Use AWS Secrets Manager or Parameter Store for production
- Rotate credentials regularly

### 4. Monitoring
- Set up CloudWatch for monitoring
- Configure log aggregation
- Set up alerts for errors

### 5. Backup
- Regular MongoDB backups
- Backup Docker volumes
- Store backups in S3

## Quick Commands Reference

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Rebuild after code changes
docker-compose up -d --build

# Check service status
docker-compose ps

# Access backend container
docker exec -it cloudpillers-backend sh

# Access MongoDB
docker exec -it cloudpillers-mongodb mongosh -u admin -p
```

## Support

For issues:
1. Check logs: `docker-compose logs -f`
2. Verify environment variables
3. Check security group settings
4. Verify ports are open

