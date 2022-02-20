
import classes from './BoardForm.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const BoardForm = props => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: "amount_" + props.id,
                type: "number",
                min: '1',
                max: '5', 
                step: '1',
                defaultValue:'1'
            }} >

            </Input> 
            <Button>+ Add</Button>
        </form>
    );
};
export default BoardForm;