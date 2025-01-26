const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = 'sdjjj%(*#YUH#)A*(*YRHHARehjehrei(*(&*'; // Use environment variable in production

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

const adminMiddleware = async (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send({ error: 'Access denied' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };
