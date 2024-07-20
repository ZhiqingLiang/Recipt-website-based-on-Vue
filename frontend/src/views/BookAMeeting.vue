// Date:2024/7/19
// Author:Zhiqing Liang
// Reference Link:https://www.axios-http.cn/docs/res_schema

<template>
<div class="container">
    <h2 class="title">Book A Meeting </h2>
    <el-form ref="form" :model="meetingForm" @submit.prevent="onSubmit" >
        <el-form-item label="Name">
            <el-input v-model="meetingForm.username" id="name"></el-input>
        </el-form-item>
        <el-form-item label="Contact Number">
            <el-input v-model="meetingForm.number" placeholder="Telephone Number" id="number"></el-input>
        </el-form-item>
        <el-form-item label="Time">
            <el-col :span="5">
            <el-date-picker type="date" placeholder="select a date" v-model="meetingForm.date1"  id="time"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"> - </el-col>
            <el-col :span="5">
            <el-time-picker placeholder="select a time" v-model="meetingForm.date2" ></el-time-picker>
            </el-col>
        </el-form-item>

        <el-form-item label="Descripetion" >
            <el-input type="textarea" v-model="meetingForm.desc" id="desc"></el-input>
        </el-form-item>
        
        <el-form-item >
            <el-button type="primary" @click="onSubmit">send</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        meetingForm: {
          username: '',
          number: '',
          date1: '',
          date2: '',
          desc: ''
        }
      };
    },
    methods: {
      // 获取的值就是在data（）里的值
      onSubmit() {
        const data ={
          username:this.username,
          number:this.number,
          date1:this.date1,
          date2:this.date2,
          desc:this.desc
        };
        axios.post('/api/sendemail',data)
          .then(res=>{
            alert("send successfully" + res.data);
          })
          .catch(error=>{
            alert("Error:",error)
          });
      }
    }
  };
</script>



<style scoped>
.title{
    text-align: center;
    padding: 1rem 0 0 0 ;
}
.el-form{
    background-color: aliceblue;
    padding: 1rem 1rem;
    width: 40rem;
    margin: 1rem auto;
}

</style>