const express = require('express');
const router = express.Router();

const {
  viewReimbursementsController,
} = require('../controllers/CutoffController');
const roleAuthentication = require('../middlewares/RoleAuthentication');

router.get(
  '/:id/reimbursements',
  roleAuthentication(['hr']),
  viewReimbursementsController
);

module.exports = router;
