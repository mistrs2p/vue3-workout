<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ thread.title }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ userById(thread.userId).name }}</router-link>, 
            {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-xsmall">
              <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ userById(thread.userId).name }}</router-link>
            </p>
            <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ symbol reffers to src location
import dataSource from "@/data.json";
export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dataSource,
      posts: dataSource.posts,
      users: dataSource.users,
    };
  },
  methods: {
    postById(postId) {
      return this.posts.find((post) => post.id === postId);
    },
    // userById(userId) {
    //   return this.users.find(user => user.id === this.postById(userId).userId)
    // },
    userByPostId(postId) {
      return this.users.find(
        (user) => user.id === this.postById(postId).userId
      );
    },
    userById(userId) {
      return this.users.find((user) => user.id === userId);
    },
  },
};
</script>

<style>
</style>