var path = require('path')

module.exports = {
    // 下面是build也就是生产编译环境下的一些配置
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/distt/',
        productionSourceMap: true,
        productionGzip: false,
        // 下面定义要压缩哪些类型的文件
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        // 下面是用来开启编译完成后的报告，可以通过设置值为true和false来开启或关闭
        // 下面的process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        // 引入当前目录下的dev.env.js，用来指明开发环境，详见(2)
        env: require('./dev.env'),
        // 下面是dev-server的端口号，可以自行更改
        port: 8080,
        // 下面表示是否自定代开浏览器
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // 下面是代理表，作用是用来，建一个虚拟api服务器用来代理本机的请求，只能用于开发模式
        // 详见(3)
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        // 是否生成css，map文件，上面这段英文就是说使用这个cssmap可能存在问题，但是按照经验，问题不大，可以使用
        // 给人觉得没必要用这个，css出了问题，直接控制台不就完事了
        cssSourceMap: false
    }
}