// Date:2024/7/31
// Author:Zhiqing Liang
// Reference Link:https://blog.csdn.net/jiuchabaikaishui/article/details/134272143
// Reference Link:https://www.runoob.com/nodejs/nodejs-mongodb.html
// Reference Link:https://blog.csdn.net/m0_65789515/article/details/132666062

import express from 'express';
import cors from 'cors';
import {chat} from './OpenAI.js'
import bodyParser from 'body-parser';
import UserRoutes from './routes/UserRoutes.js';
import ChineseNoodlesR from './routes/ChineseNoodlesR.js'
import sendEmail from './SendMail.js';
import mongoose from 'mongoose';

const app = express();
// 设置服务器监听的端口号3000
const port = 3000; 


// 跨平台传数据
app.use(cors({
  origin: 'http://localhost:8081', // 你的前端服务器地址
  credentials: true
}));
// 解析JSON格式的请求体
app.use(express.json())
app.use(bodyParser.json())

// ----------openai model-----------
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

// --------- sendemail------------
app.post('/api/sendmail',async (req,res)=>{
    // const {username,number,date1,date2,desc}=req.body;
    // sendEmail({username,number,date1,date2,desc},(error,info)=>{
    //     if(error){
    //         return res.status(500).send(error.toString());
    //     }
    //     res.status(200).send('Email sent:' + info.response);
    // });
    try{
      await sendEmail(req.body);
      res.status(200).send('Sent successfully');
    }catch(error){
      console.log('There is an error when sending email:',error)
    }
});
//  ----------数据库-----------
mongoose.connect('mongodb://localhost:27017/receiptdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接成功');
  })
  .catch(err => {
    console.log('--------------');
    console.log('数据库连接失败：', err);
    console.log('--------------');
  });

  // 启动后端的时候，会启动serve.js，所以需要由路由导航到每一个路由文件中
app.use('/api/ChineseNoodles',ChineseNoodlesR);
app.use('/api/Users',UserRoutes);


//   -----------------------------------------------------
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  