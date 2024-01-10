<template>
    <Transition
        name="custom-classes-6000ms"
        enter-active-class="animate__animated"
        leave-active-class="animate__animated"
        enter-from-class="animate__welcome"
        leave-to-class="animate__goodbye"
        :duration="duration"
    >
        <slot></slot>
    </Transition>
</template>
<script setup>
import { defineProps } from 'vue';

const { duration = 500 } = defineProps(['duration']);

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
</style>