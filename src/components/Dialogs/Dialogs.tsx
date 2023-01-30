import classes from './Dialogs.module.css';
import React from "react";
import Dialog from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.state.dialogs.map(el =>  <Dialog  name ={el.name} id={el.id} /> )

    const messagesElements = props.state.messages.map(el =>  <Message message={el.message}/> )

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