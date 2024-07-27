// Date:2024/7/20
// Author:Zhiqing Liang

<template>
<div class="container">
    <h2 class="title" v-if="content">{{content.title}}</h2>
    <div class="media" v-if="content">
        <iframe
        :src="content.video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ></iframe>
  <!-- </div>
  <div class="photo"> -->
        <img src="content.image" alt="pic" v-if="content">
  </div>
    <div class="cookingDetail">
        <p v-if="content">Energy: {{content.energy}}</p>
        <p v-if="content">CookingTime:{{content.cookingtime}}</p>
    </div>
    <class class="ingredients">
        <h3>Ingredients:</h3>
        <p v-if="content">
         {{content.ingredients}}
        </p>
    </class>
    <div class="cookingstep">
        <h3 v-if="content">Cooking Steps:</h3>
        <p v-if="content">
            {{content.steps}}
        </p>
    </div>
</div>
  

</template>

<script>
export default {
    data() {
        return {
            id: '',
            content: ''
        };
  },
   created() {
    this.id = this.$route.params.id;
    console.log('Received id:', this.id);
    this.loadcontent();
  },
   methods:{
        loadcontent() {
            const data = {
                1:{
                    id:1,
                    title:'Chicken Tomato Pasta Recipe',
                    image:'https://preview.qiantucdn.com/58pic/20240327/00I58PICAvwMCcsbmaNWJ_PIC2018_PIC2018.jpg',
                    video:'https://youtu.be/5vFTLCIBAmI?si=wwfzlw7BqoqiGHxT',
                    energy:'400Kcal',
                    cookingtime:'30mins',
                    ingredients:'Whole wheat pasta: 150g'  
                        +'Chicken breast: 200g'
                        +'Olive oil: 1 tablespoon'
                        +'Onion: 1 (chopped)'
                        + 'Garlic: 2 cloves (minced)'
                        +'Tomatoes: 2 (diced)'
                        +'Tomato sauce: 200ml'
                        +'Bell pepper: 1 (diced)'
                        +'Carrot: 1 (sliced)'
                        +'Leafy greens (like spinach): a handful'
                        +'Italian seasoning: 1 teaspoon'
                        +'Salt and black pepper: to taste'
                        +'Parmesan cheese: to taste (optional)',
                    steps:'Cook the pasta: Boil water in a large pot, add a pinch of salt, then cook the whole wheat pasta for 8-10 minutes until al dente. Drain and set aside.'
                        + 'Prepare the chicken: In a skillet, heat olive oil over medium-high heat. Add the chicken pieces and cook until golden brown and cooked through, about 5-7 minutes. Remove and set aside.'
                        + 'Sauté vegetables: In the same skillet, add chopped onion and garlic, and sauté until the onion is soft. Add the bell pepper and carrot, and cook for another 3-5 minutes until the vegetables are tender.'
                        + 'Make the sauce: Add diced tomatoes to the skillet and cook until they soften and release their juices. Stir in the tomato sauce and Italian seasoning. Bring to a boil, then reduce the heat and simmer for about 5 minutes until the sauce thickens slightly.'
                        + 'Combine: Add the cooked chicken and leafy greens to the sauce, stirring to combine, and cook for another 1-2 minutes until the greens wilt. Add the cooked pasta and toss to coat with the sauce.'
                        + 'Season and serve: Season with salt and black pepper to taste. Optionally, sprinkle with Parmesan cheese before serving.'
                }
                
            };
        this.content = data[this.id] || null;
        console.log('Content:', this.content);
        }
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