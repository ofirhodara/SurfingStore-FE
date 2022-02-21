
import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultState = { items: [], totalAmount: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const existingIndex = state.items.findIndex(item => item.id === action.item.id);
            let updatedItems = [...state.items];

            if (existingIndex != -1) {
                updatedItems[existingIndex].amount += action.item.amount;
            }
            else {
                updatedItems.push(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: state.totalAmount + (action.item.price * action.item.amount)
            };

        case 'REMOVE':

            const existingIndexRemove = state.items.findIndex(item => item.id === action.id);
            let updatedItemsAfterRemove = [...state.items];
            let findItem = updatedItemsAfterRemove[existingIndexRemove];
            // remove 1 item :)
            findItem.amount -= 1;

            if(findItem.amount === 0)
            {
                updatedItemsAfterRemove.splice(existingIndexRemove);
            }    
            return {
                items: updatedItemsAfterRemove,
                totalAmount: state.totalAmount - findItem.price
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