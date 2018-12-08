const path = require("path");

const Config = (entry, name, target, path) => {
  return {
    entry,
    target,
    output: {
      path,
      filename: `bundle.${name}.js`
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      ]
    }
  };
};

const clientEntry = path.resolve(__dirname, "src", "public", "js", "main.js");
const clientPath = path.resolve(__dirname, "dist");
const clientConfig = Config(clientEntry, "main", "web", clientPath);

const serverEntry = path.resolve(__dirname, "server.js");
const serverPath = __dirname;
const serverConfig = Config(serverEntry, "server", "node", serverPath);

/**
 * First drawback, we need to transpile our server code when we could
 * have kept it as standard JavaScript.
 */
module.exports = [serverConfig, clientConfig];
