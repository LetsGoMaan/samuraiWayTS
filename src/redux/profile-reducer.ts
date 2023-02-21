const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "This is my first post", likeCount: 15},
        {id: 2, message: "This is my first post", likeCount: 15}
    ],
    newPostText: "it-kamasutra.com"
}

export const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
        default:
            return state;
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextAсtionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})