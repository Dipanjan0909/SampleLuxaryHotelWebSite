import React from 'react';
import classes from "../styles/RoomCard.module.css";

export default function RoomCard(props) {

  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{props.item.name}</h2>
      <img src={props.item.image} alt='none' className={classes.image}/>
      <div className={classes.description}>{props.item.specificity}</div>
      <div className={classes.description}>{props.item.description}</div>
      <div className={classes.price}>{props.item.bookingCharges}</div>
      <button className={classes.btn}>Add To Cart</button>
    </div>
  )
}
