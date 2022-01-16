import React from 'react';
import classes from './Modal.module.css'
import Button from '../components/Button'

const Modal = (props) => {
    return (
        <div>
        <div className={classes.backdrop} onClick={props.onConfirm} />
        <div className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}></Button>
            </footer>
        </div>
        </div>
    )
}

export default Modal;