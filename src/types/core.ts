import { Request, Server } from "@hapi/hapi";
import { Mongoose } from "mongoose";
import { SessionRequest } from "supertokens-node/framework/hapi";

export interface AppRequest extends Request, SessionRequest {}
export interface AppRequestWithPayload<P extends object> extends AppRequest {
    payload: P;
}

export interface ServerAppState {
    dbcon: Mongoose;
}

export interface ServerApp extends Server<ServerAppState> {

}
