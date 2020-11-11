<template>
  <div class="left-menu">
    <ul>
      <li
        @click="link('/home/homemange')"
        :class="{ active: $route.path.indexOf('/home/homemange')>-1   ? true : false }">
      
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
import { allColumn } from "@/apis/request.js";//导入所有栏目名
export default {
  data() {
    return {
      address: "/home/homemange",
    };
  },
  methods: {
    link(a) {
      if (a == "/home/contentmange/") {//如果页面是内容管理，
        allColumn().then((res) => {
          console.log("res=>",res)
          this.listData = res;//内容管理二级栏目所有数据
          this.$store.state.styleType = res[0].styleType;//资源样式，文本/样式
          this.$store.state.columnid = res[0].id;//栏目id
          // console.log(this.$store.state.columnid)
          this.$router.push(a + this.$store.state.columnid);//二级栏目
        });
      } else {
        this.$router.push(a);
      }

      this.address = a;
    },
  },
  // created() {
  //   console.log(this.$route,666);
  //   this.address =this.$route.path;
  // },
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
  .active {
    background: rgb(150, 211, 235);
    color: #fff;
  }
}
</style>
