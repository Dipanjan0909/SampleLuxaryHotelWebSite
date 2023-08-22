import React from "react";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
  <>
    <div className={classes.div}>
      <img
        src="https://theluxurytravelexpert.com/wp-content/uploads/2019/07/header4.jpg"
        className={classes.img}
        alt="none"
      />
    </div>
    <div>
    <div className={classes.header}>
        <h1>Welcome to Royal Oasis Hotel</h1>
    </div>
    <main className={classes.container}>
        <section className={classes.section}>
            <h2>About Us</h2>
            <p>Welcome to Royal Oasis Hotel, a lavish haven nestled in the heart of Rajasthan's mesmerizing landscape. Our exquisite hotel offers a blend of modern luxury and timeless tradition, providing an unforgettable experience for discerning travelers.</p>
            <p>With a legacy spanning decades, we take pride in our commitment to impeccable service and opulent accommodations. Every corner of our hotel reflects the rich heritage of Rajasthan, from the intricately designed architecture to the handcrafted decor.</p>
        </section>
        <section className={classes.section}>
            <h2>Book Your Stay</h2>
            <p>Indulge in the ultimate luxury by reserving your room or suite at Royal Oasis Hotel. Whether you're seeking a relaxing getaway or a romantic retreat, our elegant accommodations cater to your every need.</p>
            <p>Use our user-friendly online booking system to secure your spot and immerse yourself in luxury.</p>
        </section>
        <section className={classes.section}>
            <h2>Dining at Royal Oasis</h2>
            <p>Experience the flavors of Rajasthan at our renowned restaurant. Our culinary artisans create dishes that tantalize the taste buds and transport you to a world of exquisite gastronomy.</p>
            <p>Book a table for a remarkable dining experience amidst the royal ambiance of our restaurant.</p>
        </section>
        <section className={classes.section}>
            <h2>Online Food Ordering</h2>
            <p>Craving our delectable dishes but prefer to dine in the comfort of your room? No problem. With our convenient online food ordering service, you can savor our culinary delights at your leisure.</p>
            <p>Explore our menu and place your order for a delightful in-room dining experience.</p>
        </section>
    </main>
    {/* <footer className={classes.footer}>
        <p>&copy; 2023 Royal Oasis Hotel. All rights reserved.</p>
    </footer> */}
    </div>
    </>
  );
}
