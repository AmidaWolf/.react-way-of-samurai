import axios from "axios";


const instance = axios.create({
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        mode: 'no-cors',
        headers: {
            'API-KEY': 'f849b47a-7b1a-4492-91e1-80a3db415ddd'
        }
    })

export const unfollowUser = (id) => {
    return (
        instance.delete(`follow/${id}`)
            .then(response => response.data)
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
        instance.get('profile/status/' + userId)
            .then(response => response.data)
    )
}

export const updateStatus = (text) => {
    return (
        instance.put('profile/status', {status: text})
    )
}

export const loginMe = (data) => {
    return (
        instance.post('auth/login', {...data})
            .then(response => response.data)
    )
}

export const logoutMe = () => {
    return (
        instance.delete('auth/login')
            .then(response => response.data)
    )
}

export const uploadAvatar = (image) => {
    let formData = new FormData();
    formData.append('image', image)
    return (
        instance.put('profile/photo', formData)
    )
}

export const uploadProfileInfo = (profileInfo) => {
    return (
        instance.put('profile', profileInfo)
    )
}

export const getCaptcha = () => {
    return (
        instance.get('security/get-captcha-url')
    )
}

