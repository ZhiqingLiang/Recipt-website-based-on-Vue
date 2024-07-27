// Date:2024/7/20
// Author:Zhiqing Liang

<template>
<div class="container">
    <h2 class="title">Egg Braised Noodles</h2>
    <div class="media">
        <iframe
        :src="videoSrc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ></iframe>
  <!-- </div>
  <div class="photo"> -->
        <img src="https://cp1.douguo.com/upload/caiku/1/a/f/750_1ab3577a84b50d698cd17cfa140f904f.jpg" alt="pic">
  </div>
    <div class="cookingDetail">
        <p>Energy: 600Kcal</p>
        <p>CookingTime:25mins</p>
    </div>
    <class class="ingredients">
        <h3>Ingredients:</h3>
        <p>
            Soy Sauce,
            Salt,
            Sugar,
            Oyster Sauce,
            Green onions,
            Eggs,
            Noodles,
        </p>
    </class>
    <div class="cookingstep">
        <h3>Cooking Steps:</h3>
        <p>
            Prepare the Noodles:<br>
            Cook the whole wheat noodles according to the package instructions, then drain and set aside.<br><br>
            
            Cook the Eggs:<br>
            Heat 1 tablespoon of olive oil in a pan, add the eggs, and scramble them into small pieces. Once cooked, remove and set aside.<br><br>
            
            Stir-fry Vegetables:<br>
            In the same pan, add a little more olive oil if needed. Sauté the minced garlic and julienned ginger until fragrant.<br>
            Add the sliced carrot and bell pepper, stir-frying until they begin to soften.<br><br>
            
            Braised Noodles:<br>
            Add the cooked noodles and scrambled eggs to the pan, mixing them with the vegetables.<br>
            Pour in 2 tablespoons of low-sodium soy sauce, and stir well to combine. Season with a pinch of salt and pepper to taste.<br><br>
            
            Serve:<br>
            Transfer the braised noodles to a serving plate. Optionally, garnish with sesame seeds or chopped green onions.<br>
        </p>
    </div>
</div>
  

</template>

<script>
export default {
    data() {
        return {
            title:'',
            videoSrc: 'https://www.youtube.com/embed/-iwXnnJjnR4?si=6hZZ9Cct1Gh2Srms',
            photo:'',
            energy:'',
            cookingtime:'',
            cookingstep:'',
            ingredients:''
        };
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