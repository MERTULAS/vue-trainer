<script> // ** //
    import { ref, onMounted } from 'vue';

    export default {  
        setup() {  // ** //
            const input = ref(null)   

            onMounted(() => {
                input.value.focus();
            })

            return {  
                input  // If '<script setup>' is not used; We need to return the reference from the setup() function. Represents the data passed to the template.
            }  
        }  
    } 

</script> 

<template> 
    <div>
        <h1>input (script)</h1>
        <input ref="input" /> 
    </div>
</template> 