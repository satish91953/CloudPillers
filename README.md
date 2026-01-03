# CloudPillers.com - Modern MERN Stack Website

A futuristic, modern website built with the latest technologies and 2026 design trends.

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Axios** - HTTP client

### Backend
- **Node.js 25** - Latest Node.js runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Cloudinary** - Image/file storage
- **Nodemailer** - Email service

## 📁 Project Structure

```
cloudpillers-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── server.js          # Server entry point
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js v25.2.1 or higher (for local development)
- MongoDB (local or MongoDB Atlas)
- npm or yarn
- Docker & Docker Compose (for containerized deployment)

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
NODE_ENV=development
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@cloudpillers.com
CLIENT_URL=http://localhost:3001
```

4. Start the server:
```bash
npm run dev
```

Server will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:5001/api/v1
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3001`

## 🎨 Design Features

- **Glassmorphism** - Modern glass-like UI elements
- **Gradient Animations** - Smooth, eye-catching gradients
- **Micro-interactions** - Subtle animations on hover/click
- **Dark Theme** - Professional dark color scheme
- **Responsive Design** - Mobile-first approach
- **Smooth Scrolling** - Enhanced user experience

## 📝 API Endpoints

### Public Endpoints
- `POST /api/v1/contact` - Submit contact form
- `POST /api/v1/assessment` - Submit free assessment
- `POST /api/v1/newsletter` - Subscribe to newsletter
- `GET /api/v1/blog` - Get blog posts
- `GET /api/v1/blog/:slug` - Get single blog post

### Admin Endpoints (Protected)
- `POST /api/v1/admin/login` - Admin login
- `GET /api/v1/admin/me` - Get current user
- `GET /api/v1/admin/contacts` - Get all contacts
- `POST /api/v1/admin/blog` - Create blog post
- `PUT /api/v1/admin/blog/:id` - Update blog post
- `DELETE /api/v1/admin/blog/:id` - Delete blog post

## 🔐 Authentication

Admin authentication uses JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## 🐳 Docker Deployment

### Quick Start with Docker Compose

1. **Create `.env` file** in the root directory:
```env
MONGO_ROOT_PASSWORD=your_secure_password
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@cloudpillers.com
```

2. **Production Mode** (builds optimized images):
```bash
# Build and start all services
docker-compose up -d

# Or use Makefile
make prod
```

3. **Development Mode** (with hot reload):
```bash
# Start with development configuration
docker-compose -f docker-compose.dev.yml up --build

# Or use Makefile
make dev
```

4. **Access the application**:
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:5001
   - MongoDB: localhost:27017

### Docker Commands

Using Makefile (recommended):
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

### Volumes

Data is persisted in Docker volumes:
- `mongodb_data` - MongoDB data
- `mongodb_config` - MongoDB configuration

### Health Checks

All services include health checks. Check status with:
```bash
docker-compose ps
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project:
```bash
cd client
npm run build
```

2. Deploy the `dist` folder to Vercel or Netlify

### Backend (Railway/Render/Heroku)
1. Set environment variables
2. Deploy to your preferred platform
3. Update `VITE_API_URL` in frontend `.env`

## 📦 Available Scripts

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Features Implemented

✅ Modern, futuristic UI design
✅ Smooth animations with Framer Motion
✅ Responsive navigation
✅ Contact form with validation
✅ Homepage with hero section
✅ Services overview
✅ Glassmorphism effects
✅ Gradient animations
✅ Backend API with authentication
✅ MongoDB database models
✅ Error handling middleware
✅ Rate limiting
✅ Security headers

## 🔄 Next Steps

- [ ] Add more service pages
- [ ] Implement blog functionality
- [ ] Add case studies section
- [ ] Create admin dashboard
- [ ] Add more interactive tools
- [ ] Implement SEO optimization
- [ ] Add analytics tracking

## 📄 License

ISC

## 👨‍💻 Development

Built with modern best practices:
- Clean code architecture
- Component reusability
- Proper error handling
- Security best practices
- Performance optimization

---

**Built with ❤️ for CloudPillers**

