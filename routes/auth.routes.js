const express = require('express');
const router = express.Router();
const imageUpload = require('../utils/imageUpload');

const AuthController = require('../controller/Auth.controller');

router.post('/register', imageUpload.single('avatar'), AuthController.register);
router.post('/login', AuthController.login);
router.get('/user', AuthController.getUser);
router.delete('/logout', AuthController.logout);

module.exports = router;
