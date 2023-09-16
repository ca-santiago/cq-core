'use strict';
import Hapi from '@hapi/hapi';
import { getApiDomain, getWebsiteDomain } from './utils/domains';
import supertokens from "supertokens-node";
import { registerServices } from './services';
import { registerControllers } from './controllers';

const server = Hapi.server({
    port: 3001,
    host: '0.0.0.0',
    routes: {
        cors: {
            origin: [getWebsiteDomain(), getApiDomain()],
            additionalHeaders: [...supertokens.getAllCORSHeaders()],
            credentials: true
        }
    },
    router: {
        stripTrailingSlash: true
    }
});

const startServer = async (config?: Record<string, any>) => {
    // SERVICES
    await registerServices(server);

    // ROUTES
    registerControllers(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

startServer();