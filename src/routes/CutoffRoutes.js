const express = require('express');
const router = express.Router();

const {
  viewReimbursementsController,
  addController,
} = require('../controllers/CutoffController');
const roleAuthentication = require('../middlewares/RoleAuthentication');

router.get(
  '/:id/reimbursements',
  roleAuthentication(['hr']),
  viewReimbursementsController
);
router.post('/', roleAuthentication(['hr']), addController);

module.exports = router;
