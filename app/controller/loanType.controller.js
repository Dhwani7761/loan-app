let helper = require('../Helper/common.helper.js');
const LoanType = require('../models/loanType.model');


module.exports = {
  getAllLoan: (req, res) => {
    LoanType.find({})
      .then(helper.respondAsJSON(res))
      .catch(helper.handleError(res));
  },
  getLoan: (req, res) => {
    LoanType.find({ _id: req.body.loanId })
      .then(helper.respondAsJSON(res))
      .catch(helper.handleError(res));
  },
  deleteLoanType: (req, res) => {
    LoanType.deleteOne({_id: req.body.loanId})
      .then(helper.respondAsJSON(res))
      .catch(helper.handleError);
  },
  addLoanType : (req,res)=>{
    LoanType.create(req.body)
        .then(helper.respondAsJSON(res))
        .catch(helper.handleError(res));
  }
}