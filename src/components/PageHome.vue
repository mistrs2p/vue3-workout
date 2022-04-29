<!-- SFC => Single File Application
    we have Template, Javascript, CSS in one File
 -->
<template>
  <div>Hello from page home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <!-- <p>
        {{
          users.find((u) => u.id === posts.find((p) => p.id === postId).userId)
            .name
        }}
      </p>
      <p>{{ posts.find((p) => p.id === postId).text }}</p> -->
      <!-- OR -->
      <p>
        {{ userById(postById(postId).userId).name }}
      </p>
      <p>{{ postById(postId).text }}</p>
    </div>
  </div>
</template>

<script>
import dataSource from "@/data.json";
export default {
  data() {
    return {
      dataSource,
      threads: dataSource.threads,
      posts: dataSource.posts,
      users: dataSource.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>

<style>
</style>