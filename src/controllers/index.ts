import { Server } from '@hapi/hapi';
import { buildProductsRouter } from './products';
import { verifySession } from 'supertokens-node/recipe/session/framework/hapi';
import { SessionRequest } from 'supertokens-node/framework/hapi';
import ThirdPartyEmailPassword from 'supertokens-node/lib/build/recipe/thirdpartyemailpassword';

export const registerControllers = (server: Server) => {
    server.route(buildProductsRouter('/products'));
    server.route({
        path: "/get-user-info",
        method: "get",
        options: {
            pre: [
                {
                    method: verifySession()
                },
            ],
        },
        handler: async (req: SessionRequest, res) => {
            let session = req.session;
            let userId = req.session!.getUserId();
            // You can learn more about the `User` object over here https://github.com/supertokens/core-driver-interface/wiki
            let userInfo = await ThirdPartyEmailPassword.getUserById(userId)

            return {
                sessionHandle: session!.getHandle(),
                userId: session!.getUserId(),
                accessTokenPayload: session!.getAccessTokenPayload(),
                userInfo
            };
        }
    })
}