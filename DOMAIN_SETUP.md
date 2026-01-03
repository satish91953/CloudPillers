# Domain Configuration Guide

This guide explains how to configure CloudPillers to use custom domains in production while maintaining localhost for development.

## Domain Structure

- **Frontend:** `cloudpillers.com` (or `www.cloudpillers.com`)
- **Backend API:** `api.cloudpillers.com`
- **Local Development:** `localhost:3001` (frontend) and `localhost:5001` (backend)

## How It Works

### Frontend API Detection
The frontend automatically detects the domain:
- If running on `cloudpillers.com` → uses `https://api.cloudpillers.com/api/v1`
- If running on `localhost` → uses `http://localhost:5001/api/v1`

### Backend CORS
The backend allows requests from:
- `https://cloudpillers.com`
- `https://www.cloudpillers.com`
- `http://localhost:3001` (for development)

## Production Setup (EC2)

### 1. Environment Variables

Create `.env` file in project root:

```env
# Frontend URL (comma-separated for multiple domains)
CLIENT_URL=https://cloudpillers.com,https://www.cloudpillers.com

# API URL for frontend build (optional, auto-detected if not set)
VITE_API_URL=https://api.cloudpillers.com/api/v1
```

### 2. DNS Configuration

Point your domains to your EC2 instance:

**A Records:**
- `cloudpillers.com` → Your EC2 Public IP
- `www.cloudpillers.com` → Your EC2 Public IP
- `api.cloudpillers.com` → Your EC2 Public IP

### 3. Nginx Reverse Proxy (Recommended)

Instead of exposing ports directly, use Nginx:

#### Frontend Nginx Config (`/etc/nginx/sites-available/cloudpillers.com`):
```nginx
server {
    listen 80;
    server_name cloudpillers.com www.cloudpillers.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name cloudpillers.com www.cloudpillers.com;
    
    ssl_certificate /etc/letsencrypt/live/cloudpillers.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cloudpillers.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Backend Nginx Config (`/etc/nginx/sites-available/api.cloudpillers.com`):
```nginx
server {
    listen 80;
    server_name api.cloudpillers.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.cloudpillers.com;
    
    ssl_certificate /etc/letsencrypt/live/api.cloudpillers.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.cloudpillers.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 4. SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Get certificates
sudo certbot --nginx -d cloudpillers.com -d www.cloudpillers.com
sudo certbot --nginx -d api.cloudpillers.com

# Auto-renewal
sudo certbot renew --dry-run
```

### 5. Update Docker Compose

Update `docker-compose.yml` or set environment variables:

```yaml
services:
  frontend:
    build:
      args:
        VITE_API_URL: https://api.cloudpillers.com/api/v1
    # ... rest of config

  backend:
    environment:
      CLIENT_URL: https://cloudpillers.com,https://www.cloudpillers.com
    # ... rest of config
```

### 6. Rebuild and Deploy

```bash
# Rebuild with new API URL
docker-compose build --build-arg VITE_API_URL=https://api.cloudpillers.com/api/v1 frontend

# Restart services
docker-compose up -d
```

## Local Development

For local development, no changes needed! The app automatically uses:
- Frontend: `http://localhost:3001`
- Backend: `http://localhost:5001`

Just run:
```bash
docker-compose up
```

Or use the dev compose file:
```bash
docker-compose -f docker-compose.dev.yml up
```

## Testing

### Test Production URLs
1. Visit `https://cloudpillers.com`
2. Open browser console
3. Check network requests - should go to `https://api.cloudpillers.com/api/v1`

### Test Local Development
1. Visit `http://localhost:3001`
2. Open browser console
3. Check network requests - should go to `http://localhost:5001/api/v1`

## Troubleshooting

### CORS Errors
- Verify `CLIENT_URL` in backend `.env` includes your domain
- Check that frontend domain matches allowed origins
- Ensure HTTPS is used in production

### API Not Found
- Verify DNS points `api.cloudpillers.com` to your server
- Check Nginx configuration
- Verify backend is running on port 5001

### Mixed Content Warnings
- Ensure both frontend and API use HTTPS in production
- Check that API URL uses `https://` not `http://`

## Environment Variables Summary

### Backend (.env)
```env
CLIENT_URL=https://cloudpillers.com,https://www.cloudpillers.com
```

### Frontend Build (docker-compose.yml)
```yaml
VITE_API_URL=https://api.cloudpillers.com/api/v1
```

### Local Development
No environment variables needed - uses localhost automatically!

