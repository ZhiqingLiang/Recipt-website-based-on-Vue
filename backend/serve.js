// Date:2024/7/19
// Author:Zhiqing Liang
// Reference Link:https://blog.csdn.net/jiuchabaikaishui/article/details/134272143

import express from 'express';
import cors from 'cors';
import {chat} from './OpenAI.js'

const app = express();
// 设置服务器监听的端口号3000
const port = 3000; 

// 跨平台传数据
app.use(cors());
// 解析JSON格式的请求体
app.use(express.json())

// 向前端发起请求
app.post('/api/chatRobot',async(req,res)=>{
    // 从请求体解构出message数据，包含聊天的历史记录
    const { message } =req.body
    //console.log("Request body:", req.body);
    try{
        // 调用OpenAI.js的函数
        const robotReply = await chat(message);
        message.push({ role: 'assistant', content: robotReply });
        // 更新后的message数据发送回客户端
        res.json({ message });
    }catch(error) {
        console.error('Chat Robot does not reply', error);
        res.status(500).send('Chat Robot does not reply');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  