<template>
    <div>
      <button @click="increase">Clicked {{ state.count }}</button>
    </div>
  </template>
  <script setup>
  import { ref, reactive } from "vue";
  
  const state = reactive({
    count: ref(0)
  });
  
  function increase() {
    state.count++; // auto unwraps the ref() if is set a value of reactive() --> state.count.value is wrong ! 
  }
  </script>