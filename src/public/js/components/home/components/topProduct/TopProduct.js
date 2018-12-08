const React = require("react");
const { Link } = require("react-router-dom");

module.exports = ({ product }) => {
  return (
    <li>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </li>
  );
};
