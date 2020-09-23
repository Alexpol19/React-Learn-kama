import React, { useState, useEffect } from 'react';
import style from '../ProfileInfo.module.css';

const StatusFunc = (props) => {
    let [status, setStatus] = useState( props.status );

    let state = useState( false );
    let editMode = state[0];
    let setEditMode = state[1];

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);


    let inputStatus = (e) => {
        setStatus(e.target.value)
    }
    let showInput = () => {
        if(props.authId == props.currentUserId){
            setEditMode( true )
        }
    }
    let hideInput = () => {
        setEditMode( false )
        if(props.status != status){
            props.updateStatus(status)
        }
    }
    // componentDidUpdate(prevProps) {
    //     if(prevProps.status !== props.status){
    //         setStatus(props.status)
    //     }
    // }
    return (
        <p className={style.status}>
            <span className={style.statusLabel}>Status: </span>
            {editMode 
            ? <input type="text" className={style.status__input} autoFocus={true} onBlur={hideInput} onChange={(e) => inputStatus(e)} value={status} /> 
            : <span onClick={showInput}>{props.status}</span>}
        </p>
    )
}

export default StatusFunc;