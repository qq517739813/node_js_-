function tiemo() {
    console.log('Tiemo');
}


function tiemo1() {
    console.log('Tiemo1');
}



// module.exports = {
//     tiemo,
//     tiemo1
// }


// exports 暴露数据
exports.tiemo1 = tiemo1;

exports.tiemo = tiemo;

// 1. module.exports  可以暴露‘任意’数据

// module.exports = 'hello'
// module.exports = 123123;

// 2.不能使用 export = value 的形式暴露数据
// exports = 'iloveyou' // X

exports = module.exports = {}
console.log(module.exports);
console.log(module.exports === exports);

exports = module.exports = { tiemo: tiemo }
exports.tiemo = tiemo
