
'use strict';

let loanTypeRoutes = require('./app/routes/loanType.routes');
let appliedLoanRoutes = require('./app/routes/appliedLoan.routes');

module.exports = (app) => {
  app.use('/loan/loanType', loanTypeRoutes);
  app.use('/loan/appliedLoan',appliedLoanRoutes);
};