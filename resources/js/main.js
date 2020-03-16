import Vue from 'vue'
import App from './App.vue'
import './admin/component'
import './admin/router/index'
import i18n from './admin/i18n'
import router from './admin/router/index'

// import Vuex from 'vuex'

// Vue.use(Vuex)
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
