const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = () => ({
	mode: 'production',
	devtool: 'none',
	plugins: [
		new UglifyJSPlugin()
	]
});