import { useState, useEffect } from 'react';
<style>
    {
        .hospital-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
  position: relative;
}

.hospital-header {
  text-align: center;
  padding: 3rem 1rem;
  position: relative;
}

.hospital-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hospital-subtitle {
  color: #64748b;
  font-size: 1.125rem;
}

.hospitals-list {
  max-width: 4xl;
  margin: 0 auto;
  padding: 0 1rem;
}

.hospital-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  position: relative;
  overflow: hidden;
}

.hospital-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hospital-card:hover::before {
  opacity: 1;
}

.hospital-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-color: rgba(59, 130, 246, 0.2);
}

.hospital-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.5rem;
}

.hospital-info {
  color: #64748b;
  margin-bottom: 0.5rem;
}

.hospital-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.rating, .distance {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #475569;
}

.hospital-actions {
  display: flex;
  gap: 0.75rem;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

.btn-call {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
}

.btn-directions {
  background: linear-gradient(135deg, #10b981 0%, #047857 100%);
  color: white;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.2);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

.loading-spinner {
  width: 3rem;
  height: 3rem;
  border: 3px solid rgba(59, 130, 246, 0.2);
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Modern Color Palette */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /* Glassmorphism Colors */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-success: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --gradient-medical: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);

  /* Animation Curves */
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gradient-secondary);
}

/* Utility Classes */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 20px;
}

.animate-fade-in {
  animation: fadeIn 0.6s var(--ease-out-expo);
}

.animate-slide-up {
  animation: slideUp 0.8s var(--ease-out-expo);
}

.animate-scale-in {
  animation: scaleIn 0.5s var(--ease-out-expo);
}

.animate-glow {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.9); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

@keyframes glow {
  from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
  to { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Button Styles */
.btn-primary {
  background: var(--gradient-primary);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s var(--ease-in-out-quart);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-secondary {
  background: var(--gradient-secondary);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s var(--ease-in-out-quart);
  box-shadow: var(--shadow-md);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-success {
  background: var(--gradient-success);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s var(--ease-in-out-quart);
  box-shadow: var(--shadow-md);
}

.btn-success:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

/* Input Styles */
.modern-input {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 16px;
  transition: all 0.3s var(--ease-in-out-quart);
  backdrop-filter: blur(10px);
}

.modern-input:focus {
  outline: none;
  border-color: var(--primary-500);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  transform: translateY(-1px);
}

.modern-input::placeholder {
  color: #9ca3af;
}

/* Card Hover Effects */
.hover-card {
  transition: all 0.3s var(--ease-in-out-quart);
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}

/* Medical Icons Animation */
.medical-icon {
  font-size: 3rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.medical-icon:nth-child(2) {
  animation-delay: -1s;
}

.medical-icon:nth-child(3) {
  animation-delay: -2s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .glass-card {
    margin: 10px;
    border-radius: 16px;
  }
  
  .btn-primary,
  .btn-secondary,
  .btn-success {
    padding: 14px 20px;
    width: 100%;
  }
  
  .modern-input {
    padding: 14px 16px;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
    color: #f8fafc;
  }
  
  .glass-card {
    background: rgba(30, 27, 75, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .modern-input {
    background: rgba(30, 27, 75, 0.6);
    color: #f8fafc;
  }
  
  .modern-input::placeholder {
    color: #cbd5e1;
  }
}


    }
</style>

interface Hospital {
    id: number;
    name: string;
    address: string;
    phone: string;
    rating: number;
    distance: string;
}

const Hospital = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setHospitals([
                {
                    id: 1,
                    name: "City General Hospital",
                    address: "123 Main Street, Downtown",
                    phone: "+1 (555) 123-4567",
                    rating: 4.5,
                    distance: "2.3 km"
                },
                {
                    id: 2,
                    name: "Metro Medical Center",
                    address: "456 Oak Avenue, Midtown",
                    phone: "+1 (555) 234-5678",
                    rating: 4.2,
                    distance: "3.7 km"
                },
                {
                    id: 3,
                    name: "Sunrise Health Clinic",
                    address: "789 Pine Road, Uptown",
                    phone: "+1 (555) 345-6789",
                    rating: 4.8,
                    distance: "1.8 km"
                }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading hospitals...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Nearby Hospitals</h1>
                    <p className="text-gray-600">Find healthcare facilities in your area</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {hospitals.map((hospital) => (
                        <div key={hospital.id} className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{hospital.name}</h3>
                                    <p className="text-gray-600 mb-2">{hospital.address}</p>
                                    <p className="text-gray-600 mb-4">{hospital.phone}</p>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 mr-1">★</span>
                                            <span className="text-gray-700">{hospital.rating}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-500 mr-1">📍</span>
                                            <span className="text-gray-700">{hospital.distance}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-2">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        Call
                                    </button>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                        Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hospital;
