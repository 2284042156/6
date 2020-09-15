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
    <dragTreeTable :data="treeData" :onDrag="onTreeDataChange"> </dragTreeTable>
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
          <el-upload
            class="avatar-uploader"
            :action="joggle"
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
            <el-radio :label="0">
              <img src="../../assets/images/btn_pic_1.png" alt="" />
              <span>图片列表</span>
            </el-radio>
            <el-radio :label="1">
              <img src="../../assets/images/btn_pic_2.png" alt="" />
              <span>新闻列表</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详情样式" :label-width="formLabelWidth">
          <el-radio-group v-model="addform.styleType">
            <el-radio :label="0">
              <img src="../../assets/images/12.png" alt="" />
              <span>视频详情</span>
            </el-radio>
            <el-radio :label="1">
              <img src="../../assets/images/btn_pic_4.png" alt="" />
              <span>富文本</span>
            </el-radio>
            <el-radio :label="2">
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
          <el-cascader
            :change-on-select="true"
            :props="defaultParams"
            :options="options"
            v-model="addform.parentId"
            @change="handleChange"
            :clearable="true"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="打开方式" :label-width="formLabelWidth">
          <el-radio-group v-model="addform.openMethod">
            <el-radio :label="0">当前窗口</el-radio>
            <el-radio :label="1">新窗口</el-radio>
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
          <el-upload
            class="avatar-uploader"
            :action="joggle"
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
            <el-radio :label="0">
              <img src="../../assets/images/btn_pic_1.png" alt="" />
              <span>图片列表</span>
            </el-radio>
            <el-radio :label="1">
              <img src="../../assets/images/btn_pic_2.png" alt="" />
              <span>新闻列表</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详情样式" :label-width="formLabelWidth">
          <el-radio-group v-model="editform.styleType">
            <el-radio :label="0">
              <img src="../../assets/images/12.png" alt="" />
              <span>视频详情</span>
            </el-radio>
            <el-radio :label="1">
              <img src="../../assets/images/btn_pic_4.png" alt="" />
              <span>富文本</span>
            </el-radio>
            <el-radio :label="2">
              <img src="../../assets/images/icon_link.png" alt="" />
              <span>链接</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="设置上级" :label-width="formLabelWidth">
          <el-cascader
            :change-on-select="true"
            :props="defaultParams"
            :options="options"
            v-model="editform.parentId"
            @change="handleeditChange"
            :clearable="true"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="打开方式" :label-width="formLabelWidth">
          <el-radio-group v-model="editform.openMethod">
            <el-radio :label="0">当前窗口</el-radio>
            <el-radio :label="1">新窗口</el-radio>
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
import dragTreeTable from "drag-tree-table";
import { allColumn } from "@/apis/request.js";
import { editColumn } from "@/apis/request.js";
import { addColumn } from "@/apis/request.js";
import { deleteColumn } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import { joggle } from "@/apis/request.js";
import { sortColumn } from "@/apis/request.js";
import show from "@/assets/images/btn_visule_n.png";
import hidden from "@/assets/images/btn_notvisule_n.png";
export default {
  name: "app",

  data() {
    return {
      joggle,
      editid: 1,
      deleteid: 1,
      options: [],
      selectedOptions: [],
      value: "",
      defaultParams: {
        label: "columnName",
        value: "id",
        children: "children",
      },
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
        showType: 0,
        styleType: 0,
        openMethod: 0,
        parentId: 0,
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
      treeData: {
        columns: [
          {
            type: "selection",
            title: "栏目管理",
            field: "name",
            width: 200,
            align: "center",
            formatter: (item) => {
              return item.columnName;
            },
          },
          {
            title: "显示",
            type: "action",
            width: 350,
            align: "center",
            actions: [
              {
                text: "显示",
                onclick: (item) => {
                  // item是当前行的数据
                  console.log(item, 6666);
                  if (item.isShow == 0) {
                    console.log(item.isShow);
                    editColumn({
                      id: item.id,
                      isShow: 1,
                    }).then((res) => {
                      console.log(res);
                      allColumn().then((res) => {
                        console.log(res);
                        this.treeData.lists = res;
                      });
                    });
                  } else {
                    editColumn({
                      id: item.id,
                      isShow: 0,
                    }).then((res) => {
                      console.log(res);
                      allColumn().then((res) => {
                        console.log(res);
                        this.treeData.lists = res;
                      });
                    });
                  }
                },
                formatter: (item) => {
                  if (item.isShow == 0) {
                    return `<img src="${show}" width="20px"/>`;
                  } else {
                    return `<img src="${hidden}" width="20px"/>`;
                  }
                },
              },
            ],
          },
          {
            title: "操作",
            type: "action",
            width: 350,
            align: "center",
            actions: [
              {
                text: "编辑",
                onclick: (item) => {
                  // item是当前行的数据
                  console.log(item);
                  this.dialogeditFormVisible = true;
                  this.editid = item.id;
                  returnColumn(item.id).then((res) => {
                    let a = [];
                    a.push(res[0].parentId);
                    this.editform.columnName = res[0].columnName;
                    this.editform.bgImgUrl = res[0].bgImgUrl;
                    this.editform.showType = res[0].showType;
                    this.editform.showType = res[0].showType;
                    this.editform.parentId = a;
                    this.editform.openMethod = res[0].openMethod;
                    console.log(this.editform, 66);
                  });
                },
                formatter: () => {
                  return '<i class="el-icon-edit-outline"></i>';
                },
              },
              {
                text: "添加",
                onclick: (item) => {
                  // item是当前行的数据
                  console.log(item);
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
                formatter: () => {
                  return '<i class="el-icon-plus"></i>';
                },
              },
              {
                text: "删除",
                onclick: (item) => {
                  // item是当前行的数据
                  console.log(item);
                  this.deleteid = item.id;
                  this.open();
                },
                formatter: () => {
                  return '<i class="el-icon-delete"></i>';
                },
              },
            ],
          },
        ],
        lists: [
          {
            id: 40,
            parent_id: 0,
            order: 0,
            name: "动物类",
            // uri: "/masd/ds",
            open: true,
            lists: [],
          },
          {
            id: 5,
            parent_id: 0,
            order: 1,
            name: "昆虫类",
            // uri: "/masd/ds",
            open: true,
            isShowCheckbox: false,
            lists: [
              {
                id: 12,
                parent_id: 5,
                open: true,
                order: 0,
                name: "蚂蚁",
                // uri: "/masd/ds",
                lists: [],
              },
            ],
          },
          {
            id: 19,
            parent_id: 0,
            order: 2,
            name: "植物类",
            // uri: "/masd/ds",
            open: true,
            lists: [],
          },
        ],
        custom_field: {
          id: "id",
          order: "sort",
          lists: "children",
          parent_id: "parentId",
          name: "columnName",
        },
      },
    };
  },
  components: {
    dragTreeTable,
  },
  methods: {
    handleAdd() {
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
    handleAvatarSuccess(res) {
      this.editform.bgImgUrl = res.data.fileUrl;
      console.log(this.editform.bgImgUrl);
    },
    handleAvatarSuccessadd(res) {
      // this.addform.bgImgUrl = res.imgUrl;
      this.addform.bgImgUrl = res.data.fileUrl;
      console.log(this.addform.bgImgUrl);
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
        this.editform.parentId = 0;
      } else {
        var index = this.editform.parentId.length - 1;
        this.editform.parentId = this.editform.parentId[index];
      }
      // console.log( this.editform.parentId,99)
      editColumn(this.editform).then((res) => {
        console.log(res, 9);
        this.common();
      });
      this.dialogeditFormVisible = false;
      console.log(this.editform, true);
    },
    onTreeDataChange(lists) {
      this.treeData.lists = lists;
      console.log(lists)
      sortColumn(lists).then(res=>{
        console.log(res,6666)
      })
      // alert(from.id + "  拖拽到  " + to.id + where);
      // if (where == "center") {
      //   editColumn({
      //     id: from.id,
      //     parentId: to.id,
      //   }).then(()=>{
      //     this.common();
      //   });
      // }
      // if (where == "bottom") {
      //   editColumn({
      //     id: from.id,
      //     parentId: to.id,
      //   }).then(() => {
      //     this.common();
      //   });
      // }
      // if (where == "top") {
      //   editColumn({
      //     id: to.id,
      //     parentId: from.id,
      //   }).then(() => {
      //     this.common();
      //   });
      // }
      // if (where == "") {
      //   editColumn({
      //     id: from.id,
      //     parentId: 0,
      //   }).then(() => {
      //     this.common();
      //   });
      // }
    },
    handleChange(value) {
      console.log(value);
    },
    handleeditChange(value) {
      console.log(value, 1);
      // let index = value.length - 1;
      // this.editform.parentId = value[index];
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
    //     beforeAvatarUpload(file) {
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //   console.log(file,"ply")

    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // },
    common() {
      allColumn().then((res) => {
        console.log(res, 666);
        this.treeData.lists = JSON.parse(JSON.stringify(res));
        this.options = this.getTreeData(res);
        this.options.push({
          id: 0,
          columnName: "无",
        });
        console.log(this.treeData.lists);
      });
    },
  },
  mounted() {
    this.common();
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
  .drag-tree-table-header {
    background: #68b6c9;
    color: #fff;
    font-size: 18px;
  }
  .drag-tree-table {
    font-size: 16px;
  }
  .zip-icon {
    width: 12px;
    height: 12px;
    background-position: -1px -1px;
  }
  .el-icon-edit-outline {
    margin-right: 26px;
  }
  .el-icon-delete {
    margin-left: 8px;
  }
}
</style>
