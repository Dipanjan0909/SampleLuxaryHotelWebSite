import React from 'react';
import Modal from '../innerComponents/Modal';
import CartItem from '../innerComponents/CartItem';
import classes from '../styles/Cart.module.css';


const cartitems=[{id: 1, name: "kuch bhi", amount: 3,price: 399},{id: 2, name: "kuch bhi2", amount: 4,price: 499}];



export default function Cart(props) {
  return (
    <Modal>
      {cartitems.map((item)=> <div key={item.id}><CartItem  item={item}/></div>)}
      <div >
        <div className={classes.total}>
          <span style={{fontSize: "18px", color: "black"}}>Total Amount</span>
          <span style={{fontSize: "18px", color: "black"}}>898</span>
        </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
    </Modal>
  )
}
