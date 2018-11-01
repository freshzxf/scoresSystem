<template>
  <div>
    <mu-container>


      <mu-flex class="mt-20" justify-content="center">
        <mu-avatar class="center" :size="size">
          <img src="/static/img/error-401.svg">
        </mu-avatar>
      </mu-flex>

      <div class="tc f-18 mt-10">xxx积分管理系统</div>

      <!--表单-->
      <mu-form ref="form" :model="validateForm" class="mt-20">
        <mu-form-item label="用户名：" label-float help-text="" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码：" label-float help-text="" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="确认密码：" label-float help-text="" prop="password1" :rules="passwordRules1">
          <mu-text-field type="password" v-model="validateForm.password1" prop="password1"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>

        <mu-button flat round color="primary" to="/">
          <mu-icon value="reply" size="16" class="mr-10"></mu-icon>
          已有账号，返回登录</mu-button>
        <mu-button full-width round color="primary" @click="submit">
          <mu-icon value="edit" size="16" class="mr-10"></mu-icon>
          提交注册</mu-button>

        <!--<mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>-->
      </mu-form>

    </mu-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        passwordRules1: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'},
          {validate: (val) => val === this.validateForm.password, message: '两次密码输入不一致'}
        ],
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          username: '',
          password: '',
          password1: '',
          isAgree: true
        },
        size: 66
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result);
          if(result){
            const loading = this.$loading();
            var timer = setTimeout(function () {
              loading.close();
            },2000)
          }
        })
      },
      clear () {
        this.$refs.form.clear()
        this.validateForm = {
          username: '',
          password: '',
          isAgree: true
        }
      }
    }
  }
</script>

