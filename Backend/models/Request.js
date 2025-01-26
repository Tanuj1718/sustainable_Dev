const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  area: { type: String, required: true },
  documents: {
    videos: [{ type: String }],
    photos: [{ type: String }],
    summary: { type: String }
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);
