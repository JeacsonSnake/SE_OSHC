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
            style="margin-bottom: 35px"
          >
            <el-input
              type="text"
              v-model="ruleForm.userName"
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
              style="width: 180px"
              class="clearBtns btns"
            >
              清空
            </el-button>
          </el-form-item>
          <el-form-item class="checkAttr">
            <el-checkbox v-model="ruleForm.check">
              我已阅读并同意「用户协议」和「隐私条款」
            </el-checkbox>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <span>
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
        pass: "",
        checkPass: "",
        check: false,
      },

      rules: {
        userName: [
          { validator: validateUserName, trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
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
              username: this.$refs.ruleForm.model.userName,
              password: this.$refs.ruleForm.model.pass,
            };
            await this.$store.dispatch("regist", v);
            let repeat = await this.fetchIsRepeat();
            if (repeat) {
              this.$nextTick(() => {
                this.$message({
                  message: "该用户名已存在！！",
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
  color: #00A8D5;
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
    color: #00C4C3;
  }

  .form {
    width: 100%;
    height: 240px;
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
      background-color: #00BDC8;
      width: 180px;
      margin-right: 40px;
    }

    .clearBtns:hover,
    .clearBtns:focus {
      color: #ffffff;
      border-color: #3aa8bb;
      background-color: #34b8d3;
    }
  }
}
</style>