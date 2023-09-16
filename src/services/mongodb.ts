import { Server } from "@hapi/hapi";
import { loadEnvVar } from "../utils/loaders";

export const registerMongodb = async (server: Server) => {
    const mongourl = loadEnvVar('MONGODB_CONNECTION_URL');
    await server.register({
        plugin: require('hapi-mongodb'),
        options: {
            url: mongourl,
            settings: {
                useUnifiedTopology: true,
            },
            decorate: true
        }
    });
}