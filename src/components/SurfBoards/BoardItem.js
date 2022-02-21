
import BoardForm from './BoardForm';
import classes from './BoardItem.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const BoardItem = props => {

    const cartCtx = useContext(CartContext);

    const addItemHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });

    };

    return (
        <li className={classes.board}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{props.price.toFixed(2)} $</div>
            </div>

            <div>
                <BoardForm id={props.id} onAddToCart={addItemHandler}></BoardForm>
            </div>

        </li>
    );
};
export default BoardItem;