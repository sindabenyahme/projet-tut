<template>
  <h2> Mon Panier </h2>
  <div class="panier">
    <v-card class="plat-card" > 
      <v-img classe ="image"src="../assets/plat.png"></v-img>
      <p class="plat-nom">salade</p>
      <v-btn icon class="delete-btn" @click="deleteItem(index)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="card-content">
        <v-btn icon class="minus-btn" @click="decrementQuantity">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <p>{{ quantity }}</p>
        <v-btn icon class="plus-btn" @click="incrementQuantity">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-card>
    
  
  </div>

  <div class="panier">
    <v-card class="plat-card"> 
      <v-img classe ="image"src="../assets/supp.png" ></v-img>
      <p class="plat-nom">Coca</p>
      <v-btn icon class="delete-btn" @click="deleteItem">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="card-content">
        <v-btn icon class="minus-btn" @click="decrementQuantity">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <p>{{ quantity }}</p>
        <v-btn icon class="plus-btn" @click="incrementQuantity">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-card>
    
    
  </div>

  <div class="total">
    <p><b>Total:</b> <span class="prix">5555 euro</span></p>
    <button class="submit-btn">Soumettre</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1);

const deleteItem = (index) => {
  
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const incrementQuantity = () => {
  quantity.value++;
};
</script>

<style scoped>

.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.prix{
  padding-left:300px;
 
  color:green;

}
.panier {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px; 
}

.plat-card {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px; 
  background-color: #cdc5c5;
  margin-bottom: 20px;
  width :600px;
  height: 150px; 
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
  margin-right: 20px; 
}

.plus-btn {
  margin-left: 10px;
  margin-right: 20px; 
}



.plat-nom {
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 20px;
  padding-bottom: 30px;
  margin-right: 5px;
}
.submit-btn {
  background-color: red;
  color: white; 
  border: none; 
  border-radius: 5%; 
  width: 150px; 
  height: 50px; 
  font-size: 15px; 
  margin-top: 20px; 
  
}



</style>
