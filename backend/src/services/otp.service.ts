// Generate a random 6-digit OTP
export function generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Simulate sending OTP (in real app, integrate with SMS service)
export function sendOtp(phoneNumber: string, otp: string): Promise<boolean> {
    console.log(`Sending OTP ${otp} to ${phoneNumber}`);
    // In a real application, you would integrate with an SMS service like Twilio
    return Promise.resolve(true);
}
