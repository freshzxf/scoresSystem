<template>
  <div>
    <mu-paper class="demo-loadmore-wrap">

      <!--顶部个人信息总览-->
      <mu-appbar v-if="self" color="primary">

        <mu-chip color="green" slot="left">
          <mu-avatar :size="32">
            <img :src="self.avatar">
          </mu-avatar>
          {{self.name}} / <i class="f-20 ml-5 mr-5">{{self.total}}</i> 分
        </mu-chip>

        <mu-button class="" flat color="yellow" slot="right" @click="open = !open">
          排名 <i class="f-20 ml-5">{{self.rank}}</i>
        </mu-button>

      </mu-appbar>

      <!--个人记录列表-->
      <mu-container ref="container" class="pl-0 pr-0">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load" :loaded-all="loadedAll">
          <mu-list v-if="records">
            <template v-for="(item) in records">
              <mu-list-item>

                <mu-list-item-content>
                  <mu-list-item-title v-if="item.change>0">{{ item.change }} 分</mu-list-item-title>
                  <mu-list-item-title v-else="item.change>0" :style="{color: redColor}">{{ item.change }} 分
                  </mu-list-item-title>
                  <mu-list-item-sub-title>{{ item.time }}</mu-list-item-sub-title>
                </mu-list-item-content>

                <mu-list-item-action>
                  {{ item.total }} 分
                </mu-list-item-action>

              </mu-list-item>
              <mu-divider/>
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>

      <!--抽屉式展示其他所有人员总信息-->
      <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
        <mu-list v-if="ranks">
          <template v-for="(item, index) in ranks">
            <mu-list-item>

              <mu-list-item-action :style="{color: index < 3 ? redColor : '','min-width': '28px'}">
                {{ item.rank }}
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-chip class="" color="green" slot="left">
                  <mu-avatar :size="32">
                    <img :src='item.avatar'>
                  </mu-avatar>
                  {{item.name.length > 9 ? item.name.substr(0, 9) + '...' : item.name}}
                </mu-chip>
              </mu-list-item-content>

              <mu-list-item-action>
                {{ item.total }} 分
              </mu-list-item-action>

            </mu-list-item>
            <mu-divider/>
          </template>
        </mu-list>
      </mu-drawer>

      <!--返回顶部-->
      <back-top size="small" :distance="150" :opacity=".7"></back-top>
    </mu-paper>
  </div>
</template>
<script>
  import backTop from '@/components/backTop';
  export default {
    components: {
      backTop
    },
    data () {
      return {
        redColor: '#f44336',
        refreshing: false,
        loadedAll: false,
        open: false,
        docked: false,
        position: 'right',
        loading: false
      }
    },
    computed: {
      records: function(){
        return this.$store.state.self.records;
      },
      self: function(){
        return this.$store.state.self.self;
      },
      ranks: function(){
        return this.$store.state.common.ranks;
      },
      recordsOnce: function(){
        return this.$store.state.self.recordsOnce
      },
      ranksOnce: function(){
        return this.$store.state.common.ranksOnce
      }
    },
    created () {
      if(!this.records.length){
        this.$store.dispatch('records', {records: this.recordsOnce});
      }
      if(!this.ranks.length){
        this.$store.dispatch('ranks', {ranks: this.ranksOnce});
      }
    },
    methods: {
      refresh () {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
        }, 1000)
      },
      load () {
        this.loading = true;
        this.$store.dispatch('records', {records: this.recordsOnce}).then((data) => {
          if(!data){
            this.loadedAll = true;
          }
          this.loading = false;
        });
      }
    }
  }
</script>
