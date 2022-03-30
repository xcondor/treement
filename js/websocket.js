/**
 * 建立在TCP协议基础之上，和HTTP协议同属应用层
 * 无同源限制
 * 协议标识符ws
 * 可以发送文本、二进制数据
 */

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.get('/', (req, res) => {
    res.send('<h1>socket.io</h1>');
})

server.listen(3000, () => {
    console.log('listening on *:3000');
})