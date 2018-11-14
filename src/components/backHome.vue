<style>
  .back_home {
    position: fixed;
    bottom: 70px;
    right: 15px;
    z-index: 1000;
    box-shadow: none;
  }
</style>
<template>
  <mu-scale-transition>
    <mu-button class="back_home"
               :style="{opacity: opacity}"
               to="/"
               :small="size === 'small'"
               fab
               color="primary">
      <mu-icon value="home"></mu-icon>
    </mu-button>
  </mu-scale-transition>
</template>

<script>
  export default {
    name: 'backTop',
    props: {
      size: {
        type: String,
        default: 'small'
      },
      opacity: {
        type: Number,
        default: 1
      },
      callback: {}
    },
    data() {
      return {}
    },
    mounted() {
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>

</style>
