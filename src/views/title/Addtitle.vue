<template>
  <div>
    <div class="photocontent" v-if="show == 1">
      <div class="top">
        <span class="title"><i class="el-icon-tickets"></i>新增文章</span>
        <div>
          <span @click="back()">&lt;&emsp;返回</span>
        </div>
      </div>
      <div class="contentbottom">
        <el-form :model="photoForm" :rules="rules" ref="photoForm">
          <el-form-item
            label="封面图"
            :label-width="formLabelWidth"
            prop="bgImgUrl"
          >
            <el-upload
              class="avatar-uploader"
              :action="joggle"
              :show-file-list="false"
              :on-success="handlePhotoSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="photoForm.bgImgUrl"
                :src="photoForm.bgImgUrl"
                class="avatar"
                width="200px"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <!-- <img id="preview" :src="imageUrl" width="250px" height="60px"/>
          <a href="javascript:;" class="file gradient">
          <input id="pop_file" type="file" accept=".jpg,.jpeg,.png" v-on:change="uploadFile($event)" name="fileTrans" ref="file" value="" />选择文件</a> -->
          </el-form-item>
          <el-form-item
            label="文章标题"
            :label-width="formLabelWidth"
            prop="title"
          >
            <el-input v-model="photoForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="日期" :label-width="formLabelWidth">
            <el-col>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="photoForm.createTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item
            label="来源"
            :label-width="formLabelWidth"
            prop="description"
          >
            <el-input
              v-model="photoForm.description"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- <quill-editor v-model="form.content" ref="myQuillEditor" style="height: 300px;" :options="editorOption">
      </quill-editor> -->
          <!-- <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>  -->
          <el-form-item
            label="文章内容"
            :label-width="formLabelWidth"
            prop="textContent"
          >
            <quill-editor
              ref="text"
              v-model="photoForm.textContent"
              class="myQuillEditor"
              :options="editorOption"
            />
          </el-form-item>

          <div class="footer">
            <el-button type="primary" @click="photoAdd('photoForm')"
              >确认</el-button
            >
            <el-button type="info" @click="cancel()">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
    <div class="photocontent" v-else-if="show== 0">
      <div class="top">
        <span class="title"><i class="el-icon-tickets"></i>新增文章</span>
        <div>
          <span @click="back()">&lt;&emsp;返回</span>
        </div>
      </div>
      <div class="contentbottom">
        <el-form :model="videoForm" :rules="rules" ref="videoForm">
          <el-form-item
            label="封面图"
            :label-width="formLabelWidth"
            prop="bgImgUrl"
          >
            <el-upload
              class="avatar-uploader"
              :action="joggle"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="videoForm.bgImgUrl"
                :src="videoForm.bgImgUrl"
                class="avatar"
                width="200px"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item
            label="文章标题"
            :label-width="formLabelWidth"
            prop="title"
          >
            <el-input v-model="videoForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="日期" :label-width="formLabelWidth">
            <el-col>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="videoForm.createTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item
            label="来源"
            :label-width="formLabelWidth"
            prop="description"
          >
            <el-input
              v-model="videoForm.description"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="视频"
            :label-width="formLabelWidth"
            prop="videoUrl"
          >
            <el-upload
              class="avatar-uploader"
              :action="joggle"
              v-bind:data="{ FoldPath: '上传目录', SecretKey: '安全验证' }"
              v-bind:on-progress="uploadVideoProcess"
              v-bind:on-success="handleVideoSuccess"
              v-bind:before-upload="beforeUploadVideo"
              v-bind:show-file-list="false"
            >
              <video
                v-if="videoForm.videoUrl != '' && !videoFlag"
                v-bind:src="videoForm.videoUrl"
                class="avatar video-avatar"
                controls="controls"
              >
                您的浏览器不支持视频播放
              </video>
              <i
                v-else-if="videoForm.videoUrl == '' && !videoFlag"
                class="el-icon-plus avatar-uploader-icon"
              ></i>
              <el-progress
                v-if="videoFlag == true"
                type="circle"
                v-bind:percentage="videoUploadPercent"
                style="margin-top:7px;"
              ></el-progress>
            </el-upload>
          </el-form-item>
          <el-form-item
            label="文章内容"
            :label-width="formLabelWidth"
            prop="textContent"
          >
            <quill-editor
              ref="text"
              v-model="videoForm.textContent"
              class="myQuillEditor"
              :options="editorOption"
            />
          </el-form-item>
          <div class="footer">
            <el-button type="primary" @click="videoAdd('videoForm')"
              >确认</el-button
            >
            <el-button type="info" @click="cancel()">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
    <div class="photocontent" v-if="show== 2">
      <div class="top">
        <span class="title"><i class="el-icon-tickets"></i>新增文章</span>
        <div>
          <span @click="back()">&lt;&emsp;返回</span>
        </div>
      </div>
      <div class="contentbottom">
        <el-form :model="linkForm" :rules="rules" ref="linkForm">
          <el-form-item
            label="封面图"
            :label-width="formLabelWidth"
            prop="bgImgUrl"
          >
            <el-upload
              class="avatar-uploader"
              :action="joggle"
              :show-file-list="false"
              :on-success="handleLinkSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="linkForm.bgImgUrl"
                :src="linkForm.bgImgUrl"
                class="avatar"
                width="200px"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="日期" :label-width="formLabelWidth">
            <el-col>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="linkForm.createTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item
            label="连接类型"
            :label-width="formLabelWidth"
            prop="linkType"
          >
            <el-radio-group v-model="linkForm.linkType">
              <el-radio :label="0">站内链接</el-radio>
              <el-radio :label="1">站外链接</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            prop="value"
            label="站内链接"
            :label-width="formLabelWidth"
            v-if="linkForm.linkType == 0"
          >
            <el-cascader
              :change-on-select="true"
              :props="defaultParams"
              :options="options"
              v-model="value"
              @change="handleChange"
              :clearable="true"
            ></el-cascader>
          </el-form-item>
          <el-form-item
            label="文章"
            :label-width="formLabelWidth"
            v-if="linkForm.linkType == 0"
            prop="linkArticleId"
          >
            <el-select v-model="linkForm.linkArticleId" placeholder="请选择">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            prop="linkUrl"
            label="站外链接"
            :label-width="formLabelWidth"
            v-if="linkForm.linkType == 1"
          >
            <el-input
              v-model="linkForm.linkUrl"
              placeholder="请输入链接"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="文章标题"
            :label-width="formLabelWidth"
            prop="title"
          >
            <el-input v-model="linkForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <div class="footer">
            <el-button type="primary" @click="linkAdd('linkForm')"
              >确认</el-button
            >
            <el-button type="info" @click="cancel()">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
// import { editArticle } from "@/apis/request.js";
import { quillEditor } from "vue-quill-editor";
import { allColumn } from "@/apis/request.js";
import moment from "moment";
import { getColumnarticle } from "@/apis/request.js";
import { addArticle } from "@/apis/request.js";
import { getColumnallarticle } from "@/apis/request.js";
import { joggle } from "@/apis/request.js";
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      rules: {
        bgImgUrl: [
          { required: true, message: "请上传图片", trigger: "change" },
        ],
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        textContent: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入来源", trigger: "blur" },
        ],
        videoUrl: [{ required: true, message: "请上传视频", trigger: "blur" }],
        linkType: [
          { required: true, message: "请选择链接类型", trigger: "blur" },
        ],
        value: [{ required: true, message: "请选择站内链接", trigger: "blur" }],
        linkArticleId: [
          { required: true, message: "请选择链接文章", trigger: "blur" },
        ],
        linkUrl: [
          { required: true, message: "请输入站外链接", trigger: "blur" },
        ],
      },
      joggle,
      defaultParams: {
        label: "columnName",
        value: "id",
        children: "children",
      },
      value: "",
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
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
      option: [],
      photoForm: {
        bgImgUrl: "",
        title: "",
        createTime: "",
        description: "",
        textContent: null,
      },
      videoForm: {
        videoUrl: "",
        bgImgUrl: "",
        title: "",
        createTime: "",
        description: "",
        textContent: null,
      },
      linkForm: {
        bgImgUrl: "",
        createTime: "2020-08-20",
        linkType: 0,
        linkUrl: "",
        linkColumnId: 0,
        columnId: "",
        title: "",
        linkArticleId: "",
      },
      formLabelWidth: "90px",
      editorOption: {},
      isClear: false,
    };
  },
  methods: {
    handleChange(value) {
      let index = value.length - 1;
      let id = value[index];
      this.linkForm.linkColumnId = value[index];
      getColumnallarticle(id).then((res) => {
        this.option = res.map((res) => {
          return {
            value: res.id,
            label: res.title,
          };
        });
        console.log(res, 1);
      });
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg" || "image/jpg" || "image/png";
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (!isJPG) {
        this.$message.error("图片格式错误!");
      }
      if (!isLt1M) {
        this.$message.error("图片大小不能超过 1MB!");
      }
      return isJPG && isLt1M;
    },
    common() {
      allColumn().then((res) => {
        this.options = this.getTreeData(res);
      });
    },
    getTreeData(data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length < 1) {
          // children若为空数组，则将children设为undefined
          data[i].children = undefined;
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].children);
        }
      }
      return data;
    },
    //上传前回调
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
          "video/mov",
        ].indexOf(file.type) == -1
      ) {
        this.$message.error("上传视频格式错误!");
        return false;
      }
      if (!fileSize) {
        this.$message.error("上传视频大小不能超过 50MB!");
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      this.videoForm.videoUrl = res.data.fileUrl;
    },
    change(val) {
      console.log(val);
    },
    submit() {
      console.log(this.$refs.text.value);
    },
    handlePhotoSuccess(res) {
      // this.photoForm.bgImgUrl = res.imgUrl;
      this.photoForm.bgImgUrl = res.data.fileUrl;
    },
    handleAvatarSuccess(res) {
      // this.videoForm.bgImgUrl = res.imgUrl;
      this.videoForm.bgImgUrl = res.data.fileUrl;
    },
    handleLinkSuccess(res) {
      // this.linkForm.bgImgUrl = res.imgUrl;
      this.linkForm.bgImgUrl = res.data.fileUrl;
    },
    back() {
         let a=localStorage.getItem('columnid')
      this.$router.push("/home/contentmange/" + a);
      return false;
    },
    photoAdd(formName) {
         let a=localStorage.getItem('columnid')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var form = { ...this.photoForm };
          var date = moment(form.createTime).format("YYYY-MM-DD");
          form.createTime = date;
          form.columnId = a;
          addArticle(form).then((res) => {
            console.log(res);
            getColumnarticle(a, 1).then((res) => {
              this.$store.state.article = res;
              this.$router.push(
                "/home/contentmange/" + a
              );
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    videoAdd(formName) {
         let a=localStorage.getItem('columnid')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var form = { ...this.videoForm };
          var date = moment(form.createTime).format("YYYY-MM-DD");
          form.createTime = date;
          form.columnId = a;
          addArticle(form).then((res) => {
            console.log(res);
            getColumnarticle(a, 1).then((res) => {
              this.$store.state.article = res;
              this.$router.push(
                "/home/contentmange/" + a
              );
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    linkAdd(formName) {
         let a=localStorage.getItem('columnid')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var form = { ...this.linkForm };
          var date = moment(form.createTime).format("YYYY-MM-DD");
          form.createTime = date;
          form.columnId = a;
          addArticle(form).then((res) => {
            console.log(res);
            getColumnarticle(a, 1).then((res) => {
              this.$store.state.article = res;
              this.$router.push(
                "/home/contentmange/" + a
              );
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel() {
      let a=localStorage.getItem('columnid')
      this.$router.push("/home/contentmange/" + a);
    },
  },
  computed: {
    show() {
      if (localStorage.getItem("style")) {
        return localStorage.getItem("style");
      }
      else{
        return ''
      }
    },
  },

  mounted() {
    var date = new Date();
    date = moment(date).format("YYYY-MM-DD");
    this.linkForm.createTime = date;
    this.photoForm.createTime = date;
    this.videoForm.createTime = date;
    this.common();
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
    div {
      span {
        color: skyblue;
      }
      span:hover {
        cursor: pointer;
      }
    }
  }
  .contentbottom {
    margin-top: 20px;
    .el-input__inner {
      width: 350px;
    }
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
    height: 178px;
    display: block;
  }
  .video-avatar {
    height: 200px;
  }
  .ql-container {
    height: 300px;
  }
  .footer {
    width: 200px;
    margin: 40px auto;
  }
}
</style>
