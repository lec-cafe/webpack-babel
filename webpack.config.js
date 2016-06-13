module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/assets/js'
    },
    module: {
        loaders: [
            { test: /\.js/,exclude: /node_modules/, loader: "babel" ,query:{presets:"es2015"}},
        ]
    },
};