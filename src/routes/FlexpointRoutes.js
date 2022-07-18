const express = require('express');
const {
  calculatePoints,
  configureTax,
} = require('../controllers/FlexpointController');
const router = express.Router();

router.get('/', calculatePoints);
router.put('/', configureTax);

module.exports = router;
