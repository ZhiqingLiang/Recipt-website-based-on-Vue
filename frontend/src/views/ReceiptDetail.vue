// Date:2024/7/20
// Author:Zhiqing Liang

<template>
<div class="container">
    <h2 class="title">{{title}}11</h2>
    <div class="video">
        <iframe
        :src="videoSrc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ></iframe>
  </div>
  <div class="photo">
    {{ photo }}
    hello
  </div>
    <div class="cookingDetail">
        <p>Energy: {{energy}}</p>
        <p>CookingTime:{{cookingtime}}</p>
    </div>
    <div class="cookingstep">
        <h3>Here is the cooking steps:</h3>
        <p>{{cookingstep}}</p>
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
            cookingstep:''
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
}
.title{
    margin: 1rem 0;
    text-align: center;
    background-color: rgb(240, 255, 255,0.3);
}
iframe{
    width: 36rem;
    height: 16rem;
}
.cookingDetail{
    background-color: rgb(240, 255, 255,0.3);
    width:36rem;
    margin: 1rem 0;
}
.cookingDetail p{
    padding: 0.5rem;
    
}
.cookingstep{
    width:36rem;
    padding: 0.5rem 0;
    background-color: rgb(240, 255, 255,0.5);
}
</style>