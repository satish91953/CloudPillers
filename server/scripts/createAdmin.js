const dotenv = require('dotenv');
const connectDB = require('../config/database');
const User = require('../models/User');

// Load env vars
dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    const { name, email, password } = {
      name: process.argv[2] || 'Admin User',
      email: process.argv[3] || 'admin@cloudpillers.com',
      password: process.argv[4] || 'admin123456',
    };

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('❌ Admin user already exists with this email:', email);
      process.exit(1);
    }

    // Create admin user
    const user = await User.create({
      name,
      email,
      password,
      role: 'admin',
    });

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', user.email);
    console.log('👤 Name:', user.name);
    console.log('🔑 Role:', user.role);
    console.log('\n💡 You can now login at: http://localhost:3001/admin/login');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  }
};

createAdmin();

