const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



const paypal = require('@paypal/checkout-server-sdk');

function environment() {
  let clientId = process.env.PAYPAL_CLIENT_ID;
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  return new paypal.core.SandboxEnvironment(clientId, clientSecret);
}

function client() {
  return new paypal.core.PayPalHttpClient(environment());
}

app.post('/donate', async (req, res) => {
    const { amount, currency = 'USD', paymentMethod } = req.body;
  
    // Validate the donation amount and payment method
    if (!amount || amount <= 0 || !paymentMethod) {
      return res.status(400).send({ error: 'Invalid donation amount or payment method.' });
    }
  

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString(),
        },
      }],
    });
  
    try {
      const response = await client().execute(request);
  
      res.send({ status: 'success', order: response.result });
    } catch (error) {
      // Handle errors
      res.status(500).send({ error: error.message });
    }
  });
  