const transaction = require('../models/transaction.model');


exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await transaction.find().sort({ createdAt: -1 });
        res.status(200).json({success: true, data: transactions});
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Server error' });
    }
}