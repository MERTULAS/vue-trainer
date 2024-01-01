<template>
    <h1> Calculate with Computed: {{ multiplyResult }}</h1>
    <h1> Calculate with Method: {{ multiply() }}</h1>
    <h1> Value 1 (computed): {{ num1 }}</h1>
    <h1> Value 2 (method): {{ num2 }}</h1>
    <button @click="increaseNum1">Increment Num 1</button>
    <button @click="increaseNum2">Increment Num 2</button>
</template>
<script setup>
    import { ref, computed } from 'vue';

    const num1 = ref(0);
    const num2 = ref(0);

    function increaseNum1 () {
        num1.value++;
    }

    function increaseNum2 () {
        num2.value++;
    }


    const multiplyResult = computed(() => {
        console.log('computed run');
        return num1.value * 2;
    });

    const multiply = () => {
        console.log('method run');
        return num2.value * 2;
    }

    
</script>