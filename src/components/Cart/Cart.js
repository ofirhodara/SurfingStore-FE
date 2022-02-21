import Button from '../UI/Button/Button';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';



const Cart = props => {
    const cartCtx = useContext(CartContext);


    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };



    const cartItems = (
        <ul className={classes.cartitems}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );



    return (
        <Modal onClose={props.onClose}>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount.toFixed(2)} $</span>
            </div>

            <div className={classes.actions}>
                <Button onClick={props.onClose} className={classes['button--alt']}>Close</Button>
                {cartCtx.totalAmount != 0 && <Button className={classes.button}>Order</Button>}
            </div>

        </Modal>
    );
};
export default Cart;