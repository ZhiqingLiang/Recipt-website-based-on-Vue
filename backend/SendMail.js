// Date:2024/7/20
// Author:Zhiqing Liang
// Reference Link:
// 1.https://nodemailer.com/about/
// 2.https://cloud.tencent.com/developer/article/1822406


import nodemailer from 'nodemailer'

const sendData = ({username,number,date1,date2,desc},callback)=>{
    // 创建一个传输对象
    const transport = nodemailer.createTransport({
        host:'smtp.qq.com',
        secure:false,
        port: 587,
        auth: {
            user: 'vanyaliang@foxmail.com', 
            pass: 'jdrencbcfsbibeda'    
        }
    });
    
    const mailContent ={
        from: 'vanyaliang@foxmail.com', // 发件人地址
        to:'testforproject89@gmail.com',
        subject:'About have a meeting with you',
        username:username,
        phonenumber:number,
        date1:date1,
        date2:date2,
        desc:desc
    };
    
    // 发送邮件
    transport.sendData(mailContent,(error,info)=>{
        callback(error,info)
    });
    
};
// 导出这个函数，使其可以在其他文件中被引入
export default sendData;




// module.exports = async function fn(email,code){
//     let status = null
//     await new Promise((resolve,reject)=>{
//         transporter.sendMail({
//             from: 'vanyaliang@foxmail.com',     // 发件人地址
//             to: 'testforproject89@gmail.com',  // 收件人地址
//             subject: 'About have a meeting with you',    // 主题
//             text: 'Hello, this is Vanya, I would like to apply for a service to help me foster a healthy diet' // 邮件内容
//         },function(err,info){
//             if(err){
//                 status = 0
//                 reject()
//             }else{
//                 status =1
//                 resolve()
//             }
//         });
//     })
//     return status
//}