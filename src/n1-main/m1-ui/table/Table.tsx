import React, {useState} from 'react'
import {useSortableData} from "../hooks/useSortableData";
import {cardPacksType} from "../common/types/types";
import {Modal} from "../common/Modal/Modal";
import {AddPacksModal} from "../packs/addPacksModal/AddPacksModal";
import s from "./Table.module.css"
import Button from "../common/Button/Button";
import {UpdatePacksModal} from "../packs/updatePacksModal/updatePacksModal";
import {useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {NavLink, Redirect} from 'react-router-dom';
import Login from "../login/Login";


type TableProps = {
    items: cardPacksType
    deletePack: (id: string) => void
    caption: string
    title: string[]
    requestSort: (key: string) => void
}


export const Table: React.FC<TableProps> = (props) => {

    //открыть-закрыть модальное окно для добавления колоды
    const [isModalAdd, setModalAdd] = useState(false)
    const [isModalUpdate, setModalUpdate] = useState(false)


    let onCloseAdd = () => setModalAdd(false)
    let onCloseUpdate = () => setModalUpdate(false)

    let onClickDelete = (id: string) => {
        props.deletePack(id)
    }

    return (

        <div>
            <table className={s.table}>

                <caption className={s.table_caption}>
                    {props.caption}
                </caption>

                <thead className={s.table_thead}>

                <tr className={s.table_title_row}>
                    {props.title.map(t => {
                        return <th className={s.table_title}>
                            <div onClick={() => props.requestSort(t)}>
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </div>
                        </th>
                    })}
                </tr>
                </thead>

                <tbody>
                {
                    props.items.map(i => {
                        return (
                           /* <tr key={i._id} className={s.table_item}>
                                <NavLink to={'/cards'}>
                                    <td>{i.name}</td>
                                </NavLink>
                                <td>{i.cardsCount}</td>
                                <td>{i.updated}</td>
                                <div className={s.table_item_button}>
                                    <Button onClick={() => onClickDelete(i._id)}>D</Button>
                                    <Button onClick={() => setModalUpdate(true)}>U</Button>

                                    <Modal visible={isModalUpdate}
                                           title={'update pack'}
                                           content={<UpdatePacksModal onClose={onCloseUpdate} id={i._id} name={i.name}
                                                                      cardsCount={i.cardsCount}/>}
                                           footer={<Button onClick={onCloseUpdate}>close</Button>}
                                           onClose={onCloseUpdate}
                                    />

                                </div>
                            </tr>*/
                            <tr key={i._id} className={s.table_item}>
                                <NavLink to={'/cards'}>
                                    <td>{i.name}</td>
                                </NavLink>
                                <td>{i.cardsCount}</td>
                                <td>{i.updated}</td>
                                <div className={s.table_item_button}>
                                    <Button onClick={() => onClickDelete(i._id)}>D</Button>
                                    <Button onClick={() => setModalUpdate(true)}>U</Button>

                                    <Modal visible={isModalUpdate}
                                           title={'update pack'}
                                           content={<UpdatePacksModal onClose={onCloseUpdate} id={i._id} name={i.name}
                                                                      cardsCount={i.cardsCount}/>}
                                           footer={<Button onClick={onCloseUpdate}>close</Button>}
                                           onClose={onCloseUpdate}
                                    />

                                </div>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className={s.button_group}>
                <Button className={s.button} onClick={() => setModalAdd(true)}>
                    add
                </Button>
            </div>

            <Modal visible={isModalAdd}
                   title={'add pack'}
                   content={<AddPacksModal onClose={onCloseUpdate}/>}
                   footer={<Button onClick={onCloseUpdate}>close</Button>}
                   onClose={onCloseAdd}
            />

        </div>
    )
}