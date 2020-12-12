let express = require('express');
let router = express.Router();
let appliedLoanController = require('../controller/appliedLoan.controller');

router.post('/applyLoan', appliedLoanController.applyLoan);
router.delete('/deleteLoanById', appliedLoanController.deleteLoanById);
router.get('/getLoanByUserId', appliedLoanController.getLoanByUserId);

module.exports = router;