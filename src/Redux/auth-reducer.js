import {authMe, getCaptcha, getUser, loginMe, logoutMe} from "../api/api";


const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';
const SET_AUTH_ERROR = 'auth/SET_AUTH_ERROR';
const SET_LOGIN_ERROR = 'auth/SET_LOGIN_ERROR';
const SET_LOGOUT_ERROR = 'auth/SET_LOGOUT_ERROR';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null,
    errorLogin: null,
    errorAuth: null,
    errorLogout: null,
    captchaUrl: null
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
        case SET_CAPTCHA_URL:
            return  {
                ...state,
                captchaUrl: action.captchaUrl
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

export const setCaptchaUrl = (captchaUrl) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    }
}

export const getAuthUserData = () => async (dispatch) => {
    dispatch(setAuthError(null));
    let response = await authMe();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true));
        getUser(id).then(response => {
            dispatch(setUserPhoto(response.photos.small));
        })
    } else {
        dispatch(setAuthError(response.messages));
    }
}

export const setUserLogin = (data) => async (dispatch) => {
    dispatch(setLoginError(null));
    let response = await loginMe(data)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        dispatch(setLoginError(response.messages));
    }
}

export const setUserLogout = () => async (dispatch) => {
    dispatch(setLogoutError(null));
    let response = await logoutMe()
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    } else {
        dispatch(setLogoutError(response.messages));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    dispatch(setCaptchaUrl(null));
    let response = await getCaptcha();
    dispatch(setCaptchaUrl(response.data.url));
}
