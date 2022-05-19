const path = require('path');

module.exports = () => ({
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	// 用来实现自动化，自动编译，自动打开浏览器
	devServer: {
		// 启动gzip压缩
		compress: true,
		// 端口号
		port: 8080,
		// 自动打开浏览器
		open: true,
		// watchFile:[],
		hot: true,
		client: {
			progress: true,
		}
	}
});
