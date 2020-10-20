<template>
  <div class="left-menu">
    <ul>
      <li
        @click="link('/home/homemange')"
        :class="{ active: $route.path.indexOf('/home/homemange')>-1   ? true : false }"
      >
       <img  src="../assets/images/leftbar_icon_home_white.png" alt="" v-if="$route.path.indexOf('/home/homemange')>-1">
        <img  src="../assets/images/leftbar_icon_home_blue.png" alt="" v-else>
       
        
        首页管理
      </li>
      <li
        @click="link('/home/columnmange')"
        :class="{ active: $route.path.indexOf('/home/columnmange')>-1 ? true : false }"
      >
        <img  src="../assets/images/leftbar_icon_index_white.png" alt="" v-if="$route.path.indexOf('/home/columnmange')>-1">
       <img  src="../assets/images/leftbar_icon_index_blue.png" alt="" v-else>
     
       栏目管理
      </li>
      <li
        @click="link('/home/contentmange/')"
        :class="{
          active: address.indexOf('/home/contentmange/') > -1 ? true : false,
        }"
      >   <img  src="../assets/images/leftbar_icon_messages_white.png" alt="" v-if="$route.path.indexOf('/home/contentmange/')>-1">
          <img  src="../assets/images/leftbar_icon_messages_blue.png" alt="" v-else>
       
          内容管理
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
    // allColumn().then((res) => {
    //   this.listData = res;
    //   this.$store.state.styleType = res[0].styleType;
    //   this.$store.state.columnid = res[0].id;
    // });

  },
};
</script>

<style lang="less">
.left-menu {
  // color: #000;
  height: 100%;
  ul {
    padding: 0px;
    margin: 0px;
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
