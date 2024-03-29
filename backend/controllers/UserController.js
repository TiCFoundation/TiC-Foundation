// UserController.js

const User = require('../models/User');

const UserController = {
    registerUser: async (req, res) => {
        try {
            const { email, password, role } = req.body;
            
            // Check if the email is already registered
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            // Create a new user instance
            const newUser = new User({ email, password, role });

            // Save the user to the database
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Error registering user' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Error fetching user data:', error);
            res.status(500).json({ message: 'Error fetching user data' });
        }
    }
};

module.exports = UserController;
