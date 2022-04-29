<template>
    <tr>
        <td colspan="1">
            <v-btn
            color="warning"
            small
            icon
            @click="removeItem(product.id)"
            >
                <v-icon small>mdi-close</v-icon>
            </v-btn>
        </td>
        <td colspan="4">
            {{ product.name }}
        </td>
        <td colspan="1">
            <v-img
                :src="product.imgUrl"
                width="100"
            ></v-img>
        </td>
        <td colspan="1">
            <v-btn
                x-small
                dark
                fab
                depressed
                color="primary"
                @click="decrement"
            >
                <v-icon
                    x-small
                    dark
                >mdi-minus</v-icon>
            </v-btn>
        </td>
        <td colspan="1">
            {{product.quantity}}
        </td>
        <td colspan="1">
            <v-btn
                color="primary"
                x-small
                @click="increment"
                dark
                fab
                depressed
            >
                <v-icon
                    small
                    x-small
                >mdi-plus</v-icon>
            </v-btn>
        </td>
        <td colspan="1">
            ${{ productTotal.toFixed(2) }}
        </td>
    </tr>
</template>

<script>
export default {
    name: 'CartProduct',
    props: ['product'],
    computed: {
        productTotal() {
            return this.product.quantity * this.product.price;
        }
    },
    methods: {
        increment() {
            this.$store.commit('addToCart', this.product);
        },
        decrement() {
            this.$store.commit('removeFromCart', this.product);
        },
        removeItem(id) {
            this.$store.commit('removeItemFromCart', id);
        }
    },
  }
</script>

<style>

</style>