const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  title:{type:String ,required: true},
})

module.exports = mongoose.model('Customers',CustomerSchema);