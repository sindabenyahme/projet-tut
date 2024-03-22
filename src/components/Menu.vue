<template>
  <h2> Menu </h2>
<div class="cards">
  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"

      src="../assets/entree.png"
    ></v-img>
    <v-card-text class="card-text">
      Entrée
    </v-card-text>
</v-card>

  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"

      src="../assets/plat.png"
    ></v-img>
    <v-card-text class="card-text">
      Plat
    </v-card-text>
  </v-card>

  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"

      src="../assets/dessert.png"
    ></v-img>
    <v-card-text class="card-text">
      Dessert
    </v-card-text>
  </v-card>

  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"
           src="../assets/supp.png"
    ></v-img>
    <v-card-text class="card-text">
      Supplément
    </v-card-text>
  </v-card>
</div>




  <div class="Entree">
    <p>Entrée</p>

    <div class="entree-card">
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img
          height="200px"
          src="../assets/pizza.png"
          cover
        ></v-img>
        <v-card-text class="card-text">
         Pizza
        </v-card-text>
        <v-card-actions class="actions">
          <v-btn>
          <font-awesome-icon icon="fa-solid fa-circle-plus" size="2xl" ></font-awesome-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            @click="show = !show"
          ><font-awesome-icon icon="fa-solid fa-circle-info" size="2xl"/></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              plus de details sur le plat ..
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style scoped>
.cards{
  display: flex;
  padding: 31px;


}

.click-card:active,
.click-card:focus {
  background-color: red;
  color: white;
}
.click-card{
  max-width: 160px;
  height: 142px;
}
.image{
  width: 200px;
  height:98px;
}
.card-text{
  text-align: center;
}
.entree-card{
  width: 224px;
}
.actions{
  color:  #fe4d4d;
  display: inline-flex;
  margin-left: 36px;
}
</style>
