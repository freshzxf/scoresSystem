<template>
  <div>
    <mu-paper class="demo-loadmore-wrap">

      <mu-appbar color="primary">

        <mu-chip class="" color="green" slot="left">
          <mu-avatar :size="32">
            <img src="/static/img/avatar.jpg">
          </mu-avatar>
          王胜军 / <i class="f-20 ml-5 mr-5">3928</i> 分
        </mu-chip>

        <mu-button class="" flat color="yellow" slot="right" @click="open = !open">
          排名 <i class="f-20 ml-5">12</i>
        </mu-button>


      </mu-appbar>

      <mu-container ref="container" class="pl-0 pr-0">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
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

      <!--抽屉-->
      <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
        <mu-list>
          <template v-for="(item) in ranks">
            <mu-list-item>

              <mu-list-item-action :style="{color: redColor,'min-width': '28px'}">
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
      </mu-drawer>

    </mu-paper>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        redColor: '#f44336',
        records: [
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
          {time: '2018-11-01', change: 10, total: 2879},
          {time: '2018-11-02', change: -3, total: 2876},
          {time: '2018-11-03', change: 20, total: 2896},
        ],
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
        refreshing: false,
        open: false,
        docked: false,
        open: false,
        position: 'right',
        loading: false
      }
    },
    methods: {
      refresh() {
        this.refreshing = true
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
          this.num = 10
        }, 2000)
      },
      load() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.num += 10
        }, 2000)
      }
    }
  }
</script>
