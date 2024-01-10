<template>
    <div class="container">
    <button class="bg-blue-500 p-6 br-6" @click="blockToggle = !blockToggle">Toggle Block</button>
    <Transitions_component>
        <div v-if="blockToggle" class="p-6 bg-green-600"> BLOCK </div>
    </Transitions_component>
    <button class="bg-blue-500 p-6 br-6" @click="blockToggle2 = !blockToggle2">Toggle Other Block</button>
    <Transitions_component :duration="{enter: 100, leave: 900}">
        <div v-if="blockToggle2" class="p-6 bg-green-600"> OTHER BLOCK </div>
    </Transitions_component>
</div>
</template>
<script setup>
import Transitions_component from './Transitions_component.vue';
import {ref} from 'vue';

// It can be customized for more general uses using props.


const blockToggle = ref(false);
const blockToggle2 = ref(false);

</script>
<style>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    gap: 60px;
}

.block {
    text-align: center;
    background-color: gray;
}
</style>