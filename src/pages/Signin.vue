<template>
  <div>
    <x-header title="登陆"></x-header>
    <group gutter="0">
      <x-input title="邮箱" is-type="email" v-model="loginForm.email" style="width:4.0rem;"></x-input>
      <x-input title="密码" type="text" placeholder="" v-model="loginForm.password" ></x-input>
    </group>
    <br><br><br><br>
    <x-button type="primary" @click="login" style="width:4.0rem;">登陆</x-button>
    <br>
    <a href="Signup" class="linksignup">没有账号？注册</a>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Divider } from 'vux'
import { mapMutations } from 'vuex'
export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    Divider
  },
  // 不太懂...只是copy了一份网上的代码 = =
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login: function () {
      let _this = this
      if (this.loginForm.email === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        this.axios({
          method: 'post',
          url: '/dxs/user/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data)
          _this.userToken = 'Bearer ' + res.data.data.body.token
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken })
          _this.$router.push('/Home')
          alert('登陆成功')
        }).catch(error => {
          alert('账号或密码错误')
          console.log(error)
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
