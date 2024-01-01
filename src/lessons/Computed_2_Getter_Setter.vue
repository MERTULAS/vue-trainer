<template>
    <h1> Value: {{ num }}</h1>
    <h1> Sqrt: {{ sqrtVal }}</h1>
    <h1>Set Sqrt -> <input v-model="sqrtVal" type="number"/></h1>
</template>
<script setup>
    import { ref, computed } from 'vue';

    const num = ref(25);

    const sqrtVal = computed({
        get: () => Math.sqrt(num.value),
        set: (newValue) => {
            num.value = newValue * newValue
        } 
    })

</script>
<style scoped>
    input {
        font-size: 30px;
    }
</style>