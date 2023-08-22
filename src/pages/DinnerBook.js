import React,{useState} from 'react';
import classes from '../styles/DinnerBook.module.css';
import DinningSummary from '../innerComponents/DinningSummary';
import DinnerCard from '../innerComponents/DinnerCard';
import dinnertables from '../assets/DinnerTableDataBase';

export default function DinnerBook() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={classes.div} >
     <img src='https://smartguy.com/webservice/storage/category/restaurant-fine-dine.jpg' alt='none' className={classes.img}/> 
     {!clicked && <DinningSummary/>}
     { clicked && <div className={classes.container}>
      {dinnertables.map((item) => {
        return <DinnerCard item={item} />;
      })}
      </div>}
      {!clicked && <button className={classes.btn} onClick={()=>setClicked(true)}>
        Book Your Table
      </button>}
    </div>
  )
}
