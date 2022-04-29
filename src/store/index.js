import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}


export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id);

      if (item) {
        return item.quantity;
      } else {
        return null;
      }
    },
    productCost: product => {
      return product.price * product.quantity;
    },
    totalCartItems: state => {
      return state.cart;
    },
    cartTotal: state => {
      return state.cart.reduce((x, y) => x + (y.price * y.quantity), 0);
    },
    totalItemsInCart: state => {
      return state.cart.length;
    }
  },
  mutations: {
    addToCart (state, product) {
      let item = state.cart.find(i => i.id === product.id);
      if (item) {
        item.quantity++; 
      } else {
        state.cart.push({...product, quantity: 1});
      }

      updateLocalStorage(state.cart);
    },
    removeFromCart (state, product) {
      let item = state.cart.find(i => i.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--; 
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id);
        }
      }

      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart');

      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
    removeItemFromCart(state, id) {
      
      state.cart = state.cart.filter(i => i.id !== id);

      updateLocalStorage(state.cart);
    },
    clearCart(state) {
      
      const cart = state.cart = [];

      updateLocalStorage(cart);
    }
  },
  actions: {
  },
  modules: {
  }
})
