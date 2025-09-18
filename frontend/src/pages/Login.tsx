import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const Login = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleRequestOtp = async () => {
        try {
            const response = await fetch(`${config.apiUrl}${config.endpoints.auth.requestOtp}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            });
            const data = await response.json();
            if (response.ok) {
                setOtpSent(true);
                setMessage(data.message);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Failed to send OTP. Please try again.');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await fetch(`${config.apiUrl}${config.endpoints.auth.verifyOtp}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, otp }),
            });
            const data = await response.json();
            if (response.ok) {
                navigate('/');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Failed to verify OTP. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
                {!otpSent ? (
                    <div className="space-y-4">
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleRequestOtp}
                            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Request OTP
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-center text-gray-600">Enter the OTP sent to your phone.</p>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleVerifyOtp}
                            className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}
                {message && <p className="text-center text-red-500 mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default Login;
