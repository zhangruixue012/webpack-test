const path = require('path');
const argv = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { mode, domain } = argv.env;

console.log('mode:', mode);
console.log('domain:', domain);

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);


console.log('modeConfig:', modeConfig);

module.exports = () => {
    return webpackMerge(
        {
            entry: {
                app: './src/index.js'
            },
      
            output: {
                filename: '[name]-[chunkhash].bundle.js',
                path: path.resolve(__dirname, 'dist')
            },

            module: {
                rules: [
                    {
                        test: /\.(sc|c)ss$/,
                        use: ['style-loader', 'css-loader']
                    },
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: ['file-loader']
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        use: ['file-loader']
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components|lib)/,
                        use: ['babel-loader']
                    }
                ]
            },
      
            plugins: [
                new HtmlWebpackPlugin({
					filename: 'index.html',
					template: './src/index.html',
					minify: false
				}),
                new CleanWebpackPlugin(),
                new WorkboxPlugin.GenerateSW({
                    // 这些选项帮助 ServiceWorkers 快速启用
                    // 不允许遗留任何“旧的” ServiceWorkers
                    clientsClaim: true,
                    skipWaiting: true
                })
            ]
      
        }, 
        modeConfig(mode)
    )
    
}
  