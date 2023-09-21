
const mongoose = require('mongoose');


//5. 创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

//6. 创建模型对象  对文档操作的封装对象
let BookModel = mongoose.model('books', BookSchema);

//7. 新增
BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9
}, (err, data) => {
    //判断是否有错误
    if (err) {
        console.log(err);
        return;
    }
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);
    //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
});


