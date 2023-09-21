const ejs = require('ejs');

// 西游记
const xiyou = ['xxx', 'yyyy', 'zzz', 'kkk']

// 原生的话是
/** 
let str = '<ul>';

xiyou.forEach(item => {
    str += `<li> ${item} </li>`;
})

str += '</ul>';*/
// EJS实现
const fs = require('fs');

let html = fs.readFileSync('./2_列表渲染.html').toString();
let result = ejs.render(html, { xiyou: xiyou });



console.log(result);