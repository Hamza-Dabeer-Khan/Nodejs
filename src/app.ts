// src/app.ts
import express from 'express';
import chargingStationRoutes from './routes/chargingStationRoutes';

const app = express();

// Use the defined routes
app.use('/api', chargingStationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
