const Contact = require('../models/Contact');
const { sendContactNotification, sendConfirmationEmail } = require('../utils/emailService');

// @desc    Create contact submission
// @route   POST /api/v1/contact
// @access  Public
exports.createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);

    // Send email notifications (non-blocking)
    Promise.all([
      sendContactNotification(contact).catch(err => console.error('Failed to send admin notification:', err)),
      sendConfirmationEmail(contact.email, 'contact', contact.name).catch(err => console.error('Failed to send confirmation:', err)),
    ]).catch(err => console.error('Email sending error:', err));

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contacts
// @route   GET /api/v1/admin/contacts
// @access  Private/Admin
exports.getContacts = async (req, res, next) => {
  try {
    const { filter, page = 1, limit = 10 } = req.query;
    
    // Calculate date filter
    let dateFilter = {};
    
    if (filter) {
      const now = new Date();
      
      switch (filter) {
        case 'today':
          const todayStart = new Date(now);
          todayStart.setHours(0, 0, 0, 0);
          dateFilter.createdAt = { $gte: todayStart };
          break;
        case 'yesterday':
          const yesterdayStart = new Date(now);
          yesterdayStart.setDate(yesterdayStart.getDate() - 1);
          yesterdayStart.setHours(0, 0, 0, 0);
          const yesterdayEnd = new Date(yesterdayStart);
          yesterdayEnd.setHours(23, 59, 59, 999);
          dateFilter.createdAt = {
            $gte: yesterdayStart,
            $lte: yesterdayEnd
          };
          break;
        case 'week':
          const weekAgo = new Date(now);
          weekAgo.setDate(weekAgo.getDate() - 7);
          dateFilter.createdAt = { $gte: weekAgo };
          break;
        case 'month':
          const monthAgo = new Date(now);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          dateFilter.createdAt = { $gte: monthAgo };
          break;
        case '3months':
          const threeMonthsAgo = new Date(now);
          threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
          dateFilter.createdAt = { $gte: threeMonthsAgo };
          break;
        case '6months':
          const sixMonthsAgo = new Date(now);
          sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
          dateFilter.createdAt = { $gte: sixMonthsAgo };
          break;
        case 'year':
          const yearAgo = new Date(now);
          yearAgo.setFullYear(yearAgo.getFullYear() - 1);
          dateFilter.createdAt = { $gte: yearAgo };
          break;
        default:
          break;
      }
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const query = Object.keys(dateFilter).length > 0 ? dateFilter : {};
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    const total = await Contact.countDocuments(query);

    res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single contact
// @route   GET /api/v1/admin/contacts/:id
// @access  Private/Admin
exports.getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact status
// @route   PUT /api/v1/admin/contacts/:id/status
// @access  Private/Admin
exports.updateContactStatus = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

