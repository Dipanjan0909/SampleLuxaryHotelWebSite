import React from 'react';
import classes from '../styles/CartItem.module.css';

const CartItem = (props) => {
    let prop = props.item;
  const price = `₹${prop?.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{prop.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {prop.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={prop.onRemove}>−</button>
        <button onClick={prop.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
