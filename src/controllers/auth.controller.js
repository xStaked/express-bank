const User = require('../models/user.model');

const signUp = async (req, res) => {
    try {
        const { name, accountNumber, password, amount, status } = req.body;
        const user = await User.create({
            name,
            accountNumber,
            password,
            amount,
            status,
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

module.exports = {
    signUp,
};
