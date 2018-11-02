import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/index'
import Routers from './router'
import Util from './libs/util'
import App from './app.vue'
import './styles/common.less'

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import 'muse-ui-message/dist/muse-ui-message.css'; // message css
import Message from 'muse-ui-message';
import Loading from 'muse-ui-loading';

import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip,
  theme
} from 'muse-ui';

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);
/*theme.add('teal', {
  primary: '#009688',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');
theme.use('teal');*/

Vue.use(Loading);
Vue.use(Message);

Vue.use(VueRouter);
// 全局挂载工具库
Vue.prototype.$util = Util;

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig);


// 路由生命周期(拦截)
router.beforeEach((to, from, next) => {
  if (Util.getStorage('token')) {
    to.path === '/login' ? next('/') : '';
    next();
  } else {
    to.path === '/login' ? next() : next('/login');
  }
});
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
