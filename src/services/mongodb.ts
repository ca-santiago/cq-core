import { ServerApp } from "../types/core";
import { loadEnvVar } from "../utils/loaders";
import mongoose from 'mongoose';

export const startMongodbConnection = async (server: ServerApp) => {
    const mongourl = loadEnvVar('MONGODB_CONNECTION_URL');
    const connection = await mongoose.connect(mongourl).then(con => (console.log('MongoDB connection started'), con));
    server.app.dbcon = connection;
    return connection;
}