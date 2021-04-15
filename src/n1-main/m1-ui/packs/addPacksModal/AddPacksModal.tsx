import {useFormik} from 'formik'
import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addPack} from "../../../m2-bll/packs-reducer";

type AddPacksModal = {
    onClose: () => void
}

export const AddPacksModal: React.FC<AddPacksModal> = ({onClose}) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: ''
        },

        onSubmit: (values) => {
            dispatch(addPack(values.name))
            console.log("name pack formik",values.name)
            onClose()
            //formik.resetForm()
        },

        validate: (values) => {
            /*
            const errors: ErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;*/
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input type="text"
                   placeholder="Введите название колоды"
                   {...formik.getFieldProps('name')}/>
            <button type='submit'>add</button>
        </form>
    )
}