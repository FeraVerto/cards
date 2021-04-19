import {useFormik} from 'formik'
import React from 'react'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../m2-bll/packs-reducer";
import Input from "../../common/Input/Input";
import s from "./addPacksModal.module.css"
import ButtonModal from '../../common/ButtonModal/ButtonModal';

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
            <input type="text"
                   placeholder="Enter pack's name"
                   {...formik.getFieldProps('name')}/>
            <div className={s.button_modal}>
                <ButtonModal type='submit'>add</ButtonModal>
                <ButtonModal onClick={onClose}>cancel</ButtonModal>
            </div>

        </form>
    )
}