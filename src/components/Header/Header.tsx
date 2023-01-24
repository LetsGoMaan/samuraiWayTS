import React from "react";
import './Header.module.css'
import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/5233/5233785.png"
                 alt="logo"/>
        </header>
            )
}
export default Header;