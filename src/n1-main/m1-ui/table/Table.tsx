import React, {useState} from 'react'
import {cardItemType, cardPacksType, cardsType} from "../common/types/types";
import {Modal} from "../common/Modal/Modal";
import {AddPacksModal} from "../packs/addPacksModal/AddPacksModal";
import s from "./Table.module.css"
import Button from "../common/Button/Button";
import {UpdatePacksModal} from "../packs/updatePacksModal/updatePacksModal";
import {NavLink} from 'react-router-dom';
import {log} from "util";


type TableProps<X = {}> = {
    items: any
    deletePack: (id: string) => void
    f: (items: any) => Array<string>
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
                        props.items.map((k: any, i: number) => {
                            console.log("k", k)
                            let values: Array<string> = props.f(k)

                            return <tr key={i} className={s.table_item}>

                                {
                                    values.map((p: any) => {
                                        return <>
                                            <td>
                                                {p}

                                                <div className={s.table_item_button}>

                                                    <Modal visible={isModalUpdate}
                                                           title={'update pack'}
                                                           content={<UpdatePacksModal onClose={onCloseUpdate} id={""}
                                                                                      name={"p.name"}
                                                                                      cardsCount={4}/>}
                                                           onClose={onCloseUpdate}
                                                    />

                                                </div>
                                            </td>

                                        </>
                                    })
                                }
                                <div className={s.table_button}>
                                    <Button onClick={() => onClickDelete(k._id)}>D</Button>
                                    <Button onClick={() => setModalUpdate(true)}>U</Button>
                                </div>
                            </tr>
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
                   content={<AddPacksModal onClose={onCloseAdd}/>}
                   onClose={onCloseAdd}
            />

        </div>
    )
}