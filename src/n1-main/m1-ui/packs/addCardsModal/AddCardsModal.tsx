import {useFormik} from 'formik'
import React from 'react'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../m2-bll/packs-reducer";
import s from "./addCardsModal.module.css"
import ButtonModal from '../../common/ButtonModal/ButtonModal';
import {addCardTC} from "../../../m2-bll/cards-reducer";

type AddCardsModal = {
    onClose: () => void
}

export const AddCardsModal: React.FC<AddCardsModal> = ({onClose}) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: ''
        },

        onSubmit: (values) => {
            /*dispatch(addCardTC(values.name))*/
            onClose()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input type="text"
                   placeholder="Enter card's name"
                   {...formik.getFieldProps('name')}/>
            <div className={s.button_modal}>
                <ButtonModal type='submit'>add</ButtonModal>
                <ButtonModal onClick={onClose}>cancel</ButtonModal>
            </div>

        </form>
    )
}