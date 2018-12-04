import Vue from 'nativescript-vue'
import Home from './components/Home'
import RadChartPlugin from 'nativescript-ui-chart/vue';
Vue.use(RadChartPlugin);

Vue.config.silent = true 

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './fonts/font-awesome.css',
  'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

//const ChartVue = require('nativescript-ui-chart/vue')

new Vue({
  render: h => h('frame', [h(Home)])
}).$start()
