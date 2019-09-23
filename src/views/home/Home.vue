<template>
  <div class="home">
    <div class="footer">
      <div>
        <span class="icon-fonts-shouye"></span>
        <router-link to="/">首页</router-link> 
      </div>
     <div>
       <span>
          <router-link to="/">专题</router-link> 
       </span>
     </div>
     <div>
       <span></span>
        <router-link to="/">分类</router-link> 
     </div>
     <div>
       <span></span>
        <router-link to="/">购物车</router-link> 
     </div>
      <div>
        <span></span>
        <router-link to="/">我的</router-link> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  components: {
    
  },
});
</script>

<style>

.footer{
  position: fixed;
  width:100%;
  height:40px;
  bottom:0;
  left:0;
  display: flex;
  justify-content: space-around;
  background: #fff;
  z-index: 99;
}

.footer a{
  color:#333;
}
</style>
