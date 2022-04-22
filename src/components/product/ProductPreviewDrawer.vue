<template>
    <v-navigation-drawer
      class="draweer"
      v-model="drawer"
      absolute
      temporary

    >
    <v-toolbar
      elevation="4"
    >
      <h3>Preview</h3>
      <v-spacer></v-spacer>
      <v-btn 
        dark 
        plain
        icon 
        color="error"
        @click.stop="drawer = false"
      >
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card flat v-if="product">
      
      <v-card>
        <v-img
          :src="product.imgUrl"
          height="200px"
          contain
        ></v-img>
      </v-card>

      <v-card-title v-text="product.name">
        
      </v-card-title>
      <v-card-subtitle class="row">
          <h4 class="col py-0">
              {{ product.category }}
          </h4>
          <v-spacer></v-spacer>
          <h3 class="text--primary col py-0">
              ${{ product.price.toFixed(2) }}
          </h3>
          
      </v-card-subtitle>
      <v-card-text v-text="product.description">
      </v-card-text>
      <v-card-actions>
              <v-badge
            color="error"
            overlap
            :value="productQuantity"
            :content="productQuantity"
            bordered
            light
            class="w-100"
        >
        
        <v-btn
          color="primary"
          block
          outlined
          @click="addToCart"
        >
          Add to Cart
        </v-btn>
              </v-badge>

      </v-card-actions>
    </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'ProductPreviewDrawer',
    props: {
      product: Object,
      value: Boolean
    },
    computed: {
      drawer: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('close-drawer', value)
        }
      },
      productQuantity() {
          return this.$store.getters.productQuantity(this.product)
      }
    },
    methods: {

      addToCart() {
        this.$store.commit('addToCart', this.product);
      }
    },
}
</script>

<style lang="scss">
  .draweer {
    // margin-top: 0px !important;
    width: 60% !important;
    position: fixed !important;
    bottom: 0;
    height: auto !important;
  }
  .w-100 {
    width: 100% !important;
  }
  @media (max-width: 700px) {
    .draweer {
      width: 100% !important;
    }
  }
</style>