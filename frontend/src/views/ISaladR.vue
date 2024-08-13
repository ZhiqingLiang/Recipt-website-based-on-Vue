// Date:2024/7/31
// Author:Zhiqing Liang

<!-- This 'template' is for Italian Salad Recipe -->
<template>
  <div class="container">
    <h1 class="recipeTtitle">Italian Recipe:Salad</h1>
    <div class="recipeBox" v-for="box in boxes" :key="box._id">
      <ul class="boxlist" >
        <li class="box" >
          <a href="./ISaladTemplate"  @click.prevent="navigate(box._id)">
              <div class="image">
                  <img :src="box.PURL" alt="img">
              </div>
          </a>
          <div class="txt">
              <h3 class="title">{{box.name}}</h3>
              <p class="id"> id:{{box._id}}<p>
              <p class="label">Label:{{box.label}}</p>
              <p class="energy">Energy:{{box.energy}}</p>
              <p class="cookingtime">CookingTime:{{box.cookingtime}}</p>
          </div>
        </li>
      </ul>
       <el-button type="danger" icon="el-icon-delete" circle @click="del(box._id)" v-if="username==='admin'"></el-button>
    </div>
    <RecipeForm :visible.sync="ruleFormVisible"  @submit="handleFormSubmit"></RecipeForm><br>
    <el-button type="primary" round class="button" @click="show" v-if="username==='admin'">Add New</el-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created(){
      console.log('ISalaR Component created');
      this.fetchData();
    },
  data(){
    return{
      ruleFormVisible:false,
      username:localStorage.getItem('username'),
      boxes:[ ]
    }
  },
  methods:{
    async handleFormSubmit(form){
      try{
        this.ruleFormVisible=false;
        const res = await axios.post('http://localhost:3000/api/ItalianSalad/addItalianS',form);
        if(res.data.success){
          alert('This recipe add successfully')
          this.fetchData();
        }else{
          alert('Failed to add recipe:',res.data.message)
        }
      }catch(error){
        if(error.response){
          const {status,data} = error.response;
          if(status === 400){
            if(data.errorCode === 'DUPLICATE_RECIPE'){
              alert('Cannot add receipt:' + data.message)
            }else{
              alert('Request failed:' + data.message)
            }
          }else {
            console.error('Other errors status:', status, data);
            alert('Somthing goes wrong. Please try again.');
          }
        }else{
          console.error('Error sending data to backend:', error);
          alert('An error occurred while adding the recipe. Please try again.');
        }
      }
      
    },
    async fetchData(){
      console.log('Fetching data...'); 
      try{
      // Send request to back end
        const res = await axios.get('http://localhost:3000/api/ItalianSalad/getItalianS');
        console.log("Received res:",res)
        this.boxes = [...res.data]; // Merge the data
        console.log("updated data:",this.boxes)
      }catch(error){
        // throw new Error('Cannot add a recipe:',error);
        console.log("cannot get a data",error)
      }
    },
    show(){
      this.ruleFormVisible=true;
    },
    // Remove recipes by id
    async del(id){
       console.log(`Deleting recipe with id: ${id}`); 
      try{
        const res = await axios.delete(`http://localhost:3000/api/ItalianSalad/delItalianS/${id}`)
        console.log("delete response:",res);
        this.boxes= this.boxes.filter(box=>box.id !=id)
      }catch(error){
        throw new Error('Cannot delete a recipe:',error)
      }
    },
    // Render the data based on the id of the recipe
    navigate(id){
      this.$router.push({name:'ISaladTemplate',params:{id:id}});
      console.log(`Navigating to ISaladTemplate with id: ${id}`);
    }
  }
}
</script>

<style scoped>
.container{
  background-image: url('@/assets/img/salad.jpg');
  background-size: cover;
  background-repeat: no-repeat; 
  min-height: 100vh;
  height: 100vh;
  overflow: auto;

}
.recipeTtitle{
  color: black;
  background-color: rgb(255,255,255,0.6);
  text-align: center;
  padding-top: 0.5rem;
}
.button{
  margin: 0.5rem 1.5rem;
}
.recipeBox{
  display: inline-block;
  width: 16rem;
  margin: 1rem;
  background-color: aliceblue;
}
.boxlist{
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.box{
    height: 16rem;
    background-color: rgb(255,255,255,0.6);
    margin: 0.5rem;
    
}
.box img{
    width: 100%;
    height: 8rem;
}
.box .txt p{
    font-size: 16px;
    padding: 0.25rem;
} 

</style>