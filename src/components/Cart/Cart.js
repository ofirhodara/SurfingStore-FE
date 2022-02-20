import Button from '../UI/Button/Button';
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';

const Cart = props => {

    const cartItems = <ul className={classes.cartitems}>{
        [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },]
            .map(item => <li>{item.name}</li>)}</ul>;


    return (
        <Modal onClose={props.onClose}>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>

            <div className={classes.actions}>
                <Button onClick={props.onClose} className={classes['button--alt']}>Close</Button>
                <Button className={classes.button}>Order</Button>
            </div>

        </Modal>
    );
};
export default Cart;