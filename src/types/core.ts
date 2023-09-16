import { Request } from "@hapi/hapi";
import { SessionRequest } from "supertokens-node/framework/hapi";

export interface AppRequest extends Request, SessionRequest {
    
}

