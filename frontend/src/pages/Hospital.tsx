import React, { useState, useEffect } from 'react';

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
