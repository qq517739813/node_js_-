<!-- 笔记内容 -->

npm发布内容是 npm login先登录进去
然后在已经npm init初始化过的文件夹内输入npm publish 提交上去就能提交到npm了

npm 能很方便的切换nodeJS的版本的一个Js包
网上搜索直接下载安装后就行，一些常用操作是
npm list available 显示所有可以下载的Node.js版本
npm list 显示已安装的版本
npm install 18.12.1 安装18.12.1版本的node.js
npm install latest 安装最新版的node.js
npm uninstall 18.12.1 卸载
npm use 18.12.1 切换版本

想要发post请求一种是Ajax一种是表单，直接在html里面写个form表单


数据库命令 客户端
show dbs 
use bilibili
show collections
db.createCollection('users')
db.dorpDatabase()
db.users.insert({name: 'John', age:18})
db.users.find();
db.users.find({age:18})
db.users.updata({name:John, $set:{age:20}})
db.users.remove({name: 'John})
cmd-> mongod 开启服务器
cmd-> mongo 开启客户端
waiting for connections 端口


集合=对象
文档=每一个库


查看数据的运算符
> $gt
< $lt
>= $get
<= $lte
!== $ne

$or 
$and 
