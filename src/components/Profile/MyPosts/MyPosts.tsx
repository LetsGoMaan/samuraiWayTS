import React from 'react';
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post.module";
import {PostType} from "../../../App";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(el => <Post message={el.message} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = ''
        }

    }

    return (
        <div className={classes.postBlock}>
            My posts
            <div>New post</div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={classes.posts}>
                {postElements}

            </div>
        </div>
    )
}
export default MyPosts;