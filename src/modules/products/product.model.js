import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  imageUrl: String,
  unityPrice: Number,
  kgPrice: Number,
  cartQty: Number,
  inCart: Boolean,
  category: {
    type: String,
    enum: ["Grocery", "Bakery", "Dairy", "Meat", "Personal Care"]
  }
});

export default mongoose.model("Product", ProductSchema);
