import { ProductModel } from "../../models/product";
import { AppRequest } from "../../types/core";

export const getProductsHandler = async (req: AppRequest) => {
    const lim = 10;
    const page = Number(req.query.page) || 1;
    const { docs, ...rest} = await ProductModel.paginate({}, { limit: lim, page, lean: true });
    return {
        ...rest,
        results: docs,
    };
}
