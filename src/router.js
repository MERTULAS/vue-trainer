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
import Computed_0_intro from './lessons/Computed_0_intro.vue';
import Computed_1_eComBasket from './lessons/Computed_1_eComBasket.vue';
import Computed_2_Getter_Setter from './lessons/Computed_2_Getter_Setter.vue';
import Computed_3_data_filter from './lessons/Computed_3_data_filter.vue';
import Computed_4_form_validation from './lessons/Computed_4_form_validation.vue';
import Computed_5_vs_methods from './lessons/Computed_5_vs_methods.vue';
import Transitions_without_builtin from './lessons/Transitions_without_builtin.vue';
import Transitions_without_builtin2 from './lessons/Transitions_without_builtin2.vue';
import Transitions_intro from './lessons/Transitions_intro.vue';
import Transitions_named from './lessons/Transitions_named.vue';
import Transitions_custom_classes from './lessons/Transitions_custom_classes.vue';
import Transitions_nested from './lessons/Transitions_nested.vue';
import Transitions_hooks from './lessons/Transitions_hooks.vue';
import Transitions_component_usage from './lessons/Transitions_component_usage.vue';
import Transitions_tab_change from './lessons/Transitions_tab_change.vue';
import TransitionGroup_intro from './lessons/TransitionGroup_intro.vue';



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
  { path: '/lesson9', component: Reactivity3 },
  { path: '/lesson10', component: Computed_0_intro },
  { path: '/lesson11', component: Computed_1_eComBasket },
  { path: '/lesson12', component: Computed_2_Getter_Setter },
  { path: '/lesson13', component: Computed_3_data_filter },
  { path: '/lesson14', component: Computed_4_form_validation },
  { path: '/lesson15', component: Computed_5_vs_methods },
  { path: '/lesson16', component: Transitions_without_builtin },
  { path: '/lesson17', component: Transitions_without_builtin2 },
  { path: '/lesson18', component: Transitions_intro },
  { path: '/lesson19', component: Transitions_named },
  { path: '/lesson20', component: Transitions_custom_classes },
  { path: '/lesson21', component: Transitions_nested },
  { path: '/lesson22', component: Transitions_hooks },
  { path: '/lesson23', component: Transitions_component_usage },
  { path: '/lesson24', component: Transitions_tab_change },
  { path: '/lesson25', component: TransitionGroup_intro },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;