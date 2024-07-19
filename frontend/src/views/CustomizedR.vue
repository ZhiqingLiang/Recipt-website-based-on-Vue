// Date:2024/7/19
// Author:Zhiqing Liang

<template>
<div class="container">
    <h1 class="title">Customized Your Receipt</h1>
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
        // 加async，await是一部机制，因为网络请求需要一段事件来完成，如果不使用异步机制，代码将会被阻塞，无法继续执行其他操作
        async send(){
            this.message.push({role:'user',content:this.input})
             try{
                const res = await axios.post('http://localhost:3000/api/chatRobot',{
                message:this.message
                });

                this.message = res.data.message
                this.input ='';
                
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
  background-size: cover; /* 背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 背景图不重复 */
  min-height: 100vh; /* 使容器至少占满整个视窗高度 */
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