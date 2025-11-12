const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  holderName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Savings", "Current", "Fixed Deposit"],
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });


module.exports = mongoose.model('Account', accountSchema);

