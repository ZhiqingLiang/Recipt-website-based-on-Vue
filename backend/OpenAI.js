// Date:2024/7/18
// Author:Zhiqing Liang
// Reference Link:
// https://www.bilibili.com/video/BV1ca4y1N7Vw/?spm_id_from=333.337.search-card.all.click&vd_source=987fb53144505896d4676200cb158eac

import readline from 'readline'; // library from node.js
import dotenv from 'dotenv';
import OpenAI from 'openai';


// loading environment variables in .env files
dotenv.config();

// configuring OpenAI API Keys
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, 
});

export const chat = async (input) => {
  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages:input // the content from front-end
    });

    //console.log("API Response:", JSON.stringify(res, null, 2));

    if(res&& res.choices && res.choices.length>0){
      return res.choices[0].message.content;  //The first result (choices[0]) is usually the response that the model considers most appropriate or relevant.
    }else{
      throw new Error("No res from chat robot")
    }  
  } catch (error) {
    console.error("Error creating chat completion:", error);
    return "An error occurred while processing your request.";
  }
}
// Displaying input and output on the command line
const line = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout,
});

line.prompt(); //waiting users to input
line.on('line', async (input) => {
  console.log(await chat([{ role: 'robot', content: input }])); // waiting  'robot' to response
  line.prompt(); 
});
