<template>
    <div class="container">
        <button class="bg-blue-500 p-6 br-6" @click="blockToggle = !blockToggle">Toggle Block</button>
        <Transition
            name="hooks"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @enter-cancelled="onEnterCancelled"
            @before-leave="onBeforeLeave"
            @leave="onLeave"
            @after-leave="onAfterLeave"
            @leave-cancelled="onLeaveCancelled"
            :css="false"
        >
            <div v-if="blockToggle" class="block p-6"> BLOCK </div>
        </Transition>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const blockToggle = ref(false);

// NOTE THAT: These hooks for JS based animations. (NOT CSS)

// called before the element is inserted into the DOM.
// use this to set the "enter-from" state of the element
function onBeforeEnter(el) {
    console.log('on-before-enter')
    const rdeg = (0.5-Math.random())*360  // the random degree
    el.style.opacity = 0
    el.style.transform = "rotate("+rdeg+"deg)"
}

// called one frame after the element is inserted.
// use this to start the entering animation.
function onEnter(el, done) {

    console.log('enter');

    el.style.opacity=1
    el.style.transform = "rotate(0deg)"
    el.style.transition = 'all 2s';
    
    setTimeout(()=>{
     done();
    },3000)
}

// called when the enter transition has finished.
function onAfterEnter(el) {
    console.log('on-after-enter')
    el.style.opacity = '1';
    el.style.backgroundColor = 'red';
}

// called when the enter transition is cancelled before completion.
function onEnterCancelled(el) {
    console.log('on-enter-cancelled')
}

// called before the leave hook.
// Most of the time, you should just use the leave hook
function onBeforeLeave(el) {
    console.log('before-leave');
}

// called when the leave transition starts.
// use this to start the leaving animation.
  const onLeave = (el, done) => {
    el.style.opacity=0
    el.style.transform = "rotate(0deg)"
    el.style.animationName='fadeIn'
    el.style.animationDuration="1.5s"
    // if you use css animation or transition, you don't need to      
    // care about setTimeout or done issue here
    done()

    // eger done parametresi girilmezse her sey beklendigi gibi calisir. yani animasyon baslar, sure gecer, animasyon sonlanir bu fonksiyonlar sirayla calisir. 
    // done parametresi girilirse sonraki asamaya gecmesi icin done() callback i cagirilmalidir.
};

// called when the leave transition has finished and the
// element has been removed from the DOM.
function onAfterLeave(el) {
    console.log('after-leave')
}

// only available with v-show transitions
function onLeaveCancelled(el) {
    console.log('leave-cancelled');
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
}
</style>