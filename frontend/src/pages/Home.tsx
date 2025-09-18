import { Link } from 'react-router-dom';
<style>
    {
        .home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.hero-section {
  position: relative;
  z-index: 1;
  padding: 4rem 1rem;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 
    0 32px 64px -12px rgba(0, 0, 0, 0.25),
    0 0 40px rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: block;
  animation: float 6s ease-in-out infinite;
}

.service-card:nth-child(2) .service-icon {
  animation-delay: -2s;
}

.service-card:nth-child(3) .service-icon {
  animation-delay: -4s;
}

.service-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.service-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.service-button {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  position: relative;
  overflow: hidden;
}

.service-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.service-button:hover::before {
  left: 100%;
}

.btn-chat {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
}

.btn-hospital {
  background: linear-gradient(135deg, #10b981 0%, #047857 100%);
  color: white;
}

.btn-video {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
}

.service-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
}
    }
</style>

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
