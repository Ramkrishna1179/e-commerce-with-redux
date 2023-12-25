

const initialState = {
    cartItems: [],
    cartCount: 0,
    isCartVisible: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                cartCount: state.cartCount + 1,
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                cartCount: 0,
            };

        case 'REMOVE_FROM_CART':
            const removeQuantity = state.cartItems.filter(item => item.id === action.payload);


            const updatedItems = state.cartItems.filter(item => item.id !== action.payload);
            return {
                ...state,
                cartItems: updatedItems,
                cartCount: state.cartCount - removeQuantity.length,
            };
        default:
            return state;
    }
};

export default cartReducer;






