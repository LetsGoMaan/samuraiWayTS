import classes from './Dialogs.module.css';
import React from "react";
import Dialog from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {PropsType} from "../../App";



const Dialogs = (props: PropsType) => {


    const dialogsElements = props.state.dialogsPage.dialogs.map(el =>  <Dialog  name ={el.name} id={el.id} /> )

    const messagesElements = props.state.dialogsPage.messages.map(el =>  <Message message={el.message}/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                </div>
            </div>
    )
}
export default Dialogs;