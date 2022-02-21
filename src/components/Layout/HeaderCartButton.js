import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    // will render any time it is changed!
    const cartCtx = useContext(CartContext);

    const amountUniqItem = cartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount }, 0);

    return <Button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>

        <span>
            Your Cart
        </span>

        <span className={classes.badge}>
            {amountUniqItem}
        </span>

    </Button>

}
export default HeaderCartButton;