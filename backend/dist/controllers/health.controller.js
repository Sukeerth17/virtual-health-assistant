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
exports.getNearbyHospitals = void 0;
const db_1 = require("../db/db");
// This is a placeholder for a real geolocator service.
// In a real app, you would use a service like Google Maps API to find nearby hospitals.
const getNearbyHospitals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, db_1.query)('SELECT name, address, contact_number FROM hospitals LIMIT 10');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error getting nearby hospitals:', error);
        res.status(500).json({ message: 'Failed to retrieve hospitals.' });
    }
});
exports.getNearbyHospitals = getNearbyHospitals;
