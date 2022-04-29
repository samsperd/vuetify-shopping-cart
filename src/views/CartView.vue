<template>
  <v-container
    fluid
  >
    <h2 class="text-decoration-underline"> Cart </h2>
    <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th colspan="1" class="text-left text-subtitle-1 font-weight-bold">
                  ~
                </th>
                <th colspan="4" class="text-left text-subtitle-1 font-weight-bold">
                  Name
                </th>
                <th colspan="1" class="text-left text-subtitle-1 font-weight-bold">
                  Image
                </th>
                <th colspan="1" class="text-left text-subtitle-1 font-weight-bold">
                  Decrease
                </th>
                <th colspan="1" class="text-left text-subtitle-1 font-weight-bold">
                  Quantity
                </th>
                <th colspan="1" class="text-left text-subtitle-1 font-weight-bold">
                  Increase
                </th>
                <th colspan="1" class="text-left text-subtitle-1 font-weight-bold">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              <cart-product
                v-for="(product, index) in products" :key="index"
                :product="product"
              />
              
            </tbody>
          </template>
    </v-simple-table>
          <div class="text-h4 pa-9 text-center grey--text font-italic" v-if="!products.length > 0">
            Cart is Empty
          </div>
    <card-summary-card />

  </v-container>
</template>

<script>
import CartProduct from '@/components/cart/CartProduct.vue';
import CardSummaryCard from '@/components/cart/CardSummaryCard.vue';

export default {
  name: 'CartView',
  components: {
    CartProduct,
    CardSummaryCard,
  },
  computed: {
    products() {
      return this.$store.getters.totalCartItems;
    }
  },

}
</script>
