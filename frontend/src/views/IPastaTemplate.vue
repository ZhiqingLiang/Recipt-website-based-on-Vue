// Date:2024/7/31
// Author:Zhiqing Liang

<!-- Rendering data to a new page  -->
<template>
<div class="container">
    <h2 class="title">{{details.name}}</h2>
    <div class="media">
        <iframe
        :src="details.VURL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ></iframe>
  <!-- </div>
  <div class="photo"> -->
        <!-- <img :src="details.PURL" alt="pic"> -->
  </div>
    <div class="cookingDetail">
        <p>Energy: {{details.energy}}</p>
        <p>CookingTime:{{details.cookingtime}}</p>
    </div>
    <div class="ingredients">
        <h3>Ingredients:</h3>
        <p>
           {{details.ingredients}}
        </p>
    </div>
    <div class="cookingstep">
        <h3>Cooking Steps:</h3>
        <p>
            {{details.cookingsteps}}
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    
    created(){
        console.log('fetchRecipeDetail created');
        this.fetchRecipeDetail();
    },
    data() {
        return {
            details:[]
        };
    },
     async created() {
        const id = this.$route.params.id;
        await this.fetchRecipeDetail(id);
  },
    methods:{
        async fetchRecipeDetail(){
            // Get id
            const id= this.$route.params.id;
            try{
                console.log("fetch id info")
                const res = await axios.get(`http://localhost:3000/api/ItalianPasta/getID/${id}`)
                this.details = res.data;
            }catch(error){
                console.error('Cannot get the details of receipt:', error);
            }
            
        }
    },
    // watch:{
    //     // 监听路由参数的变化
    //     '$route.params.id': 'fetchRecipeDetail'
    // }
}
</script>

<style scoped>
.container{
    overflow: auto;
    display: flex;
    align-items: center; 
    flex-direction: column;
    background-image: url('@/assets/img/receiptdetailbg.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
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
/* iframe{
    width: 25rem;
    height: 16rem;
}  */
.media{
    width: 40rem;
    height: 40rem;
    text-align: center;

}
iframe{
    width: 80%;
    height: 100%;
}
/* img{
    width: 50%;
    height: 60%;
} */
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