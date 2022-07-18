const express = require('express');
const {
  printController,
  submitController,
  fileController,
  viewController,
  approveController,
} = require('../controllers/ReimbursementController');
const {
  addItemController,
  removeItemController,
  configureMinAmount,
} = require('../controllers/ReimbursementItemController');
const roleAuthentication = require('../middlewares/RoleAuthentication');
const router = express.Router();

router.get('/:id/items/:itemsId', roleAuthentication(['hr']), viewController);
router.post('/:id/items', addItemController);
router.put('/:id/items', roleAuthentication(['hr']), approveController);
router.delete('/:id/items/:itemsId', removeItemController);
router.post('/', fileController);
router.put('/:id', roleAuthentication(['hr']), configureMinAmount);

router.get('/:id/print', printController);
router.post('/:id/submit', submitController);

module.exports = router;
