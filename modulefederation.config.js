const deps = require("./package.json").dependencies;

module.exports = {
    name: "products",
    filename: "products.js",
    exposes: {
        "./products": "./src/modules/Posts.js",
    },
    shared: {
        ...deps,
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
    },
}