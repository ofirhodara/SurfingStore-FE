
import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultState = { items: [], totalAmount: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            // brand new array, because js must know that new array was built
            return {
                items: state.items.concat(action.item),
                totalAmount: state.totalAmount + (action.item.price * action.item.amount)
            };

        case 'REMOVE':
            const findItem = null;
            // we will do it after!
            return {
                items: state.items.filter(findItem),
                totalAmount: state.totalAmount - (findItem.price * findItem.amount)
            };
    }

    return defaultState;
};


const CartProvider = props => {

    const [cartState, dispatchAction] = useReducer(reducer, defaultState);

    const addItemToCart = (item) => {
        dispatchAction({ type: 'ADD', item: item });

    }


    const removeItemFromCart = (id) => {
        dispatchAction({ type: 'REMOVE', id: id });

    }

    const cartCtx = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    );


};

export default CartProvider;