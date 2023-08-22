import React from 'react';
import classes from '../styles/EachCategoryItem.module.css';

export default function EachCategoryItem(props) {
  return (
    <li className={classes.meal}>
        <div className={classes.eachitem} >
            <h3>{props.item.name}</h3>
            <div className={classes.price}>{props.item.price}</div>
        </div>
        <div className={classes.div}>
        <button className={classes.btn}>Add+</button>
        <div className={classes.count}>Count</div>
        <button className={classes.delBtn}>Delete-</button>
        </div>
    </li>
  )
}
