<template>
  <v-container class="auth-container">
    <!-- Image en haut -->
    <div class="auth-image">
      <img src="../styles/images/Logo_Crous_vectorisé.svg" alt="Votre image">
    </div>
    
    <!-- Formulaire -->
    <div class="auth-form">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="E-mail" type="email"></v-text-field>
            <v-text-field v-model="password" label="Mot de passe" type="password"></v-text-field>
            <v-btn type="submit" color="#FF0000" class="mt-3">Se connecter</v-btn> <!-- Ajoutez la classe mt-3 pour un espace au-dessus -->
          </v-form>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Mettez ici la logique de connexion
      console.log('Connexion avec:', this.email, this.password);
    }
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* Pour que les éléments soient alignés verticalement */
  justify-content: center;
  align-items: center;
}

.auth-image img {
  width: 200px; /* Ajustez la largeur de l'image selon vos préférences */
  margin-bottom: 20px; /* Ajouter un espace en bas de l'image */
}

.auth-form {
  width: 100%; /* Assure que le formulaire occupe toute la largeur */
}

.mt-3 {
  margin-left: 200px; /* Ajustez cette valeur selon vos préférences */
}
</style>
