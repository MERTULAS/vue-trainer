<template>
    <button
        v-for="tab in tabs" 
        :key="tab.title" 
        @click="activeComponent = tab.component"
        class="p-6 bg-gray-500 m-1"
        :class="{'bg-gray-600': activeComponent === tab.component}"  
    >{{ tab.title }}</button>
  <Transition name="fade" mode="out-in">
    <component :is="activeComponent"></component>
  </Transition>
</template>
<script setup>
import { shallowRef } from 'vue'
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';

const tabs = [
    {
        title: 'Tab 1',
        component: Tab1
    },
    {
        title: 'Tab 2',
        component: Tab2
    }
]

// use shallowRef to avoid component being deeply observed
const activeComponent = shallowRef(Tab1)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>