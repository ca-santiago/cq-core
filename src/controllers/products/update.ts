import { ProductModel } from "../../models/product";
import { AppRequestWithPayload } from "../../types/core";
import joi from 'joi';
import Boom from '@hapi/boom';
import { Product } from "../../types/product";
import moment from 'moment';

export interface UpdateProductPayload {
    title: string;
    description?: string;
    price: number;
}

export const updateProductSchema = joi.object<UpdateProductPayload>({
    description: joi.string().optional(),
    title: joi.string().required(),
    price: joi.number().required()
});

export const updateProductHandler = async (req: AppRequestWithPayload<UpdateProductPayload>) => {
    const {id} = req.params;
    const { price, title, description } = req.payload;
    const userId = req.session!.getUserId();
    const pExists = await ProductModel.findOne({ id, ownerId: userId }).lean().exec();

    if(!pExists) return Boom.notFound();

    const newP: Product = {...pExists, price, title, description, lastUpdate: moment.now().toString()};
    await ProductModel.findOneAndUpdate({}, newP).exec();
    return {
        product: newP
    }
}