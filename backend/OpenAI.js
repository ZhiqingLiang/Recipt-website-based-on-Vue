
// Reference Link:
// https://www.bilibili.com/video/BV1ca4y1N7Vw/?spm_id_from=333.337.search-card.all.click&vd_source=987fb53144505896d4676200cb158eac
import readline from 'readline'; // node.js 内置的库
import dotenv from 'dotenv';
import OpenAI from 'openai';

// 加载 .env 文件中的环境变量
dotenv.config();

// 配置 OpenAI API 密钥
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // 确保 .env 文件中使用的是 OPENAI_API_KEY
});

const chat = async (input) => {
  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }] // 确保使用的是 messages 而不是 message
    });
    return res.choices[0].message.content;
  } catch (error) {
    console.error("Error creating chat completion:", error);
    return "An error occurred while processing your request.";
  }
}

const line = readline.createInterface({ // 输出流
  input: process.stdin,
  output: process.stdout,
});

line.prompt();
line.on('line', async (input) => {
  console.log(await chat(input));
  line.prompt(); // 提示可以输出
});
