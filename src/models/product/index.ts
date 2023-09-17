import mongoose, { InferSchemaType } from "mongoose";
import { Product } from "../../types/product";
import paginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema<Product>({
    title: String,
    description: String,
    createdAt: String,
    id: String,
    ownerId: String,
    price: Number,
}, { _id: false });

productSchema.plugin(paginate);

type IProductModel = InferSchemaType<typeof productSchema>;

export const ProductModel = mongoose.model<IProductModel, mongoose.PaginateModel<IProductModel>>('Product', productSchema);
