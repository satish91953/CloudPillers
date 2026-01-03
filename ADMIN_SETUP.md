# Admin Dashboard Setup Guide

## 🚀 Quick Start

### 1. Create Admin User

Run this command to create your first admin user:

```bash
# Using Docker (direct node command)
docker-compose exec backend node scripts/createAdmin.js

# Or with custom details
docker-compose exec backend node scripts/createAdmin.js "Your Name" "admin@cloudpillers.com" "admin123456"

# Alternative: Using npm script (after container rebuild)
docker-compose exec backend npm run create-admin
```

**Default credentials (if no arguments provided):**
- Email: `admin@cloudpillers.com`
- Password: `admin123456`

### 2. Access Admin Dashboard

1. Open your browser and go to: `http://localhost:3001/admin/login`
2. Enter your admin email and password
3. You'll be redirected to the dashboard

## 📊 Admin Dashboard Features

### View Contact Submissions
- See all contact form submissions from the website
- View name, email, company, service interest, and submission date
- Track status (new/read)

### View Assessment Requests
- See all free assessment requests
- View contact details and submission dates

### Statistics
- Quick overview of total submissions
- Contact submissions count
- Assessment requests count

## 🔐 Security

- All admin routes are protected with JWT authentication
- Tokens are stored in localStorage
- Automatic logout on token expiration
- Protected API endpoints require admin/editor role

## 🛠️ API Endpoints

### Admin Authentication
- `POST /api/v1/admin/login` - Login
- `GET /api/v1/admin/me` - Get current user
- `GET /api/v1/admin/logout` - Logout

### Admin Data Access
- `GET /api/v1/contact/admin` - Get all contact submissions
- `GET /api/v1/assessment/admin` - Get all assessment requests

## 📝 Notes

- Admin pages don't show the website header/footer
- You can create multiple admin users with the script
- Passwords must be at least 6 characters
- Admin users have full access, editors have limited access

## 🔄 Creating Additional Admins

To create more admin users, run:

```bash
docker-compose exec backend node scripts/createAdmin.js "Name" "email@example.com" "password"
```

**Note:** If you get "Missing script" error, rebuild the backend container first:
```bash
docker-compose build backend
docker-compose up -d backend
```

## 🐛 Troubleshooting

**Can't login?**
- Make sure you've created an admin user first
- Check that MongoDB is running
- Verify the backend is running on port 5001

**Dashboard shows no data?**
- Check that the backend is connected to MongoDB
- Verify API endpoints are working
- Check browser console for errors

