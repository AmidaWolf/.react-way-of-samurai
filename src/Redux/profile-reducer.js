import {getStatus, getUser, updateStatus} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_IS_UPDATE = 'SET_IS_UPDATE';


let initialState = {
    postData: [
        {id: 0, text: 'Hi everyone', likes: 5},
        {id: 1, text: 'What\'s next?', likes: 3}
    ],
    newPostText: '',
    profile: null,
    status: '',
    isUpdate: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let lastElement = state.postData.length;
            let newID = lastElement + 1;
            let newPost = {
                id: newID,
                text: state.newPostText,
                likes: 0
            }
            return  {
                ...state,
                newPostText : '',
                postData : [...state.postData, newPost]
            };


        case UPD_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile : action.profile
            };
        case SET_IS_UPDATE:
            return{
                ...state,
                isUpdate: action.status
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.text
            }
        default:
            return state;

    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updNewPostTextActionCreator = (text) => {
    return {
        type: UPD_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setIsUpdate = (status) => {
    return {
        type: SET_IS_UPDATE,
        status: status
    }
}

export const getUserInfo = (id) => {
    return (dispatch) => {
        dispatch(setIsUpdate(true));
        getUser(id).then(response => {
            dispatch(setUserProfile(response));
            dispatch(setIsUpdate(false));
        })
    }
}

export const setUserStatus = (text) => {
    return {
        type: SET_STATUS,
        text: text
    }
}

export const getUserStatus = (id) => {
    return (dispatch) => {
        if (id === undefined) {
            id = 16379;
        }
        dispatch(setIsUpdate(true));
        getStatus(id).then(response => {
            dispatch(setUserStatus(response));
            dispatch(setIsUpdate(false));
        })
    }
}

export const updateUserStatus = (text) => {
    return (dispatch) => {
        updateStatus(text).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(text));
            }
        })
    }
}
