<template>
  <div class="menu-tree">
    <label v-for="list in dataList" :key="list.id">
      <el-submenu :index="list.id" v-if="list.children.length != 0">
        <template slot="title">
          <span>{{ list.columnName }}</span>
        </template>
        <label>
          <Child :dataList="list.children"></Child>
        </label>
      </el-submenu>
      <el-menu-item v-else :index="list.id" @click="getColumnmessage(list.id)">
        <span slot="title">{{ list.columnName }}</span>
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
          returnColumn(id).then(res=>{
         this.$store.state.styleType=res[0].styleType;
      })

      getColumnarticle(id).then((res) => {
        this.$store.state.article = res;
      });
      console.log(id);
    },

  },
};
</script>
<style lang="less" scoped>
// .el-menu-item.is-active{
//   color:#303133;
// }
</style>
