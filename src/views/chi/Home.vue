<template lang="pug">
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>

<style lang="scss">
/* 基礎設施 */
@import "~@/styles/base.scss";

/* 進入點 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
}
</style>
