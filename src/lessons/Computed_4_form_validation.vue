<template>
    <div>
      <p>Username: <input v-model="username" :style="`border-width: 10px; border-color :${usernameLength > 6 ? 'green' : 'red'}`" /></p>
      <p>Note: Username must be longer than 6 characters.</p>
      <p>Length: {{ usernameLength }}</p>
    </div>
  </template>
  
  <script setup>

    // Simple form validation example with computed;
    import {ref, computed} from 'vue';

    const username = ref('');

    const usernameLength = computed(() => username.value.length);
  </script>
  <style scoped>
    * {
        font-size: 30px;
    }
</style>