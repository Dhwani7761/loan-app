let express = require('express');
let router = express.Router();
let loanTypeController  = require('../controller/loanType.controller');

router.post('/addLoanType',loanTypeController.addLoanType);
router.delete('/deleteLoanType',loanTypeController.deleteLoanType);
router.get('/getLoan/',loanTypeController.getLoan);
router.get('/getAllLoan',loanTypeController.getAllLoan);

module.exports = router;