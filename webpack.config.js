var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx
                use: "babel-loader"
            },
            {
                test: /\.jsx?$/, // both .js and .jsx
                loader: 'eslint-loader',
                include: path.resolve(process.cwd(), 'src'),
                exclude: "/node_modules/",
                enforce: 'pre',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: "url-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Midterm - Address Book",
            author: "Janki Padaliya (pada0008)",
            date: "2017",
            template: "src/index.ejs"
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        })
    ]
};

module.exports = webpackConfig;

