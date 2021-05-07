import {authMe, getUser, loginMe, logoutMe} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload,
            };
        case SET_USER_PHOTO:
            return  {
                ...state,
                userPhoto: action.userPhoto
            }

        default:
            return state;

    }
}


export const setUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    }
}

export const setUserPhoto = (userPhoto) => {
    return {
        type: SET_USER_PHOTO,
        userPhoto
    }
}

export const getAuthUserData = () => (dispatch) => {
    authMe().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserData(id, email, login, true));
            getUser(id).then(response => {
                dispatch(setUserPhoto(response.photos.small));
            })
        }
    })
}

export const setUserLogin = (data) => (dispatch) => {
    loginMe(data).then(response => {
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const setUserLogout = () => (dispatch) => {
    logoutMe().then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}
