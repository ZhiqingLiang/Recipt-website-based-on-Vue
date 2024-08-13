//Date:2024/7/3
//Author:Zhiqing Liang


<template>
  <el-header class="header">
        <el-menu class="topMenu" mode="horizontal">
          <!-- send data to parent component -->
          <!-- The button appears depending on the size of the screen -->
          <el-button size="mini" round @click="$emit('toggleSidebar')" class="toggle-button">{{ isCollapsed ? '>' : '<' }}</el-button> 
          <el-menu-item index="1" class="itemMenu"  @click="$router.push('/')">About</el-menu-item>
          <el-menu-item index="2" class="itemMenu">
            <el-dropdown @command="language">
              <span class="el-dropdown-link">
                language <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">Chinese</el-dropdown-item>
              <el-dropdown-item command="zh">English</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item index="3" class="itemMenu" @click="Logout">Logout</el-menu-item>
        </el-menu>
    </el-header>        
</template>

<script>
import { EventBus } from '@/eventBus';
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      required: true,
    },
  },
  methods:{
    Logout(){
      // clear login data
      localStorage.removeItem('isLoggedIn');
      // re-route to login page
      this.$router.push({ name: 'LoginView' });
    },
    language(lang){
      // this.$i18n.locale = lang;
      EventBus.$emit('language', lang);
    }
  }
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
  .el-dropdown-link {
    cursor: pointer;
    color:  rgb(7, 7, 7) ;
    font-size: 18px;
  }
  .el-icon-arrow-down {
    font-size: 14px;
  }

@media (max-width: 768px) {
  .toggle-button {
    display: block;
    background-color:  rgb(255,255,255,0.6);;
    color: black;
    border: none;
    width: 2rem;
   
  }
  .topMenu{
    text-align: center;
  }

}

</style>