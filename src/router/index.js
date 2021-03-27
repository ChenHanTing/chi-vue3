import { createWebHistory, createRouter } from "vue-router";
import { siteType } from '@/constant/website'
import Home from "@/views/chi/Home.vue";
import About from "@/views/chi/About.vue";
import Service from "@/views/chi/Service.vue";
import Achievement from "@/views/chi/Achievement.vue";
import Cooperation from "@/views/chi/Cooperation.vue";

import GroupExhibition from "@/views/schools/GroupExhibition.vue";
import SchoolAbout from "@/views/schools/About.vue";
import Schools from "@/views/schools/Schools.vue";
import School from "@/views/schools/School.vue";

/**
 * Route Meta Fields 可以用來標示哪些網站需要登入權限，
 * 以現在的使用場景則用 meta 要區隔2合1的網站
 *
 * 參考網站: https://router.vuejs.org/guide/advanced/meta.html
 */

/* 崎崎 */
export const superNineNine = [
  {
    path: "/",
    name: "首頁",
    meta: { genre: siteType.chi },
    component: Home,
  },
  {
    path: "/about",
    name: "關於我們",
    meta: { genre: siteType.chi },
    component: About,
  },
  {
    path: "/service",
    name: "服務項目",
    meta: { genre: siteType.chi },
    component: Service,
  },
  {
    path: "/achievement",
    name: "履約實績",
    meta: { genre: siteType.chi },
    component: Achievement,
  },
  {
    path: "/cooperation",
    name: "合作網頁",
    meta: { genre: siteType.chi },
    component: Cooperation,
    // children: [
    //   ...schoolExhibition
    // ]
  },
]
/* 十校聯展 */
export const schoolExhibition = [
  {
    path: "/group-exhibition",
    name: "十校連展-首頁",
    meta: { genre: siteType.school },
    component: GroupExhibition,
  },
  {
    path: "/group-exhibition/about",
    name: "十校連展-關於展覽",
    meta: { genre: siteType.school },
    component: SchoolAbout,
  },
  {
    path: "/schools/:school",
    name: "十校連展-各校",
    meta: { genre: siteType.school },
    component: School,
    props: true,
    onNav: false
  },
  {
    path: "/schools",
    name: "十校連展-各校作品",
    meta: { genre: siteType.school },
    component: Schools,
  },
]

/* 全部路由 */
const routes = [
  ...superNineNine,
  ...schoolExhibition
];

const router = createRouter({
  history: createWebHistory(),
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