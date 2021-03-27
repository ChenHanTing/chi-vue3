import Home from "@/views/chi/Home";
import About from "@/views/chi/About";
import Service from "@/views/chi/Service";
import Achievement from "@/views/chi/Achievement";
import Cooperation from "@/views/chi/Cooperation";
import GroupExhibition from "@/views/schools/GroupExhibition";
import SchoolAbout from "@/views/schools/About";
import School from "@/views/schools/School";
import Schools from "@/views/schools/Schools";

export const siteType = {
  chi: 'chi',
  school: 'school'
}

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
    path: "/schools/:schools",
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
