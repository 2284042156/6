<template>
  <div class="left-menu">
    <!-- <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
      background="#ccc"
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
    </el-menu> -->
    <ul>
      <li
        @click="link('/home/homemange')"
        :class="{ active: address == '/home/homemange' ? true : false }"
      >
        <i class="el-icon-s-home"></i>首页管理
      </li>
      <li
        @click="link('/home/columnmange')"
        :class="{ active: address == '/home/columnmange' ? true : false }"
      >
        <i class="el-icon-s-operation"></i>栏目管理
      </li>
      <li
        @click="link('/home/contentmange/')"
        :class="{
          active: address.indexOf('/home/contentmange/') > -1 ? true : false,
        }"
      >
        <i class="el-icon-tickets"></i>内容管理
      </li>
    </ul>
  </div>
</template>

<script>
import { allColumn } from "@/apis/request.js";
export default {
  data() {
    return {
      address: "/home/homemange",
    };
  },
  methods: {
    link(a) {
      if (a == "/home/contentmange/") {
        allColumn().then((res) => {
          this.listData = res;
          this.$store.state.styleType = res[0].styleType;
          this.$store.state.columnid = res[0].id;
          // console.log(this.$store.state.columnid)
          this.$router.push(a + this.$store.state.columnid);
        });
      } else {
        this.$router.push(a);
      }

      this.address = a;
    },
  },
  created() {
    console.log(this.$route,666);
    this.address =this.$route.path;
    allColumn().then((res) => {
      this.listData = res;
      this.$store.state.styleType = res[0].styleType;
      this.$store.state.columnid = res[0].id;
    });
  },
};
</script>

<style lang="less">
.left-menu {
  height: 100%;
  ul {
    padding: 0px;
 
  }
  li {
    list-style: none;
    width: 200px;
    line-height: 80px;
    background: #fff;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 20px;

  }
  li:hover {
    background: rgb(150, 211, 235);
    color: #fff;
  }
  // .el-menu{
  //     border:0;
  // }
  // text-align: center;
  //  .el-menu-item{
  //    margin-bottom: 10px;
  //   //  background: rgb(243, 241, 241);
  //    height: 80px;
  //    line-height: 80px;
  //    font-size: 18px;

  //    i{
  //     height: 21px;
  //    }
  //    *{
  //      vertical-align: inherit;
  //    }
  //  }
  .active {
    background: rgb(150, 211, 235);
    color: #fff;
  }
}
</style>
