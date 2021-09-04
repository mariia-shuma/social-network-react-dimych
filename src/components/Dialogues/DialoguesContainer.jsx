
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/messagesPagereducer';
import store from '../../redux/store';
import Dialogues from './Dialogues';


let mapStateToprops = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}


const DialoguesContainer = connect(mapStateToprops, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;