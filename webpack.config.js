const path = require('path');

module.exports = {
    entry: '.src/App.tsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}