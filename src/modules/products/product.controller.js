import { getAllProducts, createProduct } from './product';


export const getAll = async(req, res) => {
    try{
        const products = await getAllProducts();
        res.status(200).json({ products: products });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const create = async(req, res) => {
    try{
        const product = await createProduct(req.body);
        res.status(200).json({ product: product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}