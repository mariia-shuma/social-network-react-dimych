import messagesPageReducer from "./messagesPagereducer";
import profileReducer from "./profileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'it is my fisrst post', likesCount: 12 },
                { id: 3, message: 'wowowowow', likesCount: 12 },
            ],
            newPostText: 'hey-hey, what is  new'
        },
        messagesPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'how dy' },
            ],
            dialogues: [
                { id: 1, name: 'Masha' },
                { id: 2, name: 'Dasha' },
                { id: 3, name: 'Sasha' }
            ],
            newMessageBody: "" 
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);

    }
}




export default store;
window.store = store; 