import React from 'react';
import './NavBar.module.css';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/Dialogs"activeClassName={classes.active}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to="/News" activeClassName={classes.active}>News</NavLink></div>
            <div className={classes.item}><NavLink to="/Music" activeClassName={classes.active}>Music</NavLink></div>
            <div className={classes.item}><NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink></div>
        </nav>
    )
}
export default NavBar;