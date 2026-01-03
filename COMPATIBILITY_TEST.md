# Frontend-Backend Compatibility Test Guide

## 🧪 Quick Test Checklist

### 1. Contact Form Test
```bash
# Test endpoint
curl -X POST http://localhost:5001/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message",
    "service": "devops"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message",
    "service": "devops",
    "status": "new",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

### 2. Assessment Form Test
```bash
curl -X POST http://localhost:5001/api/v1/assessment \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "companySize": "11-50",
    "currentCloudSpend": "$1k-$10k",
    "primaryChallenges": ["High cloud costs", "Security concerns"],
    "services": ["devops", "finops"],
    "timeline": "1-3 months",
    "budget": "$10k-$50k"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "companySize": "11-50",
    "currentCloudSpend": "$1k-$10k",
    "primaryChallenges": ["High cloud costs", "Security concerns"],
    "services": ["devops", "finops"],
    "timeline": "1-3 months",
    "budget": "$10k-$50k",
    "status": "new",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "message": "Thank you for your assessment! Our team will review and contact you soon."
}
```

### 3. Admin Login Test
```bash
curl -X POST http://localhost:5001/api/v1/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@cloudpillers.com",
    "password": "your-password"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "id": "...",
    "name": "Admin User",
    "email": "admin@cloudpillers.com",
    "role": "admin"
  }
}
```

### 4. Get Contacts (Admin)
```bash
curl -X GET http://localhost:5001/api/v1/contact/admin \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Expected Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "...",
      "name": "Test User",
      "email": "test@example.com",
      "message": "Test message",
      "status": "new",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

### 5. Get Assessments (Admin)
```bash
curl -X GET http://localhost:5001/api/v1/assessment/admin \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Expected Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "...",
      "name": "Test User",
      "email": "test@example.com",
      "services": ["devops", "finops"],
      "status": "new",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

---

## 🌐 Frontend Integration Test

### Test in Browser Console

1. **Check API URL:**
```javascript
// In browser console
console.log(import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1');
```

2. **Test Contact Form:**
- Navigate to `/contact`
- Fill out form
- Submit
- Check Network tab for POST request to `/api/v1/contact`
- Verify response status 201

3. **Test Assessment Form:**
- Navigate to `/free-assessment`
- Fill out form
- Submit
- Check Network tab for POST request to `/api/v1/assessment`
- Verify response status 201

4. **Test Admin Login:**
- Navigate to `/admin/login`
- Enter credentials
- Submit
- Check Network tab for POST request to `/api/v1/admin/login`
- Verify token is stored in localStorage
- Verify redirect to `/admin/dashboard`

5. **Test Admin Dashboard:**
- After login, check Network tab
- Verify GET requests to:
  - `/api/v1/contact/admin`
  - `/api/v1/assessment/admin`
- Verify data displays correctly

---

## ✅ Compatibility Verification

### Endpoint Mapping
- [x] POST `/contact` → `/api/v1/contact`
- [x] POST `/assessment` → `/api/v1/assessment`
- [x] POST `/admin/login` → `/api/v1/admin/login`
- [x] GET `/contact/admin` → `/api/v1/contact/admin`
- [x] GET `/assessment/admin` → `/api/v1/assessment/admin`

### Data Models
- [x] Contact model fields match
- [x] Assessment model fields match
- [x] Enum values match
- [x] Required fields match

### Authentication
- [x] Token storage works
- [x] Token sent in headers
- [x] 401 handling works
- [x] Redirect on unauthorized

### Error Handling
- [x] Network errors handled
- [x] API errors handled
- [x] Validation errors displayed

---

## 🐛 Common Issues & Solutions

### Issue: CORS Error
**Solution:** Check backend CORS configuration allows frontend origin
```javascript
// server.js
cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3001',
  credentials: true,
})
```

### Issue: 401 Unauthorized
**Solution:** Check token is being sent correctly
- Verify `localStorage.getItem('adminToken')` exists
- Check Authorization header format: `Bearer <token>`

### Issue: Data Not Displaying
**Solution:** Check response structure
- Backend returns: `{ success: true, data: [...] }`
- Frontend accesses: `response.data.data`

### Issue: Form Validation Fails
**Solution:** Check enum values match
- Contact service: `['devops', 'cybersecurity', 'compliance', 'finops', 're-architecture', 'managed-support', 'vpn-firewall', 'general']`
- Assessment services: `['devops', 'cybersecurity', 'compliance', 'finops', 're-architecture', 'managed-support', 'vpn-firewall']`

---

## 📊 Test Results Template

```
Date: ___________
Tester: ___________

Contact Form:
[ ] Submit successful
[ ] Data appears in admin dashboard
[ ] Validation works

Assessment Form:
[ ] Submit successful
[ ] Multi-select works
[ ] Data appears in admin dashboard

Admin Login:
[ ] Login successful
[ ] Token stored
[ ] Redirect works

Admin Dashboard:
[ ] Contacts load
[ ] Assessments load
[ ] Data displays correctly

Overall Status: [ ] PASS [ ] FAIL
Notes: ________________________________
```

---

## 🚀 Production Checklist

Before deploying:
- [ ] Set `VITE_API_URL` environment variable
- [ ] Set `CLIENT_URL` in backend environment
- [ ] Verify CORS allows production domain
- [ ] Test all endpoints in production environment
- [ ] Verify HTTPS is enabled
- [ ] Check rate limiting is appropriate
- [ ] Test error handling
- [ ] Verify token expiration handling

