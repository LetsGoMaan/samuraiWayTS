let rerenderEntireTree = (state: any) => {
    console.log('1')
}

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCount: 15},
            {id: 2, message: 'This is my first post', likeCount:15},
            {id: 2, message: 'This is my first post', likeCount: 15}
        ],
        newPostText: 'it-kamasutra.com'
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

export let addPost = () => {
    const newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = (newText)
    rerenderEntireTree(state);
}

export const subscribe =(observer: any) => {
    rerenderEntireTree = observer;
}



export default state;