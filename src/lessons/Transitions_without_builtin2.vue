<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggler">Toggle Block</button>
        <div v-if="blockToggle" class="block p-6" ref="block"> BLOCK </div>
    </div>
</template>
<script setup>
import {ref, onUpdated} from 'vue'

const blockToggle = ref(false)
const block = ref(null)

function blockToggler() {
  if (blockToggle.value) {
      block.value.classList.remove('add-block');
      block.value.addEventListener('transitionend', () => {
        blockToggle.value = false;
      });
  } else {
    blockToggle.value = true;
  }
}

onUpdated(() => {
  if (blockToggle.value) {
      block.value.classList.add('add-block');
  }
});

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
    transition: opacity 1s, transform 1s;
    transform: scale(.5);
    opacity: 0;
}

.add-block {
    opacity: 1;
    transform: scale(1);
    animation: show 1s;
}

@keyframes show {
    from { opacity: 0; transform: scale(0.5);}
    to { opacity: 1; transform: scale(1);}
}

</style>