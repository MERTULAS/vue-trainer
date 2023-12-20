import { createRouter, createWebHistory } from 'vue-router'


import HelloWorld from './components/HelloWorld.vue'
import Ref1 from './lessons/Ref1.vue';
import Ref2 from './lessons/Ref2.vue';
import Ref3 from './lessons/Ref3.vue';
import Ref4 from './lessons/Ref4.vue';
import Ref5 from './lessons/Ref5.vue';
import Ref6 from './lessons/Ref6.vue';
import Reactivity1 from './lessons/Reactivity1.vue';
import Reactivity2 from './lessons/Reactivity2.vue';
import Reactivity3 from './lessons/Reactivity3.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/lesson1', component: Ref1 },
  { path: '/lesson2', component: Ref2 },
  { path: '/lesson3', component: Ref3 },
  { path: '/lesson4', component: Ref4 },
  { path: '/lesson5', component: Ref5 },
  { path: '/lesson6', component: Ref6 },
  { path: '/lesson7', component: Reactivity1 },
  { path: '/lesson8', component: Reactivity2 },
  { path: '/lesson9', component: Reactivity3 }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;