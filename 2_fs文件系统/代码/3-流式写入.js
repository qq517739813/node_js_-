const fs = require('fs')

const ws =  fs.createWriteStream('./观书有感.txt')

ws.write('流式写入第一段\r\n')
ws.write('流式写入第二段\r\n')
ws.write('流式写入第三段\r\n')
ws.write('流式写入第四段\r\n')
ws.write('流式写入第五段\r\n')

ws.close()