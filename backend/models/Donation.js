// server/models/Donation.js

const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  country: { type: String },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  frequency: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
