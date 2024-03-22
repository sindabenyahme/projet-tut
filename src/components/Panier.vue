<template>
    <div class="panier">
      <v-card v-for="(plat, index) in panier" :key="index" class="plat-card">
        <v-img :src="plat.image" height="80px" weight="20px"></v-img>
        <v-btn icon class="delete-btn" @click="deleteItem(index)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="card-content">
          <v-btn icon class="minus-btn" @click="decrementQuantity(index)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <p>{{ plat.quantity }}</p>
          <v-btn icon class="plus-btn" @click="incrementQuantity(index)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
        
      </v-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const panier = ref([
    { image: 'chemin/vers/image1.jpg', quantity: 1 },
    { image: 'chemin/vers/image2.jpg', quantity: 1 },
    { image: 'chemin/vers/image3.jpg', quantity: 1 },
    { image: 'chemin/vers/image4.jpg', quantity: 1 }
  ]);
  
  const deleteItem = (index) => {
    panier.value.splice(index, 1);
  };
  
  const decrementQuantity = (index) => {
    if (panier.value[index].quantity > 1) {
      panier.value[index].quantity--;
    }
  };
  
  const incrementQuantity = (index) => {
    panier.value[index].quantity++;
  };
  </script>
  
  <style scoped>
  .panier {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .plat-card {
    position: relative;
    display: flex;
    align-items: center;
    padding: 50px;
    background-color: #cdc5c5;
  }
  
  .card-content {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .delete-btn {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  
  .minus-btn {
    margin-right: 30px;
  }
  
  .plus-btn {
    margin-left: 20px;
    margin-right: 30px;
  }
  
  .delete-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  </style>
  