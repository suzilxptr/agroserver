import Product from './product.model';
import { buildProductInfo } from './buildProductInfo';

export const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (err) {
        throw err;
    }
}

export const createProduct = async (product) => {
    const productInfo = buildProductInfo(product);
    try {
        const product = await Product.create({
            ...productInfo
        })
        return product;
    } catch (err) {
        throw err;
    }
}