const { default: profileReducer, addPostActionCreator, deletePost } = require("../redux/profileReducer");

let state = {
    userStatus : '',
    userData: null,
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
};

it('Post length should be incremented', () => {
    // initial Data
    let action = addPostActionCreator("Some Post Text");
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.postsData.length).toBe(3);
});

it('Added Post text should be Some Post Text', () => {
    // initial Data
    let action = addPostActionCreator("Some Post Text");
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.postsData[2].description).toBe("Some Post Text");
});

it('After deleting length of post should be decrement', () => {
    // initial Data
    let action = deletePost(1);
    // action
    let newState = profileReducer(state, action);
    // expectation
    // expect(newState.postsData.length).toBe(1);
});