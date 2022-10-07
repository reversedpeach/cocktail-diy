import path from "path";
const loaders = [];

loaders.push(
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: "babel-loader",
	},
	{
		test: /\.(png|jpe?g|gif)$/i,
		exclude: /node_modules/,
		loader: "file-loader",
	},
	{
		test: /\.css$/, // Only .css files
		use: ["style-loader", "css-loader"], // Run both loaders
	}
);
export default {
	entry: {
		app: "./client/app.jsx",
	},
	module: {
		rules: loaders,
	},
	output: {
		filename: "main.bundle.js",
		path: path.resolve(path.resolve(), "dist"),
	},
};
