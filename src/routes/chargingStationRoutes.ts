import express from 'express';
import { getAllChargingStations } from '../controllers/chargingStationController';

const router = express.Router();

router.get('/charging-stations', getAllChargingStations);

export default router;
