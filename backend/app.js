// Create the necessary connection details to connect to MongoDB
require('dotenv').config();
const express = require('express');
const donateRoutes = require('./routes/donateRoutes');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const User = require('./models/donationModel');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');


// Middleware
app.use(cors());
app.use(bodyParser.json());

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

app.use(express.json());

// Routes
app.use('/api/users', UserRoutes);
app.use(donateRoutes);
app.use('/api/donations', donateRoutes);
app.use('/api/users', UserRoutes);

async function insert() {
    try {
        await User.create({
            name: "Isaac86877",
            username: "IsaacNarteh",
            email: "Saac@gmail.com",
            password: "1234567890",
            phoneNumber: "+233248576987",
            address: "No 12, Street Name, City",
            isDonor: false,
            role: 'admin'
        });
        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

http.listen(3003, function () {
    console.log("Tic Foundation server is running");
});
