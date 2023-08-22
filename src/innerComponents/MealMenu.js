import React from "react";
import MealList from "../assets/MealsDataBase";
import MealCatagory from "./MealCatagory";
import classes from '../styles/MealMenu.module.css';


export default function MealMenu() {
  return (
    <div className={classes.div}>
      {MealList.map((item) => (
       <MealCatagory mealCategoryObj={item} key={item.category}/>
      ))}
    </div>
  );
}
