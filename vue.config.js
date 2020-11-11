module.exports = {
    //基本路径
  publicPath: "./",
  outputDir: "dist", 
  //放置静态资源目录
  assetsDir: "static",
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 54
                })]
            }
        }
    }
}