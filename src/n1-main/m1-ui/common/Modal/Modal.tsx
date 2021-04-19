import React, {ReactElement, useEffect} from 'react'
import s from "./Modal.module.css"

type ModalType = {
    visible: boolean,
    title: string,
    content: ReactElement | string,
    onClose: () => void
}

export const Modal: React.FC<ModalType> = ({
                                               visible = false,
                                               title = '',
                                               content = '',
                                               onClose,
                                           }) => {

    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!visible) return null

    return (
        <div className={s.modal} onClick={onClose}>
            <div className={s.modal_dialog} onClick={e => e.stopPropagation()}>
                <fieldset>
                    <legend>{title}</legend>
                    <div className={s.modal_body}>
                        <div className={s.modal_button}>
                            <div>
                                <div className={s.modal_content}>{content}</div>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </div>
        </div>
    )
}
