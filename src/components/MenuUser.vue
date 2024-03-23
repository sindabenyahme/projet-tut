<template>
  <h2> Menu </h2>
<div class="cards">
  <div class="content">
  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"

      src="../assets/entree.png"
    ></v-img>
</v-card>
    <v-card-text class="card-text">
      Entrée
    </v-card-text>
  </div>
  <div class="content">
  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"

      src="../assets/plat.png"
    ></v-img>
  </v-card>
    <v-card-text class="card-text">
      Plat
    </v-card-text>
  </div>

  <div class="content">
  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"

      src="../assets/dessert.png"
    ></v-img>
  </v-card>
    <v-card-text class="card-text">
      Dessert
    </v-card-text>
  </div>

  <div class="content">
  <v-card
    class="mx-auto click-card"
    hover
  >
    <v-img class="image"
           src="../assets/supp.png"
    ></v-img>
  </v-card>
    <v-card-text class="card-text">
      Supplément
    </v-card-text>
  </div>

</div>




  <div class="Entree">
    <p>Entrée</p>
      <v-card
        class="mx-auto entree-card"
        max-width="201"
      >
        <v-img
          height="147px"
          src="../assets/salade.png"
          cover
        ></v-img>
        <v-card-text class="card-text">
         Salade
        </v-card-text>
        <v-card-actions class="actions">
          <v-btn
            @click="show = !show"
          ><font-awesome-icon icon="fa-solid fa-circle-info" size="2xl"/></v-btn>
          <v-btn>
            <font-awesome-icon icon="fa-solid fa-circle-plus" size="2xl" ></font-awesome-icon>
          </v-btn>
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
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style scoped>
.cards{
  display: flex;
  padding: 31px;
  justify-content: space-evenly;


}

.click-card:active,
.click-card:focus {
  background-color: red;
  color: white;
}
.click-card{
  width: 133px;
  height: 99px;
  background-color: #D9D9D9;
  border-radius: 26px;
}
.image{
  width: 200px;
  height:98px;
}
.card-text{
  text-align: center;
  font-weight : 400;

}
.entree-card{
  background-color: #D9D9D9;
  border-radius: 39px;
}
.actions{
  color:  #fe4d4d;
  display: inline-flex;
  margin-left: 22px;
}
p{
  font-weight: 500;
}
</style>
