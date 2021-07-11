//引入一个包
const path=require('path')

const HTML=require('html-webpack-plugin')
module.exports={
    //入口目录
    entry: "./src/index.ts",
    output: {
        //指定打包文件所在目录
        path: path.resolve(__dirname,'dist'),
        //打包后的文件名
        filename: "bundle.js"
    },
    module: {
        //指定打包要用的模块
        //指定要加载的规则
        rules: [
            {
                //test是指规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: 'ts-loader',

                exclude: /node-modules/
            }
        ]
    },
    //配置webpack插件
    plugins: [
        new HTML(),
    ]
}