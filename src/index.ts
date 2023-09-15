'use strict';
import Hapi from '@hapi/hapi';
import { registerControllers } from './core/registers';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    registerControllers(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();