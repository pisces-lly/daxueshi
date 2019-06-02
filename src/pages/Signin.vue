<template>
  <div>
    <x-header title="登陆"></x-header>
    <group gutter="0">
      <x-input title="邮箱" is-type="email" v-model="loginForm.email"></x-input>
      <x-input title="密码" type="password" placeholder="" v-model="loginForm.password" ></x-input>
    </group>
    <br><br><br><br>
    <x-button type="primary" @click.native="login" style="width:4.0rem;">登陆</x-button>
    <br>
    <router-link to="/Signup" class="linksignup">没有账号？注册</router-link>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Divider } from 'vux'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    Divider
  },
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      userToken: ''
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this
      if (this.loginForm.email === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        axios({
          method: 'post',
          url: 'http://localhost/dxs/user/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data)
          _this.userToken = res.data.token
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken })
          if (_this.userToken.substr(0, 6) === 'token_') {
            alert('登陆成功')
            _this.$router.push('/')
          } else {
            alert('账号或密码错误')
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .linksignup
    float: right
    margin-right: 1.8rem
</style>
