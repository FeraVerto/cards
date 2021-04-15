import React, {ReactElement, useEffect} from 'react'
import s from "./Modal.module.css"

type ModalType = {
    visible: boolean,
    title: string,
    content: ReactElement | string,
    footer: ReactElement | string,
    onClose: () => void
}

export const Modal: React.FC<ModalType> = ({
                                               visible = false,
                                               title = '',
                                               content = '',
                                               footer = '',
                                               onClose,
                                           }) => {

    //обработчик события на клавишу Esc
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
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>{title}</h3>
                    <span className='modal-close' onClick={onClose}>
            &times;
          </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>{content}</div>
                </div>
                {footer && <div className='modal-footer'>{footer}</div>}
            </div>
        </div>
    )
}
