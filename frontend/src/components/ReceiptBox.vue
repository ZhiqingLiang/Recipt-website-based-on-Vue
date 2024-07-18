// Date:2024/7/16
// author:Zhiqing Liang

//This is a template about receipt
<template> 
<ul class="boxlist">
    <li class="box" v-for="(box,index) in boxes" :key="index">
        <a href="#">
            <div class="image">
                <img src="" alt="img">
            </div>
        </a>
        <div class="txt">
            <h3 class="title">{{box.title}}</h3>
            <p class="energy">Energy:{{box.energy}}</p>
            <p class="cookingtime">CookingTime:{{box.cookingtime}}</p>
        </div>
  </li>
</ul>
  
</template>

<script>
export default {
    name: 'ReceiptBox',
    data(){
        return{
            boxes:[
                {image:'',title:'Rice',energy:'500Kcal',cookingtime:'30mins'},
            ]
        }
    }
}
</script>


<style scoped>
.boxlist{
    display: flex;
    list-style-type: none; /* 移除ul的默认列表样式 */
    flex-wrap: wrap; /* 如果盒子多于三个，会自动换行 */
    justify-content: space-between; /* 在每个盒子之间均匀分布空白 */
    padding: 0;
    margin: 0;
}
.box{
    justify-content: space-between;
    width: 13rem;
    height: 16rem;
    background-color: aliceblue;
    margin: 1rem 1.5rem;
    padding-left: 1rem;
}
.box img{
    width: 100%;
    height: 12rem;
}
.box .txt{
    font-size: 16px;
} 
</style>