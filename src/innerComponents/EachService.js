import React from 'react';
import classes from '../styles/EachService.module.css';

export default function EachService(props) {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{props.item.service}</h2>
      <img src={props.item.image} alt='none' className={classes.image}/>
      <div className={classes.description}>{props.item.description}</div>
      <div className={classes.price}>{props.item.price}</div>
      <button className={classes.btn}>Add To Cart</button>
    </div>
  )
}
