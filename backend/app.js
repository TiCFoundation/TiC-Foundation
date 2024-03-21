// Create the necessary connection details to connect to mongodb
require('dotenv').config();
const express = require('express');
const app = express(); 

const http = require('http').Server(app);
const mongoose = require('mongoose');
const User = require('./models/userModels'); 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
  .then(() => {
    console.log('Connected to MongoDB');
    insert(); 
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

async function insert() {
  try {
    await User.create({
      name: "Isaac86877",
      username: "IsaacNarteh",
      email: "FGSaac@gmail.com",
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

