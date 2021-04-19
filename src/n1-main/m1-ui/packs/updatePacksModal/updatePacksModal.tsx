import {useFormik} from 'formik'
import React from 'react'
import {useDispatch} from "react-redux";
import {updatePackTC} from "../../../m2-bll/packs-reducer";
import s from './updatePacksModal.module.css';
import ButtonModal from '../../common/ButtonModal/ButtonModal';

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
            <input type="text"
                   placeholder="Enter pack's name"
                   {...formik.getFieldProps('name')}/>

            <input type="number"
                   placeholder="Enter cards count"
                   {...formik.getFieldProps('cardsCount')}/>
            <div className={s.button_modal}>
                <ButtonModal type='submit'>update</ButtonModal>
                <ButtonModal onClick={onClose}>cancel</ButtonModal>
            </div>

        </form>
    )
}