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
            onClose()
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