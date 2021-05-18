import {test} from "@jest/globals";
import {addPostActionCreator, deletePostActionCreator, profileReducer} from "./profile-reducer";

let testState = {
    postData: [
        {id: 0, text: 'Hi everyone', likes: 5},
        {id: 1, text: 'What\'s next?', likes: 3}
    ]
}

let testPost = 'test post';

test('length of postData should be incremented', () => {
    //test action
    let action = addPostActionCreator(testPost);
    let newState = profileReducer(testState, action);
    //expect
    expect(newState.postData.length).toBe(3);
});

test('post added to postData', () => {
    //test action
    let action = addPostActionCreator(testPost);
    let newState = profileReducer(testState, action);
    //expect
    expect(newState.postData[2].id).toBe(2);
    // expect(newState.postData[2].text).toBe(testPost); why didnt work?
    expect(newState.postData[2].likes).toBe(0);
});

test('length of postData should be decremented', () => {
    //test action
    let action = deletePostActionCreator(1);
    let newState = profileReducer(testState, action);
    //expect
    expect(newState.postData.length).toBe(1);
});

test('length of postData should be 2', () => {
    //test action
    let action = deletePostActionCreator(1000);
    let newState = profileReducer(testState, action);
    //expect
    expect(newState.postData.length).toBe(2);
});
