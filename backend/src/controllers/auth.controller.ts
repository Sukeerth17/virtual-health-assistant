import { Request, Response } from 'express';
import { query } from '../db/db';
import { generateOtp, sendOtp } from '../services/otp.service';

export const requestOtp = async (req: Request, res: Response) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        const otp = generateOtp();

        // Save OTP to the database (in a real app, this would be a secure, time-limited token)
        await query('INSERT INTO users(phone_number, otp) VALUES($1, $2) ON CONFLICT (phone_number) DO UPDATE SET otp = $2', [phoneNumber, otp]);

        // In a real app, this would send an SMS
        await sendOtp(phoneNumber, otp);

        res.status(200).json({ message: 'OTP sent successfully.' });
    } catch (error) {
        console.error('Error requesting OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP.' });
    }
};

export const verifyOtp = async (req: Request, res: Response) => {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
        return res.status(400).json({ message: 'Phone number and OTP are required.' });
    }

    try {
        const result = await query('SELECT otp FROM users WHERE phone_number = $1', [phoneNumber]);
        const user = result.rows[0];

        if (user && user.otp === otp) {
            // OTP is correct, log the user in. In a real app, you'd generate a JWT token here.
            res.status(200).json({ message: 'Login successful.', token: 'fake-jwt-token-for-now' });
        } else {
            res.status(401).json({ message: 'Invalid OTP.' });
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Failed to verify OTP.' });
    }
};
