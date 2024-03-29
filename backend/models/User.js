const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    address: String,
    isDonor : Boolean,
    role: String,
    // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);


