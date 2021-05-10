import {authMe, getUser, loginMe, logoutMe} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_LOGOUT_ERROR = 'SET_LOGOUT_ERROR';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null,
    errorLogin: null,
    errorAuth: null,
    errorLogout: null
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
        case SET_AUTH_ERROR:
            return  {
                ...state,
                errorAuth: action.errorAuth
            }
        case SET_LOGIN_ERROR:
            return  {
                ...state,
                errorLogin: action.errorLogin
            }
        case SET_LOGOUT_ERROR:
            return  {
                ...state,
                errorLogout: action.errorLogout
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

export const setAuthError = (errorAuth) => {
    return {
        type: SET_AUTH_ERROR,
        errorAuth
    }
}

export const setLoginError = (errorLogin) => {
    return {
        type: SET_LOGIN_ERROR,
        errorLogin
    }
}

export const setLogoutError = (errorLogout) => {
    return {
        type: SET_LOGOUT_ERROR,
        errorLogout
    }
}

export const getAuthUserData = () => (dispatch) => {
    dispatch(setAuthError(null));
    authMe().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserData(id, email, login, true));
            getUser(id).then(response => {
                dispatch(setUserPhoto(response.photos.small));
            })
        } else {
            dispatch(setAuthError(response.messages));
        }
    })
}

export const setUserLogin = (data) => (dispatch) => {
    dispatch(setLoginError(null));
    loginMe(data).then(response => {
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            dispatch(setLoginError(response.messages));
        }
    })
}

export const setUserLogout = () => (dispatch) => {
    dispatch(setLogoutError(null));
    logoutMe().then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        } else {
            dispatch(setLogoutError(response.messages));
        }
    })
}
