import {followUser, getUsersApi, unfollowUser} from "../api/api";
import {updateObjectInArray} from "./helper-functions";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const TOTAL_USERS_COUNT = 'users/TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const SET_FOLLOW_IN_PROGRESS = 'users/SET_FOLLOW_IN_PROGRESS';


let initialState = {
    users: [],
    page: 1,
    pageSize: 10,
    totalUsersCount: 0,
    isFetching: false,
    followInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    'id',
                    {followed: true}
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    'id',
                    {followed: false}
                )
            };
        case SET_USERS:
            return {
                ...state,
                page: action.page,
                users: [...action.users]
            }
        case TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.count
            }
        case SET_IS_FETCHING:
            return{
                ...state,
                isFetching: action.status
            }
        case SET_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.status ?
                    [...state.followInProgress, action.userId] :
                    [state.followInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}
export const setFollow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const setUnfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (users, page) => {
    return {
        type: SET_USERS,
        users: users,
        page: page
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: TOTAL_USERS_COUNT,
        count: count
    }
}

export const setIsFetching = (status) => {
    return {
        type: SET_IS_FETCHING,
        status: status
    }
}

export const setFollowInProgress = (status, userId) => {
    return {
        type: SET_FOLLOW_IN_PROGRESS,
        status: status,
        userId: userId
    }
}

export const getUsers = (page) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let response = await getUsersApi(page)
        dispatch(setUsers(response.items, page));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setIsFetching(false));
    }
}

export const toggleFollowUser = (id, status) => {
    return async (dispatch) => {
        dispatch(setFollowInProgress(true, id));
        if (status) {
            let response = await unfollowUser(id)
            if (response.resultCode === 0) {
                dispatch(setUnfollow(id));
            }
            dispatch(setFollowInProgress(false, id));
        } else {
            let response = await followUser(id)
            if (response.resultCode === 0) {
                dispatch(setFollow(id))
            }
            dispatch(setFollowInProgress(false, id));
        }
    }
}
