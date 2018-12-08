const React = require("react");
const { Link } = require("react-router-dom");

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
      </ul>
    </nav>
  );
};

module.exports = Header;
