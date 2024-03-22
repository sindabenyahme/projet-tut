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
    <div class="cards">
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-img>

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn>
          <font-awesome-icon icon="fa-solid fa-plus" ></font-awesome-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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
</style>
