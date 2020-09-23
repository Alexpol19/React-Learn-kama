import React from 'react';
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthCheck';
import { compose } from 'redux';

const DialogsElements = (props) => {
    return(
        <div className={style.dialogs__items}>
            <h6>All dialogs</h6>
            {
                props.dialogs
                    .map( dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name} /> )
            }
            
        </div>
    );
}




let mapStateToProps = (state) => {
    return {
        dialogs: state.chat.dialogs,
    }
}
// let AuthRedirectComponent = withAuthRedirect(DialogsElements)

// const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent)

export default compose(connect(mapStateToProps), withAuthRedirect)(DialogsElements)
;