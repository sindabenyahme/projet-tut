<template>
  <div class="home-page">
    <img src="../styles/images/Logo_Crous_vectorisé.svg" alt="Image du restaurant universitaire">
    <h1>Bienvenue chez le restaurant universitaire de CROUS</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-page img {
  width: 250px; 
  margin-bottom: 20px;
  
  
}
h1{
  color:red;
}
</style>
