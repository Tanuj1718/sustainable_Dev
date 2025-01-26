const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/request', 
  authMiddleware, 
  upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'photos', maxCount: 10 }
  ]), 
  userController.createRequest
);

module.exports = router;