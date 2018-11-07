<style scoped>
  .error-page{
    width: 100%;
    height: 100%;
    position: relative;
    background: #f8f8f9;
  }
  .content-con{
    margin: auto;
  }
</style>
<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" :alt="code" class="w">
      <div class="tc mt-10">
        <mu-button flat color="primary">
          <span class="f-30">{{ code }}</span>
        </mu-button>
        <div class="f-20 mt-10">{{ desc }}</div>
      </div>
      <back-btn-group class="mt-20"></back-btn-group>
    </div>
  </div>
</template>

<script>
  import backBtnGroup from './backBtnGroup'
  export default {
    name: 'errContent',
    components: {
      backBtnGroup
    },
    props: {
      code: String,
      desc: String,
      src: null // 任何类型
    }
  }
</script>
