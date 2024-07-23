// Date:2024/7/19
// Author:Zhiqing Liang
// Reference Link:https://www.axios-http.cn/docs/res_schema

<template>
<div class="container">
    <h2 class="title">Book A Meeting </h2>
    <el-form ref="meetingForm" :model="meetingForm" @submit.prevent="onSubmit" >
        <el-form-item label="Name">
            <el-input v-model="meetingForm.username" id="name" required></el-input>
        </el-form-item>
        <el-form-item label="Contact Number">
            <el-input v-model="meetingForm.number" placeholder="Telephone Number" id="number" required></el-input>
        </el-form-item>
        <el-form-item label="Time">
            <el-col :span="5">
            <el-date-picker type="date" placeholder="select a date" v-model="meetingForm.date1"  id="time" required></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"> - </el-col>
            <el-col :span="5">
            <el-time-picker placeholder="select a time" v-model="meetingForm.date2" required></el-time-picker>
            </el-col>
        </el-form-item>

        <el-form-item label="Descripetion" >
            <el-input type="textarea" v-model="meetingForm.desc" id="desc" required></el-input>
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
      async onSubmit() {
        // const data ={
        //   username:this.username,
        //   number:this.number,
        //   date1:this.date1,
        //   date2:this.date2,
        //   desc:this.desc
        // };
        this.$refs.meetingForm.validate(async(valid)=>{ // 验证表单
          if(valid){
            try{
              const res = await axios.post('http://localhost:3000/api/sendmail',this.meetingForm)
              console.log("Email sent:",res.data);
            }catch(error){
              console.log("Email cannot be sent:",error)
            }
          }
        })
        
          // .then(res=>{
          //   alert("send successfully" + res.data);
          // })
          // .catch(error=>{
          //   alert("Error:",error)
          // });
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