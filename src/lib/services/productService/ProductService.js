const productData = require("./productData");

class ProductService {
  async getProduct(productId) {
    return productData[productId];
  }

  async getTopProducts() {
    return Object.values(productData);
  }
}

module.exports = ProductService;
