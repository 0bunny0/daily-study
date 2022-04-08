const fs = require('fs');

fs.readFile('E:/front end/node.js/day1/files/成绩.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败！' + err.message);
    }
    // console.log('读取成功！' + dataStr);

    const arrOld = dataStr.split(' ')

    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    })

    const newStr = arrNew.join('\r\n')
    console.log(newStr);

    fs.writeFile('E:/front end/node.js/day1/files/成绩ok.txt',newStr,function(err){
        if(err){
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功！');
    })
})