import { Request, Response } from 'express';
import { query } from '../db/db';

// This is a placeholder for a real geolocator service.
// In a real app, you would use a service like Google Maps API to find nearby hospitals.
export const getNearbyHospitals = async (req: Request, res: Response) => {
    try {
        const result = await query('SELECT name, address, contact_number FROM hospitals LIMIT 10');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error getting nearby hospitals:', error);
        res.status(500).json({ message: 'Failed to retrieve hospitals.' });
    }
};
