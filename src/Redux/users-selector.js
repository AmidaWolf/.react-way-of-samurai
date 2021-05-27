export const getProfileSelector = (state) => {
    return state.profilePage.profile;
}

export const getStatusSelector = (state) => {
    return state.profilePage.status;
}

export const getIsUpdateSelector = (state) => {
    return state.profilePage.isUpdate;
}

export const getIdSelector = (state) => {
    return state.auth.id;
}

export const getIsErrorSelector = (state) => {
    return state.profilePage.isError;
}

export const getErrorInfoSelector = (state) => {
    return state.profilePage.errorInfo;
}


