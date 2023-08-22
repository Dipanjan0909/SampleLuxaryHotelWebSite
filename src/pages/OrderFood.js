import React from 'react';
import classes from '../styles/OrderFood.module.css';
import MealSummary from '../innerComponents/MealSummary';
import MealMenu from '../innerComponents/MealMenu';

export default function OrderFood() {
  return (
    <div className={classes.div}>
      <img className={classes.img} src='https://www.coasterfurniture.com/wp-content/uploads/AdobeStock_300239831.jpeg' alt='none'/>
        <MealSummary/>
        <MealMenu/>
    </div>
  )
}
