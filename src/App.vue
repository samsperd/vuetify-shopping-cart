<template>
  <v-app>
    <v-app-bar
      app
      dark
      fixed
    >
      <router-link
        class="d-flex align-center text-decoration-none"
        tag="a"
        to="/"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="30"
        />
          <h3 class="white--text font-weight-light">
            <b class="display-none font-weight-bold">Vuetify</b> Shopping Cart
          </h3>
        </router-link>

      <v-spacer></v-spacer>

      <v-btn
        small
        to="/"
        dark
        depressed
        class="display-none"
      >
        <v-icon>mdi-home</v-icon>
        Home
      </v-btn>

      <v-badge
        :content="numberOfItemsInCart"
        :value="numberOfItemsInCart"
        color="error"
        overlap
        light
        bordered
      >
        <v-btn
          small
          to="/cart"
          dark
          depressed
        >
          <v-icon>mdi-basket</v-icon>
          Cart
        </v-btn>
      </v-badge>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    numberOfItemsInCart() {
      return this.$store.getters.totalItemsInCart;
    }
  },
  mounted() {
      this.$store.commit('updateCartFromLocalStorage');
  }
};
</script>

<style>
  @media (max-width: 700px) {
    .display-none {
      display: none !important;
    }
  }
</style>
