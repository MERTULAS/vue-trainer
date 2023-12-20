<template>
    <div>
        <button @click="formToggler">Open User Info</button>
        <div v-if="isFormOpen" class="form">
            <h1>User Info</h1>
            <p><span>Name: </span><input v-model="userForm.name" /></p>
            <p><span>Surname: </span><input v-model="userForm.surname" /></p>
            <p><span>Age: </span><input v-model="userForm.age" /></p>
            <p><span>Location: </span><input v-model="userForm.location" /></p>
        </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
    const isFormOpen = ref(false);
    
    const userForm = reactive({
        name: 'John',
        surname: 'Jack',
        age: 25,
        location: 'Europe'
    });

    function formToggler () {
        isFormOpen.value = !isFormOpen.value;
    }
  
  </script>
  <style scoped>
    * {
        font-size: 30px;
    }

    .form {
        border: 5px solid black;
        margin: 10px;
        padding: 10px;
    }

    .form p span:last-child {
        border: 1px solid red;
        padding: 10px;
    }
</style>