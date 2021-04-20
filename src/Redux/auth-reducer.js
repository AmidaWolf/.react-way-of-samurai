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
                ...action.data,
                isAuth: true
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


export const setUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {id: id, email: email, login: login}
    }
}

export const setUserPhoto = (userPhoto) => {
    return {
        type: SET_USER_PHOTO,
        userPhoto
    }
}

