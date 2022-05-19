const path = require('path');
const argv = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');

console.log('argv', process.env);


const mode = process.env.scene;
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = () => {
    return webpackMerge(
        {
            entry: {
                app: './src/index.js'
            },
            // __dirname  nodejs的变量，代表当前文件的目录绝对路径
            output: {
                filename: '[name]-[hash].bundle.js',
                path: path.resolve(__dirname, 'dist')
            },
            // loader的配置
            module: {
                rules: [
                    {
                        // 匹配哪些文件
                        test: /\.(sc|c)ss$/,
                        // 使用哪些loader; css-loader:将css文件变成commonjs模块加载到js中
                        // style-loader: 创建style标签，将js中的样式资源插入，添加到head中
                        use: ['style-loader', 'css-loader']
                    },
                    {
                        test: /\.less$/,
                        use: ['style-loader',
                            { loader: 'css-loader',
                                options: {
                                modules: { auto: true }
                            }},'less-loader']
                    },
                    {
                        exclude: /\.(css|js|html|less|scss)$/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static'
                        }
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components|lib)/,
                        use: ['babel-loader']
                    }
                ]
            },
            // plugins的配置
            plugins: [
                // 默认会创建一个html文件，引入打包输出的资源（js/css）
                new HtmlWebpackPlugin({
					filename: 'index.html',
					template: './src/index.html',
					minify: false
				}),
                new CleanWebpackPlugin(),
                // new WorkboxPlugin.GenerateSW({
                //     // 这些选项帮助 ServiceWorkers 快速启用
                //     // 不允许遗留任何“旧的” ServiceWorkers
                //     clientsClaim: true,
                //     skipWaiting: true
                // })
            ]

        },
        modeConfig(mode)
    )

}
