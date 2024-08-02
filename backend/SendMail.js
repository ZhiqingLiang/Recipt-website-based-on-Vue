// Date:2024/7/20
// Author:Zhiqing Liang
// Reference Link:
// 1.https://nodemailer.com/about/
// 2.https://cloud.tencent.com/developer/article/1822406


import nodemailer from 'nodemailer'

// create an object for sending email
const transport = nodemailer.createTransport({
    host:'smtp.qq.com',
    secure:false,
    port: 587,
    auth: {
        user: 'vanyaliang@foxmail.com', 
        pass: 'jdrencbcfsbibeda'    
    }
});

const sendEmail = async ({username,number,date,time,desc})=>{
    // Create a transport object
    const mailContent ={
        from: 'vanyaliang@foxmail.com', 
        to:'testforproject89@gmail.com',
        subject:`Message from ${username}`,
        text:`${username}'s phone number is ${number}.${username} 
        would like to have a meeting with you on ${date} at ${time}. And this is the description: ${desc}`
    };
    
    // send email
    await transport.sendMail(mailContent)
    
};
// export model
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