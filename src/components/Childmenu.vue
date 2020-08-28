<template>
  <div class="menu-tree">
    <el-menu
      :default-active="id"
      unique-opened
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <label v-for="list in dataList" :key="list.id">
        <el-submenu :index="list.id" v-if="list.children.length != 0">
          <template slot="title">
            <!-- <i class="el-icon-location" v-if="list.level"></i> -->
            <span>{{ list.columnName }}</span>
          </template>
          <label>
            <child-menu :dataList="list.children"></child-menu>
          </label>
        </el-submenu>
        <el-menu-item
          v-else
          :index="list.id"
          @click="getColumnmessage(list.id)"
        >
          <span slot="title">{{ list.columnName }}</span>
        </el-menu-item>
      </label>
    </el-menu>
  </div>
</template>

<script>
import { getColumnarticle } from "@/apis/request.js";
export default {
  name: "childMenu",
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
      getColumnarticle(id).then((res) => {
        this.$store.state.article = res;
      });
    },
    handleOpen(key) {
      this.$store.state.columnid = key;
      this.id = key;
      getColumnarticle(key).then((res) => {
        console.log(res, 1);
        this.$store.state.article = res;
      });
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      this.id = key;
      this.$store.state.columnid = key;
      getColumnarticle(key).then((res) => {
        this.$store.state.article = res;
      });
    },
  },
};
</script>
