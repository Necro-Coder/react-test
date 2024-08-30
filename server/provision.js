import express from 'express';
import endpoints from './endpoints/endpoints.js'; 
import syncDatabase from './config/dbSynchronization.js';
import { ROUTES } from '../routes/api/api.js';

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());

// Aquí está el error potencial
if (endpoints.userRouter) {
    app.use(ROUTES.API_BASE, endpoints.userRouter);
} else {
    console.error('Error: userRouter is undefined.');
}

syncDatabase.syncDatabaseProvision();

//Listening on PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});