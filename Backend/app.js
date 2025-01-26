// //reference file


// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 2000;

// // MongoDB Connection
// const connectDB = async () => {
//     try {
//         // Connecting to MongoDB
//         const connectionInstance = await mongoose.connect(`mongodb+srv://tanuj:0835tanuj@cluster0.vmscwdb.mongodb.net/Sustain`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(
//             `\n MongoDB connected! DB host: ${connectionInstance.connection.host}`
//         );
//     } catch (error) {
//         console.error("MongoDB connection error:", error.message);
//         process.exit(1); // Exit process with failure
//     }
// };
// connectDB();

// // Document Schema
// const RequestSchema = new mongoose.Schema({
//   area: { type: String, required: true },
//   documents: {
//     videos: [{ type: String }],
//     photos: [{ type: String }],
//     summary: { type: String }
//   },
//   status: { 
//     type: String, 
//     enum: ['pending', 'approved', 'rejected'], 
//     default: 'pending' 
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// const Request = mongoose.model('Request', RequestSchema);

// // File Upload Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type'));
//     }
//   }
// });

// // Middleware
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// // Create Request Endpoint
// app.post('/api/requests', 
//   upload.fields([
//     { name: 'videos', maxCount: 5 },
//     { name: 'photos', maxCount: 10 }
//   ]), 
//   async (req, res) => {
//     try {
//       const { area, summary } = req.body;
//       console.log(req.body);
//       const videos = req.files['videos'] ? req.files['videos'].map(file => file.path) : [];
//       const photos = req.files['photos'] ? req.files['photos'].map(file => file.path) : [];

//       const request = new Request({
//         area,
//         documents: {
//           videos,
//           photos,
//           summary
//         }
//       });

//       await request.save();
//       res.status(201).send(request);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   }
// );

// // Get All Requests Endpoint
// app.get('/api/requests', async (req, res) => {
//   try {
//     const requests = await Request.find();
//     res.send(requests);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Approve Request Endpoint
// app.patch('/api/requests/:id/approve', async (req, res) => {
//   try {
//     const request = await Request.findByIdAndUpdate(
//       req.params.id, 
//       { status: 'approved' }, 
//       { new: true }
//     );

//     if (!request) {
//       return res.status(404).send();
//     }

//     res.send(request);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });