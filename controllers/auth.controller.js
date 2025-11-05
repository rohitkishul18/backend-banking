const { sendEmail } = require('../utils/email.service');
const User = require('../models/user.model');
const Otp = require('../models/otp.model');

exports.login = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found. Please register first.' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Delete old OTP (if any)
    await Otp.deleteMany({ email });

    // Save new OTP
    await Otp.create({ email, otp });

    // Send email
    await sendEmail(email, 'Your OTP Code', `Your login OTP is: ${otp}`);

    return res.status(200).json({ message: 'OTP sent successfully to your email address' });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({ message: 'Server error: ' + error.message });
  }
};


exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found. Please register first.' });
    }

    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord) {
      return res.status(400).json({ message: 'OTP expired or not found. Please request again.' });
    }

    if (otpRecord.otp !== otp) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }

    // Delete OTP after verification
    await Otp.deleteOne({ email });

    return res.status(200).json({ success: true, message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return res.status(500).json({ message: 'Server error: ' + error.message });
  }
};