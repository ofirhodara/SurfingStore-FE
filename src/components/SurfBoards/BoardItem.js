
import BoardForm from './BoardForm';
import classes from './BoardItem.module.css';


const BoardItem = props => {
    return (
        <li className={classes.board}>
            <div>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{props.price.toFixed(2)} $</div>
            </div>
            
            <div>
              <BoardForm id={props.id} ></BoardForm>
            </div>

        </li>
    );
};
export default BoardItem;