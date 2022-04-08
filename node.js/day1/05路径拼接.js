// 1.path.join的使用
const path = require('path')
const fs = require('fs')

const pathStr = path.join('/a','/b/c','../../','./d','./e') // tip: ../会抵消前面的路径
console.log(pathStr) // \a\d\e


const pathStr1 = path.join('/a','/b/c','../','./d','./e')
console.log(pathStr) // \a\b\d\e

fs.readFile(path.join(__dirname, './files/1.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
})

// 2.path.base的使用
const path1 = require('path')

const fpath = '/files/index.html'

const fullName = path.basename(fpath)
console.log(fullName)

const nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt);

// 3. path.extname的使用
const fext = path.extname(fpath)
console.log(fext)