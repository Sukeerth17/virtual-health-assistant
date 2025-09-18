import express from 'express';
import { Request, Response } from 'express';
import { generateOtp, sendOtp } from '../services/otp.service';

const router = express.Router();

// Store OTPs temporarily (in production, use Redis or database)
const otpStore = new Map<string, { otp: string; expires: number }>();

// Request OTP endpoint
router.post('/request-otp', async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required' });
    }

    // Generate and store OTP
    const otp = generateOtp();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes
    otpStore.set(phoneNumber, { otp, expires });

    // Send OTP (simulated)
    await sendOtp(phoneNumber, otp);

    res.json({ 
      message: 'OTP sent successfully',
      phoneNumber: phoneNumber.replace(/\d(?=\d{4})/g, '*') // Mask phone number
    });
  } catch (error) {
    console.error('Error requesting OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

// Verify OTP endpoint
router.post('/verify-otp', async (req: Request, res: Response) => {
  try {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
      return res.status(400).json({ message: 'Phone number and OTP are required' });
    }

    const storedData = otpStore.get(phoneNumber);
    
    if (!storedData) {
      return res.status(400).json({ message: 'OTP not found or expired' });
    }

    if (Date.now() > storedData.expires) {
      otpStore.delete(phoneNumber);
      return res.status(400).json({ message: 'OTP expired' });
    }

    if (storedData.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // OTP is valid, remove it from store
    otpStore.delete(phoneNumber);

    res.json({ 
      message: 'OTP verified successfully',
      token: 'mock-jwt-token', // In production, generate real JWT
      user: { phoneNumber }
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'Failed to verify OTP' });
  }
});

export { router as authRoutes };
