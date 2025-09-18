"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = exports.requestOtp = void 0;
const db_1 = require("../db/db");
const otp_service_1 = require("../services/otp.service");
const requestOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }
    try {
        const otp = (0, otp_service_1.generateOtp)();
        // Save OTP to the database (in a real app, this would be a secure, time-limited token)
        yield (0, db_1.query)('INSERT INTO users(phone_number, otp) VALUES($1, $2) ON CONFLICT (phone_number) DO UPDATE SET otp = $2', [phoneNumber, otp]);
        // In a real app, this would send an SMS
        yield (0, otp_service_1.sendOtp)(phoneNumber, otp);
        res.status(200).json({ message: 'OTP sent successfully.' });
    }
    catch (error) {
        console.error('Error requesting OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP.' });
    }
});
exports.requestOtp = requestOtp;
const verifyOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
        return res.status(400).json({ message: 'Phone number and OTP are required.' });
    }
    try {
        const result = yield (0, db_1.query)('SELECT otp FROM users WHERE phone_number = $1', [phoneNumber]);
        const user = result.rows[0];
        if (user && user.otp === otp) {
            // OTP is correct, log the user in. In a real app, you'd generate a JWT token here.
            res.status(200).json({ message: 'Login successful.', token: 'fake-jwt-token-for-now' });
        }
        else {
            res.status(401).json({ message: 'Invalid OTP.' });
        }
    }
    catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Failed to verify OTP.' });
    }
});
exports.verifyOtp = verifyOtp;
