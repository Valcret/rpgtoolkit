// vue.config.js
module.exports = {
    devServer: {
        proxy: 'http://localhost:3000',
    configureWebpack: {
        // Ajouter des configurations Webpack ici
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                // Autres règles et configurations
            ],
        },
    },
    // Ou utilisez chainWebpack pour une configuration plus fine
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .use('style-loader')
            .loader('style-loader')
            .end()
            .use('css-loader')
            .loader('css-loader')
            .end();
        // Autres configurations de chaînage
    },
};