const express = require('express');
const {
  calculatePoints,
  configureTax,
} = require('../controllers/FlexpointController');
const router = express.Router();

router.get('/', calculatePoints);
router.post('/', configureTax);

module.exports = router;
