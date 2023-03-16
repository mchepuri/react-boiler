import { createStore } from 'redux'
import _reducer from './_reducer'

let preloadedState
const persistedCartString = localStorage.getItem('cart')

if (persistedCartString) {
  preloadedState = {
    itemcount: JSON.parse(cart).itemcount
  }
}

const store = createStore(_reducer,preloadedState);
export default store;