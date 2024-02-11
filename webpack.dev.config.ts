import path from 'path';
import { merge } from 'webpack-merge';
import webpack, { Configuration as WebpackConfig } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import common from './webpack.common.config';

const devConfig: WebpackConfig = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'frontend', 'src', 'index.tsx'),
  ],
  devtool: 'inline-source-map', // eval-source-map
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
  ].filter(Boolean),
};
const config = merge<WebpackConfig>(common, devConfig);
export default config;
