<template>
  <h1>Welcome to the forum</h1>
  <ThreadList :threads="threads" />
</template>

<script>
// @ symbol reffers to src location
import dataSource from "@/data.json";
import ThreadList from './ThreadList.vue'
console.log(dataSource);
export default {
  components: {
    ThreadList
  },
  data() {
    return {
      threads: dataSource.threads,
    };
  },

};
</script>

<style scoped>


</style>