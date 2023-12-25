
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const toggleCartVisibility = () => ({
  type: 'TOGGLE_CART_VISIBILITY',
});

export const removeFromCart = (productId, quantity) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId, quantity,
});

