// Date:2024/7/1
// Author:Zhiqing Liang

<template>
  <div id="App">
    <div v-if="isLoginPage">
       <router-view />
      </div>
      <HeaderNav  @toggleSidebar="toggleSidebar"  :isCollapsed="isCollapsed"></HeaderNav>
      <div class="content">
        <SidePanel :isCollapsed="isCollapsed"></SidePanel>
        <div class="main">
          <router-view/>
        </div>
      </div>
      <Footer></Footer>
    
  </div>
</template>

<script>
import { EventBus } from '@/eventBus';

export default {
  created() {
    EventBus.$on('language', this.language);
  },
  beforeDestroy() {
    EventBus.$off('language', this.language);
  },
  mounted(){
    this.restore();
    window.addEventListener('resize', this.restore);
  },
  data(){
    return{
      isCollapsed:false //父组件监听来自导航栏的按钮事件
    }
  },
  methods:{
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    restore(){
        if(window.innerWidth>768 ){
            this.isCollapsed = true;
        }else{
          this.isCollapsed=false;
        }
    },
    language(lang) {
      this.$i18n.locale = lang;
    },
  },
  
  computed:{
    // 判断当前路由是否是登录页面
    isLoginPage(){
      return this.$route.path === '/LoginView'
    }
  }
}
</script>

<style scoped>
#App{
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  flex: 1;
}
.SidePanel{
  width: 12rem;
}
.main{
  flex: 1;
}
HeaderNav Footer{
  flex-shrink: 0;
}


</style>