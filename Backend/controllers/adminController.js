const Request = require('../models/Request');

exports.getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('user', 'username email');
    res.send(requests);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.approveRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(
      req.params.id, 
      { status: 'approved' }, 
      { new: true }
    );

    if (!request) {
      return res.status(404).send();
    }

    res.send(request);
  } catch (error) {
    res.status(400).send(error);
  }
};