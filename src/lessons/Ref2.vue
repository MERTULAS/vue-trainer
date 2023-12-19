<script setup> 

import { ref, onMounted } from 'vue' 

// ref can also be used for DOM elements.
  
const input = ref(null) // first assignment 
//      ^^  this variable must be same 20th line ref value !!

onMounted(() => {
    input.value.focus() // call <input /> element's focus() method
})


</script> 

<template> 
    <div>
        <h1>input</h1>
        <input ref="input" /> 
    </div>
</template> 