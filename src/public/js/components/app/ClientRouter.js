const React = require("react");
const App = require("./App");
const { BrowserRouter } = require("react-router-dom");

const ClientRouter = ({ state }) => {
  return (
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  );
};

module.exports = ClientRouter;
