<template>
    <el-aside>
        <el-menu class="sidePanel">
            <el-menu-item index="1">
                <i class="el-icon-dish"></i>
                <span slot="title">Chinese Cuisine</span>
            </el-menu-item>
            <el-menu-item index="1-1" class="dishes">
                <i class="el-icon-tableware"></i>
                <span slot="title" @click="$router.push('/CNoodleR')">Noodles</span>
            </el-menu-item>
            <el-menu-item index="1-2" class="dishes">
                <i class="el-icon-food"></i>
                <span slot="title" @click="$router.push('/CRiceR')">Stewed Rice</span>
            </el-menu-item>

             <el-menu-item index="2">
                <i class="el-icon-dish"></i>
                <span slot="title">Italian Cuisine</span>
            </el-menu-item>
            <el-menu-item index="2-1" class="dishes">
                <i class="el-icon-fork-spoon"></i>
                <span slot="title"  @click="$router.push('/IPastaR')">Pasta</span>
            </el-menu-item>
            <el-menu-item index="2-2" class="dishes">
                <i class="el-icon-knife-fork"></i>
                <span slot="title" @click="$router.push('/ISaladR')">Salad</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-dish"></i>
                <span slot="title">Customized Menu</span>
            </el-menu-item>
            <el-menu-item index="3-1" class="dishes">
                <i class="el-icon-lollipop"></i>
                <span slot="title"  @click="$router.push('/CustomizedR')">AI Generator</span>
            </el-menu-item>

            <el-menu-item index="4">
                <i class="el-icon-chat-round"></i>
                <span slot="title" @click="$router.push('/BookAMeeting')">Book a supervisor</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidePanel{
    height: 100vh;
    background-color:#F0EBE3;
}
.sidePanel .el-menu-item{
    font-size: 18px;
    padding-bottom: 8px;
}
.dishes{
    margin-left: 30px;
}
.el-aside{
    width: 12rem;
}
</style>