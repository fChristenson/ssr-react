const React = require("react");
const ReactDOM = require("react-dom");
const Router = require("./components/app/ClientRouter");

ReactDOM.render(
  <Router state={window.__STATE__} />,
  document.getElementById("root")
);
