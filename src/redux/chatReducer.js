const initialState = {
    newMessageText:'cdcd',
    dialogs: [
        {
            id:1,
            name: 'Vasea',
        },
        {
            id:2,
            name: 'Misa',
        },
        {
            id:3,
            name: 'Petea',
        },
    ],
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
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case AddMessage:
            let newMessage = {
                id:5,
                name: 'I',
                messageText: action.message,
                url: 'http://lorempixel.com/75/75',
                own: 1,
            }
            // push new elem without method push
            return { 
                ...state, 
                newMessageText : '', 
                messagesData : [...state.messagesData, newMessage] 
            };
        default: 
            return state;
    }
}


const AddMessage = 'AddMessage';

export const addMessageActionCreator = (message) => {
    return { type: AddMessage, message: message }
}

export default chatReducer;