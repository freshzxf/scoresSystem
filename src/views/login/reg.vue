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
      <mu-form ref="form" :model="validateForm" class="">
        <mu-form-item class="mb-0"
                      label="姓名：" label-float help-text="" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item class="mb-0"
          label="手机号码：" label-float help-text="" prop="phone" :rules="phoneRules">
          <mu-text-field v-model="validateForm.phone" prop="phone"></mu-text-field>
        </mu-form-item>
        <mu-form-item class="mb-0"
                      label="身份证号码：" label-float help-text="" prop="IDcard" :rules="IDcardRules">
          <mu-text-field v-model="validateForm.IDcard" prop="IDcard"></mu-text-field>
        </mu-form-item>

        <mu-form-item class="mb-0"
                      label="手机验证码："
                      label-float
                      help-text=""
                      prop="verifyCode"
                      :rules="verifyCodeRules">
          <mu-text-field v-model="validateForm.verifyCode" prop="verifyCode"
                         append="@gmail.com"></mu-text-field>
        </mu-form-item>
        <!--<mu-form-item class="mb-10"
                      label="密码：" label-float help-text="" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item class="mb-10"
                      label="确认密码：" label-float help-text="" prop="password1" :rules="passwordRules1">
          <mu-text-field type="password" v-model="validateForm.password1" prop="password1"></mu-text-field>
        </mu-form-item>-->
        <mu-form-item class="mb-10"
                      prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>

        <!--<mu-button class="mr-10 mb-10"
          flat
          round
          color="primary"
          to="/">
          <mu-icon value="reply" size="16"></mu-icon>
          已有账号，返回登录
        </mu-button>-->
        <mu-button class="mr-10"
          full-width
          round
          color="primary"
          @click.native="submit">
          <mu-icon value="edit" size="16"></mu-icon>
          提交注册
        </mu-button>

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
        phoneRules: [
          {validate: (val) => !!val, message: '必须填写手机号码'},
          {validate: (val) => /^1[34578]\d{9}$/.test(val), message: '手机号码格式不正确'}
        ],
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写姓名'}
        ],
        IDcardRules: [
          {validate: (val) => !!val, message: '必须填写身份证号码'},
          {validate: (val) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val), message: '身份证号码格式不正确'}
        ],
        verifyCodeRules: [
          {validate: (val) => !!val, message: '必须填写身份证号码'}
        ],
        /*passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '用户名长度大于3小于10'}
        ],
        passwordRules1: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'},
          {validate: (val) => val === this.validateForm.password, message: '两次密码输入不一致'}
        ],*/
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          phone: '',
          username: '',
          IDcard: '',
          verifyCode: '',
          /*password: '',
          password1: '',*/
          isAgree: true
        },
        tips:{
          open: false,
          color: '',
          icon: '',
          message: '',
          timeOut: 3000,
        },
        size: 66
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          if(result){
            const loading = this.$loading();
            this.$store.dispatch('login').then((data) => {
              if(data && data.token){
                this.$util.setStorage('token', data.token);
                this.$router.push({path: '/self'});
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
      clear () {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: true
        }
      },
      getVerifyCode(){
        this.$refs.form.validate().then(()=>{

        }).catch(()=>{

        });
      }
    }
  }
</script>

