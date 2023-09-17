import { ProductModel } from "../../models/product";
import { AppRequest } from "../../types/core";
import Boom from '@hapi/boom';

export const getSingleProductHandler = async (req: AppRequest) => {
    const { id } = req.params;
    const product = await ProductModel.findOne({ id }).lean().exec();
    if (!product) return Boom.notFound();

    return { product };
}
