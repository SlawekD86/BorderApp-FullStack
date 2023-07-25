const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs');

exports.register = async (req, res) => {
  try {
    const { login, password, telephone } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string' &&
      telephone &&
      typeof telephone === 'string' &&
      req.file &&
      ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'].includes(fileType) &&
      fileType !== 'unknown'
    ) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
        res.status(409).json({ message: 'User with this login already exists' });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          login,
          password: hashedPassword,
          avatar: req.file.filename,
          telephone,
        });
        res.status(201).json({ message: `User created: ${user.login}` });
      }
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login && typeof login === 'string' && password && typeof password === 'string') {
      const user = await User.findOne({ login });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: 'Login or password are incorrect' });
      } else {
        req.session.user = { login: user.login, id: user.id };
        res.status(200).json({ message: 'Login successful' });
      }
    } else {
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  res.json(req.session.user);
};
