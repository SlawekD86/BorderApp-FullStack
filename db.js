const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const NODE_ENV = process.env.NODE_ENV;
    let dbUri = '';

    if (NODE_ENV === 'production') 
      dbUri = process.env.DB_URL;
    else
      dbUri = 'mongodb://localhost:27017/InfoBoard';
   
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    // on success
    db.once('open', () => {
      console.log('Connected to the database');
    });

    // on error
    db.on('error', (err) => console.log('Error ' + err));
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = connectToDB;
