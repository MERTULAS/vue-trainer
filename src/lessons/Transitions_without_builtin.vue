<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggler">Toggle Block</button>
        <div ref="block" class="block p-6"> BLOCK </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const block = ref(null);

function blockToggler () {
    block.value.classList.toggle('show');
}


</script>
<style scoped>
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
    visibility: hidden;
    opacity: 0;
}

.show {
    visibility: visible;
    opacity: 1;
}

</style>