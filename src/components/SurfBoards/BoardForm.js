
import classes from './BoardForm.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { useContext, useRef, useState } from 'react';


const configAmounts = {
    MIN: 1,
    MAX: 5,
    DEFUALT: 1
}



const BoardForm = props => {
    const amountRef = useRef();

    const [isValid, SetIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        const enterdTxt = amountRef.current.value;
        const amount = +enterdTxt;


        if (enterdTxt.trim().lenght === 0 || amount < configAmounts.MIN || amount > configAmounts.MAX) {
            SetIsValid(false);
            return;
        }

        SetIsValid(true);
        props.onAddToCart(amount);
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountRef}
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: configAmounts.MIN.toString(),
                    max: configAmounts.MAX.toString(),
                    step: '1',
                    defaultValue: configAmounts.DEFUALT.toString(),
                }} >

            </Input>
            <Button type='submit'>+ Add</Button>

            {!isValid && <p>Enter (1-5) amount.</p>}
        </form>
    );
};
export default BoardForm;