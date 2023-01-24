import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}

const Dialog = (props: DialogType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default Dialog;