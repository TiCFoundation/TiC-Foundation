const express = require('express');
const router = express.Router();
const { handleDonate } = require('../controllers/donateController');

// POST /donate
router.post('/donate', async (req, res) => {
  try {
    const formData = req.body; // Assuming the form data is sent in the request body
    const result = await handleDonate(formData);
  
    if (result.success) {
      res.status(200).json({ success: true, message: result.message });
    } else {
      res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
  }
});

module.exports = router;
