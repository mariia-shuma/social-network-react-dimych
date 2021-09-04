import { NavLink } from 'react-router-dom'
import s from './../Dialogues.module.css'

function DialogueItems(props) {

    return <div className={s.dialogue + ' ' + s.active}>
        <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
    </div>
} 



export default DialogueItems;