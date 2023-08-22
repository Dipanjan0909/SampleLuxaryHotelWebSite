import React from 'react';
import serviceLIst from '../assets/ServicesDataBase';
import EachService from '../innerComponents/EachService';
import classes from '../styles/ServicesBook.module.css';

export default function ServicesBooki() {
  
  return (
    <div className={classes.container}>
      {serviceLIst.map((item)=>{
        return <EachService item={item}/>
      })}
    </div>
  )
}
