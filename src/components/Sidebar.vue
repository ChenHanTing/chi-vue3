<template lang="pug">
#sidebar
  .school-layout(v-if="isSchoolNav")
    .sidebar
      ul
        li(v-for="item in schools")
          router-link(:to="item.path") {{ item.name }}
    .content
      slot
</template>

<script>
import { map } from 'ramda';
import website from "@/mixin/website";
import { list as schoolList } from "@/constant/schools/list"

export default {
  mixins: [website],
  name: "sidebar",
  computed: {
    schools () {
      console.log(schoolList)

      return map( el => ({ name: el.name, path: `/schools/${el.key}` }), schoolList)
    }
  },
}
</script>

<style lang="scss" scoped>
  .content {
    transform: translateX(270px);
    @media screen and (min-width: 991px) {
      transform: translateX(300px);
    }
  }
  .sidebar {
    margin: 0;
    padding: 0;
    left: 0;
    height: 100%;
    /* 寬度訂工規較好設計 */
    min-width: 270px;
    @media screen and (min-width: 991px) {
      width: 300px;
    }
    position: fixed;
    box-shadow: 0 4px 4px rgba(0,0,0,.1);

    ul {
      /* default pl: 40px */
      padding-left: 0;
      padding-top: 60px;
      list-style: none;
      text-decoration: none;

      a {
        height: 100%;
        width: 100%;
        line-height: 30px;
        font-size: 16px;
        display: block;
        text-align: left;
        margin-left: 18px;
        color: var(--text-color);
        font-weight: var(--font-medium);
        text-decoration: none;
        box-sizing: border-box;
        border-top: 1px solid rgba(255, 255, 255, .1);
      }
    }
  }
</style>