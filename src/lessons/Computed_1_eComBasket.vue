<template>
    <div>
        <h1>E-Commerce Website Basket</h1>
        <div class="basket">
            <h1> Box ( {{ unitPrice }} $ ) 
                <span>
                    <button @click="() => productQuantity === 0 ? 0 : (productQuantity--)">-</button>
                    <span class="quantity">{{ productQuantity }}</span>
                    <button @click="productQuantity++">+</button>
                </span>
            </h1>
            <h1>Total Price: {{ totalPrice }}</h1>
        </div>
    </div>
</template>
  
<script setup>
    import {ref, computed} from 'vue';

    const productQuantity = ref(0);
    const unitPrice = ref(10.55);

    const totalPrice = computed(() => {
        return (productQuantity.value * unitPrice.value).toFixed(2);
    });
</script>
<style scoped>
    .basket {
        border: 5px solid gray;
        border-radius: 20px;
        padding: 40px;
    }
    
    button {
        border-radius: 20px;
        font-size: 40px;
    }

    .quantity {
        padding: 20px;
    }
</style>