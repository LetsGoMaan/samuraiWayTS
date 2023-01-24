import React from 'react';
import './Post.module.css'
import classes from './Post.module.css'
import {PostType} from "../../../../App";




const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    )
}
export default Post;