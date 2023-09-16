import supertokens from "supertokens-node";
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import Session from 'supertokens-node/recipe/session';
import { getApiDomain, getWebsiteDomain } from "../utils/domains";
import { Server } from "@hapi/hapi";
import { plugin } from "supertokens-node/framework/hapi";

supertokens.init({
    framework: "hapi",
    supertokens: {
        // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        // connectionURI: "https://try.supertokens.com/appid-<APP_ID>",
        connectionURI: "https://st-dev-c409c990-541b-11ee-a7f0-096a527e3d58.aws.supertokens.io",
        apiKey: "cZs436mePK01lhyjNp5YCG51nv",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "capitan-quiet",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [{
                config: {
                    thirdPartyId: "google",
                    clients: [{
                        clientId: "549567446704-508ustrjg69p17ve0gsjrd663c56ndpu.apps.googleusercontent.com",
                        clientSecret: "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"
                    }],
                }
            }]
        }),
        Session.init() // initializes session features
    ]
});

export const registerSupertokens = async (server: Server) => {
    await server.register(plugin);
}