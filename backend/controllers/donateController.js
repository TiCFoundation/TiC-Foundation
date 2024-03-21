const Donation = require('../models/donationModel');

const handleDonate = async (formData) => {
  try {
    const donation = new Donation(formData);
    await donation.save();
    return { success: true, message: 'Thank you for your donation!' };
  } catch (error) {
    console.error('Donation error:', error);
    return { success: false, message: 'An error occurred. Please try again later.' };
  }
};

module.exports = { handleDonate };
