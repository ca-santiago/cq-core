import { Server } from '@hapi/hapi';
import { registerSupertokens } from './supertokens';

export const registerServices = async (server: Server) => {
    await registerSupertokens(server);
}