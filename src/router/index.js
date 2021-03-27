import { createWebHistory, createRouter } from "vue-router";
import { superNineNine, schoolExhibition } from '@/constant/website';

/* 全部路由 */
const routes = [
  ...superNineNine,
  ...schoolExhibition
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

function RouteMonitor(name, path) {
  this['連結名稱'] = name;
  this['路徑'] = path;
}

router.beforeEach((to, from, next) => {
  console.table([new RouteMonitor(to.name, to.path)]);
  next();
});

export default router;