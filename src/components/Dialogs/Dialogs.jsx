﻿
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {
    const newMessageElement = React.createRef();
    const dialogsElements = props.state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id}/>));
    const messagesElements = props.state.messages.map( mess => (<Message message={mess.message}/>));
    const addMessage = () => {
        props.dispatch({type:'ADD-MESSAGE'});
    };
    let oneMessageChange = () =>{
        const text = newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newpText: text});
    }
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            { messagesElements }
        </div>
        <button onClick={ addMessage }>addMessage</button>
        <textarea onChange={oneMessageChange}
                    ref ={newMessageElement}
                    value={props.state.newMessageText}></textarea>
    </div>
        )
    }
export default Dialogs;
