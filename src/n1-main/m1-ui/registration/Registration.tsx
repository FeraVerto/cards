import {useFormik} from "formik";
import React from "react";
import {registration} from "../../m2-bll/registration-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {Redirect} from "react-router-dom";

export const Registration = () => {

    const dispatch = useDispatch()
    const error = useSelector<AppStateType, string>(state => state.registration.error)
    const redirect = useSelector<AppStateType, boolean>(state => state.registration.redirect)
    const isLoading = useSelector<AppStateType, boolean>(state => state.registration.isLoading)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(registration(values.email, values.password))
            //formik.resetForm()
            //console.log(JSON.stringify(values));
        }
    })

    if (redirect) {
        return <Redirect to={'login'}/>
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type="text"
                       {...formik.getFieldProps('email')}
                       /*name="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}*/
                />
                <input type="password"
                       {...formik.getFieldProps('password')}
                       /*name="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}*/
                />
                <button type='submit'>Зарегистрироваться</button>
            </form>

            {error && <div>{error}</div>}
            {isLoading && <div>LOADING</div>}

        </div>

    )
}