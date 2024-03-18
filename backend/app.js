
// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// require('dotenv').config();

const express = require('express');
const app = express(); 

const http = require('http').Server(app);
const mongoose = require('mongoose');
const User = require('./models/userModels'); 

// mongoose.connect('mongodb+srv://isaackwamenarteh21:YQWUD5skkPdOtHb1@cluster0.eolx1p4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb+srv://isaackwamenarteh21:YQWUD5skkPdOtHb1@cluster0.eolx1p4.mongodb.net/')

  .then(() => {
    console.log('Connected to MongoDB');
    insert(); // Call insert function after successful connection
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

async function insert() {
  try {
    await User.create({
      name: "Isaac",
      username: "IsaacNarteh",
      email: "Ysaac@gmail.com",
      password: "1234567890"
    });
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

http.listen(3003, function () {
  console.log("Tic Foundation server is running");
});

// const port = process.env.PORT || 3001;




// const app = express();
// const port = process.env.PORT || 3001;

// app.use(bodyParser.json());

// // MongoDB connection setup
// const uri = process.env.MONGODB_URI; // Access MongoDB URI from .env
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// let db;

// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     db = client.db();
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToMongoDB();

// // Define your routes here
// app.post('/donate', async (req, res) => {
//   // Handle donation endpoint logic, including MongoDB integration
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// module.exports = app;
