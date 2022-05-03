import axios from 'axios'


const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authAPI = {

    login(data:LoginParamsType) {
        return instance.post<UserDataType>('auth/login', data)
    },
    logout() {
        return instance.delete('auth/me')
    },
}


export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe?: boolean
}

type UserDataType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
}