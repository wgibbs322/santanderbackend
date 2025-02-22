// controllers/transactionController.js
import Transaction from '../model/Transactionmodel.js';

export const addTransaction = async (req, res) => {
    const { description, amount, status } = req.body; // Destructure the request body

    try {
        // Create a new transaction
        const newTransaction = new Transaction({
            description,
            amount, // Store the amount as a numeric value
            status,
        });

        // Save the transaction to the database
        await newTransaction.save();

        // Return a success response
        res.status(201).json({
            message: 'Transaction added successfully',
            transaction: newTransaction
        });
    } catch (error) {
        // If an error occurs, return an error response
        console.error('Error adding transaction:', error);
        res.status(500).json({
            error: 'Failed to add transaction'
        });
    }
};

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ date: -1 }); // Most recent first
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};
