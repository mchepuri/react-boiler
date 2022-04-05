import { createStore } from 'redux'
import cartReducer from './cart_reducer'

let preloadedState
const persistedCartString = localStorage.getItem('cart')

if (persistedCartString) {
  preloadedState = {
    itemcount: JSON.parse(cart).itemcount
  }
}

const store = createStore(cartReducer,preloadedState);
export default store;