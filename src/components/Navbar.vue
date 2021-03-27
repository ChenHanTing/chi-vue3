<template lang="pug">
header#header.l-header.scroll-header
  nav.nav.bd-container
    a.nav__logo(v-if="isChiNav" href='#') LOGO
    .nav-menu.nav__menu(v-if="isChiNav" :class="{'show-menu': isShowNav}")
      ul.nav__list
        li.nav__item(v-for="item in chiNavItem")
          router-link.nav__link(:to="item.path") {{ item.name }}
        li
          i.theme-button.bx.bx-moon.change-theme
    a.nav__logo(v-if="isSchoolNav" href='#')
      div 台北市109學年度
      div 各級學校美術班聯合展覽
    .nav-menu.nav__menu(v-if="isSchoolNav" :class="{'show-menu': isShowNav}")
      ul.nav__list
        li.nav__item(v-for="item in schoolNavItem")
          router-link.nav__link(:to="item.path") {{ item.name }}
        li
          i.theme-button.bx.bx-moon.change-theme
    .nav-toggle.nav__toggle(@click="toggleNav")
      i.bx.bx-menu
</template>

<script>
import website from "@/mixin/website";
import { map, equals, filter } from 'ramda';
import { superNineNine, schoolExhibition } from '@/constant/website'

export default {
  mixins: [website],
  name: "navbar",
  data() {
    return {
      isShowNav: false
    }
  },
  methods: {
    toggleNav() {
      this.isShowNav = !this.isShowNav;
    },
  },
  computed: {
    chiNavItem() {
      return [
        ...map(el => ({ path: el.path, name: el.name }), superNineNine),
        { path: '/group-exhibition', name: '十校聯展' }
      ]
    },
    schoolNavItem() {
      return [
        ...map(
          el => ({ path: el.path, name: el.name.split('-')[1] }),
          filter( el => !equals(el.onNav, false), schoolExhibition)),
        { path: '/', name: '返回首頁' }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/styles/navbar.scss";
</style>