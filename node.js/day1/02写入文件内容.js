const fs = require('fs');

fs.writeFile('E:/front end/node.js/day1/files/1.txt','ok123',function(err){
    if(err){
        return console.log('写入失败！' + err.message);
    }

    console.log('写入成功！');
})