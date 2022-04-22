<template>
  <div>
    <v-container
      fluid
      id="product-card-container"
    >
        <h2 class="text-decoration-underline"> Products </h2>
      <v-row
        dense
      >
        <product-card
          v-for="(product, index) in products" :key="index"
          :product="product"
          v-on:view-product="viewProduct($event)"
        />
      </v-row>
    </v-container>

    <product-preview-drawer
      :product="product"
      v-model="drawer"
      v-on:close-drawer="closeDrawer($event)"
    />
  </div>

</template>

<script>
import products from '@/data/products'

// Components
import ProductCard from '@/components/product/ProductCard.vue';
import ProductPreviewDrawer from '@/components/product/ProductPreviewDrawer.vue';


  export default {
    name: 'HomeView',
    data() {
      return {
        products: products,
        product: null,
        drawer: false
      }
    },
    components: {
      ProductCard,
      ProductPreviewDrawer
    },
    methods: {
      viewProduct(product) {
        this.product = product;
        this.drawer = true;
      },
      closeDrawer(value) {
        this.drawer = value;
      }
    },

  }
</script>
