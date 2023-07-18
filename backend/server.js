const express = require('express');
const db = require('./db');
const helmet = require('helmet');
const adsRoutes = require('./src/routes/ads.routes');
const authRoutes = require('./src/routes/auth.routes');
const errorHandler = require('./src/utils/errorHandler');
const multer = require('multer');
const path = require('path');
const sessionMiddleware = require('./src/middleware/session.middleware');
const checkAuthentication = require('./src/middleware/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(sessionMiddleware); 

// MongoDB connection
db();

//  multera set for image
const upload = multer({ dest: 'uploads/' });

// Routes
app.use('/api/ads', adsRoutes);
app.use('/api/auth', authRoutes);

// Error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});