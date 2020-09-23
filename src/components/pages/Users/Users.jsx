import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import style from './Users.module.css';
import User from './User';
import Pagination from "react-js-pagination";

let Users = (props) => {
    let updateCurrentPage = (page) => {
        props.updateUsers(page);
    }
    
    return (
        <div className={style.users}>
            <h2>Users</h2>
            <div className={style.users__list}>
                {   props.isFetching ?
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={0} 
                        
                
                    />
                    :
                    props.users.length
                    ? props.users.map( (user) => {
                        return <User key={user.id} user={user} follow={props.followThunkCreator} unfollow={props.unfollowThunkCreator} auth={props.auth} authId={props.authId}  />
                    })
                    : <div>Users not</div>
                }
            </div>
            {/* <Pagination pages={pages} current={props.currentPage} updateCurrentPage={updateCurrentPage} /> */}
            <Pagination
                activePage={props.currentPage}
                itemsCountPerPage={props.pageSize}
                totalItemsCount={props.totalUsers}
                pageRangeDisplayed={5}
                onChange={updateCurrentPage}
                // custom classes
                // innerClass={style.pagination}
                // activeClass={style.active}
                itemClass="page-item"
                linkClass="page-link"
            />

    </div>
    );
}

export default Users;