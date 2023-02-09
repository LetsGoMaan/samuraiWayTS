import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post.module";
import {PostType} from "../../../App";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText:string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(el => <Post message={el.message} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost();
        props.updateNewPostText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postBlock}>
            My posts
            <div>New post</div>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}/>
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