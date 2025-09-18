import { useState, useRef, useEffect } from 'react';

const VideoCall = () => {
    const [isCallActive, setIsCallActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [callDuration, setCallDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    <style>
        {
.video-call-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
}

.video-call-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.pre-call-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  width: 100%;
  animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.pre-call-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1e40af;
  margin-bottom: 1rem;
}

.pre-call-description {
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #475569;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.25rem;
}

.start-call-btn {
  background: linear-gradient(135deg, #10b981 0%, #047857 100%);
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.4);
}

.start-call-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px -4px rgba(16, 185, 129, 0.5);
}

.video-call-interface {
  width: 100%;
  max-width: 800px;
  position: relative;
}

.video-area {
  background: #000;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.video-stream {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.call-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
        }
        
    </style>

    useEffect(() => {
        if (isCallActive) {
            intervalRef.current = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isCallActive]);

    const startCall = () => {
        setIsCallActive(true);
        setCallDuration(0);
        // In a real app, you would initialize WebRTC here
    };

    const endCall = () => {
        setIsCallActive(false);
        setCallDuration(0);
        // In a real app, you would end the WebRTC call here
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // In a real app, you would toggle audio track here
    };

    const toggleVideo = () => {
        setIsVideoOn(!isVideoOn);
        // In a real app, you would toggle video track here
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {!isCallActive ? (
                    <div className="text-center">
                        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Video Consultation</h1>
                            <p className="text-gray-600 mb-8">
                                Connect with a healthcare professional for a secure video consultation.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-center space-x-2 text-gray-600">
                                    <span>🔒</span>
                                    <span>End-to-end encrypted</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2 text-gray-600">
                                    <span>👨‍⚕️</span>
                                    <span>Licensed professionals</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2 text-gray-600">
                                    <span>⏰</span>
                                    <span>Available 24/7</span>
                                </div>
                            </div>
                            
                            <button
                                onClick={startCall}
                                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Start Video Call
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        {/* Video Area */}
                        <div className="bg-black rounded-xl overflow-hidden mb-4 relative">
                            <video
                                ref={videoRef}
                                className="w-full h-96 object-cover"
                                autoPlay
                                muted={isMuted}
                                playsInline
                            />
                            
                            {/* Call Duration */}
                            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                                {formatTime(callDuration)}
                            </div>
                            
                            {/* Connection Status */}
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded text-sm">
                                Connected
                            </div>
                        </div>
                        
                        {/* Controls */}
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={toggleMute}
                                className={`p-4 rounded-full ${
                                    isMuted ? 'bg-red-600' : 'bg-gray-600'
                                } text-white hover:opacity-80 transition-opacity`}
                            >
                                {isMuted ? '🔇' : '🎤'}
                            </button>
                            
                            <button
                                onClick={toggleVideo}
                                className={`p-4 rounded-full ${
                                    isVideoOn ? 'bg-gray-600' : 'bg-red-600'
                                } text-white hover:opacity-80 transition-opacity`}
                            >
                                {isVideoOn ? '📹' : '📷'}
                            </button>
                            
                            <button
                                onClick={endCall}
                                className="p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                            >
                                📞
                            </button>
                        </div>
                        
                        {/* Call Info */}
                        <div className="text-center mt-4 text-white">
                            <p className="text-lg">Dr. Sarah Johnson</p>
                            <p className="text-gray-300">General Practitioner</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoCall;
