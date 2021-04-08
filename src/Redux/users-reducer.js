const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 0,
            photoUrl: 'https://dummyimage.com/120&text=avatar',
            fullName: {
                firstName: 'Kus',
                shortSecondName: 'K' ,
            },
            status: 'This my status',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },
            followed: false
        },
        {
            id: 1,
            photoUrl: 'https://dummyimage.com/120&text=avatar',
            fullName: {
                firstName: 'Gus',
                shortSecondName: 'K' ,
            },
            status: 'This my status',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            followed: false
        },
        {
            id: 2,
            photoUrl: 'https://dummyimage.com/120&text=avatar',
            fullName: {
                firstName: 'Srus',
                shortSecondName: 'K' ,
            },
            status: 'This my status',
            location: {
                city: 'Lublin',
                country: 'Poland'
            },
            followed: true
        },
        {
            id: 3,
            photoUrl: 'https://dummyimage.com/120&text=avatar',
            fullName: {
                firstName: 'Tus',
                shortSecondName: 'K' ,
            },
            status: 'This my status',
            location: {
                city: 'Mogilev',
                country: 'Belarus'
            },
            followed: false
        }
    ]
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
            return {...state, users: [...state.users, ...action.users] }
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

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
