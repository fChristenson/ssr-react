const React = require("react");
const App = require("./App");
const { StaticRouter } = require("react-router-dom");

const ServerApp = ({ url, state }) => {
  return (
    <StaticRouter context={{}} location={url}>
      <App state={state} />
    </StaticRouter>
  );
};

module.exports = ServerApp;
