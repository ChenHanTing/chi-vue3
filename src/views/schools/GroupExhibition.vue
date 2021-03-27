<template lang="pug">
main
  img.full-width(src="~@/images/schools/banner.jpg")
</template>

<script>

</script>

<style lang="scss" scoped>
.full-width {
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
}

figure {
  margin: 0 0;
}

figcaption {
  text-align: center;
  color: #999;
}

main {
  //overflow-x: hidden;
  //max-width: 600px;
  //margin-left: auto;
  //margin-right: auto;
}
</style>