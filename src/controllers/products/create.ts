import { AppRequestWithPayload } from "../../types/core";
import { v4 } from 'uuid';
import { Product } from "../../types/product";
import moment from 'moment';
import Joi from 'joi';
import { ProductModel } from "../../models/product";

export interface CreateProductPayload {
    title: string;
    price: string;
    description?: string;
}

export const createProductSchema = Joi.object<CreateProductPayload>({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().optional()
});

export const createProductHandler = async (req: AppRequestWithPayload<CreateProductPayload>) => {
    const { payload, session } = req;
    const userId = session!.getUserId();
    const { title, price, description } = payload;

    const product: Product = {
        id: v4(),
        title,
        price,
        ownerId: userId,
        createdAt: moment.now().toString(),
        description,
    }

    await ProductModel.findOneAndUpdate({ id: product.id }, { ...product }, { upsert: true }).lean().exec();

    return {
        product
    };
}