import Vue from 'vue';
import HorizontalMenu from '../admin/components/HorizontalMenu';
import Topbar from '../admin/components/Topbar';
import Aside from '../admin/components/Aside';
import Content from '../admin/components/Content';
import Footer from '../admin/components/Footer';
import sideBar from '../admin/components/sideBar';
import Header from '../admin/components/Header';
import SelectLanguage from '../admin/components/SelectLanguage';
import Dashboard from '../admin/components/Dashboard';
import StateColors from '../admin/components/StateColors';
import Typography from '../admin/components/Typography';
import Stack from '../admin/components/Stack';
import Login from '../admin/components/Login';
import Register from '../admin/components/Register';
import signIn from '../admin/components/signIn';
import Layout from '../admin/components/Layout';
import Table from '../admin/components/Table';
import Picker from '../admin/components/Picker';
import Calendar from '../admin/components/Calendar';
import managePreferences from '../admin/components/managePreferences';

import Verte from 'verte';
import 'verte/dist/verte.css';


Vue.component('horizontal-header',HorizontalMenu);
Vue.component('v-topbar',Topbar);
Vue.component('v-aside',Aside);
Vue.component('v-content',Content);
Vue.component('v-footer',Footer);
Vue.component('v-sideBar',sideBar);
Vue.component('v-header',Header);
Vue.component('v-language',SelectLanguage);
Vue.component('v-dashboard',Dashboard);
Vue.component('v-state',StateColors);
Vue.component('v-typography',Typography);
Vue.component('v-stack',Stack);
Vue.component('v-login',Login);
Vue.component('v-register',Register);
Vue.component('v-signIn',signIn);
Vue.component('v-layout',Layout);
Vue.component('v-table',Table);
Vue.component('v-picker',Picker);
Vue.component('v-calendar',Calendar);
Vue.component('v-managePreferences',managePreferences);
Vue.component('verte', Verte);



