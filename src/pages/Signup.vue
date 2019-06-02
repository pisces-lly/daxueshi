<template>
  <div>
    <x-header title="注册"></x-header>
    <group gutter="0">
      <x-input title="邮箱" name="email" is-type="email"></x-input>
      <x-input title="验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
        <x-input title="密码" type="text" placeholder="" v-model="password" :min="6" :max="12"></x-input>
        <x-input title="确认密码" v-model="password2" type="text" placeholder="" :equal-with="password"></x-input>
    </group>
      <br><br><br><br>
      <x-button type="primary" link="" @click.native="register" style="width:4.0rem;">注册</x-button>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Divider } from 'vux'
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
      password: '',
      password2: ''
    }
  },
  methods: {
    register () {
    }
  }
}
</script>

<style>

</style>
