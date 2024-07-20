//Date:2024/7/16
//Author:Zhiqing Liang


<template>
<el-dialog :visible.sync="localVisible" title="Add New Receipt">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" @submit.prevent="submitForm" >
      <el-form-item label="Name" prop="name" required>
        <el-input v-model="ruleForm.name" id="name"></el-input>
      </el-form-item>
      <el-form-item label="Receipt" prop="receipt">
        <el-select v-model="ruleForm.receipt" placeholder="please select a option" id="receipt">
          <el-option label="Chinese Noodles" value="Chinese Noodles"></el-option>
          <el-option label="Chinese Stewed Rice" value="Chinese Stewed Rice"></el-option>
          <el-option label="Italian Pasta" value="Italian Pasta"></el-option>
          <el-option label="Italian Salad" value="Italian Salad"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="CookingTime" prop="cookingtime" required>
        <el-input v-model="ruleForm.cookingtime" id="cookingtime"></el-input>
      </el-form-item>
      <el-form-item label="Energy" prop="energy" required>
        <el-input v-model="ruleForm.energy" id="energy"></el-input>
      </el-form-item>
      <el-form-item label="Pic's URL" prop="PURL" required>
        <el-input v-model="ruleForm.PURL" id="PURL"></el-input>
      </el-form-item>
      <el-form-item label="Video's URL" prop="VURL" required>
        <el-input v-model="ruleForm.VURL" id="VURL"></el-input>
      </el-form-item>
      <el-form-item label="Cooking steps" prop="desc" style="width:18rem">
        <el-input type="textarea" v-model="ruleForm.desc" id="desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)">create</el-button>
        <el-button type="primary" @click="cancelForm">cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import axios from 'axios'
  export default {
    props:{
      visible:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        showForm:false,
        ruleForm: {
          name: '',
          receipt: '',
          cookingtime:'',
          energy:'',
          PURL: '',
          VURL: '',
          desc: ''
        },
       
        rules: {
          name: [
            { required: true, message: 'input receipt title', trigger: 'blur' },
          ],
          receipt: [
            { required: true, message: 'please select one option', trigger: 'change' }
          ],
          cookingtime: [
            { required: true, message: 'input a time', trigger: 'blur' }
          ],
          energy: [
            { required: true, message: 'input food energy', trigger: 'blur' }
          ],
          PURL: [
            { required: true, message: 'input a picture url', trigger: 'blur' }
          ],
          VURL: [
            { required: true, message: 'input a video url', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: 'input steps', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.ruleForm.validate((valid)=>{
          if(valid){
            this.$emit('submit',this.ruleForm);
            // this.$refs[ruleForm].resetFields()='';
          }
        });
        // 将数据发往后端
        axios.post('/api/submitform',this.ruleForm)
          .then(res=>{
            alert('send successfully',res.data)
            this.$emit('update:visible', false); // 提交后隐藏对话框
          })
          .catch(error=>{
            alert('Error is:',error)
          })
      },
      cancelForm(){
         this.$emit('update:visible', false);
      }
    },
    computed:{
      localVisible:{
        get(){
          return this.visible;
        },
        set(value){
          this.$emit('update:visible',value)
        }
      }
    }
  }
</script>

<style scoped>
.el-dialog {
  width: 32rem;
}
.el-form{
    background-color: aliceblue;
    width: 30rem;
    height: 30rem;
    margin:auto
}
.el-form-item{
    margin-left: 2rem;
    padding-top: 0.5rem;
}
.el-input{
    width: 18rem;
}


</style>