const config = {
  apiUrl: import.meta.env.VITE_API_URL || '',
  endpoints: {
    auth: {
      requestOtp: '/api/auth/request-otp',
      verifyOtp: '/api/auth/verify-otp'
    },
    chat: {
      send: '/api/chat/send'
    },
    health: {
      check: '/api/health/check'
    }
  }
};

export default config;
