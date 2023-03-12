const mongoose = require('mongoose');

const CustomerMessageSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    address: {type: String},
    message: {type: String},
    created_on: { type: Date, default: new Date() }
})

module.exports = mongoose.models.CustomerMessage || mongoose.model('CustomerMessage', CustomerMessageSchema);