const initialState = {
    itemCount : 0
}

const  _reducer = (state = initialState, action) => {
  switch (action.type) {

  case 'cart/itemAdded':
    return { ...state ,itemCount :state.itemCount+action.payload }

  default:
    return state
  }
}
export default _reducer;
