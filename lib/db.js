// lib/connectDB.js
import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw new Error('Database connection failed');
    }
};

export default connectDB;
