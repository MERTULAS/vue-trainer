<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggle = !blockToggle">Toggle Block</button>
        <Transition
            name="custom-classes"
            enter-active-class="animate__animated"
            leave-active-class="animate__animated"
            enter-from-class="animate__welcome"
            leave-to-class="animate__goodbye"
        >
            <div v-if="blockToggle" class="block p-6"> BLOCK </div>
        </Transition>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const blockToggle = ref(false);


</script>
<style>
@import url('../assets/TransitionAnim.css');

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
    transition: .5s all;
}
</style>