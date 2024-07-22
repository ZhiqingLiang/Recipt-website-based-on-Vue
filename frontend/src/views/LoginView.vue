// Date:2024/7/3
// Author:Zhiqing Liang
// copyright:@Newcastle University
// Reference Link:https://www.youtube.com/watch?v=PlpM2LJWu-s

<template>
    <div id="app">
        <div :class="['container', { 'active': isSignUp }]" id="container" >
            <section class="form-container signInContainer">
                <!-- 当提交表单的时候，阻止默认的表单提交行为 -->
                <form class="signIn" @submit.prevent="login"> 
                    <h1>-Sign in-</h1><br><br>
                    <i class="el-icon-user-solid"></i>
                    <input type="text" placeholder="username" v-model="loginData.username"><br>
                    <i class="el-icon-key"></i>
                    <input type="password" placeholder="password" v-model="loginData.password"><br>
                    <a href="#">forget your password?</a><br>
                    <el-button type="primary" @click="login">Sign In</el-button>
                </form>
            </section>

            <section class="form-container signUpContainer">
                <!-- 当提交表单的时候，阻止默认的表单提交行为 -->
                <form class="signUp" @submit.prevent="register"> 
                    <h1>-Create An Account-</h1><br><br>
                    <i class="el-icon-user-solid"></i>
                    <input type="text" placeholder="username" v-model="registerData.username"><br>
                    <i class="el-icon-key"></i>
                    <input type="password" placeholder="password" v-model="registerData.password"><br>
                    <i class="el-icon-message"></i>
                    <input type="text" placeholder="Email" v-model="registerData.email"><br><br>
                    <el-button type="warning" @click="register">Sign Up</el-button>
                </form>
            </section>

            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h2>Hello,Nice to Meet You</h2>
                        <p>Ready to start journey with us</p>
                        <button class="hidden" id="login" @click="togglePanel(false)">Sign In</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="hidden" id="register" @click="togglePanel(true)">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #app{
        background: url('@/assets/img/bg.jpg') no-repeat center center fixed;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .container{
        position: relative;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 5px 15px rgb(0, 0, 0,0.35);
        overflow: hidden;
        width: 45rem;
        height: 25rem;
    }
    .container a{
        color: black;
        text-decoration: none;
        font-size: 14px;
    }
    .container button{
        font-size: 14px;
        padding:10px 45px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        cursor: pointer;
    }
    .container button.hidden{
        background-color: transparent;
        border-color: #040404;
        
    }
    .container form{
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
    }
    .container input{
        background-color: #eee;
        border: none;
        margin: 8px 0;
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 8px;
        width: 60%;
        outline: none;
    }
    .form-container{
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }
    .signInContainer{
        left: 0;
        width: 50%;
        z-index: 2;
    }
    .container.active .signInContainer{
        /* 移到自身宽度的右边 */
        transform: translateX(100%); 
    }
    .signUpContainer{
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }
    .container.active .signUpContainer{
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: move 0.6s;
    }
    @keyframes move {
        /* 动画前半部分，元素是不可见的 */
        0%,49.99%{ 
            opacity: 0;
            z-index: 1;
        }
        50%,100%{
            opacity: 1;
            z-index: 5;
        }
    }
    .toggle-container{
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        z-index: 1000;
    }
    .container.active .toggle-container{
        transform: translateX(-100%);
    }
    .toggle{
        /* transform 改变位置；transition改变平滑度 */
        background-color: aliceblue;
        height: 100%;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }
    .container.active .toggle{
        transform: translateX(50%);
    }
    .toggle-panel{
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top: 0;
        transform:translateX(0);
        transition: all 0.6s ease-in-out;
    }
    .toggle-left{
        transform:translateX(-200%);
    }
    .container.active .toggle-left{
        transform: translateX(0);
    }
    .toggle-right{
        right:0;
        transform: translateX(0);
    }
    .container.active .toggle-right{
        transform: translateX(200%);
    }

    
</style>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            isSignUp:false,
            loginData:{
                username:"",
                password:""
            },
            registerData:{
                username:"",
                password:"",
                email:""
            }
        }
    },
    methods:{
        togglePanel(isSignUp) {
            this.isSignUp = isSignUp;
        },
        async login(){
            try {
                const response = await axios.post('http://localhost:3000/api/Users/login', {
                    username: this.loginData.username,
                    password: this.loginData.password
                });
                localStorage.setItem('userToken', 'someToken');
                if (response.data.success) {
                this.$router.push('/AboutView');
            } else {
                alert('Invalid username or password');
            }
            }catch (error) {
                console.error('There was an error logging in:', error);
                alert('Something happened. Please try again.');
        }
        },
        async register(){
            try {
                const response = await axios.post('http://localhost:3000/api/Users/register', {
                    username: this.registerData.username,
                    password: this.registerData.password,
                    email:this.registerData.email
                });
                if (response.data.success) {
                    alert('Registration successful!');
                // 你可以在这里添加更多逻辑，比如跳转到登录页面
                } else {
                    alert('Registration failed: ' + response.data.message);
                }
            }catch (error) {
                console.error('There was an error registering:', error);
                alert('An error occurred while registering. Please try again.');
            }
        }
    }
}
</script>