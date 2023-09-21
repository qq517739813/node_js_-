//导入 fs
const fs = require('fs');
const path = require('path');
//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love');
// console.log(__dirname + '/index.html');

//resolve  解决
// console.log(path.resolve(__dirname, './index.html'));  用于规范路径，这种__dirname + 的形式拼成绝对路径呢，会正反斜线不统一，所有要用path模块的resolve方法
// console.log(path.resolve(__dirname, 'index.html'));
// console.log(path.resolve(__dirname, '/index.html', './test'));

// sep 分隔符
// console.log(path.sep); // windows  \  Linux  / 不同的操作系统的分隔符不一样，这个就是给来保存分隔符

// parse 方法  __dirname  '全局变量'
// console.log(__filename); // 文件的绝对路径
let str = 'D:\\nodeJS\\13-path\\代码\\path.js';
// console.log(path.parse(str));

// basename
// console.log(path.basename(str));

// dirname
// console.log(path.dirname(str));

// extname
// console.log(path.extname(str));

