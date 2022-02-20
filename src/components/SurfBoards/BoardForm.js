
import classes from './BoardForm.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const BoardForm = props => {
    return (   
     <form  className={classes.form}>
        <Button>+ Add</Button>
      

     </form>
    );
};
export default BoardForm