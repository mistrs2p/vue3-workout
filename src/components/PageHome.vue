<!-- SFC => Single File Application
    we have Template, Javascript, CSS in one File
 -->
 <!-- find methods returns a value of the first element in a provided array that satisfied the provided testing function -->
<template>
  <div>Hello from page home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <!-- <div v-for="postId in thread.posts" :key="postId">
      <p>{{ posts.find(post => post.id === postId).text}}</p>
      <p>{{ users.find(user => user.id === posts.find(post => post.id === postId).userId).name }}</p>
    </div> -->

    <!-- OR -->
    <div v-for="postId in thread.posts" :key="postId">
      <!-- <p>{{ userByPostId(postId).name }}</p> -->
      <p>{{ userById(postById(postId).userId).name }}</p>
      <p>{{ postById(postId).text}}</p>
    </div>

  </div>
</template>

<script>
// @ symbol reffers to src location
import dataSource from "@/data.json";
console.log(dataSource)
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
      return this.posts.find(post => post.id === postId)
    },
    // userById(userId) {
    //   return this.users.find(user => user.id === this.postById(userId).userId)
    // },
    userByPostId(postId) {
      return this.users.find(user => user.id === this.postById(postId).userId)
    },
    userById(userId) {
      return this.users.find(user => user.id === userId)
    },
  },
};
</script>

<style>
</style>