const express = require('express');
const contactRoutes = require('./contact');
const assessmentRoutes = require('./assessment');
const blogRoutes = require('./blog');
const newsletterRoutes = require('./newsletter');
const adminRoutes = require('./admin');
const settingsRoutes = require('./settings');
const homepageRoutes = require('./homepage');
const faqRoutes = require('./faq');
const servicesRoutes = require('./services');
const testimonialsRoutes = require('./testimonials');
const teamRoutes = require('./team');
const pricingRoutes = require('./pricing');
const seoRoutes = require('./seo');

const router = express.Router();

router.use('/contact', contactRoutes);
router.use('/assessment', assessmentRoutes);
router.use('/blog', blogRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/admin', adminRoutes);
router.use('/settings', settingsRoutes);
router.use('/homepage', homepageRoutes);
router.use('/faq', faqRoutes);
router.use('/services', servicesRoutes);
router.use('/testimonials', testimonialsRoutes);
router.use('/team', teamRoutes);
router.use('/pricing', pricingRoutes);
router.use('/seo', seoRoutes);

module.exports = router;

