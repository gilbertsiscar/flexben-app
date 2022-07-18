const express = require('express');
const { login, logout } = require('../controllers/AuthController');
const { tokenAuthentication } = require('../middlewares/TokenAuthentication');

const router = express.Router();

router.post('/login', login);
router.post('/logout', tokenAuthentication, logout);

module.exports = router;
