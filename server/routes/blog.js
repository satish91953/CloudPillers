const express = require('express');
const {
  getBlogPosts,
  getBlogPost,
  getAdminBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  publishBlogPost,
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Admin routes must come before :slug to avoid route conflicts
router.get('/admin', protect, authorize('admin', 'editor'), getAdminBlogPosts);
router.post('/admin', protect, authorize('admin', 'editor'), createBlogPost);
router.put('/admin/:id', protect, authorize('admin', 'editor'), updateBlogPost);
router.delete('/admin/:id', protect, authorize('admin'), deleteBlogPost);
router.post('/admin/:id/publish', protect, authorize('admin', 'editor'), publishBlogPost);

// Public routes
router.get('/', getBlogPosts);
router.get('/:slug', getBlogPost);


module.exports = router;

