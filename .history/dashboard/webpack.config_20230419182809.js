const date = new Date();
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const config = {};

// npm run build -- --node-env=development
if (process.env.NODE_ENV == 'development') {
  config.APP_NAME = 'APM';
  config.APP_DESCRIPTION = 'Application Performance Monitoring';
} else {
  config.APP_NAME = 'APM';
  config.APP_DESCRIPTION = 'Application Performance Monitoring';
}

module.exports = {

	mode: "production", 
	entry: path.resolve(__dirname, "index.js"),

	output: {
		filename: "index.js?[contenthash]", 
		chunkFilename: '[contenthash].js', 
		path: path.resolve(__dirname, "./dist"), 
    clean: true, 
	},

	optimization: {
    minimize: true
	},

	performance: {
    maxAssetSize: 500000 // increase asset size limit to 500KB
  },

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
			},
			{
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [ 
									[
										"@csstools/postcss-cascade-layers",
										{
											onRevertLayerKeyword: false
										},
									]
                ]
              }
            },
          },
        ],
      },
			{
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      }
		]
	},	

	plugins: [
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(config.APP_NAME), 
      APP_DESCRIPTION: JSON.stringify(config.APP_DESCRIPTION)
    }),
    new FaviconsWebpackPlugin({
      logo: './logo.png', 
      manifest: './manifest.json',
      prefix: './',
      icons: {
        // Platform Options:
        // - offset - offset in percentage
        // - background:
        //   * false - use default
        //   * true - force use default, e.g. set background for Android icons
        //   * color - set background for the specified icons
        //
        android: fasle, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
        appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
        appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
        favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
        windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
        yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
      }
    }), 
		new HtmlWebpackPlugin({ 
      title: 'APM',
      meta: {
        'title': 'APM', 
        'description': 'Application Performance Monitoring', 
        'viewport': 'width=device-width, initial-scale=1', 
        'content-language': 'en-US',
      }
    }),
    new HtmlWebpackTagsPlugin({ 
      scripts: [], 
      append: true
    })
	]
};