import Vue from 'vue'
import App from './App.vue'
import './admin/component'
import './admin/router/index'
import i18n from './admin/i18n'
import router from './admin/router/index';
import axios from 'axios';
import VueGoodTablePlugin from 'vue-good-table';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// import TreeView from '@ll931217/vue-treeview'
import rate from 'vue-rate';

Vue.use(rate)
// Vue.use(TreeView)
import VueTreeList from 'vue-tree-list'

Vue.use(VueTreeList)


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
// import Vuex from 'vuex'

Vue.use(axios)
Vue.config.productionTip = false



// const store = new Vuex.Store({
//     state: {
//       lang: ['ar','en'],
//       defaultLang: 'ar'
//     },
//     getters: {
//         getLanguages() {
//             return window.localStorage.getItem('defaultLang');
//         }
//     },
//     mutations: {
//         setLanguages (state) {
//           window.localStorage.setItem('defaultLang', value);
//           if(localStorage.getItem('lang') === 'ar') {

//         }else{

//         }
//         }
//       },
//   })


new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
