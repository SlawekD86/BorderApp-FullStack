const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { login, password, phoneNumber } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      login,
      password: hashedPassword,
      phoneNumber,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ login });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Zapisujemy identyfikator użytkownika w sesji
    req.session.userId = user._id;
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getCurrentUser = async (req, res) => {
  const userId = req.session.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};
