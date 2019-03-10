import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
    {
        name: String,
        imageUrl: String,
        unityPrice: Number,
        kgPrice: Number,
        cartQty: Number,
        inCart: Boolean,
    }
);

export default mongoose.model('Product', ProductSchema);