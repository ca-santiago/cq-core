import { AppRequest } from "../../types/core";


export const getSingleProductHandler = (req: AppRequest) => {
    return req.params.id;
}