/**
 * 通过isLogin决定最终的输出内容
 * true输出欢迎回来
 * false输出登录按钮
 */


const fs = require('fs');
const ejs = require('ejs');

let isLogin = false;

// 原生写法
if (isLogin) {
    console.log('<span>欢迎回来</span>');
} else {
    console.log('<button>登录</button>  <button>注册</button>');
}

// EJS实现
// 读取html内容
let html = fs.readFileSync('./3_条件渲染.html').toString();
let result = ejs.render(html, { isLogin: isLogin });
console.log(result);