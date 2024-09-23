import { type UserConfigExport, defineConfig } from '@tarojs/cli';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack';

import devConfig from './dev';
import prodConfig from './prod';

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
// eslint-disable-next-line unused-imports/no-unused-vars
export default defineConfig<'webpack5'>(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<'webpack5'> = {
    cache: {
      enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    compiler: 'webpack5',
    copy: {
      options: {},
      patterns: [],
    },
    date: '2024-9-23',
    defineConstants: {},
    designWidth: 750,
    deviceRatio: {
      375: 2,
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
    },
    framework: 'react',
    h5: {
      miniCssExtractPluginOption: {
        chunkFilename: 'css/[name].[chunkhash].css',
        filename: 'css/[name].[hash].css',
        ignoreOrder: true,
      },
      output: {
        chunkFilename: 'js/[name].[chunkhash:8].js',
        filename: 'js/[name].[hash:8].js',
      },
      postcss: {
        autoprefixer: {
          config: {},
          enable: true,
        },
        cssModules: {
          // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            namingPattern: 'module',
          },
          enable: false,
        },
      },
      publicPath: '/',
      staticDirectory: 'static',
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
      },
    },
    mini: {
      postcss: {
        cssModules: {
          // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            namingPattern: 'module',
          },
          enable: false,
        },
        pxtransform: {
          config: {},
          enable: true,
        },
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
        chain.merge({
          plugin: {
            install: {
              args: [
                {
                  appType: 'taro',
                },
              ],
              plugin: UnifiedWebpackPluginV5,
            },
          },
        });
      },
    },
    outputRoot: 'dist',
    plugins: [],
    projectName: 'taroapp',
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        },
      },
    },
    sourceRoot: 'src',
  };

  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig);
  }

  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig);
});
