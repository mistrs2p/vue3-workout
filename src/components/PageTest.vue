<template>
  <div>Hello from page home</div>
  <div>{{ bar+1 }}</div>
  <div>{{ obj.bar.value++ }}</div>

</template>

<script setup>
import {
  ref
} from "vue";

const obj = {
  foo: ref(1),
  bar: ref(2)
}
console.log(obj)

const { foo, bar } = obj

console.log(foo, bar)

foo.value = 3
console.log(foo)
console.log(obj)

</script>

<style>
</style>