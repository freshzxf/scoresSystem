<template>
  <div>
    <mu-container>

      <mu-flex class="mt-20" justify-content="center">
        <mu-avatar class="center" :size="size">
          <img src="/static/img/error-401.svg">
        </mu-avatar>
      </mu-flex>

      <div class="tc f-18 mt-10">分销云平台</div>

      <!--表单-->
      <mu-form ref="form" :model="validateForm" class="mt-20">
        <mu-form-item class="mb-10" label="手机号码：" label-float help-text="" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item class="mb-10" label="密码：" label-float help-text="" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>

        <mu-button class="mr-10 mb-10"
                   flat
                   round
                   color="primary"
                   to="/reg">
          <mu-icon value="edit" size="16"></mu-icon>
          没有账号，赶紧注册
        </mu-button>

        <mu-button full-width
                   round
                   color="primary"
                   @click="submit">
          <mu-icon value="lock" size="16" class="mr-10"></mu-icon>
          安全登录
        </mu-button>
        <!--错误提示-->
        <mu-snackbar v-if="tips.open" :color="tips.color" :open.sync="tips.open">
          <mu-icon left :value="tips.icon"></mu-icon>
          {{tips.message}}
          <mu-button flat slot="action" color="#fff" @click="tips.open = false">关闭</mu-button>
        </mu-snackbar>
      </mu-form>

    </mu-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length > 3 && val.length < 10, message: '用户名长度大于3小于10'}
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
        size: 66,
        tips:{
          open: false,
          color: '',
          icon: '',
          message: '',
          timeOut: 3000,
        }
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          if (result) {
            const loading = this.$loading();
            this.$store.dispatch('login').then((data) => {
              if(data && data.token){
                this.$util.setStorage('token', data.token);
                this.$router.push({path: '/'});
              }
              // 打开提示层
              this.tips.message = data.message;
              this.tips.color = 'success';
              this.tips.icon = 'check_circle';
              this.tips.open = true;
              // 关闭loading
              loading.close();
            }).catch((err)=>{
              // 打开提示层
              this.tips.message = err;
              this.tips.color = 'error';
              this.tips.icon = 'priority_high';
              this.tips.open = true;
              // 关闭loading
              loading.close();
              // 自动关闭
              this.tips.timer = setTimeout(() => {
                this.tips.open = false;
              }, this.tips.timeOut);
            });
          }
        })
      },
      clear() {
        this.$refs.form.clear()
        this.validateForm = {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

