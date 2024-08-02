// Date:2024/7/19
// Author:Zhiqing Liang

<!-- This 'template' is for AI Chatbot -->
<template>
<div class="container">
    <h1 class="title">Customized Your Recipe</h1>
    <div class="inputBox">
        <textarea v-model="input" placeholder="Enter your question" class="input"></textarea>
        <el-button type="primary" round class="send" @click="send">send</el-button><br>
    </div>

    <div class="chatBox">
        <p>hello</p>
        <div v-for="(message,index) in message" :key="index">
            <p>{{message.role}}<br>{{message.content}}</p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            input:'',
            message:[]
        };
    },
    methods:{
        // add async, await is a mechanism, because the network request needs a period of events to complete, 
        // if  do not use the asynchronous mechanism, the code will be blocked, can not continue to perform other operations
        async send(){
            this.message.push({role:'user',content:this.input})  //Content displays the input
             try{
                const res = await axios.post('http://localhost:3000/api/chatRobot',{
                message:this.message
                });
                this.message = res.data.message // get back-end's data
                this.input =''; // clear textarea
                
            }catch(error){
                alert('this is a error:',error)
            
        }
        }

       
    }
}
</script>

<style scoped>
.container{
  background-image: url('@/assets/img/customized.jpg');
  background-size: cover; 
  background-repeat: no-repeat; 
  min-height: 100vh; 
  height: 100vh;
  overflow: auto;
}
.inputBox{
    padding: 1rem;
}
.title{
    padding-top: 1rem;
    text-align: center;
}
.input{
    width: 100%;
    box-sizing: border-box; 
    padding: 1rem;
}
.chatBox{
    border: 1px solid black;
    height: 16rem;
    padding: 1rem;
    margin: 1rem;
    overflow: auto;
}
</style>