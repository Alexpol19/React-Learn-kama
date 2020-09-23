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
    login(data){
        return instance.post('auth/login', {...data}).then((res) => {
            console.log(res)
            return res.data
        });
    },
    logout(){
        return instance.delete('auth/login').then((res) => {

            return res.data
        });
    },
    captcha(){
        return instance.get('security/get-captcha-url').then((res) => {
            return res.data.url
        })
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
            console.log(res)
            return res.data.resultCode
        })
    },
    savePhoto(photo){
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            return res.data
        })
    },
    saveDetails(details){
        return instance.put(`profile`, {...details}).then((res) => {
            return res.data
        })
    },
}