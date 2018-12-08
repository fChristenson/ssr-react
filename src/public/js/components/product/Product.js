const React = require("react");
const { getProduct } = require("../../lib/api/products");

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product };
  }

  async componentDidMount() {
    if (this.props.product.id != this.props.match.params.productId) {
      const product = await getProduct(this.props.match.params.productId);
      this.setState({ product });
    }
  }

  render() {
    return (
      <div>
        {this.state.product.name}
      </div>
    );
  }
}

module.exports = Product;
