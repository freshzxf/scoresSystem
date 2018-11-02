<template>
  <div>
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">

      <mu-appbar color="primary">

        <!--@change="filterName"-->
        <mu-text-field v-model="name" placeholder="姓名搜索" icon="person" ref="nameIpt"></mu-text-field>

      </mu-appbar>

      <mu-container ref="container" class="">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
            <template v-for="(item) in copyRanks">
              <mu-list-item>

                <mu-list-item-action :style="{color: redColor}">
                  {{ item.rank }}
                </mu-list-item-action>

                <mu-list-item-content>
                  <mu-chip class="" color="green" slot="left">
                    <mu-avatar :size="32">
                      <img src="/static/img/avatar.jpg">
                    </mu-avatar>
                    {{item.name}}
                  </mu-chip>
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

    </mu-paper>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: '',
        redColor: '#f44336',
        ranks: [
          {name: 'freshzxf', rank: 1, total: 3455},
          {name: 'littlefish', rank: 2, total: 2876},
          {name: 'littlefish', rank: 3, total: 2876},
          {name: 'littlefish', rank: 4, total: 2876},
          {name: 'littlefish', rank: 5, total: 2876},
          {name: 'littlefish', rank: 6, total: 2876},
          {name: 'littlefish', rank: 7, total: 2876},
          {name: 'littlefish', rank: 8, total: 2876},
          {name: 'littlefish', rank: 9, total: 2876},
          {name: 'littlefish', rank: 10, total: 2876},
          {name: 'littlefish', rank: 11, total: 2876},
          {name: 'littlefish', rank: 12, total: 2876},
          {name: 'littlefish', rank: 13, total: 2876},
          {name: 'littlefish', rank: 14, total: 2876},
          {name: 'littlefish', rank: 15, total: 2876},
          {name: 'littlefish', rank: 16, total: 2876},
          {name: 'littlefish', rank: 17, total: 2876},
          {name: 'littlefish', rank: 18, total: 2876},
          {name: 'littlefish', rank: 19, total: 2876},
          {name: 'littlefish', rank: 20, total: 2876}
        ],
        copyRanks: [
          {name: 'freshzxf', rank: 1, total: 3455},
          {name: 'littlefish', rank: 2, total: 2876},
          {name: 'littlefish', rank: 3, total: 2876},
          {name: 'littlefish', rank: 4, total: 2876},
          {name: 'littlefish', rank: 5, total: 2876},
          {name: 'littlefish', rank: 6, total: 2876},
          {name: 'littlefish', rank: 7, total: 2876},
          {name: 'littlefish', rank: 8, total: 2876},
          {name: 'littlefish', rank: 9, total: 2876},
          {name: 'littlefish', rank: 10, total: 2876},
          {name: 'littlefish', rank: 11, total: 2876},
          {name: 'littlefish', rank: 12, total: 2876},
          {name: 'littlefish', rank: 13, total: 2876},
          {name: 'littlefish', rank: 14, total: 2876},
          {name: 'littlefish', rank: 15, total: 2876},
          {name: 'littlefish', rank: 16, total: 2876},
          {name: 'littlefish', rank: 17, total: 2876},
          {name: 'littlefish', rank: 18, total: 2876},
          {name: 'littlefish', rank: 19, total: 2876},
          {name: 'littlefish', rank: 20, total: 2876}
        ],
        refreshing: false,
        open: false,
        docked: false,
        open: false,
        position: 'right',
        loading: false
      }
    },
    methods: {
      refresh () {
        this.refreshing = true
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
          this.num = 10
        }, 2000)
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.num += 10
        }, 2000)
      },
      watch: {
        name: {
          handler: function() {
            console.log(this.$refs.nameIpt.value);
          },
          deep: true
        }
      },
      /*filterName (val,v) {
        this.copyRanks = this.ranks;
        this.copyRanks = this.copyRanks.filter((item) => {
          console.log(val)
          console.log(v)
          console.log(item.name)
          return item.name.indexOf(val) !== -1;
        })
      }*/
    }
  }
</script>
