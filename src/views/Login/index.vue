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
          label-width="70px"
          class="demo-ruleForm ElForm"
          size="large"
        >
          <el-form-item
            label="用户名"
            prop="userEmail"
            style="margin-bottom: calc(var(--heightRate) * 35)"
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
            this.$cookies.set("elecoCookies", "a8dg9as7a98efasbjsejtq49", {
              expires: "1h",
            });
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
  width: calc(var(--widthRate) * 350);
  margin-top: calc(var(--heightRate) * 60);
  margin-bottom: calc(var(--heightRate) * 80);
}

.cage {
  width: 100%;
}

.login {
  width: calc(var(--widthRate) * 900);
  height: calc(var(--heightRate)  * 720);
  background-color: rgba(228, 228, 228, 0.66);
  border-radius: calc(var(--heightRate)  * 12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .goBack {
    width: calc(var(--widthRate) * 150);
    height: calc(var(--heightRate) * 45);
    margin-left: calc(var(--widthRate) * 12);
    margin-top: calc(var(--heightRate) * 10);
    font-size: calc(var(--heightRate) * 18);
    color: #129fc6;
    display: flex;
    letter-spacing: calc(var(--widthRate) * 5);
    align-items: center;
    justify-content: center;
  }

  .title {
    width: calc(var(--widthRate) * 220);
    height: calc(var(--heightRate) * 102);
    font-size: calc(var(--heightRate) * 80);
    letter-spacing: calc(var(--widthRate) * 13);
    margin-bottom: calc(var(--heightRate) * 20);
    margin-top: calc(var(--heightRate) * -70);
    color: #00a8d5;
  }

  .form {
    width: 100%;
    height: calc(var(--heightRate) * 240);
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--heightRate) * 50);
    .ElForm {
      position: absolute;
      left: 15.7%;
    }

    :deep() .el-form-item__label {
      text-align: justify-all;
      text-align-last: justify;
    }

    .btns {
      font-size: calc(var(--heightRate) * 35);
    }

    .loginBtns {
      background-color: #00a8d5;
      width: calc(var(--widthRate) * 180);
      margin-right: calc(var(--widthRate) * 40);
    }
    .clearBtns {
      position: relative;
      left: 10%;
      width: calc(var(--widthRate) * 180);
      margin-right: calc(var(--widthRate) * 40);
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