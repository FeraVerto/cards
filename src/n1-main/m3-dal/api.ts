import axios from "axios";

let instance = axios.create(
    {
        baseURL: "http://localhost:7542/2.0/",
        withCredentials: true,
    }
)

type ErrorType = {
    email: string
    error: string
    in: string
}

export const api = {
    registration(email: string, password: string) {
        return instance.post<any | ErrorType>('/auth/register', {email, password})
    }
}