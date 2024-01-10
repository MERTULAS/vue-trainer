<template>
    <div>
      <button class="p-6 bg-gray-500 m-1" @click="addItem">Add Item</button>
      <button class="p-6 bg-gray-500 m-1" @click="removeItem">Remove Item</button>
      <button class="p-6 bg-gray-500 m-1" @click="shuffleItems">Suffle Items</button>

      <transition-group name="fade" tag="div">
        <!-- Default 'tag' is span -->
        <div v-for="item in items" :key="item.id" class="list-item">
          {{ item.text }}
        </div>
      </transition-group>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
  
    const items = ref([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ]);

    const shuffleItems = () => {
        const itemTemp = items.value;
        for (let i = itemTemp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [itemTemp[i], itemTemp[j]] = [itemTemp[j], itemTemp[i]];
        }
        items.value = itemTemp;
    }

    const addItem = () => {
        const newItem = { id: Date.now(), text: `Item ${items.value.length + 1}` };
        items.value.push(newItem);
    };

    const removeItem = () => {
        if (items.value.length > 0) {
            items.value.pop();
        }
    };
  
  </script>
  
  <style>
  .list-item {
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    list-style: none;
  }
  

  .fade-enter-active, 
  .fade-leave-active,
  .fade-move {
    transition: all 1s;
  }

  .fade-move {
    opacity: .5;
    }

  .fade-leave-to {
    opacity: 0;
    background-color: red;
  }

  .fade-enter-from {
    transform: scale(1.2);
  }


  </style>