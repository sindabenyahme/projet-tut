<template>
  <v-app>
    <v-app-bar color="#FF0000" dense>
      <v-app-bar-title>Gestion des repas Crous</v-app-bar-title>

      <!-- Utilisez router-link pour naviguer vers les pages correspondantes -->
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link to="/MenuUser" class="nav-link">User-Menu</router-link>
      <router-link to="/MenuAdmin" class="nav-link">Admin</router-link>
      <router-link to="/Panier" class="nav-link">Panier</router-link>

      <router-link to="/login" class="nav-link">Se connecter</router-link>

    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Utilisez router-view pour afficher le composant de la page actuelle -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

/* Styles pour les liens */
.nav-link {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  margin: 20px;
  font-size: 20px;
  transition: all 0.3s; /* Transition fluide pour l'effet de survol */
}

/* Style au survol */
.nav-link:hover {
  color:lightgray; /* Changement de couleur du texte au survol */
  background-color: rgba(255, 255, 255, 0.1); /* Fond légèrement opaque */
  border: 1px solid lightgray; /* Bordure autour du lien */
  border-radius: 4px; /* Coins arrondis pour une apparence plus douce */
}
</style>

<script setup>
</script>
