<template>
  <v-card
    class="mx-auto"
    outlined
  >
          
    <v-card-title class="font-weight-bold">
            Total Cost: ${{ cartTotal.toFixed(2) }}
    </v-card-title>

    <v-card-actions>
      <v-btn
        rounded
        color="primary"
        large
      >
        Pay with Credit Card
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        link
        v-if="cartTotal"
        @click="clearCart"
      >
        Clear Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    computed: {
        cartTotal() {
            return this.$store.getters.cartTotal;
        }
    },
    methods: {
        clearCart() {
            this.$store.commit('clearCart');
        }
    },
}
</script>

<style>

</style>