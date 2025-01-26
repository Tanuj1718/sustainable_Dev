const Request = require('../models/Request');
const upload = require('../middleware/uploadMiddleware');

exports.createRequest = async (req, res) => {
  try {
    const { area, summary } = req.body;
    console.log(req.body)
    const videos = req.files['videos'] ? req.files['videos'].map(file => file.path) : [];
    const photos = req.files['photos'] ? req.files['photos'].map(file => file.path) : [];

    const request = new Request({
      user: req.user._id,
      area,
      documents: {
        videos,
        photos,
        summary
      }
    });

    await request.save();
    res.status(201).send(request);
  } catch (error) {
    res.status(400).send(error);
  }
};