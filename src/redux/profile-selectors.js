// import { createSelector } from 'reselect';

// primitive Selector
export const getPhotos = (state) => {
    if(state.profile.userData){
        return state.profile.userData.photos;
    }
    else{
        return undefined;
    }
}
// Complicated Selector created by createSelector, 
// used Primitive Selectors, or others Complicated Selectors
// export const getUsersReselect = createSelector( getUsers, (users) => {
//     return users.filter(user => true);
// })