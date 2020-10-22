<template>
  <div class="column">
    <div class="top">
      <span class="title"
        >
         <img  src="../../assets/images/leftbar_icon_index_blue.png" alt="">
        栏目管理</span
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
      <div class="titlehead">
        <span class="lanmu">栏目</span>
        <span class="show">显示</span>
        <span class="action">操作</span>
      </div>
      <el-tree
        :data="tableData"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        :expand-on-click-node="false"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drag="allowDrag"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          
          <span class="name">
            <img v-if="data.columnName=='首页'" src="../../assets/images/leftbar_icon_home_blue.png" alt=""> 
                        <img v-if="data.level==1&&data.columnName!='首页'" src="../../assets/images/icon_list.png" alt=""> 
                     <img class="pho" v-if="data.level!=1&&data.children.length==0" src="../../assets/images/icon_submenu_white.png" alt="">      
            {{ node.label }}</span>
          <span class="fixed">
            <img
              v-if="data.isShow == 0"
              src="../../assets/images/btn_visule_n.png"
              alt=""
              width="20px"
              @click="handlehidden(data)"
            />
            <img
              v-if="data.isShow == 1"
              src="../../assets/images/btn_notvisule_n.png"
              alt=""
              width="20px"
              @click="handlehidden(data)"
            />
          </span>
          <span class="handle">
            <i class="el-icon-edit-outline" @click="handleEdit(data)"></i>
            <i class="el-icon-plus" @click="handleAdd(data)"></i>
            <i class="el-icon-delete"  @click="handleDelete(data)"></i>
          </span>
        </span>
      </el-tree>
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
          label="栏目英文"
          :label-width="formLabelWidth"
        >
          <el-input  autocomplete="off" v-model="addform.english"></el-input>
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
        <el-form-item label="栏目名称" :label-width="formLabelWidth" v-if="this.editid!=66">
          <el-input v-model="editform.columnName" autocomplete="off"></el-input>
        </el-form-item>
            <el-form-item
          label="栏目英文"
          :label-width="formLabelWidth"
        >
          <el-input  v-model="editform.english" autocomplete="off"></el-input>
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
            @change="handleChange"
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
import { allColumn } from "@/apis/request.js";
import { editColumn } from "@/apis/request.js";
import { addColumn } from "@/apis/request.js";
import { deleteColumn } from "@/apis/request.js";
import { returnColumn } from "@/apis/request.js";
import { joggle } from "@/apis/request.js";
import { sortColumn } from "@/apis/request.js";
// import Sortable from "sortablejs";
// import vuedraggable from 'vuedraggable';

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
              children: [
                {
                  id: 11,
                  label: "三级 3-2-1",
                },
                {
                  id: 12,
                  label: "三级 3-2-2",
                },
                {
                  id: 13,
                  label: "三级 3-2-3",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "columnName",
      },
      joggle,
      editid: 1,
      deleteid: 1,
      options: [],
      selectedOptions: [],
      defaultParams: {
        label: "columnName",
        value: "id",
        children: "children",
      },
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
        english:null,
        bgImgUrl: null,
        showType: 0,
        styleType: 0,
        openMethod: 0,
        parentId: [],
      },
      editform: {
        columnName: "",
        english:'',
        bgImgUrl: null,
        showType: 0,
        styleType: 0,
        openMethod: 0,
        parentId: [0],
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
  methods: {
     allowDrag(res) {
       console.log(res)
      if(res.data.columnName=='首页') {
         return false
      }
      else{
        return true
      }
      },
    handleAvatarSuccess(res) {
      this.editform.bgImgUrl = res.data.fileUrl;
      console.log(this.editform.bgImgUrl);
    },
    handleAvatarSuccessadd(res) {
      // this.addform.bgImgUrl = res.imgUrl;
      this.addform.bgImgUrl = res.data.fileUrl;
      console.log(res);
    },

    // beforeAvatarUpload(file) {
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
    handleChange(value) {
      console.log(value, 0);
    },
    handlehidden(row) {
      if (row.isShow == 0) {
        console.log(row.isShow);
        editColumn({
          id: row.id,
          isShow: 1,
        }).then((res) => {
          console.log(res,666);
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

    handleEdit(row) {
      this.dialogeditFormVisible = true;
      this.editid = row.id;
      console.log(row,0)
      returnColumn(row.id).then((res) => {
        var a=[]
        a.push(res[0].parentId)
        this.editform.columnName = res[0].columnName;
        this.editform.english = res[0].english;
        this.editform.bgImgUrl = res[0].bgImgUrl;
        this.editform.showType = res[0].showType;
        this.editform.styleType = res[0].styleType;
        this.editform.parentId =a;
        this.editform.openMethod = res[0].openMethod;
        console.log(res,6);
      });
      console.log(row);
    },
    handleAdd(row) {
      console.log(row);
      this.dialogaddFormVisible = true;
      this.addform = {
        columnName: null,
        english:null,
        bgImgUrl: null,
        showType: 0,
        styleType: 0,
        openMethod: 0,
        parentId: [],
      };
    },
    handleDelete(row) {
      console.log(row);
      if(row.columnName=="首页"){
        this.$message({
          message: '警告!首页不可删掉',
          type: 'warning',
          duration: 1000,
        });
        return false
      }
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
          console.log(this.addform,666)
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

      editColumn(this.editform).then((res) => {
        console.log(res);
        this.common();
      });
      this.dialogeditFormVisible = false;
      // console.log(this.editform,'ply');
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
    append(data) {
      // const newChild = { id: id++, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
      console.log(data, "ply");
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
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
    common() {
      allColumn().then((res) => {
        console.log(res, 666);
        this.tableData = JSON.parse(JSON.stringify(res));
        this.options = this.getTreeData(JSON.parse(JSON.stringify(res)));
        this.options.push({
          id: 0,
          columnName: "无",
          children:[]
        });
        console.log(this.options,1);
      });
    },
 
    handleDragEnd(draggingNode, dropNode, dropType) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType, 6);

    },
    TreeData(data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length >= 1) {
          // children若为空数组，则将children设为undefined
          for (var j = 0; j < data[i].children.length; j++) {
            data[i].children[j].parentId = data[i].id;
            if (data[i].children[j].children.length >= 1) {
              this.TreeData(data[i].children[j].children);
            }
          }
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          data[i].children = [];
        }
      }
      return data;
    },
    handleDrop(draggingNode, dropNode, dropType) {
      if(dropType=="after"){
        draggingNode.data.level=dropNode.data.level
      }
       if(dropType=="before"){
        draggingNode.data.level=dropNode.data.level
      }
      if(dropType=="inner"){
         draggingNode.data.level=dropNode.data.level+1;
      }
      console.log("tree drop: ", draggingNode, dropNode,dropType);

      sortColumn(this.tableData).then()
    
    },

  },
  mounted() {
    this.common();
    // this.rowDrop()
    // this.columnDrop()
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
   
    margin-top: 18px;
    font-size: 20px;
    img{
      margin-right: 10px;
    }
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
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    padding-right: 8px;
  }
  .name {
    //   flex-basis: 200px;
    flex: 1;
  }
  .el-tree-node__content {
    position: relative;
    height: 36px;
  }
  .fixed {
    position: absolute;
    left: 546px;
  }
  .titlehead {
    font-size: 18px;
    position: relative;
    width: 100%;
    height: 50px;
    background: skyblue;
    line-height: 50px;
    span {
      position: absolute;
    }
    .lanmu {
      left: 18px;
    }
    .show {
      left: 540px;
    }
    .action {
      left: 860px;
    }
  }
  .handle {
    width: 173px;
    display: flex;
    justify-content: space-between;
  }
  .pho{
    margin-left: -13px;
  }
}
</style>
