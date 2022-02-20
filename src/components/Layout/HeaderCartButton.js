import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button/Button";
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {


    return <Button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>

        <span>
            Your Cart
        </span>

        <span className={classes.badge}>
              3
        </span>

    </Button>

}
export default HeaderCartButton;