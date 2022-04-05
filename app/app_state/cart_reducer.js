const initialState = {
    itemCount : 0
}

const  cartReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'cart/itemAdded':
    return { ...state ,itemCount :state.itemCount+action.payload }

  default:
    return state
  }
}
export default cartReducer;