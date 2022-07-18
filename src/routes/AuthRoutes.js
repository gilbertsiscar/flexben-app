const express = require('express');
const {
  login,
  logout,
  loginDetails,
} = require('../controllers/AuthController');
const { tokenAuthentication } = require('../middlewares/TokenAuthentication');

const router = express.Router();

router.post('/login', login);
router.post('/logout', tokenAuthentication, logout);
router.get('/login/details', tokenAuthentication, loginDetails);

module.exports = router;
