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
import store from './store'
import firebase from 'firebase'


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

Vue.use(axios);

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyB4MxAo6o4jtxtTUjlE0lAQxp9MItYU9Gs",
    authDomain: "vue-chat-seyam.firebaseapp.com",
    databaseURL: "https://vue-chat-seyam.firebaseio.com",
    projectId: "vue-chat-seyam",
    storageBucket: "vue-chat-seyam.appspot.com",
    messagingSenderId: "621590815764",
    appId: "1:621590815764:web:86da6b2fe7d2b2bbc13301",
    measurementId: "G-JVP1E34WJC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  window.db=db;

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
  store,
  render: h => h(App),
}).$mount('#app')
