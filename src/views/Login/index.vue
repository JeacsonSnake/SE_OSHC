<template>
  <div class="pages">
    <img
      src="../../assets/images/logo/主页面与登陆注册页面网站商标.png"
      alt=""
      id="webImage"
    />
    <div class="login">
      <div class="cage">
        <router-link to="/" class="goBack">返回主页 ></router-link>
      </div>
      <div class="title">登录</div>
      <div class="form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="65px"
          class="demo-ruleForm ElForm"
          size="large"
        >
          <el-form-item
            label="用户名"
            prop="userEmail"
            style="margin-bottom: 35px"
          >
            <el-input
              type="text"
              v-model="ruleForm.userEmail"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="margin-bottom: 35px">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="loginBtns btns"
              :loading="load"
              round
              >登录</el-button
            >
            <el-button
              round
              @click="resetForm('ruleForm')"
              style="width: 180px"
              class="clearBtns btns"
              >清空</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div>
        <span>
          还未注册?
          <router-link to="/register">点击注册</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateUserEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户邮箱"));
      } else {
        callback();
      }
    };

    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        userEmail: "",
        pass: "",
      },
      rules: {
        userEmail: [{ validator: validateUserEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
      load: false,
    };
  },
  methods: {
    submitForm() {
      this.load = true;
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const v = {
            userEmail: this.$refs.ruleForm.model.userEmail,
            password: this.$refs.ruleForm.model.pass,
          };
          await this.$store.dispatch("login", v);
          let inputError = await this.fetchInputError();
          if (inputError) {
            this.$nextTick(() => {
              this.$message({
                message: "用户名或密码输入错误！！",
                type: "error",
              });
              this.$store.commit("INPUTERROR", false);
              this.load = false;
            });
          } else {
            this.$cookies.set("elecoCookies", "a8dg9as7a98efasbjsejtq49", {expires: "1h"});
            this.$message({
              message: "登陆成功！正在跳转至主页……",
              type: "success",
            });
            setTimeout(() => {
                this.$router.push("/");
            }, 1000);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async fetchInputError() {
      const ie = await this.$store.state.inputError;
      return ie;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #00c4c3;
  text-decoration: none;
}

.pages {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../assets/images/background/LoginRegisterCover.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

#webImage {
  width: 350px;
  margin-top: 60px;
  margin-bottom: 80px;
}

.cage {
  width: 100%;
}

.login {
  width: 900px;
  height: 600px;
  background-color: rgba(228, 228, 228, 0.66);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .goBack {
    width: 150px;
    height: 45px;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 20px;
    color: #129fc6;
    display: flex;
    letter-spacing: 5px;
    align-items: center;
    justify-content: center;
  }

  .title {
    width: 220px;
    height: 102px;
    font-size: 60px;
    letter-spacing: 13px;
    margin-bottom: 50px;
    margin-top: 40px;
    color: #00a8d5;
  }

  .form {
    width: 100%;
    height: 190px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .ElForm {
      position: absolute;
      left: 19.7%;
    }

    :deep() .el-form-item__label {
      text-align: justify-all;
      text-align-last: justify;
    }

    .btns {
      font-size: 24px;
    }

    .loginBtns {
      background-color: #00a8d5;
      width: 180px;
      margin-right: 40px;
    }

    .clearBtns:hover,
    .clearBtns:focus {
      color: #cbdae4;
      border-color: #3a89bb;
      background-color: #3481d3;
    }
  }
}
</style>