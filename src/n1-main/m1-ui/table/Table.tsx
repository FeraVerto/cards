import React, {useState} from 'react'
import {useSortableData} from "../hooks/useSortableData";
import {cardPacksType} from "../common/types/types";
import {Modal} from "../common/Modal/Modal";
import {AddPacksModal} from "../packs/addPacksModal/AddPacksModal";
import s from "./Table.module.css"
import Button from "../common/Button/Button";


type TableProps = {
    items: cardPacksType
}


export const Table: React.FC<TableProps> = (props) => {
    //хук для сортировки items
    const {items, requestSort} = useSortableData(props.items);
    //открыть-закрыть модальное окно для добавления колоды
    const [isModal, setModal] = useState(false)

    let onClose = () => setModal(false)

    return (
        <div>
            <table className={s.table}>

                <caption className={s.table_caption}>
                    Packs
                </caption>

                <thead className={s.table_thead}>
                <tr className={s.table_title_row}>
                    <th className={s.table_title}>
                        <div onClick={() => requestSort('name')}>
                            Name
                        </div>
                    </th>
                    <th className={s.table_title}>
                        <div onClick={() => requestSort('cardsCount')}>
                            CardsCount
                        </div>
                    </th>
                    <th className={s.table_title}>
                        <div onClick={() => requestSort('updated')}>
                            Updated
                        </div>
                    </th>
                    <th className={s.table_title}>Blablabla
                    </th>
                </tr>
                </thead>

                <tbody>
                {
                    items.map(i => {
                        return (
                            <tr className={s.table_item}>
                                <td>{i.name}</td>
                                <td>{i.cardsCount}</td>
                                <td>{i.updated}</td>
                                <td>
                                    <button>delete</button>
                                    <button>update</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <Button className={s.button} onClick={() => setModal(true)}>
                add
            </Button>

            <Modal visible={isModal}
                   title={'add pack'}
                   content={<AddPacksModal onClose={onClose}/>}
                   footer={<button onClick={onClose}>close</button>}
                   onClose={onClose}
            />
        </div>
    )
}