<template lang="pug">
#nav
  div(v-if="isChiNav")
    router-link(v-for="item in chiNavItem" :to="item.path") {{ item.name }}
  div(v-if="isSchoolNav")
    router-link(v-for="item in schoolNavItem" :to="item.path") {{ item.name }}
</template>

<script>
import { map, equals, filter } from 'ramda';
import { siteType } from '@/constant/website'
import { superNineNine, schoolExhibition } from '@/router/index'

export default {
  name: "navbar",
  computed: {
    /* 崎崎網站 */
    isChiNav() {
      return equals(this.$route.meta.genre, siteType.chi)
    },
    /* 十校聯展網站 */
    isSchoolNav() {
      return equals(this.$route.meta.genre, siteType.school)
    },
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

<style scoped>

</style>