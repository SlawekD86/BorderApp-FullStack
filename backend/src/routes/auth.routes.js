const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/user', authController.getCurrentUser);

module.exports = router;
