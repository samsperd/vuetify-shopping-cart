<template>
    <v-col
        sm="4"
    >
        <v-card>
            <v-img
                :src="product.imgUrl"
                class="white--text"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
                height="200px"
                contain
            >
            </v-img>

            <v-card-title class="linert" v-text="product.name" ></v-card-title>
            <v-card-subtitle class="row">
                <h4 class="col py-0">
                    {{ product.category }}
                </h4>
                <v-spacer></v-spacer>
                <h3 class="text--primary col py-0">
                    ${{ product.price.toFixed(2) }}
                </h3>
                
            </v-card-subtitle>
            <v-card-text>
                {{ description }}
            </v-card-text>
            <v-card-actions>
                <v-btn
                    @click="$emit('view-product', product)"
                    depressed
                    light
                >
                    Preview
                </v-btn>
                <v-spacer></v-spacer>
                <v-badge
                    color="error"
                    overlap
                    :value="productQuantity"
                    :content="productQuantity"
                    bordered
                    light
                >
                    <v-btn
                        depressed
                        light
                        @click="addToCart"
                        color="primary"
                        outlined
                    >
                        Add to Cart
                    </v-btn>
                </v-badge>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    computed: {
        description() {
            return this.product.description.substring(0, 150);
        },
        productQuantity() {
            return this.$store.getters.productQuantity(this.product)
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product);
        },
        
    },
}
</script>

<style lang="scss">
    .linert {
        line-height: 2em;
        height: 5em;
        overflow: hidden;
        word-break: break-word !important;
        font-size: 1.2em !important;
    }
</style>