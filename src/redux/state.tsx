import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCount: 15},
            {id: 2, message: 'This is my first post', likeCount:15},
            {id: 2, message: 'This is my first post', likeCount: 15}
        ],
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hello there!'},
            { id: 2, message: 'Stop right there you criminal scum!'},
            { id: 3, message: 'Are you winning son?'},
            { id: 4, message: 'Are you winning son?'},
            { id: 5, message: 'Are you winning son?'}
        ],
        dialogs: [
            { id: 1, name: 'Andrey'},
            { id: 2, name: 'Dima'},
            { id: 3, name: 'Valera'},
            { id: 4, name: 'Jonh Cena'},
            { id: 5, name: 'Shia LaBeouf'}
        ]
    }
}

export let addPost = (postMessage: string) => {
    debugger;
    let newPost = {
        id: 4,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}




export default state;