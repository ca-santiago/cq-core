import { ServerRoute } from "@hapi/hapi";
import { createProductHandler, createProductSchema } from "./create";
import { getProductsHandler } from "./getAll";
import { getSingleProductHandler } from "./getSingle";
import { verifySession } from "supertokens-node/recipe/session/framework/hapi";

export const buildProductsRouter = (basePath: string): ServerRoute[] => {
    const protectedRouteOptions = {
        pre: [{
            method: verifySession()
        }]
    };
    return [
        {
            method: 'POST',
            path: basePath,
            options: {
                ...protectedRouteOptions,
                validate: {
                    payload: createProductSchema
                }
            },
            handler: createProductHandler
        },
        {
            method: 'GET',
            path: basePath,
            options: protectedRouteOptions,
            handler: getProductsHandler
        },
        {
            method: 'GET',
            path: basePath + '/{id}',
            options: protectedRouteOptions,
            handler: getSingleProductHandler
        }
    ];
};