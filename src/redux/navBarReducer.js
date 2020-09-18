const initialState = {
    menu: [
        {
            id: 1,
            name: 'Profile',
            link: 'profile'
        },
        {
            id: 2,
            name: 'Dialogs',
            link: 'dialogs'
        },
        {
            id: 3,
            name: 'Music',
            link: 'music'
        },
        {
            id: 4,
            name: 'News',
            link: 'news'
        },
        {
            id: 5,
            name: 'Users',
            link: 'users'
        },
        {
            id: 6,
            name: 'Settings',
            link: 'settings'
        }
    ],
}

const navBarReducer = (state = initialState, action) => {
    switch(action.type) {

        default: 
            return state;
    }
}

export default navBarReducer;