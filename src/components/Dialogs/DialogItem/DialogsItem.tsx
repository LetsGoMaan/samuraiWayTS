import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

type DialogType = {
    name: string
    id: number
}

const Dialog = (props: DialogType) => {
    let path = "/dialogs/" + props.id

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text);
    }

    return (
        <div>
            <div className={classes.dialog}><NavLink to={path}>{props.name}</NavLink></div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Send message</button>
        </div>

    )
}

export default Dialog;