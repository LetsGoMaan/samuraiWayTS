import React from "react";
import {DialogsPageType} from "../../App";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {
    state: DialogsPageType
}

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageSend = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return   <Dialogs updateNewMessageBody = {onNewMessageSend} sendMessage = {onSendMessageClick} dialogsPage = {state} />
            }
        }
        </StoreContext.Consumer>
    )



}
