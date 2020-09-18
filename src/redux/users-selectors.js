import { createSelector } from 'reselect';

// primitive Selector
const getUsers = (state) => {
    return state.users.usersData;
}
// Complicated Selector created by createSelector, 
// used Primitive Selectors, or others Complicated Selectors
export const getUsersReselect = createSelector( getUsers, (users) => {
    return users.filter(user => true);
})


export const getPageSize = (state) => {
    return state.users.pageSize;
}
export const getTotalUsers = (state) => {
    return state.users.totalUsers;
}
export const getCurrentPage = (state) => {
    return state.users.currentPage;
}
export const getIsFetching = (state) => {
    return state.users.isFetching;
}
export const getIsAuth = (state) => {
    return state.auth.isAuth;
}
export const getAuthId = (state) => {
    return state.auth.id;
}