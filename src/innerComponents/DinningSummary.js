import React from "react";
import classes from '../styles/DinningSummary.module.css';

export default function DinningSummary() {
  return (
    <section className={classes.summary}>
      <h2>Indulge in Exquisite Dining</h2>
      <p>
        Experience a culinary journey like no other as our skilled chefs craft
        gastronomic delights that tantalize your taste buds.
      </p>
      <p>
        Savor a diverse range of flavors, from local delicacies to international
        cuisines, in an ambiance that complements the artistry of the cuisine.
      </p>
    </section>
  );
}
