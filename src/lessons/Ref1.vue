<script setup> 

import { ref } from 'vue' 

// ref can also be used for DOM elements for DOM manipulations.
  
const input = ref(null) // first assignment

input.value.focus() // call <input /> element's focus() method

// Reason: DOM can be read after the component is mounted, and the value we assigned before mounting is used as the ref value. So the value used here is 'null' and there is no focus() method for the null value.

</script> 

<template> 
    <div>
        <h1>input</h1>
        <input ref="input" /> 
    </div>
</template> 