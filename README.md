# CloudPillers.com - Enterprise Cloud Services Website

A modern, professional MERN stack website with comprehensive admin dashboard, blog system, and AWS SES email integration.

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **React Router v6** - Client-side routing
- **React Hook Form** - Form management with validation
- **Axios** - HTTP client
- **React Helmet** - SEO optimization

### Backend
- **Node.js 25** - Latest Node.js runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication & authorization
- **AWS SES** - Email service (Simple Email Service)
- **Cloudinary** - Image/file storage (optional)

## 📁 Project Structure

```
cloudpillers-website/
├── client/                      # React frontend
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Admin/          # Admin dashboard components
│   │   │   └── common/         # Shared components (Header, Footer, etc.)
│   │   ├── pages/              # Page components
│   │   │   ├── Admin/          # Admin dashboard pages
│   │   │   ├── Services/       # Service detail pages
│   │   │   ├── Solutions/      # Solution pages
│   │   │   └── Resources/      # Blog, case studies, whitepapers
│   │   ├── contexts/           # React contexts (Theme)
│   │   ├── utils/              # Utility functions (API client)
│   │   └── App.jsx             # Main app component
│   ├── public/                 # Static assets
│   └── package.json
├── server/                      # Express backend
│   ├── config/                 # Configuration files
│   │   ├── database.js         # MongoDB connection
│   │   └── cloudinary.js       # Cloudinary config
│   ├── controllers/            # Route controllers
│   ├── models/                 # Database models
│   ├── routes/                 # API routes
│   ├── middleware/             # Custom middleware (auth, error handling)
│   ├── utils/                  # Utility functions (email service)
│   ├── scripts/                # Utility scripts (create admin)
│   └── server.js               # Server entry point
├── docker-compose.yml          # Production Docker setup
├── docker-compose.dev.yml      # Development Docker setup
├── .env.example                # Environment variables template
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js v25.2.1 or higher (for local development)
- MongoDB (local or MongoDB Atlas)
- AWS Account with SES configured (for email)
- Docker & Docker Compose (for containerized deployment)

### Quick Start with Docker (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/satish91953/CloudPillers.git
   cd cloudpillers-website
   ```

2. **Create `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and fill in your values:
   ```env
   # MongoDB
   MONGO_ROOT_PASSWORD=your_secure_password
   
   # JWT
   JWT_SECRET=your_super_secret_jwt_key
   
   # AWS SES
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   EMAIL_FROM=noreply@cloudpillers.com
   ADMIN_EMAIL=admin@cloudpillers.com
   
   # Cloudinary (optional)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Frontend URL
   CLIENT_URL=http://localhost:3001
   ```

3. **Start all services:**
   ```bash
   docker-compose up -d
   ```

4. **Create admin user:**
   ```bash
   docker exec -it cloudpillers-backend npm run create-admin
   # Follow prompts to create admin account
   ```

5. **Access the application:**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:5001
   - Admin Dashboard: http://localhost:3001/admin/login

### Local Development Setup

#### Backend Setup

1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):
   ```env
   NODE_ENV=development
   PORT=5001
   MONGODB_URI=mongodb://admin:changeme@localhost:27017/cloudpillers?authSource=admin
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   EMAIL_FROM=noreply@cloudpillers.com
   ADMIN_EMAIL=admin@cloudpillers.com
   CLIENT_URL=http://localhost:3001
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

   Server will run on `http://localhost:5001`

#### Frontend Setup

1. Navigate to client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:3001`

## 🎨 Features

### Public Features
- ✅ Modern, professional UI design
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized (meta tags, structured data, sitemap)
- ✅ Contact form with validation
- ✅ Free assessment form
- ✅ Blog system with categories and tags
- ✅ Service pages (DevOps, Security, Compliance, FinOps, etc.)
- ✅ Solution pages (Cloud Migration, Multi-Cloud, DevSecOps, Cost Optimization)
- ✅ Resources section (Blog, Case Studies, Whitepapers, FAQ)
- ✅ Country code selector for phone numbers
- ✅ Local storage for contact form data
- ✅ Scroll-to-top on route changes

### Admin Dashboard Features
- ✅ Professional tabbed interface
- ✅ Contact submissions management (with filters & pagination)
- ✅ Assessment requests management (with filters & pagination)
- ✅ Team member management (create, list, delete)
- ✅ Blog post management (create, edit, delete, publish)
- ✅ FAQ management
- ✅ Homepage content management
- ✅ Site settings management
- ✅ Detail modals for viewing full submission data
- ✅ Date filters (Today, Yesterday, Week, Month, 3 Months, 6 Months, Year)
- ✅ Pagination for large datasets
- ✅ Quick actions for common tasks

### Backend Features
- ✅ RESTful API architecture
- ✅ JWT authentication & authorization
- ✅ Role-based access control (Admin/Editor)
- ✅ AWS SES email integration
- ✅ Automatic email notifications
- ✅ User confirmation emails
- ✅ MongoDB with Mongoose ODM
- ✅ Error handling middleware
- ✅ Rate limiting
- ✅ Security headers (Helmet)
- ✅ CORS configuration
- ✅ Input validation
- ✅ File upload support (Cloudinary)

## 📝 API Endpoints

### Public Endpoints
- `POST /api/v1/contact` - Submit contact form
- `POST /api/v1/assessment` - Submit free assessment
- `POST /api/v1/newsletter` - Subscribe to newsletter
- `GET /api/v1/blog` - Get published blog posts
- `GET /api/v1/blog/:slug` - Get single blog post
- `GET /api/v1/faq` - Get published FAQs
- `GET /api/v1/homepage` - Get homepage content
- `GET /api/v1/settings` - Get site settings

### Admin Endpoints (Protected)
- `POST /api/v1/admin/login` - Admin login
- `GET /api/v1/admin/me` - Get current user
- `GET /api/v1/admin/logout` - Logout
- `POST /api/v1/admin/register` - Create new admin/editor (Admin only)
- `GET /api/v1/admin/users` - Get all users (Admin only)
- `DELETE /api/v1/admin/users/:id` - Delete user (Admin only)

#### Contact Management
- `GET /api/v1/contact/admin` - Get all contacts (with filters & pagination)
- `GET /api/v1/contact/admin/:id` - Get single contact
- `PUT /api/v1/contact/admin/:id/status` - Update contact status

#### Assessment Management
- `GET /api/v1/assessment/admin` - Get all assessments (with filters & pagination)
- `GET /api/v1/assessment/admin/:id` - Get single assessment

#### Blog Management
- `GET /api/v1/blog/admin` - Get all blog posts (including drafts)
- `POST /api/v1/blog/admin` - Create blog post
- `PUT /api/v1/blog/admin/:id` - Update blog post
- `DELETE /api/v1/blog/admin/:id` - Delete blog post
- `POST /api/v1/blog/admin/:id/publish` - Publish blog post

#### Content Management
- `GET /api/v1/settings` - Get site settings
- `PUT /api/v1/settings` - Update site settings
- `GET /api/v1/homepage` - Get homepage content
- `PUT /api/v1/homepage` - Update homepage content
- `GET /api/v1/faq` - Get all FAQs
- `POST /api/v1/faq` - Create FAQ
- `PUT /api/v1/faq/:id` - Update FAQ
- `DELETE /api/v1/faq/:id` - Delete FAQ

## 🔐 Authentication

Admin authentication uses JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

### Creating Admin User

**Using Docker:**
```bash
docker exec -it cloudpillers-backend npm run create-admin
```

**Local Development:**
```bash
cd server
npm run create-admin
```

Follow the prompts to create your first admin account.

## 📧 Email Configuration (AWS SES)

The application uses AWS SES for sending emails. See `AWS_SES_SETUP.md` for detailed setup instructions.

### Required AWS SES Setup:
1. Verify your email address or domain in AWS SES
2. Create IAM user with SES permissions
3. Get access keys
4. Add credentials to `.env` file

### Email Features:
- Contact form notifications (to admin)
- Assessment request notifications (to admin)
- User confirmation emails
- HTML email templates

## 🐳 Docker Deployment

### Quick Start

```bash
# Production mode
docker-compose up -d

# Development mode
docker-compose -f docker-compose.dev.yml up --build
```

### Docker Commands

Using Makefile (if available):
```bash
make help          # Show all available commands
make build         # Build all images
make up            # Start in production mode
make down          # Stop all services
make logs          # View all logs
make dev           # Start in development mode
make clean         # Remove all containers and volumes
```

Or using Docker Compose directly:
```bash
# Production
docker-compose up -d              # Start services
docker-compose down               # Stop services
docker-compose logs -f            # View logs
docker-compose restart            # Restart services

# Development
docker-compose -f docker-compose.dev.yml up --build
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml logs -f
```

### Services

- **Frontend** - React app served via Nginx (port 3001)
- **Backend** - Express API server (port 5001)
- **MongoDB** - Database (port 27017)

### Health Checks

All services include health checks. Check status with:
```bash
docker-compose ps
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the `dist` folder to Vercel or Netlify

3. Set environment variables:
   - `VITE_API_URL` - Your backend API URL

### Backend Deployment (Railway/Render/Heroku/AWS)

1. Set environment variables (see `.env.example`)
2. Deploy to your preferred platform
3. Update `CLIENT_URL` in backend environment
4. Update `VITE_API_URL` in frontend environment

## 📦 Available Scripts

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run create-admin` - Create admin user

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Complete Feature List

### ✅ Implemented Features

**Frontend:**
- Modern, professional UI design
- Responsive navigation with dropdowns
- Smooth animations with Framer Motion
- SEO optimization (meta tags, structured data, sitemap.xml, robots.txt)
- Contact form with validation
- Free assessment form
- Blog listing and detail pages
- Service pages (DevOps, Security, Compliance, FinOps, Re-Architecture, Managed Support, VPN & Firewall)
- Solution pages (Cloud Migration, Multi-Cloud, DevSecOps, Cost Optimization)
- Resources section (Blog, Case Studies, Whitepapers, FAQ)
- Country code selector
- Local storage for contact info
- Scroll-to-top functionality
- Light theme support

**Backend:**
- RESTful API with Express
- MongoDB database with Mongoose
- JWT authentication
- Role-based access control
- AWS SES email integration
- Automatic email notifications
- Contact form handling
- Assessment form handling
- Blog CRUD operations
- FAQ management
- Homepage content management
- Site settings management
- Team member management
- Error handling middleware
- Rate limiting
- Security headers
- Input validation
- File upload support (Cloudinary)

**Admin Dashboard:**
- Professional tabbed interface
- Contact submissions (with filters, pagination, detail view)
- Assessment requests (with filters, pagination, detail view)
- Team member management
- Blog management
- FAQ management
- Homepage content management
- Site settings management
- Quick actions
- Statistics dashboard

## 📚 Documentation

- `AWS_SES_SETUP.md` - Complete AWS SES setup guide
- `BLOG_GUIDE.md` - Blog system usage guide
- `ADMIN_SETUP.md` - Admin dashboard setup
- `SEO_OPTIMIZATION_GUIDE.md` - SEO implementation details
- `.env.example` - Environment variables template
- `GIT_PUSH_INSTRUCTIONS.md` - Git push guide

## 🔒 Security

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- Security headers (Helmet)
- Input validation and sanitization
- CORS configuration
- Environment variables for secrets
- `.env` files excluded from git

## 🧪 Testing

To test the application:

1. **Test Contact Form:**
   - Go to `/contact`
   - Fill and submit the form
   - Check admin email for notification
   - Check user email for confirmation

2. **Test Assessment:**
   - Go to `/free-assessment`
   - Complete the multi-step form
   - Check admin email for notification
   - Check user email for confirmation

3. **Test Admin Dashboard:**
   - Go to `/admin/login`
   - Login with admin credentials
   - Explore all dashboard sections

## 📄 License

ISC

## 👨‍💻 Development

Built with modern best practices:
- Clean code architecture
- Component reusability
- Proper error handling
- Security best practices
- Performance optimization
- SEO optimization
- Responsive design
- Professional UI/UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit with descriptive messages
5. Push to your fork
6. Create a pull request

## 📞 Support

For issues or questions:
- Check the documentation files
- Review the setup guides
- Check AWS SES setup guide for email issues

---

**Built with ❤️ for CloudPillers**
