<template>
    <div class="page">
        <div class="data-list">
        <ul>
            <li v-for="filteredItem in filteredItems" :key="filteredItem.id">
            {{ filteredItem.name }} - {{ filteredItem.category }} <button @click="basketCase.push(filteredItem)">+</button>
            </li>
        </ul>
        <select v-model="selectedCategory">
            <option :selected="category === selectedCategory" v-for="category in new Set(data.map( item => item.category))" :key="category">{{ category }}</option>
        </select>
        </div>
        <div class="basket-case">
            Basket
            <ul>
                <li v-for="item in basketCase" :key="item.id">
                    {{ item.name }} - {{ item.category }}
                </li>
            </ul>
        </div>
    </div>
  </template>
  
  <script setup>
    import { computed, ref } from 'vue';
    
    const data = ref(
        [
            { id: 1, name: 'Product A', category: 'Electronics' },
            { id: 2, name: 'Product B', category: 'Clothes' },
            { id: 3, name: 'Product C', category: 'Electronics' },
            { id: 4, name: 'Product D', category: 'Electronics' },
            { id: 5, name: 'Product E', category: 'Clothes' },
            { id: 6, name: 'Product F', category: 'Electronics' },
            // ...
        ]
    )

    const basketCase = ref([])

    const selectedCategory = ref('Electronics');
    
    const filteredItems = computed(() => {
        return data.value.filter(item => item.category === selectedCategory.value);
    })


  </script>
  <style scoped>

    .data-list {
        font-size: 30px;
    }
    
    select {
        font-size: 30px;
    }

    li {
        margin: 10px;
    }

    .page {
        display: flex;
        align-items: center;
        gap: 50px;
    }
</style>