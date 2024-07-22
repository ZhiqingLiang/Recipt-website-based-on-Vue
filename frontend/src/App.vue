<template>
  <div id="App">
    <div v-if="isLoginPage">
       <router-view />
      </div>
      <HeaderNav></HeaderNav>
      <div class="content">
        <SidePanel></SidePanel>
        <div class="main">
          <router-view/>
        </div>
      </div>
      <Footer></Footer>
    
  </div>
</template>

<script>
export default {
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
SidePanel{
  width: 12rem;
}
.main{
  flex: 1;
}
HeaderNav Footer{
  flex-shrink: 0;
}

</style>