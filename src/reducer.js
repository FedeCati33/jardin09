export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    
    case "REMOVE_FROM_CART":
      const deleteItem = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      
      let newCart = [...state.cart];

      if ( deleteItem >= 0 ) {
        newCart.splice(deleteItem, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in cart!`
        )
      }
      
      return {
        ...state,
        cart: newCart
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
    return state;
  }
};

export default reducer;