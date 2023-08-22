import React from 'react';
import EachCategoryItem from './EachCategoryItem';
import classes from '../styles/MealCategory.module.css';



export default function MealCatagory(props) {
    const catagoryTitle = props.mealCategoryObj.category;
    const catagoryItems = [...props.mealCategoryObj.items];
  return (
    <div  className={classes.div}>
      <h2>{catagoryTitle}</h2>
      <div className={classes.div1}>{catagoryItems.map((item)=>{
        return <EachCategoryItem item={item}/>
      })}
      </div>
      <button className={classes.btn}>Add To Cart</button>
    </div>
  )
}
