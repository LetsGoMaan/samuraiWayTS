const UPDATE_NEW_MESSAGES_BODY = "UPDATE_NEW_MESSAGES_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}




export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGES_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body})
            break;
        default:
            return state;
    }

    return state
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGES_BODY, body: body})