const User = require('../models/user.model');

const signUp = async (req, res) => {
    try {
        const { name, password } = req.body;
        // max 6 digit
        const accountNumber = Math.floor(100000 + Math.random() * 900000);
        const amount = 1000;
        const user = await User.create({
            name,
            accountNumber,
            password,
            amount,
        });

        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const login = async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

module.exports = {
    signUp,
    login,
};
