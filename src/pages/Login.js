import React, { useState } from 'react';
import classes from '../styles/LogIn.module.css';
// import { redirect } from 'react-router-dom';
const formValidity={
  name: "xyz",
  street: "abc",
  postalCode: "12345",
  city: "belda",
  numebr:"9932558899",
  email: "dipabjgbe@gmail.com",
  password: "1234568"
}

export default function Login() {
  const[isSignUpClicked, setIsSignUpClicked] = useState(false);
  function handleSignUpClick(){
    setIsSignUpClicked(true);
  }
  function handleLogInClick(event){
    event.preventDefault();
    // localStorage.setItem("user", JSON.stringify("no-one"))
    // redirect("/");
  }
  function handleCancel(){
    setIsSignUpClicked(false);
  }
  return (
    <>
    {isSignUpClicked &&<div className={classes.formcontainer}>
    <form className={classes.form} >
      <div className={`${classes.control} ${formValidity.name?"": classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  />
        {!formValidity.name && <p>Please enter valid Name</p>}
      </div>
      <div className={`${classes.control} ${formValidity.street?"": classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
        {!formValidity.street && <p>Please enter valid Street</p>}
      </div>
      <div className={`${classes.control} ${formValidity.postalCode?"": classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal'  />
        {!formValidity.postalCode && <p>Please enter valid PostalCode</p>}
      </div>
      <div className={`${classes.control} ${formValidity.city?"": classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
        {!formValidity.city && <p>Please enter valid City</p>}
      </div>
      <div className={`${classes.control} ${formValidity.numebr?"": classes.invalid}`}>
        <label htmlFor='number'>Phone Number</label>
        <input type='number' id='number' />
        {!formValidity.numebr && <p>Please enter valid Number</p>}
      </div>
      <div className={`${classes.control} ${formValidity.email?"": classes.invalid}`}>
        <label htmlFor='email'>Email Id</label>
        <input type='email' id='email' />
        {!formValidity.email && <p>Please enter valid Email</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={handleCancel} >
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
    </div>}
    {!isSignUpClicked && <div className={classes.loginformcontainer}>
      <form className={classes.loginform}>
      <div className={`${classes.control} ${formValidity.name?"": classes.invalid}`}>
          <label htmlFor='name'>User Name</label>
          <input type='text' id='name'  />
          {!formValidity.name && <p>Please enter valid UserName</p>}
      </div>
      <div className={`${classes.control} ${formValidity.password?"": classes.invalid}`}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password'  />
          {!formValidity.password && <p>Please enter valid Password</p>}
      </div>
      <div className={classes.loginactions}>
      <button onClick={handleLogInClick}className={classes.loginbtn}>Log In</button>
      <button onClick={handleSignUpClick}className={classes.loginbtn}>Sign Up</button>
      </div>
    </form>
    </div>}
    </>
  );
}
