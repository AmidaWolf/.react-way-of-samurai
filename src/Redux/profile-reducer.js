import {getStatus, getUser, updateStatus, uploadAvatar, uploadProfileInfo} from "../api/api";


const ADD_POST = 'profile/ADD-POST';
const DEL_POST = 'profile/DEL-POST';
const UPD_NEW_POST_TEXT = 'profile/UPD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_IS_UPDATE = 'profile/SET_IS_UPDATE';
const SET_AVATAR_SUCCESS = 'profile/SET_AVATAR_SUCCESS';
const SET_IS_LOADED = 'SET_IS_LOADED';
const SET_INFO_ERROR = 'SET_INFO_ERROR';
const SET_IS_ERROR = 'SET_IS_ERROR';


let initialState = {
    postData: [
        {id: 0, text: 'Hi everyone', likes: 5},
        {id: 1, text: 'What\'s next?', likes: 3},
        {id: 2, text: 'For all values other than auto and content (defined above), ' +
                'flex-basis is resolved the same way as width in horizontal ' +
                'writing modes [CSS21], except that if a value would resolve ' +
                'to auto for width, it instead resolves to content for flex-basis. ' +
                'For example, percentage values of flex-basis are resolved against ' +
                'the flex item’s containing block (i.e. its flex container); and if that ' +
                'containing block’s size is indefinite, the used value for flex-basis is content. ' +
                'As another corollary, flex-basis determines the size of the content box, ' +
                'unless otherwise specified such as by box-sizing [CSS3UI].', likes: 900000}
    ],
    newPostText: '',
    profile: null,
    status: '',
    isUpdate: false,
    isLoaded: false,
    errorInfo: null,
    isError: true,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newID = state.postData.length;
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

        case DEL_POST:
            return  {
                ...state,
                postData : state.postData.filter(el => el.id !== action.id)
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

        case SET_IS_ERROR:
            return{
                ...state,
                isError: action.status
            }

        case SET_IS_LOADED:
            return{
                ...state,
                isLoaded: action.status
            }

        case SET_STATUS:
            return{
                ...state,
                status: action.text
            }

        case SET_AVATAR_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        case SET_INFO_ERROR:
            return  {
                ...state,
                errorInfo: action.errorInfo
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

export const deletePostActionCreator = (id) => {
    return {
        type: DEL_POST,
        id
    }
}

export const updNewPostTextActionCreator = (text) => {
    return {
        type: UPD_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const uploadAvatarSuccess = (photos) => ({type: SET_AVATAR_SUCCESS, photos})

export const setIsUpdate = (status) => {
    return {
        type: SET_IS_UPDATE,
        status
    }
}

export const setIsLoaded = (status) => {
    return {
        type: SET_IS_LOADED,
        status
    }
}

export const setIsError = (status) => {
    return {
        type: SET_IS_ERROR,
        status
    }
}

export const setUserStatus = (text) => {
    return {
        type: SET_STATUS,
        text
    }
}

export const setInfoError = (errorInfo) => {
    return {
        type: SET_INFO_ERROR,
        errorInfo
    }
}

export const getUserInfo = (id) => async (dispatch) => {
    dispatch(setIsUpdate(true));
    let response = await getUser(id)
    dispatch(setUserProfile(response));
    dispatch(setIsUpdate(false));
    dispatch(setIsLoaded(true));
}

export const getUserStatus = (id) => async (dispatch) => {
    if (id === undefined) {
        id = 16379;
    }
    dispatch(setIsUpdate(true));
    let response = await getStatus(id)
    dispatch(setUserStatus(response));
    dispatch(setIsUpdate(false));
}

export const updateUserStatus = (text) => async (dispatch) => {
    let response = await updateStatus(text)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(text));
    }
}

export const changeAvatar = (photo) => async (dispatch) => {
    dispatch(setIsUpdate(true));
    let response = await uploadAvatar(photo)
    if (response.data.resultCode === 0) {
        dispatch(uploadAvatarSuccess(response.data.data.photos));
    }
    dispatch(setIsUpdate(false));
}

export const saveProfile = (profileInfo, id) => async (dispatch) => {
    dispatch(setInfoError(null));
    let response = await uploadProfileInfo(profileInfo)
    if (response.data.resultCode === 0) {
        dispatch(getUserInfo(id));
        dispatch(setIsError(false));
    } else {
        dispatch(setIsError(true));
        dispatch(setInfoError(response.data.messages));
    }

}





