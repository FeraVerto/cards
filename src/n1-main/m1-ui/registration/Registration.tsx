import {useFormik} from "formik";
import React from "react";
import {registration} from "../../m2-bll/registration-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {Redirect} from "react-router-dom";

type ErrorType = {
    email?: string
    password?: string
}

export const Registration = () => {

    const dispatch = useDispatch()
    const error = useSelector<AppStateType, string | null>(state => state.registration.error)
    const redirect = useSelector<AppStateType, boolean>(state => state.registration.isRedirecting)
    const isLoading = useSelector<AppStateType, boolean>(state => state.registration.isLoading)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: values => {
            dispatch(registration(values.email, values.password))
            //formik.resetForm()
        },

        validate: (values) => {
            const errors: ErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 5) {
                errors.password = 'Password should be more 5 symbols';
            }

            return errors;
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
                />

                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <input type="password"
                       {...formik.getFieldProps('password')}
                />

                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <button type='submit' disabled={isLoading}>Зарегистрироваться</button>
            </form>

            {error && <div>{error}</div>}
            {isLoading && <div>LOADING...</div>}
        </div>

    )
}