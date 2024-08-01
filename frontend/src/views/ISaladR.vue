<template>
  <div class="container">
    <h1 class="receipTtitle">Italian Recipts:Salad</h1>
    <div class="receiptBox" v-for="box in boxes" :key="box._id">
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
    <ReceiptForm :visible.sync="ruleFormVisible"  @submit="handleFormSubmit"></ReceiptForm><br>
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
  // show:控制表单的显示
  // newReceipt:创建新的对象
  methods:{
    async handleFormSubmit(form){
      try{
        this.ruleFormVisible=false;
      // this.boxes.push(form);
        const res = await axios.post('http://localhost:3000/api/ItalianSalad/addItalianS',form);
        console.log('response data:', res.data);
        this.fetchData(); 

      }catch(error){
        console.log("Cannot send data to backend",error)
      }
      
    },
    async fetchData(){
      console.log('Fetching data...'); // 添加初始日志
      try{
      // Send request to back end
        const res = await axios.get('http://localhost:3000/api/ItalianSalad/getItalianS');
        console.log("Received res:",res)
        this.boxes = [...res.data]; // Merge the data
        console.log("updated data:",this.boxes)
      }catch(error){
        // throw new Error('Cannot add a receipt:',error);
        console.log("cannot get a data",error)
      }
    },
    show(){
      this.ruleFormVisible=true;
    },
    // Remove recipes by id
    async del(id){
       console.log(`Deleting receipt with id: ${id}`); 
      try{
        const res = await axios.delete(`http://localhost:3000/api/ItalianSalad/delItalianS/${id}`)
        console.log("delete response:",res);
        this.boxes= this.boxes.filter(box=>box.id !=id)
      }catch(error){
        throw new Error('Cannot delete a receipt:',error)
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
  background-image: url('@/assets/img/pastabg.jpg');
  background-size: cover;
  background-repeat: no-repeat; 
  min-height: 100vh;
  height: 100vh;
  overflow: auto;

}
.receipTtitle{
  color: black;
  background-color: rgb(255,255,255,0.6);
  text-align: center;
  padding-top: 0.5rem;
}
.button{
  margin: 0.5rem 1.5rem;
}
.receiptBox{
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