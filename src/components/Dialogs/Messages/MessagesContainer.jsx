import React from 'react';
import { addMessageActionCreator, onInputMessageTextActionCreator } from '../../../redux/chatReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialog : state.chat
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (formData) => {
            dispatch(addMessageActionCreator(formData.messageText))
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;