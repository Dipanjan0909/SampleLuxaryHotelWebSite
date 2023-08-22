import React, { useState } from 'react'
import MainNavigationBar from './MainNavigationBar'
import { Outlet } from 'react-router-dom'
import Cart from './Cart'

export default function Root() {
  const[isCartShown, setIsCartShown]=useState(false);

  function onShow(){
    setIsCartShown(true);
  }
  function onHide(){
    setIsCartShown(false)
  }

  return (
    <>
    {isCartShown && <Cart onHide={onHide}/>}
     <MainNavigationBar onShow={onShow}/>
     <main><Outlet/></main> 
    </>
  )
}
