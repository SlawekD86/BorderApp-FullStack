const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const connectToDB = require('./db');
const helmet = require('helmet');
const session = require('express-session');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

connectToDB().then(() => {
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

  if (process.env.NODE_ENV !== 'production') {
    app.use(
      cors({
        origin: ['http://localhost:3000'],
        credentials: true,
      })
    );
  } else {
    app.use(cors());
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
    }
  }));

  app.use(express.static(path.join(__dirname, '/client/build')));
  app.use(express.static(path.join(__dirname, '/public')));

  app.use('/api', require('./routes/ads.routes'));
  app.use('/api/auth', require('./routes/auth.routes'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

  app.use((req, res) => {
    res.status(404).send('Not found..');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
