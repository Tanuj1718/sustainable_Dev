const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/requests', 
  authMiddleware, 
  adminMiddleware, 
  adminController.getAllRequests
);

router.patch('/request/:id/approve', 
  authMiddleware, 
  adminMiddleware, 
  adminController.approveRequest
);

module.exports = router;
