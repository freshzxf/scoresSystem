<template>
  <div style="display: table;margin: auto">
    <mu-button class="mr-10" color="primary" @click="backHome">返回首页</mu-button>
    <mu-button flat @click="backPrev">{{ second }}s后自动返回</mu-button>
  </div>
</template>

<script>
  export default {
    name: 'backBtnGroup',
    data () {
      return {
        second: 5,
        timer: null
      }
    },
    methods: {
      backHome () {
        this.$router.replace({
          name: 'home'
        })
      },
      backPrev () {
        this.$router.go(-1)
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        if (this.second === 0) this.backPrev()
        else this.second--
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>
