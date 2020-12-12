'use strict';

let mongoose = require('bluebird').promisifyAll(require('mongoose'));
let Schema = mongoose.Schema;
let autopopulate = require('mongoose-autopopulate');
let paginate = require('mongoose-paginate');

let LoanType = new Schema({
    loanName: String,
    Interest: Number
},
    {
        timestamps: true
    })

LoanType.plugin(autopopulate);
LoanType.plugin(paginate);

module.exports = mongoose.model('LoanType', LoanType);