import classes from "./Dialogs.module.css";
import React from "react";
import Dialog from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(el =>  <Dialog  name ={el.name} id={el.id} /> )
    const messagesElements = state.messages.map(el =>  <Message message={el.message}/> )
    const newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageSend = (e) => {
     let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageSend}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
                </div>

            </div>
    )
}
export default Dialogs;