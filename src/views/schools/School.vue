<template lang="pug">
Sidebar
  h1 {{ schoolName }}
</template>

<script>
import { find, propEq } from 'ramda';
import { list } from '@/constant/schools/list';
import Sidebar from "@/components/Sidebar";

export default {
  props: {
    schools: String,
  },
  computed: {
    schoolName() {
      return find(propEq('key', this.schools))(list)?.name;
    }
  },
  components: { Sidebar }
};
</script>

<style scoped>
</style>