// Date:2024/7/27
// Author:Zhiqing Liang

<template>
  <div class="container">
    <h1 class="receipTtitle">Italian Recipts:Pasta</h1>
    <div class="receiptBox" v-for="(box,index) in boxes" :key="box.id">
      <ul class="boxlist" >
        <li class="box" >
          <a href="/ReceiptSample" @click="navigate">
              <div class="image">
                  <img src="" alt="img">
              </div>
          </a>
          <div class="txt">
              <h3 class="title">{{box.name}}</h3>
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
                {id:1,image:'',name:'Rice',energy:'500Kcal',cookingtime:'30mins',label:'Chinese Noodle'},
                {id:2,image:'',name:'Rice',energy:'500Kcal',cookingtime:'30mins',label:'Chinese Noodle'},
            ]
    }
  },
  // show:控制表单的显示
  // newReceipt:创建新的对象
  methods:{
    handleFormSubmit(form){
      const newReceipt ={
        title:form.title,
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
    },
    navigate(e){
      this.$router.push('/ReceiptDetail');
      // 阻止默认行为以避免页面刷新
      e.preventDefault();

    }
  }
}
</script>

<style scoped>

.container{
  background-image: url('@/assets/img/pastabg.jpg');
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