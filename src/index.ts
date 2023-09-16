'use strict';
import Hapi from '@hapi/hapi';
import { registerControllers } from './core/registers';
import { getApiDomain, getWebsiteDomain } from './server';
import supertokens from "supertokens-node";
import { plugin } from "supertokens-node/framework/hapi";

import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import { verifySession } from "supertokens-node/recipe/session/framework/hapi";
import { SessionRequest } from "supertokens-node/framework/hapi";

const server = Hapi.server({
    port: 3001,
    routes: {
        cors: {
            origin: [getWebsiteDomain(), getApiDomain()],
            additionalHeaders: [...supertokens.getAllCORSHeaders()],
            credentials: true
        }
    }
});

const init = async () => {
    await server.register(plugin);
    registerControllers(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();