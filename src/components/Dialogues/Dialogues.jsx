
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/messagesPagereducer';
import DialogueItems from './DialogueItem/DialogueItem';
import s from './Dialogues.module.css';
import Message from './Message/Message';

function Dialogues(props) {
    let state = props.messagesPage;

    const ourMap = function(arr, converter){
        let result = []
        for(let item of arr){
            result.push(converter(item))
        }
        return result
    }

    const ourDialoduesConverter = function(d){
        return <DialogueItems name={d.name} key={d.id} id={d.id} />
    }


    // let dialogsElement = ourMap(state.dialogues, ourDialoduesConverter);
    // let messagesElemnt = ourMap(state.messages, function(m){
    //     return <Message message={m.message} key={m.id} />
    // });
    let dialogsElement = state.dialogues.map(d => <DialogueItems name={d.name} key={d.id} id={d.id} />);
    let messagesElemnt = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;
    let onSendmessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return <div className={s.dialogues} >
        <div className={s.dialogueItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            <div>{messagesElemnt}</div>
            <div>
                <div><textarea value={newMessageBody}
                    onChange={onNewMessageChange}

                    placeholder='enter your message'></textarea></div>
                <div><button onClick={onSendmessageClick}>Send</button></div>
            </div>
        </div>
    </div>
}

export default Dialogues;