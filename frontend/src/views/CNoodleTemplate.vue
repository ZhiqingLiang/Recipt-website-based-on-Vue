// Date:2024/7/27
// Author:Zhiqing Liang

<template>
<div class="container">
    <h2 class="title">{{title}}</h2>
    <div class="media">
        <iframe
        :src="VURL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ></iframe>
  <!-- </div>
  <div class="photo"> -->
        <img :src="PURL" alt="pic">
  </div>
    <div class="cookingDetail">
        <p>Energy: {{enerygy}}</p>
        <p>CookingTime:{{cookingtime}}</p>
    </div>
    <class class="ingredients">
        <h3>Ingredients:</h3>
        <p>
           {{ingredients}}
        </p>
    </class>
    <div class="cookingstep">
        <h3>Cooking Steps:</h3>
        <p>
            {{cookingstep}}
        </p>
    </div>
</div>
  

</template>

<script>
import axios from 'axios';
export default {
    ctreated(){
        this.fetchRecipeDetail();
    },
    data() {
        return {
            // title:'',
            // VURL: '',
            // PURL:'',
            // photo:'',
            // energy:'',
            // cookingtime:'',
            // cookingstep:'',
            // ingredients:''
            details:[]
        };
    },
    methods:{
        async fetchRecipeDetail(){
            // 获取点击的id
            const id= this.$route.params.id;
            try{
                const res = await axios.get(`http://localhost:3000/api/ChineseNoodles/getChineseN/${id}`)
                this.details = res.data;
            }catch(error){
                console.error('Cannot get the details of receipt:', error);
            }
            
        }
    },
    watch:{
        // 监听路由参数的变化
        '$route.params.id': 'fetchRecipe'
    }
}
</script>

<style scoped>
.container{
    overflow: auto;
    display: flex;
    align-items: center; /* 垂直居中 */
    flex-direction: column;
    background-image: url('@/assets/img/receiptdetailbg.jpg');
    background-size: cover; /* 背景图覆盖整个容器 */
    background-repeat: no-repeat; /* 背景图不重复 */
    background-color: antiquewhite;
    height: 100vh;
    width: 100%;
}

.title{
    margin: 1rem 0;
    text-align: center;
    background-color: rgb(240, 255, 255,0.3);
}
/* img{
    width: 30rem;
    height: 16rem;
}
iframe{
    width: 25rem;
    height: 16rem;
} */
.media{
    width: 100%;
    height: 100%;
    text-align: center;

}
iframe{
    width: 60%;
    height: 40%;
}
img{
    width: 50%;
    height: 60%;
}
.cookingDetail{
    background-color: rgb(240, 255, 255,0.3);
    width:70%;
    margin: 1rem 0;
}
.cookingDetail p{
    padding: 0.5rem;
    
}
.ingredients{
    width:70%;
    padding: 0.5rem;
    background-color: rgb(240, 255, 255,0.5);
}
.ingredients p{
    padding-left: 1.5rem;
}
.cookingstep {
    width:70%;
    padding: 0.5rem ;
    background-color: rgb(240, 255, 255,0.5);
}
.cookingstep p{
    padding-left: 1.5rem;
}
</style>