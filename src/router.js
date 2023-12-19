import { createRouter, createWebHistory } from 'vue-router'


import HelloWorld from './components/HelloWorld.vue'
import Ref1 from './lessons/Ref1.vue';
import Ref2 from './lessons/Ref2.vue';
import Ref3 from './lessons/Ref3.vue';
import Ref4 from './lessons/Ref4.vue';
import Ref5 from './lessons/Ref5.vue';
import Ref6 from './lessons/Ref6.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/lesson1', component: Ref1 },
  { path: '/lesson2', component: Ref2 },
  { path: '/lesson3', component: Ref3 },
  { path: '/lesson4', component: Ref4 },
  { path: '/lesson5', component: Ref5 },
  { path: '/lesson6', component: Ref6 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;