import { Fragment } from 'react';
import bg_surfing from '../../assets/bg_surfing.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Surfing Store</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>

      <div className={classes['main-image']}>
        <img src={bg_surfing} alt='A table full of surfing products :)' />
      </div>
    </>
  );
};

export default Header;