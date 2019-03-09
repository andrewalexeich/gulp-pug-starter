const path = require("path");

module.exports = {
	mode: "none",
	output: {
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					query: {
						presets: [
							["@babel/preset-env", { modules: false }]
						]
					}
				}
			}
		]
	},
	resolve: {
		alias: {
			"%modules%": path.resolve(__dirname, "src/blocks/modules"),
			"%components%": path.resolve(__dirname, "src/blocks/components")
		}
	}
};