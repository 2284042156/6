<template>
  <div id="ply">
<el-container>
  <el-header height="80px"><Topbar/></el-header>
  <el-container id="box">
    <LeftMenu  v-if="!fun"/>
    <el-main>
    <router-view/>
    </el-main>
  </el-container>
</el-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
 import LeftMenu from '@/components/LeftMenu.vue'
 import Topbar from '@/components/Topbar.vue'

export default {
  name: 'Home',
  data(){
    return{
       title:["/home/addtitle","/home/editphoto"]
    }
  },
  components: {
    // HelloWorld
    LeftMenu,
    Topbar
  },
  computed:{
      fun(){
         return this.title.includes(this.$route.path)
      }
  }
}
</script>
<style lang="less" scoped>

#ply{
  background: #f8f8f8;
}
#ply,.el-container,.el-header{
  padding:0 ;
}

.el-container .el-main{
  margin-left: 20px;
  padding: 50px;
  overflow: visible;
 background: #fff;
}
.el-header{
  background: #333;
}
#box{
  width: 1300px;
  margin:  0 auto;
  margin-top: 20px;
}
</style>
