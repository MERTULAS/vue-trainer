<template>
    <h1> Computed Value: {{ multiplyResult }}</h1>
    <h1> Value: {{ num }}</h1>
    <h1> Non Ref Value: {{ num_nonRef }}</h1>
    <button @click="increaseVals">Increment</button>
</template>
<script setup>
    import { ref, computed } from 'vue';

    const num = ref(0);
    let num_nonRef = 0;

    function increaseVals () {
        num.value++;
        num_nonRef++;
    }

    // Computed usage
    // It is calculated automatically when the dependency value changes.

    // NOTE THAT
    // If we want the Computed value to be triggered, the dependent value must be defined with 'ref'.
    // The value defined in return must depend on a value defined in 'ref'.
    const multiplyResult = computed(() => {
        // works
        return num.value * 2;

        // doesn't work
        // return num_nonRef * 2;

        // works
        // return num_nonRef * 2 + num.value; 
    });

</script>