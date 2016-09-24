/* global __dirname */
var path = require('path'),
    ROOT_DIR = path.resolve(__dirname, '..');

function resolvePath(relativePath) {
    return path.join(ROOT_DIR, relativePath);
}

module.exports = {
    appDist: resolvePath('dist'),
    appHtmlIndex: resolvePath('src/static/index.hbs'),
    appIndexJs: resolvePath('src/app/index.js'),
    appPublic: resolvePath('dist'),
    appServerPayload: resolvePath('src/server/stub/payload.json'),
    appSrc: resolvePath('src'),
    appWebpackConfig: resolvePath('webpack.config.js'),

    webPublicPath: '/static/'
};

