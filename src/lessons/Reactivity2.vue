<template>
    <div>
        <p>{{ reactivityVal }}</p>
        <button @click="changeValue">Change Value</button>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';

    // value cannot be made reactive use ref.

    // const reactivityVal = reactive({val: 5});
    const reactivityVal = reactive(5);

    function changeValue () {
        reactivityVal = 10;
        // reactivityVal.val = 10;
    }
  </script>