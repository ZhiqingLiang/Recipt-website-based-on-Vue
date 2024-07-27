<template>
  <div class="container">
    <h1 class="receipTtitle">Italian Recipts:Salad</h1>
    <div class="receiptBox" v-for="(box,index) in boxes" :key="box.id">
      <ul class="boxlist" >
        <li class="box" >
          <a href="#">
              <div class="image">
                  <img src="" alt="img">
              </div>
          </a>
          <div class="txt">
              <h3 class="title">Title:{{box.name}}</h3>
              <p class="id"> id:{{index+1}}<p>
              <p class="label">Label:{{box.label}}</p>
              <p class="energy">Energy:{{box.energy}}</p>
              <p class="cookingtime">CookingTime:{{box.cookingtime}}</p>
          </div>
        </li>
      </ul>
       <el-button type="danger" icon="el-icon-delete" circle @click="del(box.id)"></el-button>
    </div>
    <ReceiptForm :visible.sync="ruleFormVisible"  @submit="handleFormSubmit"></ReceiptForm><br>
    <el-button type="primary" round class="button" @click="show">Add New</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ruleFormVisible:false,
      boxes:[
                {id:1,image:'https://cdn.pixabay.com/photo/2022/05/13/19/10/salad-7194405_1280.jpg',name:'Italian Tomato Mozzarella Salad',energy:'270Kcal',cookingtime:'20mins',label:'Italian Salad'},
                {id:2,image:'https://d6jx1kp3ixpqy.cloudfront.net/wp-content/uploads/2017/04/Chickpea-salad-with-avocado-and-tuna-fish-641x427.jpg',name:'Italian Tuna Bean Salad',energy:'350Kcal',cookingtime:'20mins',label:'Italian Salad'},
            ]
    }
  },
  // show:控制表单的显示
  // newReceipt:创建新的对象
  methods:{
    handleFormSubmit(form){
      const newReceipt ={
        name:form.name,
        energy:form.energy,
        cookingtime:form.cookingtime,
        img:form.PURL,
        label:form.receipt,
        id:Date.now() //事件戳创建新的id
      };
      this.boxes.push(newReceipt);
      this.ruleFormVisible=false;
  
    },
    show(){
      this.ruleFormVisible=true;
    },
    del(id){
      this.boxes= this.boxes.filter(box=>box.id !=id)
    }
  }
}
</script>

<style scoped>

.container{
  background-image: url('@/assets/img/salad.jpg');
  background-size: cover; /* 背景图覆盖整个容器 */
  background-repeat: no-repeat; /* 背景图不重复 */
  min-height: 100vh; /* 使容器至少占满整个视窗高度 */
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
</style>;