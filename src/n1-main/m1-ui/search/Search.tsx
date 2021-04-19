import {useFormik} from "formik";
import React from "react";
import {useDispatch} from "react-redux";
import s from './login.module.css'
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            requestText: ''
        },
        onSubmit: values => {
            console.log(values.requestText)
            //dispatch(startSearching(values.requestText))
        },
    });

    return <div>

        <form className={s.form} onSubmit={formik.handleSubmit}>

            <div className={s.form_item}>
                <label htmlFor="search">Search</label>
                <Input type="text"
                       {...formik.getFieldProps('requestText')}
                />
            </div>

            <Button className={s.button} type="submit" disabled={false}>Submit</Button>

        </form>
    </div>
}

export default Login

{/*{errorMessage  !== null && <div className={s.error}>{errorMessage}</div>}*/
}
