const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin")
const SitemapPlugin = require('sitemap-webpack-plugin').default
const prettydata = require('pretty-data')

const siteUrl = 'https://abersoft.se'

const paths = [
    '/',
    '/about',
    '/contact',
    '/services'
]

const options = {
    filePath: 'robots.txt',
    sitemap: `${siteUrl}/sitemap.xml`
}

const prettyPrint = xml => {
    const result = prettydata.pd.xml(xml);
    return result;
}

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Abersoft Technologies'
                return args
            })

        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = -1
                return options
            })
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: paths,
            }),
            new RobotstxtPlugin(options),
            new SitemapPlugin(`${siteUrl}/`, paths, {
                changeFreq: 'monthly',
                skipGzip: true,
                formatter: prettyPrint,
            })
        ]
    }
}
