
const ejs = require('ejs');
const fs = require('fs');

let china = '中国';
let weather = '今天天气不错';

let str = fs.readFileSync('./1_.html').toString();
let result = ejs.render(str,{china:china,weather});



// 使用ejs渲染

console.log(result);





