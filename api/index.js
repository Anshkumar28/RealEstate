import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('connected');
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use(express.json());
app.use('/api/auth', authRouter);
