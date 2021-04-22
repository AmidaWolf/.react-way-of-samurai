const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOW_IN_PROGRESS = 'SET_FOLLOW_IN_PROGRESS';


let initialState = {
    users: [],
    page: 0,
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
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unFollow = (userId) => {
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
