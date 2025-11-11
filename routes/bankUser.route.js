const express = require('express');
const router = express.Router();
const bankUserController = require('../controllers/bankUser.controller');

router.get('/', bankUserController.getAllBankUsers);
router.put('/:id', bankUserController.updateBankUser);
router.delete('/:id', bankUserController.deleteBankUser);

module.exports = router