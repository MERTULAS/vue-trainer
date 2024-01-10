<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggle = !blockToggle">Toggle Block</button>
        <Transition name="vue-lessons">
            <div v-if="blockToggle" class="block p-6"> BLOCK </div>
        </Transition>
        <button class="bg-blue-500 p-6 br-6" @click="blockToggle2 = !blockToggle2">Toggle Block Animation</button>
        <Transition name="bounce">
            <div v-if="blockToggle2" class="block p-6"> BOUNCE BLOCK </div>
        </Transition>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const blockToggle = ref(false);
const blockToggle2 = ref(false);


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
}


/*  Default name is 'v' */
/*  If a value is given with name, the default v-... classes will not work. */
/*  Try it */


.vue-lessons-enter-active {
  transition: all 0.3s ease-out;
}

.vue-lessons-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.vue-lessons-enter-from,
.vue-lessons-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


/* Bounce Block */

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>