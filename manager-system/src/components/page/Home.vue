<template>
  <div>
    <Menu></Menu>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>
<script>
import Menu from '../common/Menu';

export default {
  components: {
    Menu,
  },
};
</script>
<style>
  .content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding:40px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>
