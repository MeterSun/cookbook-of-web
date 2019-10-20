module.exports = {
    mode: "development",
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./public",
        inline: true
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
