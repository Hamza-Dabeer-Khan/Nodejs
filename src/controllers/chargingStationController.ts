import { Request, Response } from 'express';
import { ChargingStation } from '../models/chargingStation';

const mockChargingStations: ChargingStation[] = [
    { id: '1', name: 'Station A', location: 'Location X', status: 'available' },
    { id: '2', name: 'Station B', location: 'Location Y', status: 'available' },
    // ... more mock data ...
];

export const getAllChargingStations = (_req: Request, res: Response) => {
    res.json(mockChargingStations);
};
