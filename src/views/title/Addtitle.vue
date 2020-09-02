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
          <quill-editor
            ref="text"
            v-model="form.textContent"
            class="myQuillEditor"
            :options="editorOption"
          />
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        <el-button type="primary" round @click="add()">确认</el-button>
        <el-button type="info" round @click="cancel()">取消</el-button>
      </el-form>
      <!-- <el-form :model="form">
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
          <quill-editor
            ref="text"
            v-model="form.textContent"
            class="myQuillEditor"
            :options="editorOption"
          />
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        <el-button type="primary" round @click="add()">确认</el-button>
        <el-button type="info" round @click="cancel()">取消</el-button>
      </el-form> -->
    </div>
    <div class="album albumvideo">
      <div>
        <p class="type_title">
          <span>视频介绍</span>
        </p>
        <div class="pic_img">
          <div class="pic_img_box">
            <el-upload
              class="avatar-uploader"
              action="http://liuwanr.cn:8080/msdw/upload/uploadImage"
              v-bind:data="{ FoldPath: '上传目录', SecretKey: '安全验证' }"
              v-bind:on-progress="uploadVideoProcess"
              v-bind:on-success="handleVideoSuccess"
              v-bind:before-upload="beforeUploadVideo"
              v-bind:show-file-list="false"
            >
              <video
                v-if="videoForm.showVideoPath != '' && !videoFlag"
                v-bind:src="videoForm.showVideoPath"
                class="avatar video-avatar"
                controls="controls"
              >
                您的浏览器不支持视频播放
              </video>
              <i
                v-else-if="videoForm.showVideoPath == '' && !videoFlag"
                class="el-icon-plus avatar-uploader-icon"
              ></i>
              <el-progress
                v-if="videoFlag == true"
                type="circle"
                v-bind:percentage="videoUploadPercent"
                style="margin-top:7px;"
              ></el-progress>
            </el-upload>
          </div>
        </div>
      </div>
      <p class="Upload_pictures">
        <span></span>
        <span>最多可以上传1个视频，建议大小50M，推荐格式mp4</span>
      </p>
    </div>
    <el-form :model="formlink">
      <el-form-item label="封面图" :label-width="formLabelWidth">
        <el-upload
          class="avatar-uploader"
          action="https://192.168.31.180:8081/upload/uploadImage"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="formlink.bgImgUrl"
            :src="formlink.bgImgUrl"
            class="avatar"
            width="200px"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item
        label="连接类型"
        :label-width="formLabelWidth"
        prop="linkclass"
      >
        <el-radio-group v-model="formlink.linkclass">
          <el-radio label="站内链接"></el-radio>
          <el-radio label="站外链接"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        prop="in"
        label="站内链接"
        :label-width="formLabelWidth"
        v-if="formlink.linkclass == '站内链接'"
      >
        <el-cascader
          v-model="formlink.in"
          :props="{ checkStrictly: true }"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item
        prop="out"
        label="站外链接"
        :label-width="formLabelWidth"
        v-if="formlink.linkclass == '站外链接'"
      >
        <el-input v-model="formlink.out" placeholder="请输入链接"></el-input>
      </el-form-item>

      <el-button type="primary" round @click="add()">确认</el-button>
      <el-button type="info" round @click="cancel()">取消</el-button>
    </el-form>
  </div>
</template>

<script>
import { addArticle } from "@/apis/request.js";
import { quillEditor } from "vue-quill-editor";
import { allColumn } from "@/apis/request.js";
import moment from "moment";

export default {
  data() {
    return {
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: "",
      },
      content: "",
      editorOption: {},
      form: {
        bgImgUrl: "",
        title: "",
        createTime: "",
        description: "",
        textContent: null,
      },
      formlink: {
        title: "",
        linkclass: "",
        out: "",
        in: [],
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      formLabelWidth: "90px",
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    //上传前回调
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;
      console.log(fileSize);
      // if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
      //     layer.msg("请上传正确的视频格式");
      //     return false;
      // }
      // if (!fileSize) {
      //     layer.msg("视频大小不能超过50MB");
      //     return false;
      // }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      console.log(res, file);
      //前台上传地址
      // if (file.status == 'success' ) {
      //    this.videoForm.showVideoPath = file.url;
      // } else {
      //     layer.msg("上传失败，请重新上传");
      // }

      //后台上传地址
      // if (res.Code == 0) {
      //     this.videoForm.showVideoPath = res.Data;
      // } else {
      //     layer.msg(res.Message);
      // }
    },

    submit() {
      console.log(this.$refs.text.value);
    },
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
  mounted() {
    allColumn().then((res) => {
      console.log(res);
      this.tableData = res;
      this.options = res.map((item) => {
        item.label = item.columnName;
        item.value = item.id;
        if (item.children.length > 0) {
          item.children = item.children.map((item) => {
            if (item.children.length == 0) {
              delete item.children;
            }
            item.label = item.columnName;
            item.value = item.id;
            return item;
          });
        } else {
          delete item.children;
        }
        return item;
      });
    });
  },
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
  .ql-container {
    height: 300px;
  }
}
</style>
