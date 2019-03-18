export const buildProductInfo = info => {
  let product = {
    name: "",
    imageUrl: "",
    unityPrice: "",
    kgPrice: "",
    cartQty: 0,
    inCart: "",
    category: ""
  };

  product.name = info.name;
  product.imageUrl = info.imageUrl;
  product.unityPrice = info.unityPrice;
  product.kgPrice = info.kgPrice;
  product.cartQty = info.cartQty;
  product.inCart = info.inCart;
  product.category = info.category;

  return product;
};
