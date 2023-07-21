const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'default_avatar.jpg',
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
