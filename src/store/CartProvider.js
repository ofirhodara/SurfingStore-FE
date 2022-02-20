
import CardContext  from "./cart-context";

const CartProvider = props =>{
    const addItemToCart = (item) =>{


    }


    const removeItemFromCart = (id) =>{

        
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return(
        <CardContext.Provider>
            {props.children}
        </CardContext.Provider>
    );
    

};

export default CartProvider;