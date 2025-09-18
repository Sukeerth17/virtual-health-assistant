import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Virtual Health Assistant
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your personal AI-powered health companion for 24/7 medical assistance and support.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">🤖</div>
                        <h3 className="text-2xl font-semibold mb-4">AI Chat Assistant</h3>
                        <p className="text-gray-600 mb-6">
                            Get instant health advice and answers to your medical questions from our AI assistant.
                        </p>
                        <Link 
                            to="/login" 
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Start Chatting
                        </Link>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">🏥</div>
                        <h3 className="text-2xl font-semibold mb-4">Find Hospitals</h3>
                        <p className="text-gray-600 mb-6">
                            Locate nearby hospitals and healthcare facilities with detailed information and ratings.
                        </p>
                        <Link 
                            to="/hospital" 
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Find Hospitals
                        </Link>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">📹</div>
                        <h3 className="text-2xl font-semibold mb-4">Video Consultation</h3>
                        <p className="text-gray-600 mb-6">
                            Connect with healthcare professionals through secure video calls for remote consultations.
                        </p>
                        <Link 
                            to="/video-call" 
                            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Start Call
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
