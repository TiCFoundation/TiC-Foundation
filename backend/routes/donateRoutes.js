const express = require('express');
const router = express.Router();
const { handleDonate } = require('../controllers/donateController'); // Adjust the path as per your directory structure


// POST /donate
router.post('/donate', async (req, res) => {
  const formData = req.body; // Assuming the form data is sent in the request body
  const result = await handleDonate(formData);
  
  if (result.success) {
    res.status(200).json({ success: true, message: result.message });
  } else {
    res.status(500).json({ success: false, message: result.message });
  }
});

module.exports = router;
