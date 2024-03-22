<template>
  <h2> Menu </h2>
<div class="cards">
  <v-card
    class="mx-auto click-card"

  >
    <v-img
      height="95px"
      src="../styles\images\entree.png"

    ></v-img>

    <v-card-text>
      Entrée
    </v-card-text>
</v-card>
</div>
</template>

<script setup>

</script>

<style scoped>
.click-card:active{
  background-color: red;
}
.click-card{
  max-width: 160px;
  height: 142px;
}
</style>
