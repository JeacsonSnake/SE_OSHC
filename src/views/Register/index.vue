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
      <div class="title">注册</div>
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
            prop="userName"
            style="margin-bottom: calc(100vh / 1080px * 25px)"
          >
            <el-input
              type="text"
              v-model="ruleForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="邮箱"
            prop="userEmail"
            style="margin-bottom: 35px"
          >
            <el-input
              type="text"
              v-model="ruleForm.userEmail"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="calc(100vh / 1080px * 35px)">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="loginBtns btns"
              round
              >注册</el-button
            >
            <el-button
              round
              @click="resetForm('ruleForm')"
              class="clearBtns btns"
            >
              清空
            </el-button>
          </el-form-item>
          <el-form-item class="checkAttr">
            <el-checkbox
             v-model="ruleForm.check">
              我已阅读并同意「用户协议」和「隐私条款」
            </el-checkbox>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <span class="spanLogin">
          已经注册?
          <router-link to="/login">点击登录</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

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
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        userName: "",
        userEmail: "",
        pass: "",
        checkPass: "",
        check: false,
      },

      rules: {
        userName: [
          { validator: validateUserName, trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        userEmail: [{ validator: validateUserEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.ruleForm.model.check) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            const v = {
              userName: this.$refs.ruleForm.model.userName,
              userEmail: this.$refs.ruleForm.model.userEmail,
              password: this.$refs.ruleForm.model.pass,
            };
            await this.$store.dispatch("regist", v);
            let repeat = await this.fetchIsRepeat();
            if (repeat) {
              this.$nextTick(() => {
                this.$message({
                  message: "该用户邮箱已存在！！",
                  type: "error",
                });
                this.$store.commit("ISREPEAT", false);
              });
            } else {
              this.$message({
                message: "提交成功！跳转至登陆界面",
                type: "success",
              });
              this.$router.push("/login");
            }
          } else {
            this.$message({
              message: "提交失败！请重新提交！",
              type: "warning",
            });
            return false;
          }
        });
      } else {
        this.$message("请先阅读并同意「用户协议」和「隐私条款」再进行提交！");
      }
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },

    async fetchIsRepeat() {
      const re = await this.$store.state.isRepeat;
      return re;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #00a8d5;
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
  margin-top: calc(753.6px / 1080px * 60px);
  margin-bottom: calc(753.6px / 1080px * 80px);
  width: calc(1536px / 1920px * 350px);
}

.cage {
  width: 100%;
}

.login {
  width: calc(1536px / 1920px * 900px);
  height: calc(753.6px / 1080px * 720px);
  background-color: rgba(228, 228, 228, 0.66);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .goBack {
    width: calc(1536px / 1920px * 150px);
    height: calc(753.6px / 1080px * 45px);
    margin-left: 12px;
    margin-top: 10px;
    font-size: 18px;
    color: #129fc6;
    display: flex;
    letter-spacing: 5px;
    align-items: center;
    justify-content: center;
  }

  .title {
    width: calc(1536px / 1920px * 220px);
    height: calc(753.6px / 1080px * 102px);
    font-size: 50px;
    letter-spacing: 13px;
    margin-bottom: calc(753.6px / 1080px * 60px);
    margin-top: calc(753.6px / 1080px * 40px);
    color: #00c4c3;
  }

  .form {
    width: 100%;
    height: calc(753.6px / 1080px * 240px);
    position: relative;
    display: flex;
    align-items: center;
    margin-top: calc(753.6px / 1080px * 55px);
    margin-bottom: calc(753.6px / 1080px * 85px);
    .ElForm {
      position: absolute;
      left: 15.7%;
    }

    :deep() .el-form-item__label {
      text-align: justify-all;
      text-align-last: justify;
    }

    .btns {
      font-size: 24px;
    }

    .checkAttr {
      ::v-deep() .el-checkbox {
        vertical-align: super;
        
        .el-checkbox__input.is-checked .el-checkbox__inner,
        .el-checkbox__input.is-indeterminate .el-checkbox__inner {
          background-color: #00c4c3;
          border-color: #00c4c3;
        }

        .el-checkbox__inner:hover {
          border-color: #00c4c3;
        }

        .el-checkbox__input.is-checked + .el-checkbox__label {
          color: #00c4c3;
        }
      }
    }

    .loginBtns {
      background-color: #00bdc8;
      width: calc(1536px / 1920px * 180px);
      margin-right: calc(1536px / 1920px * 40px);
    }
    .clearBtns {
      position: relative;
      left: 10%;
      width: calc(1536px / 1920px * 180px);
      margin-right: calc(1536px / 1920px * 40px);

    }
    .clearBtns:hover,
    .clearBtns:focus {
      color: #ffffff;
      border-color: #3aa8bb;
      background-color: #34b8d3;
    }
    .checkAttr{
      position:relative;
      height:30px;
      margin-top:-12px;
     }

  }
}
</style>