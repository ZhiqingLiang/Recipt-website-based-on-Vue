<template>
  <el-header class="header">
        <el-menu class="topMenu" mode="horizontal">
            <el-menu-item index="1" class="itemMenu"  @click="$router.push('/')">About</el-menu-item>
            <el-menu-item index="2" class="itemMenu">Language</el-menu-item>
            <el-menu-item index="3" class="itemMenu">theme</el-menu-item>
            <el-menu-item index="4" class="itemMenu">Logout</el-menu-item>
        </el-menu>
    </el-header>        
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    background-color: #F6F5F2;
    height: 6rem;
  }
  .topMenu{
    display: flex;
    justify-content: flex-end; 
    background-color: #F6F5F2 ; 
  }
  .topMenu .itemMenu{
    margin-left: 40px; 
    color: rgb(7, 7, 7);
    font-size: 20px;
  }

</style>