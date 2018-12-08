const React = require("react");
const TopProduct = require("./components/topProduct/TopProduct");
const { getTopProducts } = require("../../lib/api/products");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  async componentDidMount() {
    /**
     * Benefit, we can save on network calls if the user
     * has refreshed the page
     */
    if (this.props.products.length <= 0) {
      const products = await getTopProducts();
      this.setState({ products });
    }
  }

  render() {
    return (
      <ul>
        {this.state.products.map(product => {
          return <TopProduct key={product.id} product={product} />;
        })}
      </ul>
    );
  }
}

module.exports = Home;
