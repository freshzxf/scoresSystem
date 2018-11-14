<template>

  <div>
    <mu-card>
      <mu-card-header title="freshzxf" sub-title="I'm a weber">
        <mu-avatar slot="avatar">
          <img src="/static/img/avatar.jpg">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title="" sub-title="" class="tc">
        <div class="abs f-30" style="color: white;line-height: 100px;left: 0;right: 0;letter-spacing: 1px">3890分 /10名
        </div>
        <img src="/static/img/bg1.jpg" height="100">
      </mu-card-media>
    </mu-card>

    <mu-list textline="two-line">
      <mu-list-item avatar button to="/scores">
        <mu-list-item-action>
          <mu-avatar color="blue">
            <mu-icon value="assignment"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>积分记录</mu-list-item-title>
          <mu-list-item-sub-title>2018/11/07</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>

      <mu-list-item avatar button to="/set_scores">
        <mu-list-item-action>
          <mu-avatar color="green">
            <mu-icon value="brightness_low"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>积分管理</mu-list-item-title>
          <mu-list-item-sub-title>新增和扣除积分管理</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>

      <mu-list-item avatar button to="/market">
        <mu-list-item-action>
          <mu-avatar color="pink">
            <mu-icon value="local_grocery_store"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>积分商城</mu-list-item-title>
          <mu-list-item-sub-title>海量生活日用、电子办公商品等你拿...</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>

      <!--<mu-list-item avatar button>
        <mu-list-item-action>
          <mu-avatar color="green">
            <mu-icon value="toys"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>玩转攻略</mu-list-item-title>
          <mu-list-item-sub-title>积分涨涨涨，快来学学这些技巧吧...</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>-->

      <mu-list-item avatar button to="/service">
        <mu-list-item-action>
          <mu-avatar color="cyan">
            <mu-icon value="chat"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>在线客服</mu-list-item-title>
          <mu-list-item-sub-title>小丁实时在线客服系统</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>

    </mu-list>


    <!--<mu-bottom-nav value="self" color="primary" class="bottom-nav">-->
      <!--<mu-bottom-nav-item value="self" title="管理中心" icon="person" to=""></mu-bottom-nav-item>-->
      <!--<mu-bottom-nav-item value="service" title="在线客服" icon="phone"></mu-bottom-nav-item>-->
      <!--<mu-bottom-nav-item value="market" title="积分商城" icon="books"></mu-bottom-nav-item>-->
    <!--</mu-bottom-nav>-->

  </div>


</template>
<script>
  export default {
    data () {
      return {
        shift: 'self'
      }
    },
    mounted () {
    }
  }
</script>


