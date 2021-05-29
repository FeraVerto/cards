import axios from "axios";
import {
    cardsResponseType,
    LoginResponseType,
    LogoutResponseType,
    PackResponseType,
    PacksResponseType,
    updatedCardsPackResponseType
} from "../m1-ui/common/types/types";

const instance = axios.create({
    //baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

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
            from: "cards-admin <poterjannaja@bk.com>",
            message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='https://feraverto.github.io/cards/#/enter-new-password/$token$'>link</a></div>`
            //message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='http://localhost:3001/cards/#/enter-new-password/$token$'>link</a></div>`
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
    },

    deletePack(id: string) {
        console.log("deletePack", id)
        return instance.delete(`/cards/pack?id=${id}`)
    },

    updatePack(id: string, name?: string, cardsCount?: number) {
        return instance.put<updatedCardsPackResponseType>(`/cards/pack`, {cardsPack:{_id: id, name: name, cardsCount: cardsCount}}).then(response => response.data.updatedCardsPack)
    }
}

export const cardsAPI = {
    getCards(id: string) {
        return instance.get<cardsResponseType>(`/cards/card&cardsPack_id=${id}`).then(response => response.data)
    }/*,

    addPack(name?: string, path?: string,
            grade?: number, shots?: number,
            rating?: number, deckCover?: string, type?: string) {
        return instance.post<PackResponseType>(`/cards/card`, {cardsPack: {name}}).then(response => response.data)
    },

    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
    },

    updatePack(id: string, name?: string, cardsCount?: number) {
        return instance.put<updatedCardsPackResponseType>(`/cards/pack`, {cardsPack:{_id: id, name: name, cardsCount: cardsCount}}).then(response => response.data.updatedCardsPack)
    }*/
}

