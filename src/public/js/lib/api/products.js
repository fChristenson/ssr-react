const getRequest = require("../requests/getRequest");

const getTopProducts = async () => {
  const res = await fetch("/api/v1/products", getRequest());
  return res.json();
};

const getProduct = async productId => {
  const res = await fetch(`/api/v1/products/${productId}`, getRequest());
  return res.json();
};

module.exports = {
  getTopProducts,
  getProduct
};
