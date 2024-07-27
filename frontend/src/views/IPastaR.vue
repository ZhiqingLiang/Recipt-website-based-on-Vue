// Date:2024/7/27
// Author:Zhiqing Liang

<template>
  <div class="container">
    <h1 class="receipTtitle">Italian Recipts:Pasta</h1>
    <div class="receiptBox" v-for="box in boxes" :key="box.id">
      <ul class="boxlist" >
        <li class="box" >
          <a href="../views/IPastaTemplate.vue"  @click.prevent="navigate(box.id)">
              <div class="image">
                  <img :src="box.image" alt="img">
              </div>
          </a>
          <div class="txt">
              <h3 class="title">{{box.name}}</h3>
              <p class="id"> id:{{box.id}}<p>
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
                {id:1,image:'https://preview.qiantucdn.com/58pic/20240327/00I58PICAvwMCcsbmaNWJ_PIC2018_PIC2018.jpg!qt_h320',name:'Chicken Tomato Pasta Recipe',energy:'400Kcal',cookingtime:'30mins',label:'Italian Pasta'},
                {id:2,image:'https://thumbs.dreamstime.com/b/%E7%94%A8%E8%8F%A0%E8%8F%9C%E7%83%A4%E8%98%91%E8%8F%87%E7%83%B9%E5%88%B6%E7%9A%84%E6%84%8F%E5%A4%A7%E5%88%A9%E9%9D%A2-%E5%81%A5%E5%BA%B7%E7%B4%A0%E9%A3%9F%E9%A3%9F%E5%93%81-%E7%BB%BF%E7%B4%A0%E6%84%8F%E5%A4%A7%E5%88%A9%E9%9D%A2-%E6%A0%87%E9%A2%98%E8%8F%9C%E5%8D%95%E8%8F%9C%E5%8D%95%E5%A4%84%E6%96%B9-217947833.jpg',name:'Spinach and Mushroom Pasta',energy:'370Kcal',cookingtime:'20mins',label:'Italian Pasta'},
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
    navigate(id){
      this.$router.push({name:'IpastaTemplate',params:{id:id}});
      console.log(`Navigating to IPastaTemplate with id: ${id}`);
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
    height: 8rem;
}
.box .txt p{
    font-size: 16px;
    padding: 0.25rem;
} 
</style>;