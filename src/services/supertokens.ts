import supertokens from "supertokens-node";
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import Session from 'supertokens-node/recipe/session';
import { getApiDomain, getWebsiteDomain } from "../utils/domains";
import { Server } from "@hapi/hapi";
import { plugin } from "supertokens-node/framework/hapi";
import { loadEnvVar } from "../utils/loaders";

const apiKey = loadEnvVar('SUPERTOKENS_API_KEY');
const connectionURI = loadEnvVar('SUPERTOKENS_CONNECTION_URI');
const googleClientId = loadEnvVar('GOOGLE_AUTH_CLIENT_ID');
const googleClientSecret = loadEnvVar('GOOGLE_AUTH_CLIENT_SECRET');

supertokens.init({
    framework: "hapi",
    supertokens: {
        connectionURI,
        apiKey,
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "captain-quiet",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [{
                config: {
                    thirdPartyId: "google",
                    clients: [{
                        clientId: googleClientId,
                        clientSecret: googleClientSecret,
                    }],
                }
            }]
        }),
        Session.init()
    ]
});

export const registerSupertokens = async (server: Server) => {
    await server.register(plugin);
}