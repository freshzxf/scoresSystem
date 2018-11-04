<style>
  .back_top {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 1000;
    box-shadow: none;
  }
</style>
<template>
  <mu-scale-transition>
    <mu-button class="back_top"
               :style="{opacity: opacity}"
               @click.native="goTop($event)"
               :small="size === 'small'"
               fab
               color="primary"
               v-show="showGoTop">
      <mu-icon value="expand_less"></mu-icon>
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
      distance: {
        type: Number,
        default: 60
      },
      animate: {
        type: Boolean,
        default: true
      },
      callback: {}
    },
    data () {
      return {
        // 是否展示“回到顶部”图标
        showGoTop: false,
        // 滚动至顶部计时器
        timerBackTop: '',
      }
    },
    mounted () {
      var that = this
      window.removeEventListener('scroll', function () {
      }, false)
      window.addEventListener('scroll', that.$util.debounce(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        scrollTop > that.distance ? that.showGoTop = true : that.showGoTop = false
      }, 100));
    },
    computed: {},
    methods: {
      // 回到顶部
      goTop () {
        var that = this;
        (function smoothscroll(){
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;;
          if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            that.animate ? window.scrollTo (0, currentScroll - (currentScroll/3)) :window.scrollTo (0, 0);
          }
        })();
/*
        this.timerBackTop = setInterval(() => {
          var currentScroll = window.pageYOffset,
            unitDistance = currentScroll / this.time;
          if (currentScroll > 0) {
            window.scrollTo(0, currentScroll - 10 * unitDistance);
          } else {
            window.clearInterval(this.timerBackTop);
          }
        }, 10)
*/
      }
    }
  }
</script>

<style scoped>

</style>
