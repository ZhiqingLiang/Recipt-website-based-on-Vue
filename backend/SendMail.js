// Date:2024/7/20
// Author:Zhiqing Liang
// Reference Link:
// 1.https://nodemailer.com/about/
// 2.https://cloud.tencent.com/developer/article/1822406


import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host:'smtp.qq.com',
    secure:false,
    port: 587,
    auth: {
        user: 'vanyaliang@foxmail.com', 
        pass: 'jdrencbcfsbibeda'    
    }
});

const sendEmail = async ({username,number,date1,date2,desc})=>{
    // 创建一个传输对象
    const mailContent ={
        from: 'vanyaliang@foxmail.com', // 发件人地址
        to:'testforproject89@gmail.com',
        subject:`Message from ${username}`,
        text:`${username}'s phone number is ${number}.${username} 
        would like to have a meeting with you on ${date1} at ${date2}. And this is the description: ${desc}`
    };
    
    // 发送邮件
    await transport.sendMail(mailContent)
    
};
// 导出这个函数，使其可以在其他文件中被引入
export default sendEmail;




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