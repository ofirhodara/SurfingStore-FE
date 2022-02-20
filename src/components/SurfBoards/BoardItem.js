
import classes from './BoardItem.module.css';


const BoardItem = props => {
    return (   
      <li  className={classes.board}>
          <div><h3>{props.name}</h3></div>
          <div className={classes.description}>{props.desc}</div>
          <div className={classes.price}>{props.price.toFixed(2)}</div>
      </li>
    );
};
export default BoardItem;