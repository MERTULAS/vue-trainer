<script setup> 

import { ref } from 'vue' 

// ref can also be used for DOM elements.
  
const button = ref(null) // first assignment 
//      ^^  this variable must be same 21th line ref value !!


function handleClick() {
    button.value.innerText = 'Clicked !!'; // We don't need to use 'onMounted' this time because this function runs when a button is clicked.
}


</script> 

<template> 
    <div>
        <h1>button</h1>
        <button ref="button" @click="handleClick">Click Me !</button>
        <!-- Alternatively, 'Click Me!' Instead, a dynamic variable defined with ref could be written and this text change could be achieved. -->
    </div>
</template> 