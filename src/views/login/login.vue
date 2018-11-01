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

        <mu-button flat round color="primary" to="/reg">
          <mu-icon value="edit" size="16" class="mr-10"></mu-icon>
          没有账号，赶紧注册</mu-button>

        <mu-button full-width
                   round
                   color="primary"
                   @click="submit">
          <mu-icon value="lock" size="16" class="mr-10"></mu-icon>
          安全登录</mu-button>

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
        validateForm: {
          username: '',
          password: ''
        },
        loading: false,
        size: 66
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result);
          if(result){
            const loading = this.$loading();
            var timer = setTimeout(() => {
              this.$router.push({path: '/index'})
              loading.close();
            },2000)
          }
        })
      },
      clear () {
        this.$refs.form.clear()
        this.validateForm = {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

