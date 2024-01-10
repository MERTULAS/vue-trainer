<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggle = !blockToggle">Toggle Block</button>
        <Transition name="nested" duration="2000">
            <!-- The total duration should match the delay plus transition duration of the inner element: -->
            <!-- duration override to CSS transition on root block-->
            <!-- duration can be object as a below -->
            <!-- :duration="{ enter: 500, leave: 800 }" -->
            <div v-if="blockToggle" class="block p-6 outer">
                <div class="inner">
                    Block
                </div>
                <div class="second-inner">
                    Block 2
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const blockToggle = ref(false);


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
    transition: 5s all;
    /* The total duration should match the delay plus transition duration of the inner element: */
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all .5s ease-in-out;
}

.nested-enter-active .second-inner,
.nested-leave-active .second-inner {
  transition: all 2s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.nested-enter-from .second-inner,
.nested-leave-to .second-inner {
    transform: scale(1.5);
}

.nested-enter-from .outer{
    transform: scale(1.5);
}

.nested-leave-to .inner{
    transform: rotate(180deg);
}
</style>