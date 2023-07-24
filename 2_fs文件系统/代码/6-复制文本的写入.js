const fs = require('fs')

// let data = fs.readFileSync('../资料/忽然之间.mp4');

// fs.writeFileSync('../资料/忽然之间2.mp4', data)



const rs = fs.createReadStream('../资料/忽然之间.mp4');

const ws = fs.createWriteStream('../资料/忽然之间3.mp4')

rs.on('data', chunk => {
    ws.write(chunk)
})

// 传统和流式不一样流式更好