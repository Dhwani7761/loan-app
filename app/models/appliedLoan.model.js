'use strict'

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;
let autopopulate = require('mongoose-autopopulate');
let paginate = require('mongoose-paginate');

let AppliedLoan = new Schema({
    applicantName: String,
    address: String,
    contact: String,
    email: String,
    amount: Number,
    monthlyInstallment: Number,
    startDate: Date,
    endDate: Date,
    type: String, //fixed floating
    loanType: String,
    userId: String
},
    {
        timestamps: true
    })

AppliedLoan.plugin(paginate);
AppliedLoan.plugin(autopopulate);

module.exports = mongoose.model('AppliedLoan', AppliedLoan);