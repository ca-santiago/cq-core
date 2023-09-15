import { buildProductsRouter } from '../controllers';
import { Server, ServerRoute } from "@hapi/hapi";


export const registerControllers = (server: Server) => {
    server.route(buildProductsRouter('/products'));
}
