import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/Home.vue';
import Apps from '@/views/Apps.vue';
import ReadmeGen from '@/views/ReadmeGen.vue';
import SBRaceDataTool from '@/views/SBRaceDataTool.vue';
import LicensePlatePractice from '@/views/LicensePlatePractice.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app',
    name: 'Apps',
    component: Apps,
  },
  {
    path: '/app/readme-gen',
    name: 'ReadmeGen',
    component: ReadmeGen,
  },
  {
    path: '/app/race-data-tool',
    name: 'SBRaceDataTool',
    component: SBRaceDataTool,
  },
  {
    path: '/app/license-plate-practice',
    name: 'LicensePlatePractice',
    component: LicensePlatePractice,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
