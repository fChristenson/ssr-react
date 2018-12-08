const React = require("react");
const Home = require("../home/Home");
const Product = require("../product/Product");
const Header = require("../header/Header");
const Footer = require("../footer/Footer");
const { Route, Switch } = require("react-router-dom");

const initState = {
  products: [],
  selectedProduct: {}
}

const App = ({state = initState}) => {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" render={() => <Home products={state.products || []} />} />
          <Route exact path="/home" render={() => <Home products={state.products || []} />} />
          <Route path="/products/:productId" render={({match}) => <Product match={match} product={state.selectedProduct || {}} />} />
        </Switch>
      <Footer />
    </>
  );
};

module.exports = App;
