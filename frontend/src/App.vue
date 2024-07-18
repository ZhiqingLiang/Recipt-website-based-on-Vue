<template>
  <div id="App">
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