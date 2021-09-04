
import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./messagesPagereducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;
export default store;