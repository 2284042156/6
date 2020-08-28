<template>
  <div class="column">
    <div class="top">
      <span class="title"
        ><i :class="['el-icon-s-operation']"></i>栏目管理</span
      >
      <div>
        <!-- <span @click="returndata()">添加栏目</span> -->
        <el-button size="mini" @click="handleAdd()">添加栏目</el-button>
      </div>
    </div>
    <div class="addcolumn">
      <p>栏目列表</p>
    </div>
    <div class="mange">
  
      <el-table
        :data="tableData"
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >

        <el-table-column prop="columnName" label="栏目" width="500">
        </el-table-column>
        <el-table-column align="center" label="显示" width="180">
          <template slot-scope="scope">
            <!-- <i
              class="el-icon-view"
              @click="handleDelete(scope.$index, scope.row)"
            ></i> -->
            <img
              v-if="scope.row.isShow == 0"
              src="../../assets/images/btn_visule_n.png"
              alt=""
              width="20px"
              @click="handlehidden(scope.$index, scope.row)"
            />
            <img
              v-if="scope.row.isShow == 1"
              src="../../assets/images/btn_notvisule_n.png"
              alt=""
              width="20px"
              @click="handlehidden(scope.$index, scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <i
              class="el-icon-edit-outline"
              @click="handleEdit(scope.$index, scope.row)"
            ></i>
            <i
              class="el-icon-plus"
              @click="handleAdd(scope.$index, scope.row)"
            ></i>
            <i
              class="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
            ></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 对话框 -->
    <el-dialog
      title="添加栏目"
      :visible.sync="dialogaddFormVisible"
      width="50%"
    >
      <el-form :model="addform" :rules="rules" ref="addform">
        <el-form-item
          label="栏目名称"
          :label-width="formLabelWidth"
          prop="columnName"
        >
          <el-input v-model="addform.columnName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="栏目banner"
          :label-width="formLabelWidth"
          prop="bgImgUrl"
        >
          <!-- <img id="preview" :src="editform.bgImgUrl" width="250px" height="60px" />
          <a href="javascript:;" class="file gradient">
            <input
              id="pop_file"
              type="file"
              accept=".jpg,.jpeg,.png"
              v-on:change="uploadFile($event)"
              name="fileTrans"
              ref="file"
              value=""
            />选择文件</a
          > -->
          <el-upload
            class="avatar-uploader"
            action="https://192.168.31.180:8081/upload/uploadImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccessadd"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="addform.bgImgUrl"
              :src="addform.bgImgUrl"
              class="avatar"
              width="200px"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="展示类型" :label-width="formLabelWidth">
          <el-radio-group v-model="addform.showType">
            <el-radio label="0">
              <img src="../../assets/images/btn_pic_1.png" alt="" />
              <span>图片列表</span>
            </el-radio>
            <el-radio label="1">
              <img src="../../assets/images/btn_pic_2.png" alt="" />
              <span>新闻列表</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详情样式" :label-width="formLabelWidth">
          <el-radio-group v-model="addform.styleType">
            <el-radio label="0">
              <img src="../../assets/images/btn_pic_3.png" alt="" />
              <span>视频详情</span>
            </el-radio>
            <el-radio label="1">
              <img src="../../assets/images/btn_pic_4.png" alt="" />
              <span>富文本</span>
            </el-radio>
            <el-radio label="2">
              <img src="../../assets/images/icon_link.png" alt="" />
              <span>链接</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="设置上级"
          :label-width="formLabelWidth"
          prop="parentId"
        >
          <div class="block">
            <el-cascader
              v-model="addform.parentId"
              :props="{ checkStrictly: true }"
              :options="options"
              @change="handleChange"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="打开方式" :label-width="formLabelWidth">
          <el-radio-group v-model="addform.openMethod">
            <el-radio label="0">当前窗口</el-radio>
            <el-radio label="1">新窗口</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogaddFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addForm()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="修改栏目"
      :visible.sync="dialogeditFormVisible"
      width="50%"
    >
      <el-form :model="editform">
        <el-form-item label="栏目名称" :label-width="formLabelWidth">
          <el-input v-model="editform.columnName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="栏目banner" :label-width="formLabelWidth">
          <!-- <img id="preview" :src="editform.bgImgUrl" width="250px" height="60px" />
          <a href="javascript:;" class="file gradient">
            <input
              id="pop_file"
              type="file"
              accept=".jpg,.jpeg,.png"
              v-on:change="uploadFile($event)"
              name="fileTrans"
              ref="file"
              value=""
            />选择文件</a
          > -->
          <el-upload
            class="avatar-uploader"
            action="https://192.168.31.180:8081/upload/uploadImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="editform.bgImgUrl"
              :src="editform.bgImgUrl"
              class="avatar"
              width="200px"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="展示类型" :label-width="formLabelWidth">
          <el-radio-group v-model="editform.showType">
            <el-radio label="0">
              <img src="../../assets/images/btn_pic_1.png" alt="" />
              <span>图片列表</span>
            </el-radio>
            <el-radio label="1">
              <img src="../../assets/images/btn_pic_2.png" alt="" />
              <span>新闻列表</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详情样式" :label-width="formLabelWidth">
          <el-radio-group v-model="editform.styleType">
            <el-radio label="0">
              <img src="../../assets/images/btn_pic_3.png" alt="" />
              <span>视频详情</span>
            </el-radio>
            <el-radio label="1">
              <img src="../../assets/images/btn_pic_4.png" alt="" />
              <span>富文本</span>
            </el-radio>
            <el-radio label="2">
              <img src="../../assets/images/icon_link.png" alt="" />
              <span>链接</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="设置上级" :label-width="formLabelWidth">
          <div class="block">
            <el-cascader
              v-model="editform.parentId"
              :props="{ checkStrictly: true }"
              :options="options"
              @change="handleChange"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="打开方式" :label-width="formLabelWidth">
          <el-radio-group v-model="editform.openMethod">
            <el-radio label="0">当前窗口</el-radio>
            <el-radio label="1">新窗口</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogeditFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editForm()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { allColumn } from "@/apis/request.js";
import { editColumn } from "@/apis/request.js";
import { addColumn } from "@/apis/request.js";
import { deleteColumn } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import Sortable from 'sortablejs';
// import vuedraggable from 'vuedraggable';
// import axios from 'axios'
export default {
  data() {
    return {
      editid: 1,
      deleteid: 1,
      options: [
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
      tableData: [
        {
          id: 1,
          date: "首页管理",
          name: "",
          hidden: "no",
        },
        {
          id: 3,
          date: " 项目介绍",
          hidden: "no",
          children: [
            {
              id: 31,
              date: "项目1",
              hidden: "no",
            },
            {
              id: 32,
              date: "项目1-1",
              hidden: "no",
            },
          ],
        },
        {
          id: 2,
          date: "产品",
          hidden: "no",
          children: [
            {
              id: 21,
              date: "介绍",
              hidden: "no",
              children: [
                {
                  id: 211,
                  date: "项目1",
                  hidden: "no",
                },
                {
                  id: 212,
                  date: "项目1-1",
                  hidden: "no",
                },
              ],
            },
            {
              id: 22,
              date: "咨询",
              hidden: "no",
            },
          ],
        },
      ],
      value: [],
      addform: {
        columnName: "",
        bgImgUrl: null,
        showType: 0,
        styleType: 0,
        openMethod: 0,
        parentId: [],
      },
      editform: {
        columnName: "",
        bgImgUrl: null,
        showType: "0",
        styleType: "0",
        openMethod: "0",
        parentId: [],
      },
      dialogaddFormVisible: false,
      dialogeditFormVisible: false,
      formLabelWidth: "110px",
      rules: {
        columnName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
        bgImgUrl: [
          { required: true, message: "请选择banner", trigger: "blur" },
        ],
        parentId: [{ required: true, message: "请选择上级", trigger: "blur" }],
      },
    };
  },
  // components: {vuedraggable},
  //  updated() {
  //   console.log(this.list)
  // },
  methods: {
    handleAvatarSuccess(res) {
      this.editform.bgImgUrl = res.imgUrl;
      console.log(this.editform.bgImgUrl);
    },
    handleAvatarSuccessadd(res) {
      this.addform.bgImgUrl = res.imgUrl;
      console.log(this.addform.bgImgUrl);
    },
  rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
  
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChange(value) {
      console.log(value);
    },

    handlehidden(index, row) {
      if (row.isShow == 0) {
        console.log(row.isShow);
        editColumn({
          id: row.id,
          isShow: 1,
        }).then((res) => {
          console.log(res);
          allColumn().then((res) => {
            console.log(res);
            this.tableData = res;
          });
        });
      } else {
        editColumn({
          id: row.id,
          isShow: 0,
        }).then((res) => {
          console.log(res);
          allColumn().then((res) => {
            console.log(res);
            this.tableData = res;
          });
        });
      }
    },
    handleEdit(index, row) {
      this.dialogeditFormVisible = true;
      this.editid = row.id;
      returnColumn(row.id).then((res) => {
        this.editform.columnName = res[0].columnName;
        this.editform.bgImgUrl = res[0].bgImgUrl;
        this.editform.showType = JSON.stringify(res[0].showType);
        this.editform.styleType = JSON.stringify(res[0].styleType);
        this.editform.openMethod = JSON.stringify(res[0].openMethod);
        console.log(this.editform);
      });
      console.log(index, row);
    },
    handleAdd(index, row) {
      console.log(index, row);
      this.dialogaddFormVisible = true;
      this.addform = {
        columnName: null,
        bgImgUrl: null,
        showType: 0,
        styleType: 0,
        openMethod: 0,
        parentId: [],
      };
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.deleteid = row.id;
      this.open();
    },
    addForm() {
      this.$refs["addform"].validate((valid) => {
        if (valid) {
          this.addform.id = this.editid;
          var index = this.addform.parentId.length - 1;
          this.addform.parentId = this.addform.parentId[index];
          addColumn(this.addform).then((res) => {
            if (res == 0) {
              this.$message.error("请完善栏目必填信息");
            } else {
              this.common();
              this.dialogaddFormVisible = false;
            }
            console.log(res);
          });
        } else {
          return false;
        }
      });
    },
    editForm() {
      this.editform.id = this.editid;
      if (this.editform.parentId.length == 0) {
        this.editform.parentId = "";
      } else {
        var index = this.editform.parentId.length - 1;
        this.editform.parentId = this.editform.parentId[index];
      }

      editColumn(this.editform).then((res) => {
        console.log(res);
        this.common();
      });
      this.dialogeditFormVisible = false;
      console.log(this.editform);
    },
    // uploadFile: function() {
    //   const file = document.getElementById("pop_file");
    //   const fileObj = file.files[0];
    //   const windowURL = window.URL || window.webkitURL;
    //   // const img = document.getElementById('preview');
    //   if (file && fileObj) {
    //     const dataURl = windowURL.createObjectURL(fileObj);
    //     this.editform.bgImgUrl = dataURl;
    //     // img.setAttribute('src',dataURl);
    //   }
    // },

    open() {
      this.$confirm("此操作将永久删除该栏目, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteColumn(this.deleteid).then((res) => {
            console.log(res);
            this.common();
          });
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    returndata() {
      this.dialogFormVisible = true;
    },

    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ]);
      }, 1000);
    },


    common() {
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
        this.options.push({
          value: 0,
          label: "无",
        });
      });
    },
  },
  mounted() {
    this.common();
    this.rowDrop()

  },
};
</script>
<style lang="less">
.column {
  height: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
    .el-button {
      margin-top: 16px;
    }
  }
  .title {
    color: blue;
    margin-top: 18px;
    font-size: 20px;
  }
  .addcolumn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    color: #000;
  }
  i {
    font-size: 20px;
    margin-right: 10px;
  }
  .el-table {
    font-size: 16px;
    color: #333;
  }
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
  .el-dialog__header {
    text-align: center;
  }
  .el-dialog__header .el-dialog__title {
    border-bottom: 1px solid skyblue;
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 0px 0px 10px 0px;
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
  .el-table .has-gutter th div {
    font-size: 18px;
    color: #fff;
    background: #68b6c9;
    height: 40px;
  }
  .el-table td {
    // font-size: 16px;
    color: #333;
  }
  .el-table th > .cell {
    line-height: 40px;
    vertical-align: top;
  }
  // .el-icon-view{
  //   color: rgb(209, 202, 202);
  // }
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
