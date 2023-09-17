import { registerSupertokens } from './supertokens';
import { startMongodbConnection } from './mongodb';
import { ServerApp } from '../types/core';

export const registerServices = async (server: ServerApp) => {
    await registerSupertokens(server);
    await startMongodbConnection(server);
}