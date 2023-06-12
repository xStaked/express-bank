const User = require('../models/user.model');

const signUp = async (req, res) => {
    try {
        const { name, password } = req.body;
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
        const { accountNumber, password } = req.body;
        const user = await User.findOne({
            where: {
                accountNumber,
                password,
                status: true,
            },
        });

        if (!user) {
            res.status(400).json({
                status: 'error',
                message: 'Invalid account number or password',
            });
        }
        if (user.password === password) {
            res.status(200).json({
                status: 'success',
                message: 'Login successful',
                data: {
                    user,
                },
            });
        }
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
