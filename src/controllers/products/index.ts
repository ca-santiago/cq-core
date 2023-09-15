import { ServerRoute } from "@hapi/hapi";

export const buildProductsRouter = (basePath: string): ServerRoute[] => {
    return [
        {
            method: 'GET',
            path: basePath + '/ping',
            handler: () => {
                return 'pong';
            } 
        }
    ];
};