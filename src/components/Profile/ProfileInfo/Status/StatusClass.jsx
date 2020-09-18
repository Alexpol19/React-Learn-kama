import React from 'react';
import style from '../ProfileInfo.module.css';

export default class StatusClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editMode : false,
            status: this.props.status
        }
    }
    inputStatus(e) {
        this.setState({
            status : e.target.value,
        })
    }
    showInput = () => {
        if(this.props.authId == this.props.currentUserId){
            this.setState({
                editMode : true,
            })
        }
    }
    hideInput = () => {
        this.setState({
            editMode : false,
        });
        if(this.props.status != this.state.status){
            this.props.updateStatus(this.state.status)
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }
    render() {
        return (
            <p className={style.status}>
                <span>Status: </span>
                {this.state.editMode 
                ? <input type="text" className={style.status__input} autoFocus={true} onBlur={this.hideInput} onChange={(e) => this.inputStatus(e)} value={this.state.status} /> 
                : <span onClick={this.showInput}>{this.props.status}</span>}
                
                
            </p>
        )
    }
}