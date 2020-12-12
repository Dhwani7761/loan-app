let AppliedLoan = require('../models/appliedLoan.model');
let helper = require('../Helper/common.helper')
module.exports = {
  applyLoan: (req, res) => {
    AppliedLoan.create(req.body)
      .then(helper.respondAsJSON(res))
      .catch(helper.handleError(res));
  },
  deleteLoanById: (req, res) => {
    AppliedLoan.find({ _id: req.body.loanId })
      .then(obj => {
        if (obj.length === 0) {
          res.send("Loan doesnot exist!");
        }
        else {
          AppliedLoan.deleteOne({ _id: req.body.loanId })
            .then(helper.respondAsJSON(res))
            .catch(helper.handleError(res));
        }
      })
  },
  getLoanByUserId: (req, res) => {
    AppliedLoan.findOne({ userId: req.body.userId })
      .then(obj => {
        if (obj) {
          res.send(obj);
        }
        else {
          res.send("No loan exist for this user")
        }
      })
      .catch(helper.handleError(res));
  },
}