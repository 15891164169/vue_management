<template>
  <div id="login">
    <div class="login_box">
      <div class="avatar_box">
        <img src="@/assets/images/test.png">
      </div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="form_box">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <el-form-item class="form_btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/network/api.js'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormRef.validate().then(async vaild => {
        if (!vaild) return
        await login(this.loginForm).then(res => {
          if (res.meta.status !== 200) {
            this.$message({
              message: '用户名或密码错误！',
              duration: 1000,
              type: 'error'
            })
          } else {
            // console.log(res.data.token)
            sessionStorage.setItem('management_token', res.data.token)
            this.$message({
              message: '登陆成功！',
              duration: 1500,
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push('/home')
            }, 1000)
          }
        })
      })
    },
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  #login {
    height: 100%;
    background-color: #2b4b6b;
  }
  .login_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    .avatar_box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      overflow: hidden;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 1px solid #eee;
      background-color: #000;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .form_box {
      position: absolute;
      bottom: 0;
      padding: 10px;
      width: 100%;
      .form_btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
