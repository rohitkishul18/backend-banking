const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.route');
const dashboardRoutes = require('./routes/dashboard.routes');
const bankUserRoutes = require('./routes/bankUser.route'); 
const accountRoutes = require('./routes/account.route'); 
const transactionRoutes = require('./routes/transaction.routes');  

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server running fine 🚀');
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/bankUser', bankUserRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/transaction',transactionRoutes);

// Connect DB
connectDB();

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
