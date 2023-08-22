import React from "react";
import classes from "../styles/RoomSummary.module.css";

export default function RoomSummary() {
  return (
    <section className={classes.summary}>
      <h2>Book Your Perfect Getaway</h2>
      <p>
        Welcome to our luxurious hotel rooms, where comfort and elegance meet to
        create an unforgettable stay.
      </p>
      <p>
        Indulge in spacious accommodations, exquisite amenities, and impeccable
        service for a truly exceptional experience.
      </p>
    </section>
  );
}
