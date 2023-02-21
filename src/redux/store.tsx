import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";




export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likeCount: 15},
                {id: 2, message: "This is my first post", likeCount: 15},
                {id: 2, message: "This is my first post", likeCount: 15}
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hello there!"},
                {id: 2, message: "Stop right there you criminal scum!"},
                {id: 3, message: "Are you winning son?"},
                {id: 4, message: "Are you winning son?"},
                {id: 5, message: "Are you winning son?"}
            ],
            dialogs: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Valera"},
                {id: 4, name: "Jonh Cena"},
                {id: 5, name: "Shia LaBeouf"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber(state: any) {
        console.log("1")
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) { /// fix ANY

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },


    // addPost () {
    //     const newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (newText: string) {
    //     this._state.profilePage.newPostText = (newText)
    //     this._callSubscriber(this._state);
    // },
}





// let rerenderEntireTree = (state: any) => {
//     console.log('1')
// }
//
// const state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you', likeCount: 15},
//             {id: 2, message: 'This is my first post', likeCount:15},
//             {id: 2, message: 'This is my first post', likeCount: 15}
//         ],
//         newPostText: 'it-kamasutra.com'
//     },
//     dialogsPage: {
//         messages: [
//             { id: 1, message: 'Hello there!'},
//             { id: 2, message: 'Stop right there you criminal scum!'},
//             { id: 3, message: 'Are you winning son?'},
//             { id: 4, message: 'Are you winning son?'},
//             { id: 5, message: 'Are you winning son?'}
//         ],
//         dialogs: [
//             { id: 1, name: 'Andrey'},
//             { id: 2, name: 'Dima'},
//             { id: 3, name: 'Valera'},
//             { id: 4, name: 'Jonh Cena'},
//             { id: 5, name: 'Shia LaBeouf'}
//         ]
//     }
// }
//
// export let addPost = () => {
//     const newPost = {
//         id: 4,
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     rerenderEntireTree(state);
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = (newText)
//     rerenderEntireTree(state);
// }
//
// export const subscribe =(observer: any) => {
//     rerenderEntireTree = observer;
// }


// window.store = store;