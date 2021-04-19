import {useFormik} from 'formik'
import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, updatePackTC} from "../../../m2-bll/packs-reducer";
import {AppStateType} from "../../../m2-bll/store";
import {cardPacksType} from "../../common/types/types";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

type UpdatePacksModal = {
    onClose: () => void
    name: string
    cardsCount: number
    id: string
}

export const UpdatePacksModal: React.FC<UpdatePacksModal> = ({onClose, name, cardsCount, id}) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            _id: id,
            name: name,
            cardsCount: cardsCount
        },

        onSubmit: (values) => {
            dispatch(updatePackTC(values._id, values.name, values.cardsCount))
            onClose()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input type="text"
                   placeholder="Enter pack's name"
                   {...formik.getFieldProps('name')}/>

            <Input type="number"
                   placeholder="Enter cards count"
                   {...formik.getFieldProps('cardsCount')}/>

            <Button type='submit'>update</Button>
        </form>
    )
}