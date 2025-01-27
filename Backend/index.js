const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userAuth = require("./controllers/UserData")
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000

// Connect to MongoDB
connectDB();

// app.use(cors({
//   origin : "https://sustainable-dev.vercel.app/UserPage",
//   methods : ["GET","POST","PUT","DELETE"],
//   allowedHeaders : ['Content-Type,Authorization']
// }))

app.use(cors({
  origin : "http://localhost:3000",
  methods : ["GET","POST","PUT","DELETE"],
  allowedHeaders : ['Content-Type,Authorization']
}))

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use("/v1",userAuth)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});