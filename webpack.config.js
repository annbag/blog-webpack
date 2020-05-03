const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'scripts', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}