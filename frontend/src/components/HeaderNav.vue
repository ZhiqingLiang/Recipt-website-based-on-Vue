<template>
  <el-header class="header">
        <el-menu class="topMenu" mode="horizontal">
          <!-- //将点击事件传送给父组件 -->
          <el-button size="mini" round @click="$emit('toggleSidebar')" class="toggle-button">{{ isCollapsed ? 'Expand' : 'Collapse' }}</el-button> 
          <el-menu-item index="1" class="itemMenu"  @click="$router.push('/')">About</el-menu-item>
          <el-menu-item index="2" class="itemMenu">Language</el-menu-item>
          <el-menu-item index="3" class="itemMenu">Logout</el-menu-item>
        </el-menu>
    </el-header>        
</template>

<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.header {
    background-color: #F6F5F2;
    height: 6rem;
  }
  .header .topMenu{
    display: flex;
    justify-content: flex-end; 
    background-color: #F6F5F2 ; 
  }
  .topMenu .itemMenu{
    /* margin-left: 30px;  */
    color: rgb(7, 7, 7);
    font-size: 18px;
  }
  .toggle-button {
    display: none;
}

@media (max-width: 768px) {
  .toggle-button {
    display: block;
    background-color:  rgb(255,255,255,0.6);;
    color: black;
    border: none;
    width: 2rem;
    /* padding: 0.5rem; */
   
  }
}

</style>