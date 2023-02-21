import React, {ChangeEvent} from "react";
import "./MyPosts.module.css"
import {PostType} from "../../../App";
import {addPostActionCreator, updateNewPostTextAсtionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText:string) => void
    newPostText: string
}

const MyPostsContainer = (props: MyPostsPropsType) => {
    return (
        <StoreContext.Consumer>
            { (store)=> {
                let state = props.store.getState();
                const addPost = () => {
                    props.store.dispatch(addPostActionCreator());
                    props.updateNewPostText('')
                }

                const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    let action = updateNewPostTextAсtionCreator(text)
                    props.store.dispatch( action);
                }
                return (
                    <MyPosts addPost={addPost} updateNewPostText={onPostChange} newPostText={store.getState().profilePage.newPostText} posts={store.getState().profilePage.posts}/>
                )

        }
            }
        </StoreContext.Consumer>
    )
}
export default MyPosts;