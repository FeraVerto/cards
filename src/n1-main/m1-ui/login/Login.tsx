import {useFormik} from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './login.module.css'
import {AppStateType} from "../../m2-bll/store";
import {LoginStateType, loginTC} from "../../m2-bll/login-reducer";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

const Login = () => {

    const dispatch = useDispatch();
    const {
        isAuth,
        errorMessage
    } = useSelector<AppStateType, LoginStateType>(state => state.login);
    const fetch = useSelector<AppStateType, boolean>(state => state.app.isFetching);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values.password, values.email, values.rememberMe))
        },
    });

    console.log(errorMessage)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1 className={s.h1}>Login</h1>

        <form className={s.form} onSubmit={formik.handleSubmit}>
            <div className={s.form_item}>
                <label htmlFor="email">Email Address</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

            </div>

            <div className={s.form_item}>
                <label htmlFor="password">Password</label>
                <Input type={'password'} name={'password'} id={'password'}
                       value={formik.values.password}
                       onChange={formik.handleChange}/>
            </div>

            <div className={`${s.form_item} ${s.form_item_rememberMe}`}>
                <label htmlFor="rememberMe">Remember me</label>
                <input type="checkbox" name="rememberMe"
                       value="rememberMe" onChange={formik.handleChange}/>
            </div>

            <Button className={s.button} type="submit" disabled={fetch}>Submit</Button>
        </form>

        {fetch && <div className={s.loading}>Loading...</div>}
        {errorMessage && <div className={s.error}>{errorMessage}</div>}

    </div>
}

export default Login
