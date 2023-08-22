import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../styles/MainNavigationBar.module.css';
import HeaderCartBtn from './HeaderCartBtn';


export default function MainNavigationBar(props) {
  return (
    <>
      <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to='/' className={({isActive})=> isActive?classes.active: undefined}>Home</NavLink></li>
                <li><NavLink to='bookRoom' className={({isActive})=> isActive?classes.active: undefined}>Room Booking</NavLink></li>
                <li><NavLink to='bookDinner' className={({isActive})=> isActive?classes.active: undefined}>Dinner Booking</NavLink></li>
                <li><NavLink to='foods' className={({isActive})=> isActive?classes.active: undefined}>Order Food</NavLink></li>
                <li><NavLink to='services'  className={({isActive})=> isActive?classes.active: undefined} end>Services</NavLink></li>
                <li><NavLink to='login' className={({isActive})=> isActive?classes.active: undefined}>Log In</NavLink></li>
            </ul>
        </nav>
          <div className={classes.button}><HeaderCartBtn onShow={props.onShow}/></div>
      </header>
    </>
  )
}
