import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'Content-Type': 'application/json',
        'API-KEY': '92b9295a-17be-4736-8b70-151d480ec64a'
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => {
            return res.data
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then((res) => {
            return res.data.resultCode
        })
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then((res) => {
            return res.data.resultCode
        })
    }
}

export const authAPI = {
    auth(){
        return instance.get('auth/me').then((res) => {
            return res.data
        })
    },
    login({email, password, rememberMe = false}){
        return instance.post('auth/login', {email, password, rememberMe}).then((res) => {
            return res.data
        });
    },
    logout(){
        return instance.delete('auth/login').then((res) => {

            return res.data
        });
    },
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then((res) => {
            return res.data
        })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then((res) => {
            return res.data
        })
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then((res) => {
            return res.data.resultCode
        })
    },
}