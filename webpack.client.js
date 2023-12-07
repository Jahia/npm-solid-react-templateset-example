const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = env => {
    let config = {
        entry: {
        },
        output: {
            path: path.resolve(__dirname, 'javascript')
        },
        externals: {
            '@jahia/server-helpers': '{}'
        },
        resolve: {
            mainFields: ['module', 'main'],
            extensions: ['.mjs', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    include: [path.join(__dirname, 'src'), path.join(__dirname, 'views'), path.join(__dirname, 'components')],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {modules: false, targets: {safari: '7', ie: '10'}}],
                                '@babel/preset-react'
                            ],
                            plugins: [
                                'styled-jsx/babel'
                            ]
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'npm-solid-react-templateset',
                library: {type: 'assign', name: 'window.appShell = (typeof appShell === "undefined" ? {} : appShell); window.appShell[\'npm-solid-react-templateset\']'},
                filename: '../javascript/remote.js',
                exposes: {
                    page_home: './components/jnt/page/page.home',
                    heroSection: './components/solidReact/heroSection'
                },
                remotes: {
                    '@jahia/helpers': 'reactAppShell'
                },
                shared: {
                    react: {
                        requiredVersion: '^17.0.2'
                    },
                    '@apollo/client': {},
                    '@apollo/react-hooks': {},
                    '@jahia/data-helper': {}
                }
            }),
            new ExtraWatchWebpackPlugin({
                files: [
                    'src/**/*',
                    'views/**/*',
                    'images/**/*',
                    'css/**/*',
                    'javascript/**/*',
                    'locales/**/*.json',
                    'resources/**/*.properties',
                    'definitions.cnd'
                ]
            })
        ],
        devtool: 'inline-source-map',
        mode: 'development'
    };

    if (env.deploy) {
        config.plugins.push(
            new WebpackShellPluginNext({
                onAfterDone: {
                    scripts: ['yarn jahia-deploy pack']
                }
            })
        );
    }

    return config;
};
