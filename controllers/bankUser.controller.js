const BankUser = require('../models/bankingUser.model');


exports.getAllBankUsers = async (req, res) => {
        try {
            const bankUsers = await BankUser.find();
            res.status(200).json({success: true, data: bankUsers});
        } catch (error) {
            console.error('Error fetching bank users:', error);
            res.status(500).json({ message: 'Server error' });
        }
};


exports.updateBankUser = async(req,res) =>{
    try {
        const updatedBankUser = await BankUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({success: true, data: updatedBankUser});
    } catch (error) {
        console.error('Error updating bank user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}



exports.deleteBankUser = async(req,res) => {
    try {
        const deletedBankUser = await BankUser.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, data: deletedBankUser});
    } catch (error) {
        console.error('Error deleting bank user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}