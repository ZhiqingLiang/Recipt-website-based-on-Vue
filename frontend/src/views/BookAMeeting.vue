// Date:2024/7/19
// Author:Zhiqing Liang

<template>
<div class="container">
    <h2 class="title">Book A Meeting </h2>
    <el-form ref="form" :model="sizeForm" >
        <el-form-item label="Name">
            <el-input v-model="sizeForm.name" id="name"></el-input>
        </el-form-item>
        <el-form-item label="Contact Number">
            <el-input v-model="sizeForm.number" placeholder="Telephone Number" id="number"></el-input>
        </el-form-item>
        <el-form-item label="Time">
            <el-col :span="5">
            <el-date-picker type="date" placeholder="select a date" v-model="sizeForm.date1"  id="time"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"> - </el-col>
            <el-col :span="5">
            <el-time-picker placeholder="select a time" v-model="sizeForm.date2" ></el-time-picker>
            </el-col>
        </el-form-item>

        <el-form-item label="Descripetion" >
            <el-input type="textarea" v-model="sizeForm.desc" id="desc"></el-input>
        </el-form-item>
        
        <el-form-item >
            <el-button type="primary" @click="onSubmit">send</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          number: '',
          date1: '',
          date2: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        
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