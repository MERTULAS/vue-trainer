<script setup> 

import { ref, watchEffect } from 'vue' 
  
const input = ref(null) // first assignment 
//      ^^  this variable must be same 20th line ref value !!


// onMounted(() => {
//     input.value.focus();
// })

// watchEffect can also be used instead of onMounted, so the ref can be controlled according to change status.
watchEffect(() => { 

  if (input.value) { 

    input.value.focus() 

  } else { 

    // not mounted yet, or the element was unmounted (e.g. by v-if) 

  } 

}) 

</script> 
<template> 
    <div>
        <h1>input</h1>
        <input ref="input" /> 
    </div>
</template> 