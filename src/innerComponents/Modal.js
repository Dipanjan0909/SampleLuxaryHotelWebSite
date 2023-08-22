import React, { Fragment } from 'react';
import classes from '../styles/Modal.module.css';
import ReactDOM from "react-dom";




function Backdrop(props){
    return <div className={classes.backdrop} />;
}
function ModalOverlay(props){
    return(
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
    );
};

export default function Modal(props) {
    const modalToRender= document.querySelector("#modal");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>,modalToRender)};
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,modalToRender)};
    </Fragment>
  )
}
