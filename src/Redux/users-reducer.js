const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    page: 0,
    pageSize: 10,
    totalUsersCount: 0
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
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
        default:
            return state;
    }
}
export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unFollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersActionCreator = (users, page) => {
    return {
        type: SET_USERS,
        users: users,
        page: page
    }
}

export const setTotalUsersCountActionCreator = (count) => {
    return {
        type: TOTAL_USERS_COUNT,
        count: count
    }
}
