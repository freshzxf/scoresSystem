<style scoped>
  .search {
    width: 140px;
    margin: -4px !important;
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -ms-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
  }

  /*使用样式穿透写法突破scoped限制，在less、sass中使用/deep/*/
  >>> .mu-input.is-solo .mu-input-icon {
    top: 16px;
  }

  .focus {
    background: hsla(0, 0%, 100%, .15);
    width: 190px;
  }
</style>
<template>
  <div>
    <mu-appbar color="primary" :class="{'top-nav': scrollTop > 150}">

      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value="reply"></mu-icon>
      </mu-button>
      Scores
      <!--@change="filterName"-->
      <mu-text-field ref="searchIpt"
                     :solo="true"
                     placeholder="姓名搜索"
                     slot="right"
                     v-model="searchName"
                     icon="search"
                     :action-icon="focus ? 'clear': ''"
                     :action-click="()=>{searchName = ''}"
                     color="white"
                     class="search"
                     :class="{'focus': focus}"
                     @focus="focus = !focus"
                     @blur="focus = !focus"
                     @compositionstart.native="iptEnd = !1"
                     @compositionend.native="iptEnd = !0">
      </mu-text-field>

    </mu-appbar>

    <mu-container ref="container" class="pl-0 pr-0">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list>
          <template v-for="(item, index) in copyRanks">
            <mu-list-item :key="item.id" class="pl-0 pr-0">
              <!--排名-->
              <mu-list-item-action :style="{color: index < 3 ? redColor : '','min-width': '28px'}">
                {{ item.rank }}
              </mu-list-item-action>
              <!--姓名积分-->
              <mu-list-item-content>
                <mu-chip color="success" slot="left" class="mt-5">
                  <mu-avatar :size="32">
                    <img :src="item.avatar">
                  </mu-avatar>
                  {{item.name.length > 9 ? item.name.substr(0, 9) + '...' : item.name}} / {{ item.total }} 分
                </mu-chip>
              </mu-list-item-content>
              <!--操作栏-->
              <mu-list-item-action>
                <mu-chip :color="item.change < 0 ? 'red' : 'primary'" class="pr-0">
                  <span class="pr-50" v-if="item.change">{{item.reasonText}} {{item.change}}</span>
                  <mu-avatar :size="32" class="mr-0">
                    <mu-button :color="item.change < 0 ? 'red' : ''" fab small @click="edit(item.id, index)"
                               style="width: 32px;height: 32px;box-shadow: none;border: 0">
                      <mu-icon value="edit"></mu-icon>
                    </mu-button>
                  </mu-avatar>
                </mu-chip>

              </mu-list-item-action>

            </mu-list-item>
            <mu-divider/>
          </template>
        </mu-list>
      </mu-load-more>

      <!--编辑弹窗-->
      <mu-dialog :title="currentName" scrollable :open.sync="editDialog">

        <div class="select-control-group">
          <!--<mu-select label="Reason" filterable v-model="radio.value" full-width>
            <mu-option v-for="(item, index) in radio.arr" :key="index" :label="item.label" :value="item.value"></mu-option>
          </mu-select>-->
          <div class="select-control-row" :key="index" v-for="(item, index) in radio">
            <mu-radio :value="item.value" v-model="currentReason" :label="item.label"></mu-radio>
          </div>
          <mu-text-field class="mb-0" label="Change" full-width type="number" v-model="currentChange"></mu-text-field>
        </div>

        <mu-button slot="actions" fullWidth color="primary"
                   @click="submit(currentIndex, currentReason, currentChange)">确认提交
        </mu-button>
      </mu-dialog>

    </mu-container>

    <!--返回顶部-->
    <back-top size="small" :distance="150" :opacity="0.7" :right="60" @scroll="scroll"></back-top>
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
        scrollTop: 0,
        loadedAll: false,

        redColor: '#f44336',

        iptEnd: false, // 是否输入完毕（为了适应中文输入法）
        focus: false, // 搜索框的聚焦状态

        ranks: [], // 排行版
        copyRanks: [], // 排行版副本
        searchName: '', // 搜索用户
        currentIndex: '', // 当前编辑索引
        currentName: '', // 当前编辑用户名
        currentReason: '', // 当前编辑事由
        currentChange: '', // 当前编辑数量

        refreshing: false,
        open: false,
        loading: false,

        editDialog: false, // 编辑的弹层显隐
        radio: [{
          'label': '天地',
          'value': 1,
        }, {
          'label': '玄黄',
          'value': 2,
        }, {
          'label': '布谷',
          'value': 3,
        }], // 标签加对应值
      }
    },
    computed: {
      ranksOnce: function () {
        return this.$store.state.common.ranksOnce
      }
    },
    created () {
      if (!this.ranks.length) {
        this.$store.dispatch('ranks', {ranks: this.ranksOnce}).then(() => {
          this.ranks = [...this.$store.state.common.ranks]
          this.copyRanks = [...this.$store.state.common.ranks]
        })
      }
    },
    watch: {
      // 如果 `searchName` 发生改变，这个函数就会运行
      searchName: function (newVal, oldVal) {
        this.copyRanks = [...this.$store.state.common.ranks]
        this.copyRanks = this.copyRanks.filter((item) => {
          return item.name.indexOf(newVal.replace(/(^\s*)|(\s*$)/g, '')) !== -1
        })
      }
    },
    methods: {
      refresh () {
        this.refreshing = true
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
        }, 2000)
      },
      load () {
        this.loading = true
        this.$store.dispatch('ranks', {records: this.ranksOnce}).then((data) => {
          if (!data) {
            this.loadedAll = true
          }
          this.loading = false
        })
      },
      edit (id, index) {
        // 设置当前编辑的用户名
        this.currentName = this.copyRanks[index].name
        // 设置当前编辑的用户所在索引值
        this.currentIndex = index
        this.copyRanks[index].reason ? this.currentReason = this.copyRanks[index].reason : this.currentReason = ''
        this.copyRanks[index].change ? this.currentChange = this.copyRanks[index].change : this.currentChange = ''
        // 切换显示隐藏弹层
        this.editDialog = !this.editDialog
      },
      submit (index, reason, change) {
        if (reason && change) {
          var reasonText = this.radio.filter(function (item) {
              return item.value === reason
            })[0].label + '：',
            newTotal = +this.copyRanks[index].total + (+change)
          this.$set(this.copyRanks[index], 'reason', reason) // 设置当前编辑项事由id（作用是动态更改选中的事由radio）
          this.$set(this.copyRanks[index], 'reasonText', reasonText) // 设置当前编辑项事由文本（用户所见）
          this.$set(this.copyRanks[index], 'change', change) // 设置当前编辑项变动值
          this.$set(this.copyRanks[index], 'total', newTotal) // 设置当前编辑项总值
          this.editDialog = !this.editDialog
        } else {
          console.log('表单验证失败')
        }
      },
      scroll(data){
        this.scrollTop = data;
      }
    }
  }
</script>
