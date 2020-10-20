<template>
  <div class="menu-tree">
    <label v-for="list in dataList" :key="list.id">
      <el-submenu :index="list.id" v-if="list.children.length != 0">
        <template slot="title">
           <img src="../assets/images/icon_submenu_blue.png" v-if="$route.params.id==list.id" alt="">
           <img src="../assets/images/icon_submenu_black.png" v-else alt="" >  <span :class="{acitive:$route.params.id==list.id}">{{ list.columnName }}</span>
        </template>
        <label>
          <Child :dataList="list.children"></Child>
        </label>
      </el-submenu>
      <el-menu-item v-else :index="list.id" @click="getColumnmessage(list.id)">
       <img src="../assets/images/icon_submenu_blue.png" v-if="$route.params.id==list.id" alt="">
       <img src="../assets/images/icon_submenu_black.png" v-else alt="" ><span slot="title">{{ list.columnName }}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
import { getColumnarticle } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";

export default {
  name: "Child",
  props: ["dataList"],

  data() {
    return {
      id: 12,
    };
  },
  methods: {
    getColumnmessage(id) {
      this.id = id;
        this.$store.state.columnid = id;
          localStorage.setItem('columnid',id)
          this.$router.push({
        path:
         '/home/contentmange/' + id,
      });
          returnColumn(id).then(res=>{
         this.$store.state.styleType=res[0].styleType;
            localStorage.setItem(
                    "style",
                    res[0].styleType
                  );
       
      })
      getColumnarticle(id,1).then((res) => {
        this.$store.state.article = res.list;
         this.$store.state.total=res.total
      });
    
      console.log(id);
    },

  },
};
</script>
<style lang="less" scoped>
.el-menu-item{
font-family: 'Source Han Sans CN';
}
.el-submenu__title{
  font-family:'Source Han Sans CN' ;
}
img{
  // margin-top: 2px;
  // display: inline-block;
  margin-right: 4px;
  margin-bottom: -3px;
  
}
.acitive{
  color: #409EFF;
}
</style>
