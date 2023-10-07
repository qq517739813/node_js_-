const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

//创建电影模型  
db(() => {
    // 调用电影模型对象
    MovieModel.create({ title: '让子弹飞', description: '姜文' }, (err, data) => {
        if (err) {
            console.log('插入失败~~');
            return
        }
        console.log('插入成功');
    })
}, () => {
    // 失败回调
    console.log('创建失败');
})