import axios from "axios";
import {LoginResponseType, LogoutResponseType, PackResponseType, PacksResponseType} from "../m1-ui/common/types/types";

const instance = axios.create({
    //baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

/*"http://localhost:7542/2.0/"*/

type ErrorType = {
    email: string
    error: string
    in: string
}

export const loginAPI = {
    login(password: string, email: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>('auth/login', {password, email, rememberMe})
    },
    isAuth() {
        return instance.post<LoginResponseType>('auth/me', {})
    },
    logOut() {
        return instance.delete<LogoutResponseType>('auth/me', {})
    }
}

export const registrationAPI = {
    registration(email: string, password: string) {
        return instance.post<any | ErrorType>('/auth/register', {email, password})
    }
}
export const newPasswordAPI = {
    postNewPassword(password: string, resetPasswordToken: string) {
        return instance.post(`auth/set-new-password`, {password, resetPasswordToken}).then(response => response.data)
    }
}
export const lostPasswordAPI = {
    postEmail(email: string) {
        return instance.post(`auth/forgot`, {
            email,
            from: "cards-admin <themightymasha@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='https://feraverto.github.io/cards/#/enter-new-password/$token$'>link</a></div>`
        }).then(response => response.data)
    }
}

export const packsAPI = {
    getPacks() {
        return instance.get<PacksResponseType>(`/cards/pack`).then(response => response.data)
    },

    addPack(name?: string, path?: string,
            grade?: number, shots?: number,
            rating?: number, deckCover?: string, type?: string) {
        return instance.post<PackResponseType>(`/cards/pack`, {cardsPack: {name}}).then(response => response.data)
    }
}