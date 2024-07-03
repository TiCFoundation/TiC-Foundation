const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.registerUser);
router.get('/user/:userId', UserController.getUserById);

module.exports = router;
