module.exports = () => ({
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
})
