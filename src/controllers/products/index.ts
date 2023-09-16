import { ServerRoute } from "@hapi/hapi";
import { createProductHandler } from "./create";
import { getProductsHandler } from "./getAll";
import { getSingleProductHandler } from "./getSingle";

export const buildProductsRouter = (basePath: string): ServerRoute<any>[] => {
    return [
        {
            method: 'POST',
            path: basePath,
            handler: createProductHandler
        },
        {
            method: 'GET',
            path: basePath,
            handler: getProductsHandler
        },
        {
            method: 'GET',
            path: basePath +  '/{id}',
            handler: getSingleProductHandler
        }
    ];
};