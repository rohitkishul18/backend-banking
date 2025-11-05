const express = require('express'); 
const router = express.Router();
const { login , verifyOtp } = require('../controllers/auth.controller');



router.post('/',login);
router.post('/verify-otp', verifyOtp);

module.exports = router