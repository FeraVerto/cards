import {useFormik} from 'formik'
import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../m2-bll/packs-reducer";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

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
            dispatch(addPackTC(values.name))
            onClose()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input type="text"
                   placeholder="Введите название колоды"
                   {...formik.getFieldProps('name')}/>
            <Button type='submit'>add</Button>
        </form>
    )
}