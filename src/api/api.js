import axios from "axios";


const instance = axios.create({
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            'API-KEY': '143452f7-7f67-453a-8856-3e831970545f'
        }

    })

export const unfollowUser = (id) => {
    return (
        instance.delete(`follow/${id}`
        ).then(response => response.data)
    )
}

export const followUser = (id) => {
    return (
        instance.post(`follow/${id}`)
            .then(response => response.data)
    )
}

export const getUsersApi = (page = 1) => {
    return (
        instance.get('users?page=' + page)
            .then(response => response.data)
    )
}

export const getUser = (userId) => {
    return (
        instance.get(`profile/` + userId)
            .then(response => response.data)
    )
}

export const authMe = () => {
    return (
        instance.get(`auth/me`)
            .then(response => response.data)
    )
}

export const getStatus = (userId) => {
    return (
        instance.get('/profile/status/' + userId)
            .then(response => response.data)
    )
}

export const updateStatus = (text) => {
    return (
        instance.put('/profile/status', {status: text})
    )
}
