<template>
  <div class="photocontent">
    <div class="top">
      <span class="title"><i class="el-icon-tickets"></i>新增文章</span>
      <div>
        <a href="#/home/contentmange">&lt;&emsp;返回</a>
      </div>
    </div>
    <div class="contentbottom">
      <el-form :model="form">
        <el-form-item label="封面图" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://192.168.31.180:8081/upload/uploadImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="form.bgImgUrl"
              :src="form.bgImgUrl"
              class="avatar"
              width="200px"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <!-- <img id="preview" :src="imageUrl" width="250px" height="60px"/>
          <a href="javascript:;" class="file gradient">
          <input id="pop_file" type="file" accept=".jpg,.jpeg,.png" v-on:change="uploadFile($event)" name="fileTrans" ref="file" value="" />选择文件</a> -->
        </el-form-item>
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.createTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="来源" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <!-- <quill-editor v-model="form.content" ref="myQuillEditor" style="height: 300px;" :options="editorOption">
      </quill-editor> -->
          <!-- <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>  -->
          <el-input v-model="form.textContent" autocomplete="off"></el-input>
        </el-form-item>
        <el-button type="primary" round @click="add()">确认</el-button>
        <el-button type="info" round @click="cancel()">取消</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { addArticle } from "@/apis/request.js";
import moment from "moment";

export default {
  data() {
    return {
      imageUrl: "0.jpg",
      form: {
        bgImgUrl: "",
        title: "",
        createTime: "",
        description: "",
        textContent: null,
      },
      formLabelWidth: "90px",
      editorOption: {},
    };
  },
  methods: {
    handleAvatarSuccess(res) {
      this.form.bgImgUrl = res.imgUrl;
    },
    add() {
      var form = this.form;
      var date = moment(form.createTime).format("YYYY-MM-DD");
      form.createTime = date;
      form.columnId = this.this.$store.state.addarticleid;
      addArticle(form).then((res) => {
        console.log(res);
      });
      console.log(this.$store.state.addarticleid);
    },
  },
  mounted() {},
};
</script>

<style lang="less">
.photocontent {
  height: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
    a {
      text-decoration: none;
      color: skyblue;
    }
  }
  .contentbottom {
    margin-top: 20px;
    .file {
      position: relative;
      display: inline-block;
      background: skyblue;
      padding: 4px 20px;
      overflow: hidden;
      text-decoration: none;
      text-indent: 0;
      line-height: 20px;
      border-radius: 20px;
      color: #fff;
      font-size: 13px;
      margin-left: 18px;
    }
    .file input {
      position: absolute;
      font-size: 100px;
      left: 0;
      top: 0;
      opacity: 0;
    }
    .el-input__inner {
      width: 350px;
    }
  }
  .el-form-item__label {
    vertical-align: inherit;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
