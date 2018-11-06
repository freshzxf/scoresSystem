<template>
  <mu-paper>
    <mu-appbar color="primary">
      <mu-button icon slot="left">
        <mu-icon value="reply"></mu-icon>
      </mu-button>
      积分商城
    </mu-appbar>
    <mu-grid-list class="gridlist" :style="{height: windowH + 'px'}">
      <mu-sub-header>儿童玩具</mu-sub-header>
      <mu-grid-tile v-for="tile, index in list" :key="index">
        <img :src="tile.img" >
        <span slot="title">{{tile.title}} </span>
        <span slot="subTitle">{{tile.score}} 积分</span>
        <mu-button slot="action" icon>
          <mu-icon value="repeat"></mu-icon>
        </mu-button>
      </mu-grid-tile>
    </mu-grid-list>
  </mu-paper>
</template>
<script>
  export default {
    data () {
      return {
        windowH: '',
        list: [{
          img: '/static/img/jf1.jpg',
          title: '玩具小车',
          score: 200,
          author: 'Myron'
        }, {
          img: '/static/img/jf1.jpg',
          title: '玩具小车',
          score: 200,
          author: 'Linyu'
        }, {
          img: '/static/img/jf1.jpg',
          title: '玩具小车',
          score: 200,
          author: 'ruolin'
        }, {
          img: '/static/img/jf1.jpg',
          title: '玩具小车',
          score: 200,
          author: 'kakali'
        }, {
          img: '/static/img/jf1.jpg',
          title: 'Honey',
          score: 200,
          author: 'yuyang'
        }, {
          img: '/static/img/jf1.jpg',
          title: '玩具小车',
          score: 200,
          author: 'mokayi'
        }, {
          img: '/static/img/jf1.jpg',
          title: '玩具小车',
          score: 200,
          author: 'mokayi'
        }]
      }
    },
    mounted(){
      this.windowH = window.innerHeight -56;
    }
  }
</script>
<style>
  .gridlist{
    margin: 0!important;
    overflow-y: auto;
  }
</style>

