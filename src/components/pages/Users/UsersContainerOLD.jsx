import React from 'react';
import { connect } from 'react-redux';
import style from './Users.module.css';
import User from './User';
import { subscribeUserActionCreator, setUsersActionCreator, setTotalUsersActionCreator, updateCurrentPage } from '../../../redux/usersReducer';
import axios from 'axios';
import Pagination from './Pagination/Pagination';

class Users extends React.Component{
    componentDidMount(){
        this.getUsers();
    }
    getUsers = () => {
        axios({
            url : `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            method: 'get',
            headers: {'Content-Type': 'application/json'},

        })
        .then((res) => {
            console.log(res.data);
            this.props.setTotalUsers(res.data.totalCount);
            return res.data
        })
        .then((data) => {
            this.props.setUsers(data.items);
        })
        .catch( (err) => {
            console.log(err);
        });
    }
    updateUsers = (currentPage) => {
        axios({
            url : `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
            method: 'get',
            headers: {'Content-Type': 'application/json'},

        })
        .then((res) => {
            console.log(res.data);
            return res.data
        })
        .then((data) => {
            this.props.setUsers(data.items);
        })
        .catch( (err) => {
            console.log(err);
        });
    }
    updateCurrentPage = (page) => {
        this.props.updateCurrentPage(page);
        this.updateUsers(page);
    }
    render() {
        let pages=Math.ceil(this.props.totalUsers/this.props.pageSize);
        return (
            <div className={style.users}>
                <h2>Users</h2>
                <div className={style.users__list}>
                    {
                        this.props.users.length
                        ? this.props.users.map( (user) => {
                            return <User key={user.id} user={user} subscribeUser={this.props.subscribeUser}  />
                        })
                        : <div>Users not</div>
                    }
                </div>
                <Pagination pages={pages} current={this.props.currentPage} updateCurrentPage={this.updateCurrentPage} />
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsers: state.users.totalUsers,
        currentPage: state.users.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        subscribeUser : (id) => {
            dispatch(subscribeUserActionCreator(id));
        },
        setUsers : (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setTotalUsers: (total) => {
            dispatch(setTotalUsersActionCreator(total));
        },
        updateCurrentPage: (current) => {
            dispatch(updateCurrentPage(current))
        }
    };
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;