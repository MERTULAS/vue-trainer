<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
//   import { createChart } from 'chart.js';
  
  export default {
    setup() {
      const canvas = ref(null);
      const point = {
        x: window.innerWidth >> 1,
        y: window.innerHeight >> 1,
        degreeOfAngularMotion: 0
      }
  
      onMounted(() => {
        // We may need to keep DOM elements for some external library integrations. 
        // For example, to wrap a chart, we can capture a wrapper 'div' element. 
        // Here we have captured a canvas element to be drawn into.

        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight;
        const ctx = canvas.value.getContext('2d');
        ctx.fillStyle = 'red';
    

        function playAnimation() {
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
            point.x += 50 * Math.cos(point.degreeOfAngularMotion * Math.PI / 180 );
            point.y += 50 * Math.sin(point.degreeOfAngularMotion * Math.PI / 180 );
            ctx.arc(point.x, point.y, 50, 0, Math.PI * 2);
            ctx.fill();

            point.degreeOfAngularMotion += 10;

            requestAnimationFrame(playAnimation);
        }

        playAnimation();
      });
  
      return { canvas };
    },
  };
  </script>
<style>
    canvas {
        background-color: gray;
        width: 800px;
        height: 600px;
    }
</style>