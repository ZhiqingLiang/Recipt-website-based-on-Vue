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
import ChineseRiceR from './routes/ChineseRiceR.js'
import ItalianPastaR  from './routes/ItalianPastaR.js';
import ItalianSaladR from './routes/ItalianSaladR.js';
import sendEmail from './SendMail.js';
import mongoose from 'mongoose';

const app = express();
// Set the server to listen on port 3000
const port = 3000; 


// Transfer data across platforms
app.use(cors({
  origin: 'http://localhost:8080', // Your front-end server address
  credentials: true
}));
// Parses the request body in JSON format
app.use(express.json())
app.use(bodyParser.json())

// ----------openai model-----------
// Make a request to the front end
app.post('/api/chatRobot',async(req,res)=>{
    // Deconstruct the message data from the request body, containing the chat history
    const { message } =req.body
    //console.log("Request body:", req.body);
    try{
        // Calling functions from OpenAI.js
        const robotReply = await chat(message);
        message.push({ role: 'assistant', content: robotReply });
        // The updated message data is sent back to the client.
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
//  ----------DataBase connection-----------
mongoose.connect('mongodb://localhost:27017/receiptdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connect successfully');
  })
  .catch(err => {
    console.log('--------------');
    console.log('cannot connect to database', err);
    console.log('--------------');
  });

  // When launching the backend, serve.js is launched, so it needs to be navigated to each route file by the route
app.use('/api/ChineseNoodles',ChineseNoodlesR);
app.use('/api/ChineseRice',ChineseRiceR);
app.use('/api/ItalianPasta',ItalianPastaR);
app.use('/api/ItalianSalad',ItalianSaladR);
app.use('/api/Users',UserRoutes);



//   -----------------------------------------------------
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  