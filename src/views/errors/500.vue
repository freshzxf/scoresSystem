<template>

  <error-content code="500" desc="Oh~~您的页面好像飞走了~" :src="src"/>

</template>

<script>
  import errorContent from './components/errorContent'
  export default {
    name: 'error_500',
    components: {
      errorContent
    },
    data () {
      return {
        src: '/static/img/error-500.svg'
      }
    },
    mounted () {
      console.log(this.$route.query)
    }
  }
</script>
