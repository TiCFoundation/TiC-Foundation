// donationModel.js

const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    amount: { type: Number },
    paymentMethod: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    country: { type: String },
    frequency: { type: String }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
