﻿
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import React from 'react';

class Dialogs extends React.Component {
    render() {
    let state = this.props.dialogsPage;
    let dialogsElements = state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id} key={dial.id}/>));
    let messagesElements = state.messages.map( mess => (<Message message={mess.message} key={mess.id}/>));
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        this.props.onSendMessage();
    };
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        this.props.updateNewMessageBody(body);
    }
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            <div>{ messagesElements }</div>
        <div>
            <div>
                <textarea placeholder='Enter message'
                    onChange={onNewMessageChange}
                    value={newMessageBody}></textarea>
            </div>
            <div>
                <button onClick={ onSendMessageClick }>addMessage</button>
            </div>
        </div>
        </div>
    </div>
        )
    }}

export default Dialogs;
