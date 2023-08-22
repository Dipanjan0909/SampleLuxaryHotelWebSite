import React, { useState } from "react";
import classes from "../styles/RoomBook.module.css";
import RoomSummary from "../innerComponents/RoomSummary";
import roomtypes from "../assets/RoomTypeDataBase";
import RoomCard from "../innerComponents/RoomCard";

export default function RoomBook() {
  const [clicked, setClicked] = useState(false);


  return (
    <div className={classes.div}>
      <img
        className={classes.img}
        src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
        alt="none"
      />
      {!clicked && <RoomSummary />}
      { clicked && <div className={classes.container}>
      {roomtypes.map((item) => {
        return <RoomCard item={item} />;
      })}
      </div>}
      {!clicked && <button className={classes.btn} onClick={()=>setClicked(true)}>
        Book Your Stay
      </button>}
    </div>
  );
}
