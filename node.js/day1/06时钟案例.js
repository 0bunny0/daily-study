//导入fs模块
const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/


//读取文件
fs.readFile(path.join(__dirname,'./files/index.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log(err.message)
    }

    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//定义处理css样式的方法
function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr) //使用正则表达式提取需要的内容
    
    const newCSS = r1[0].replace('<style>','').replace('</style>','') //将提取出来的样式字符串，进行字符串的replace替换操作
    
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err){
            return console.log(err.message);
        }
        console.log('写入样式成功！');
    })
}

//定义处理js样式的方法
function resolveJS(htmlStr){
    const r2 = regScript.exec(htmlStr) //使用正则表达式提取需要的内容
    
    const newJS = r2[0].replace('<script>','').replace('</script>','') //将提取出来的样式字符串，进行字符串的replace替换操作
    
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err){
            return console.log(err.message);
        }
        console.log('写入JS成功！');
    })
}

//定义处理html结构的方法
function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace(regScript,'<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err){
            return console.log(err.message);
        }
        console.log('写入html成功！');
    })
}