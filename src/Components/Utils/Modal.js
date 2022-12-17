import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

// import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[99vh] z-[10] bg-[rgba(0,0,0,.2)]  "></div>
  );
};
const ModalOverlay = (props) => (
  <div className="fixed text-white top-[25vh] left-[25%] mx-auto px-8 py-10 border z-[30] h-[30vh] rounded-lg bg-[#028f57]">
    <div className="">{props.children}</div>
  </div>
);

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
