// let rerender;

let store={
    _callSubscriber(){
        console.log('not observer');
    },
    _state: {
        chat:{
            dialogsData: [
                {
                    newMessageText:'cdcd',
                    id:1,
                    name: 'Vasea',
                    messagesData: [
                        {
                            id:1,
                            name: 'Vasea',
                            messageText: 'Hello!!!',
                            url: 'https://io.ua/img_aa/large/3223/32/32233275.jpg',
                            own: 0,
                        },
                        {
                            id:2,
                            name: 'Vasea',
                            messageText: 'Where are you?',
                            url: 'https://io.ua/img_aa/large/3223/32/32233275.jpg',
                            own: 0,
                        },
                        {
                            id:3,
                            name: 'Vasea',
                            messageText: 'AU',
                            url: 'https://io.ua/img_aa/large/3223/32/32233275.jpg',
                            own: 0,
                        },
                        {
                            id:4,
                            name: 'I',
                            messageText: "I'm Here",
                            url: 'http://lorempixel.com/75/75',
                            own: 1,
                        },
                    ],
                },
                {
                    newMessageText:'cdcd',
                    id:2,
                    name: 'Misa',
                    messagesData: [
                        {
                            id:1,
                            name: 'I',
                            messageText: 'Hello !!!',
                            url: 'http://lorempixel.com/75/75',
                            own: 1,
                        },
                        {
                            id:2,
                            name: 'Misa',
                            messageText: 'Hello man',
                            url: 'https://sun9-9.userapi.com/impf/c4384/g37962418/a_86cad53d.jpg?size=200x0&quality=90&sign=2486315bbe8fef8092c917300a8533f2&ava=1',
                            own: 0,
                        },
                        {
                            id:3,
                            name: 'I',
                            messageText: 'How are you?',
                            url: 'http://lorempixel.com/75/75',
                            own: 1,
                        },
                        {
                            id:4,
                            name: 'Misa',
                            messageText: 'Fine',
                            url: 'https://sun9-9.userapi.com/impf/c4384/g37962418/a_86cad53d.jpg?size=200x0&quality=90&sign=2486315bbe8fef8092c917300a8533f2&ava=1',
                            own: 0,
                        },
                    ],
                },
                {
                    newMessageText:'cdcd',
                    id:3,
                    name: 'Petea',
                    messagesData: [
                        {
                            id:1,
                            name: 'I',
                            messageText: 'Hello!!!',
                            url: 'http://lorempixel.com/75/75',
                            own: 1,
                        },
                        {
                            id:2,
                            name: 'I',
                            messageText: 'Where are you?',
                            url: 'http://lorempixel.com/75/75',
                            own: 1,
                        },
                        {
                            id:3,
                            name: 'I',
                            messageText: 'Heeeey?',
                            url: 'http://lorempixel.com/75/75',
                            own: 1,
                        },
                        {
                            id:4,
                            name: 'Petea',
                            messageText: 'Hello! What do you want?',
                            url: 'https://io.ua/img_aa/large/3223/32/32233275.jpg',
                            own: 0,
                        },
                    ],
                },
            ],  
        },
        profile:{
            newPostText: '',
            postsData: [
                {
                    id:1,
                    likeCount: 2,
                    description: 'Hello World',
                    url: 'https://klike.net/uploads/posts/2019-05/1556777145_1.jpg'
                },
                {
                    id:2,
                    likeCount: 5,
                    description: 'Hello Peoples',
                    url: 'https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg'
                },
            ]
        },
        navBar: {
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
                    name: 'Settings',
                    link: 'settings'
                }
            ],
            friends: [
                {
                    id: 1,
                    name: 'Kolea',
                    url: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
                },
                {
                    id: 2,
                    name: 'Vasea',
                    url: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
                },
                {
                    id: 3,
                    name: 'Petea',
                    url: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
                },
                {
                    id: 4,
                    name: 'Mihai',
                    url: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
                }
            ]
        },
    },
    getState(){
        return this._state;
    },
    // methods for addPost on Profile page
    onInputPostText(newPostText){
        console.log(this);
        this._state.profile.newPostText=newPostText;
        this._callSubscriber(this._state);
    },
    addPost(){
        let newPost={
            id:3,
            likeCount: 0,
            description: this._state.profile.newPostText,
            url: 'https://klike.net/uploads/posts/2019-05/1556777145_1.jpg'
        }
        this._state.profile.postsData.push(newPost);
    
        this.onInputPostText('')
    },
    // methods for addMessage on Messages Page
    onChangeMessageText(newMessageText){
        console.log(this)
        this._state.chat.dialogsData[0].newMessageText=newMessageText;
        
        this._callSubscriber(this.getState());
    },
    addMessage(){
        let newMessage={
            id:5,
            name: 'I',
            messageText: this._state.chat.dialogsData[0].newMessageText,
            url: 'http://lorempixel.com/75/75',
            own: 1,
        }
        this._state.chat.dialogsData[0].messagesData.push(newMessage);
    
        this.onChangeMessageText('')
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },


    dispatch(){
        
    }
};

// export const subscribe = (observer) =>{
//     rerender=observer;
// }

export default store;