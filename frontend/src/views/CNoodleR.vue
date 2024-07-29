// Date:2024/7/22
// Author:Zhiqing Liang

<template>
  <div class="container">
    <h1 class="receipTtitle">Chinese Recipts:Noodle</h1>
    <div class="receiptBox" v-for="box in boxes" :key="box._id">
      <ul class="boxlist" >
        <li class="box" >
          <a href="/CNoodleTemplate" @click.prevent="navigate(box._id)" >
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
       <el-button type="danger" icon="el-icon-delete" circle @click="del(box._id)"></el-button>
    </div>
    <ReceiptForm :visible.sync="ruleFormVisible"  @submit="handleFormSubmit"></ReceiptForm><br>
    <el-button type="primary" round class="button" @click="show">Add New</el-button>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  created(){
      console.log('Component created');
      this.fetchData();
    },
  data(){
    return{
      ruleFormVisible:false,
      boxes:[ // 存储菜谱的数组
        {
        _id:1,
        name:"Egg Braised Noodles",
        label:"Chinese Noodle", 
        energy:"600Kcal",
        cookingtime:"25mins",
        PURL: "https://cp1.douguo.com/upload/caiku/1/a/f/750_1ab3577a84b50d698cd17cfa140f904f.jpg"
        }
      ] 
    };
  },

  // show:控制表单的显示
  // newReceipt:创建新的对象
  methods:{
    
    async handleFormSubmit(form){
      try{
        this.ruleFormVisible=false;
      // this.boxes.push(form);
        const res = await axios.post('http://localhost:3000/api/ChineseNoodles/addChineseN',form);
        console.log('response data:', res.data);
        this.fetchData(); 

      }catch(error){
        console.log("Cannot send data to backend",error)
      }
      
    },
    async fetchData(){
      console.log('Fetching data...'); // 添加初始日志
      try{
      // 发送请求到后端
        const res = await axios.get('http://localhost:3000/api/ChineseNoodles/getChineseN');
        console.log("Received res:",res)
        // 处理每个食谱的instruction
        // const receiptData = res.data.map(boxes=>{
        //   return{
        //     ...boxes,
        //     cookingsteps:boxes.cookingsteps.split('\n')
        //   }
        // })
        this.boxes = [...this.boxes, ...res.data]; // 合并数据,原先写的是res.data
        console.log("updated data:",this.boxes)
      }catch(error){
        // throw new Error('Cannot add a receipt:',error);
        console.log("cannot get a data",error)
      }
    },
    show(){
      this.ruleFormVisible=true;
    },
    async del(id){
       console.log(`Deleting receipt with id: ${id}`); // 打印ID
      try{
        const res = await axios.delete(`http://localhost:3000/api/ChineseNoodles/delChineseN/${id}`)
        console.log("delete response:",res);
        this.boxes= this.boxes.filter(box=>box.id !=id)
      }catch(error){
        throw new Error('Cannot delete a receipt:',error)
      }
    },
    navigate(id){
      this.$router.push({name:'CNoodleTemplate',params:{id:id}});
      console.log(`Navigating to CNoodleTemplate with id: ${id}`);
      

    }
   
  }
}
</script>

<style scoped>

.container{
  background-image: url('@/assets/img/noodlebg.jpg');
  background-size: cover; /* 背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 背景图不重复 */
  min-height: 100vh; /* 使容器至少占满整个视窗高度 */
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
    list-style-type: none; /* 移除ul的默认列表样式 */
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
    height: 12rem;
}
.box .txt p{
    font-size: 16px;
    padding: 0.25rem;
} 
.image img{
  text-align: center;
  width: 15rem;
  height: 8rem;
}
</style>;