<template>
  <div class="left-menu">
      <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
        <el-menu-item index="/home/homemange">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页管理</span>
      </el-menu-item>
      <el-menu-item :index="address">
        <i class="el-icon-s-operation"></i>
        <span slot="title">栏目管理</span>
      </el-menu-item>
      <el-menu-item index="/home/contentmange">
        <i class="el-icon-tickets"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
 data(){
    return {
     address:"/home/columnmange"
    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },

};
</script>

<style lang="less">
    .left-menu{
      height: 100%;
        .el-menu{
            border:0;
        }
        text-align: center;
       .el-menu-item{
         margin-bottom: 10px;
         background: rgb(243, 241, 241);
         height: 80px;
         line-height: 80px;
         font-size: 18px;
         i{
          height: 21px;
         }
         *{
           vertical-align: inherit;
         }
       }
    }
</style>