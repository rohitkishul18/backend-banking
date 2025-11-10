const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  totalUsers: { type: Number, required: true },
  totalTransactions: { type: Number, required: true },
  totalLoan: { type: Number, required: true },
  activeAccounts: { type: Number, required: true },

  loanTrends: {
    type: [Number],
    default: []
  },
  transactionTrends: {
    type: [Number],
    default: []
  },
  loanTypeDistribution: {
    homeLoan: { type: Number, default: 0 },
    carLoan: { type: Number, default: 0 },
    businessLoan: { type: Number, default: 0 },
    personalLoan: { type: Number, default: 0 }
  },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Dashboard', dashboardSchema);
