<template>
  <div class="home-top-bar">
    <div class="top">
      <p class="webmange">网站管理后台</p>
      <div class="change">
        <img src="../assets/images/university.jpg" class="avatar" />
        <span class="name">彭留洋</span>
        <el-dropdown @command="handleCommand">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="password"
              ><i class="el-icon-edit-outline"></i>修改密码</el-dropdown-item
            >
            <el-dropdown-item command="loginout"
              ><i class="el-icon-switch-button"></i>退出系统</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog :visible.sync="dialogVisible" width="30%" >
      <span class="title_password">更改登录密码</span>
      <!-- 表单  -->
      <el-form
        :model="changeForm"
        :rules="rules"
        ref="changeForm"
        label-width="90px"
      >
        <el-form-item label=" 旧设密码" prop="oldPassword">
          <el-input
            type="password"
            v-model="changeForm.oldPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新设密码" prop="newPassword">
          <el-input
            show-password
            type="password"
            v-model="changeForm.newPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            show-password
            type="password"
            v-model="changeForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="forget">忘记密码?</div>
        <div class="bottom">
          <el-button type="info" @click="dialogVisible = false"
            >取 消</el-button
          >
          <el-button type="primary" @click="submitForm()">确 认</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { adminChangepwd } from "@/apis/request.js";
export default {
  data() {
    const accountAddComp = this;
    // 自定义的密码验证规则 // field,value,callback
    const validatePass = (rules, value, callback) => {
      if (value === "") {
        // 为空进去
        callback(new Error("密码不能为空！"));
      } else if (!/^[0-9|a-z|A-Z]+/.test(value)) {
        // 验证失败
        callback(new Error("密码必须为数组或字母！"));
      } else if (value != accountAddComp.changeForm.checkPass) {
        // 密码和确认密码验证
        callback(new Error("两次密码不一致！"));
      } else {
        callback();
      }
    };
    // 自定义的确认密码验证规则
    const validatePass2 = function(rules, value, callback) {
      if (value === "") {
        // 为空进去
        callback(new Error("确认密码不能为空！"));
      } else if (!/^[0-9|a-z|A-Z]+/.test(value)) {
        // 验证失败
        callback(new Error("确认密码必须为数组或字母！"));
      } else if (value != accountAddComp.changeForm.newPassword) {
        // 密码和确认密码验证
        callback(new Error("两次密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      changeForm: {
        oldPassword: "", // 初始化表单数据
        newPassword: "",
        checkPass: "",
      },
      // 验证规则
      rules: {
        oldPassword: [
          { required: true, message: "请输入旧设密码", trigger: "blur" },
        ],
        newPassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          //  validator: 自定义的验证函数
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
      dialogVisible: false,
      formLabelWidth: "90px",
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "password") {
        this.dialogVisible = true;
      } else if (command === "loginout") {
        this.$message({
          type: "success",
          message: "下次再来玩丫,我会想你的~~",
          duration: 1000,
          onClose: () => {
            this.$router.replace("/login");
          },
        });
      }
    },
    submitForm() {
      let that = this;
      this.$refs.changeForm.validate((valid) => {
        if (valid) {
          adminChangepwd({
            oldPwd: that.changeForm.oldPassword,
            newPwd: that.changeForm.newPassword,
          }).then((res) => {
            if (res.message == "修改成功") {
              this.$message({
                type: "success",
                message: "修改密码成功",
                duration: 2000,
                onClose: () => {
                  that.$router.replace("/login");
                },
              });
            } else {
                this.$message({
                type: "error",
                message: "修改密码失败,请检查密码",
                duration: 2000,
              });
            }
          });
          console.log(sessionStorage.getItem("token"), 6);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.changeForm.resetFields();
    },
  },
  computed: {},
};
</script>

<style lang="less">
.home-top-bar {
  width: 1300px;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #242424;
    margin-right: 16px;
  }
  .name {
    color: white;
  }
  p {
    font-size: 24px;
    color: #fff;
  }
  .el-icon-arrow-down {
    color: blanchedalmond;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding-top: 16px;
  }
  .el-input__inner {
    width: 80%;
    font-family: sans-serif;
  }
  .forget {
    width: 94%;
    margin: 0 auto;
    text-align: right;
  }
  .forget:hover {
    color: skyblue;
    cursor: pointer;
  }
  .bottom {
    display: flex;
    justify-content: center;
  }
}
.home-top-bar > .top {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.home-top-bar > .top > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name,
.el-dropdown {
  line-height: 60px;
}
.title_password {
  display: block;
  width: 94%;
  margin: 0 auto;
  color: rgb(20, 146, 196);
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid rgb(20, 146, 196);
  padding-bottom: 16px;
  margin-bottom: 16px;
}
</style>
