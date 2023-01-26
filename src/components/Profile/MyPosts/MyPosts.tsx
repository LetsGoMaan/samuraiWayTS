import React from 'react';
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post.module";
import {PostType} from "../../../App";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(el => <Post message={el.message} likeCount={el.likeCount}/> )

    return (
        <div className={classes.postBlock}>
            My posts
            <div>New post</div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                {postElements}

            </div>
        </div>
    )
}
export default MyPosts;