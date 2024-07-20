// Date:2024/7/19
// Author:Zhiqing Liang
// Reference Link:https://blog.csdn.net/jiuchabaikaishui/article/details/134272143
// Reference Link:https://www.runoob.com/nodejs/nodejs-mongodb.html
// Reference Link:https://blog.csdn.net/m0_65789515/article/details/132666062

import express from 'express';
import cors from 'cors';
import {chat} from './OpenAI.js'
import bodyParser from 'body-parser';
const mongoose = require('mongoose');

const app = express();
// 设置服务器监听的端口号3000
const port = 3000; 
const sendData = require('./SendMail.js')

// 跨平台传数据
app.use(cors());
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
app.post('/api/sendemail',(req,res)=>{
    const {username,number,date1,date2,desc}=req.body;
    sendData({username,number,date1,date2,desc},(error,info)=>{
        if(error){
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent:' + info.response);
    });
});
//  ----------数据库-----------
mongoose.connect('mongodb://localhost:27017/usersinfo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接成功');
  })
  .catch(err => {
    console.log('--------------');
    console.log('数据库连接失败：', err);
    console.log('--------------');
  });

//  ----------Login & Register Part -------
  // 定义模式和模型
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
  });

const User = mongoose.model('User', userSchema);

//接收前端
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // console.log('Received login request:', req.body); 
    try {
      const user = await User.findOne({ name: username, password: password });
      // console.log('Database query result:', user);
      if (user) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'There is an error while logging in' });
    }
  });
  
   
app.post('/register', async (req, res) => {
const { username, password, email } = req.body;
try {
    const existingUser = await User.findOne({ email: email }); // Bug:相同账号注册第二次直接出现error，不会出现“Email already exists”
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
    }else{
        const newUser = new User({ name: username, password: password, email: email });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
        }
    } catch (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ success: false, message: 'There is an error while registering' });
    }
  });

// ----------------Send receipts to backend---------------

//   -----------------------------------------------------
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  