import React, {ChangeEvent, useState} from "react";
import s from "./LostPassword.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {postEmailTC, setResponseError} from "../../m2-bll/enter-new-password-reducer";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

export const PasswordRecovery = () => {

    const error = useSelector<AppStateType, string | null>(state => state.enterNewPassword.error)
    const [email, setEmail] = useState("")
    const redirect = useSelector<AppStateType, boolean>(state => state.enterNewPassword.redirect)
    const dispatch = useDispatch()

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(setResponseError(null))
    }

    const postEmail = () => {
        return dispatch(postEmailTC(email))
    }


    return <div>
        {redirect ? <h3 className={s.message}>We have sent you a message with a link to change your password to this address:{email}</h3> :
            <div className={s.main}>
                <h1>Enter your email or phone number</h1>
                <h3>Please enter the email or phone number you used to login</h3>
                <Input onChange={onInputChange} placeholder={"Enter Email"}/>
                {error ? <div className={s.error}>{error}</div> : null}
                <Button onClick={postEmail}>Next</Button>
            </div>
        }
    </div>
}