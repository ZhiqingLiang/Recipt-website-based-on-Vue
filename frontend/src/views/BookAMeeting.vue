// Date:2024/7/19
// Author:Zhiqing Liang
// Reference Link:https://www.axios-http.cn/docs/res_schema


<template>
<div class="container">
    <h2 class="title">Book A Meeting </h2>
    <el-form ref="meetingForm" :model="meetingForm" @submit.prevent="onSubmit" class="meetingForm">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <el-form-item label="Name">
                <el-input v-model="meetingForm.username" id="name" required placeholder="username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <el-form-item label="Contact Number">
                <el-input v-model="meetingForm.number" placeholder="Telephone Number" id="number" required></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <el-form-item label="Date">
                <el-date-picker type="date" placeholder="select a date" v-model="meetingForm.date"  id="date" required></el-date-picker>  
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <el-form-item label="Time">
                <el-time-picker placeholder="select a time" v-model="meetingForm.time" id="time" required></el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12">
            <el-form-item label="Descripetion" >
                <el-input type="textarea" v-model="meetingForm.desc" id="desc" required class="textarea" placeholder="description"></el-input>
            </el-form-item>
            </el-col>
             </el-row>
          <el-form-item >
              <el-button type="primary" @click="onSubmit">send</el-button>
          </el-form-item>
       
    </el-form>
    <p class="suggestion">Having meetings with your supervisor can help you foster a health diet</p>
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
          date: '',
          time: '',
          desc: ''
        }
      };
    },
    methods: {
      async onSubmit() {
        this.$refs.meetingForm.validate(async(valid)=>{ // validate form
          if(valid){
            try{
              const res = await axios.post('http://localhost:3000/api/sendmail',this.meetingForm)
              console.log("Email sent:",res.data);
            }catch(error){
              console.log("Email cannot be sent:",error)
            }
          }
        })
      }
    }
  };
</script>



<style scoped>
.title{
    text-align: center;
    padding: 1rem 0 0 0 ;
}
.meetingForm{
    background-color: aliceblue;
    padding: 1.5rem;
    max-width: 60%;
    margin: 0 auto;
    box-sizing: border-box;
}

.suggestion{
  padding-top: 1rem;
  text-align: center;
}


@media (max-width: 768px) {
  .meetingForm{
    padding: 10px;
  }
}
</style>