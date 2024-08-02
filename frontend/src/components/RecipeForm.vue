//Date:2024/7/16
//Author:Zhiqing Liang


<template>
<el-dialog :visible.sync="localVisible" title="Add New Receipt">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" @submit.prevent="submitForm" >

        <el-form-item label="Name" prop="name" required>
          <el-input v-model="ruleForm.name" id="name"></el-input>
        </el-form-item>
    
  
        <el-form-item label="Receipt" prop="label">
          <el-select v-model="ruleForm.label" placeholder="please select a option" id="label">
            <el-option label="Chinese Noodles" value="Chinese Noodles"></el-option>
            <el-option label="Chinese Stewed Rice" value="Chinese Stewed Rice"></el-option>
            <el-option label="Italian Pasta" value="Italian Pasta"></el-option>
            <el-option label="Italian Salad" value="Italian Salad"></el-option>
          </el-select>
        </el-form-item>
      
        <el-form-item label="Ingredients" prop="ingredients" required>
          <el-input v-model="ruleForm.ingredients" id="ingredients"></el-input>
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
    
        <el-form-item label="Cooking steps" prop="cookingsteps">
          <el-input type="textarea" v-model="ruleForm.cookingsteps" id="cookingsteps"></el-input>
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
          label: '',
          ingredients:'',
          cookingtime:'',
          energy:'',
          PURL: '',
          VURL: '',
          cookingsteps: ''
        },
       
        rules: {
          name: [
            { required: true, message: 'input receipt title', trigger: 'blur' },
          ],
          label: [
            { required: true, message: 'please select one option', trigger: 'change' }
          ],
          ingredients:[
             { required: true, message: 'input receipt title', trigger: 'blur' },
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
          cookingsteps: [
            { required: true, message: 'input steps', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      async submitForm() {
        this.$refs.ruleForm.validate(async(valid)=>{
          if(valid){
            try{
              console.log('sending data:',this.ruleForm);
              //const res = await axios.post('http://localhost:3000/api/ChineseNoodles/addChineseN',this.ruleForm)
              //console.log('response data:',res.data)
              this.$emit('submit', { ...this.ruleForm });// send new recipt
              this.localVisible = false;
              this.resetForm ();
            }catch(error){
              console.error('Error adding recipe:', error);
            }
            // this.$refs[ruleForm].resetFields()='';
          }
        });

      },
       resetForm() {
        // reset data
        this.ruleForm = {
          name: '',
          label: '',
          cookingtime: '',
          ingredients:'',
          energy: '',
          PURL: '',
          VURL: '',
          cookingsteps: ''
        };
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
  width: 35rem;
  height: 40rem;
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
    width: 14rem;
}


</style>