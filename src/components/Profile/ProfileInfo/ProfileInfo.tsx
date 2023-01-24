import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
            <div className={classes.descriptionBlock}>ava + descr</div>
        </div>
    )
}
export default ProfileInfo;