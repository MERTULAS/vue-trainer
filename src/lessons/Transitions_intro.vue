<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggle = !blockToggle">Toggle Block</button>
        <Transition>
            <div v-if="blockToggle" class="block p-6"> BLOCK </div>
        </Transition>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const blockToggle = ref(false);


// The enter or leave can be triggered by one of the following:

// Conditional rendering via v-if
// Conditional display via v-show
// Dynamic components toggling via the <component> special element
// Changing the special key attribute


// v-enter-from

// Starting state for enter. 
// Added before the element is inserted, removed one frame after the element is inserted.


// v-enter-active

// Active state for enter. 
// Applied during the entire entering phase. 
// Added before the element is inserted, removed when the transition/animation finishes. 
// This class can be used to define the duration, delay and easing curve for the entering transition.


// v-enter-to

// Ending state for enter. 
// Added one frame after the element is inserted (at the same time v-enter-from is removed), removed when the transition/animation finishes.


// v-leave-from

// Starting state for leave.
// Added immediately when a leaving transition is triggered, removed after one frame.


// v-leave-active

// Active state for leave. 
// Applied during the entire leaving phase. 
// Added immediately when a leaving transition is triggered, removed when the transition/animation finishes. 
// This class can be used to define the duration, delay and easing curve for the leaving transition.


// v-leave-to

// Ending state for leave. 
// Added one frame after a leaving transition is triggered (at the same time v-leave-from is removed), removed when the transition/animation finishes.


// v-enter-active and v-leave-active give us the ability to specify different easing curves for enter / leave transitions, which we'll see an example of in the following sections.


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
    transition: .5s all;
}

.v-leave-active {
    transition: all 2s;
}

.v-enter-active {
    transition: all 5s;
}

.v-enter-from {
    background-color: green;
    transform: scale(1.5);
    opacity: 0;
}

.v-leave-to {
    background-color: red;
    opacity: 0;
}
</style>