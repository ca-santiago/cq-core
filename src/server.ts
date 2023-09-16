import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";

export function getApiDomain() {
    const apiPort = process.env.REACT_APP_API_PORT || 3001;
    const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

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