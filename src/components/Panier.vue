<template>
  <h2> Mon Panier </h2>
  <div class="panier">
    <v-card class="plat-card">
      
  <v-img class="image" src="../assets/pizza.png"></v-img>

  <p class="plat-nom">Pizza</p>
  <v-card-actions class="actions">
    <v-btn>
      <font-awesome-icon icon="fa-solid fa-circle-xmark" size="2xl" @click="deleteItem(index)"></font-awesome-icon>
    </v-btn>
  </v-card-actions>
  <div class="card-content">
    <v-card-actions class="add-action">
      <v-btn>
        <font-awesome-icon icon="fa-solid fa-circle-minus" size="2xl" @click="decrementQuantity"></font-awesome-icon>
      </v-btn>
    </v-card-actions>
    <p>{{ quantity }}</p>
    <v-card-actions class="add-action">
      <v-btn>
        <font-awesome-icon icon="fa-solid fa-circle-plus" size="2xl" @click="incrementQuantity"></font-awesome-icon>
      </v-btn>
    </v-card-actions>
  </div>
</v-card>
<!--hello test-->

  </div>



  <div class="panier">

    <v-card class="plat-card">
      
  <v-img class="image" src="../assets/supp.png"></v-img>


  <p class="plat-nom">Coca</p>
  <v-card-actions class="actions">
    <v-btn>
      <font-awesome-icon icon="fa-solid fa-circle-xmark" size="2xl" @click="deleteItem(index)"></font-awesome-icon>
    </v-btn>
  </v-card-actions>
  <div class="card-content">
    <v-card-actions class="add-action">
      <v-btn>
        <font-awesome-icon icon="fa-solid fa-circle-minus" size="2xl" @click="decrementQuantity"></font-awesome-icon>
      </v-btn>
    </v-card-actions>
    <p>{{ quantity }}</p>
    <v-card-actions class="add-action">
      <v-btn>
        <font-awesome-icon icon="fa-solid fa-circle-plus" size="2xl" @click="incrementQuantity"></font-awesome-icon>
      </v-btn>
    </v-card-actions>
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




.plat-nom {
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 20px;
  padding-bottom: 30px;
  margin-right: 10px;
  padding-left: 30px;
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



.actions{
  color:  #fe4d4d;
  display: inline-flex;
  position: absolute;
  top: 2px;
  right: 2px;
}
.add-action{
  color:  #fe4d4d;
  
}

.image{
  background-color: #fe4d4d;
  border-radius: 39px;
  height: 150px;
  width: 100;
}

</style>
