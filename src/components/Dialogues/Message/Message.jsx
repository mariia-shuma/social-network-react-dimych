
import s from './../Dialogues.module.css'


function Message(props) {
    return <div className={s.dialogue}>
        {props.message}
    </div>
}




export default Message;