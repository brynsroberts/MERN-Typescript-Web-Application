import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";

import "./Modal.css";

interface ModalProps {
  onCancel: () => any;
  show: boolean;
  className?: string;
  style?: CSSProperties;
  onSubmit?: () => any;
  headerClass?: string;
  header: string;
  contentClass?: string;
  footerClass?: string;
  onClick?: () => any;
  footer: React.ReactNode;
}

interface ModalOverlayProps {
  className?: string;
  style?: CSSProperties;
  onSubmit?: () => any;
  headerClass?: string;
  header: string;
  contentClass?: string;
  footerClass?: string;
  footer: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__head ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
