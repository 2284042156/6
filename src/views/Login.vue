<template>
  <div class="ply" @keyup.enter="submitForm">
    <div class="topbar">
      <div class="container ">
        <span>网站管理后台</span><span class="regist" @click="go()">返回</span>
      </div>
    </div>
    <div class="form container">
      <div class="welcome">
        <p>欢&nbsp;迎&nbsp;来&nbsp;到</p>
        <p>网&nbsp;站&nbsp;后&nbsp;台</p>
        <p>管&nbsp;理&nbsp;系&nbsp;统&nbsp;平&nbsp;台</p>
      </div>
      <div id="box">
        <div class="title">
          <p>欢迎登录</p>
        </div>
        <!-- element ui表单数据 -->
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginFormId"
          label-width="70px"
          class="demo-ruleForm"
        >
          <p class="user">用户名</p>
          <el-form-item prop="username">
            <el-input
              clearable
              type="text"
              v-model="loginForm.username"
              placeholder="用户名"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <p class="password">密码</p>
          <!-- 表单验证，其prop是必备属性，且必须写再el-form-item中 -->
          <!-- 显示密码 show-password -->
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              type="password"
              v-model="loginForm.password"
              autocomplete="off"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="bottom">
            <!-- 勾选框 -->
            <el-checkbox v-model="loginForm.checked">下次自动登录</el-checkbox>
            <a class="right">忘记密码?</a>
          </el-form-item>

          <el-form-item>
            <input
              type="button"
              name=""
              id="btn"
              value="登录"
              @click="submitForm()"
            />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "@/apis/request.js";//登录接口

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        checked: true,
      },
      rules: {//数据检索
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    //返回即回到前端地址
    go(){
      this.$router.push("")
    },
    submitForm() {//登录
      var that = this;
      if (that.loginForm.checked == true) {//当选择记住密码时，获取用户名和密码，并存储至本地
        localStorage.setItem("username", that.loginForm.username);
        localStorage.setItem("pwd", that.loginForm.password);
        localStorage.setItem("flag", true);//有用户名和密码，则设置flag为true
      }
      if (that.loginForm.checked == false) {//如果为未选中记住密码，则移除本地用户名和密码与flag
        localStorage.removeItem("username");
        localStorage.removeItem("pwd");
        localStorage.removeItem("flag");
      }
      this.$refs.loginFormId.validate((valid) => {//
        if (valid) {//数据校验，如果有数据，则处理login接口，如果没有数据，则弹出消息，输入用户名或者密码
          login({
            adminName: that.loginForm.username,
            adminPwd: that.loginForm.password,
          }).then((res) => {
            if (res.token) {//如果验证通过，则弹出消息，并跳转，如果错误，则弹出消息错误
              sessionStorage.setItem("token", res.token);
              this.$message({//弹出消息提示
                showClose: true,//显示关闭按钮
                message: "登陆成功",//消息文字
                type: "success",//主题
                duration: 1000,//弹出1秒
                onClose: () => {
                  this.$router.replace("/home/homemange");//编程式跳转，关闭当前页面并跳转至下一个页面
                },
              });
            } else {
              this.$message({
                showClose: true,
                message: "用户名或者密码输入错误",
                type: "error",
              });
            }
          });
        } else {
          this.$message({
            showClose: true,
            message: "请输入用户名或者密码",
            type: "error",
          });
        }
      });
    },
  },
  created(){
   if(localStorage.getItem('username')){//如果本地缓存有数据，则获取用户名和密码
     this.loginForm.username=localStorage.getItem('username')
   }
   if(localStorage.getItem('pwd')){
     this.loginForm.password=localStorage.getItem('pwd')
   }
  },
  mounted() {
    if(localStorage.getItem('flag')){//如果本地存储flag为true，则自动登录
      this.submitForm()
    }
    sessionStorage.removeItem("token");
  },
};
</script>
<style lang="less" scoped>//scoped表示此样式只作用域本组件
.ply {
  height: 100%;
  opacity: 1;
  background: url('../assets/images/login.jpg');
  // font-family: "Source Han Serif CN";
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .topbar {
    font-size: 24px;
    height: 60px;
    background: #333;
    color: #fff;
    line-height: 60px;
    div {
      display: flex;
      justify-content: space-between;
      .regist {
        font-size: 16px;
      }
    }
  }
  #box {
    padding-right: 50px;
    padding-top: 70px;
    padding-bottom: 28px;
    width: 490px;
    background: white;
    font-family: "Source Han Serif CN";
    margin: 0;
    p {
      font-size: 24px;
      text-indent: 70px;
    }
    .title {
      margin-bottom: 50px;
    }
    .password,
    .user {
      margin-top: 30px;
      font-size: 14px;
      font-family: "Source Han Serif CN";
      margin-bottom: 10px;
    }
    .el-form {
      width: 490px;
    }
    .el-input {
      font-family: sans-serif;
    }
  }

  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .welcome {
   
      color: #fff;
      p{
        font-size: 54px;
        margin-bottom: 8px;
      }
      // .introduce {
      //   font-size: 16px;
      //   margin-top: 20px;
      // }
    }
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .bottom .right {
    float: right;
    cursor: pointer;
  }
  #btn {
    width: 420px;
    border: 0;
    height: 46px;
    background: #333;
    color: #fff;
    margin-top: 60px;
    border-radius: 10px;
    outline: none;
  }
  #btn:hover {
    background: rgb(109, 103, 103);
    cursor: pointer;
  }

}
</style>
