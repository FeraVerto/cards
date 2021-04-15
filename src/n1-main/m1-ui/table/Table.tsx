import React, {useState} from 'react'
import {useSortableData} from "../hooks/useSortableData";
import {cardPacksType} from "../common/types/types";
import {useDispatch} from "react-redux";
import {Modal} from "../cards/addPackModal/Modal";

type TableProps = {
    items: cardPacksType
}


export const Table: React.FC<TableProps> = (props) => {

    const {items, requestSort} = useSortableData(props.items);
    const dispatch = useDispatch()
    //const {items, requestSort, sortConfig} = useSortableData(props.items);
    /*const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };*/

    const [isModal, setModal] = useState(false)

    let onClose = () => setModal(false)

    return (
        <table>
            <caption>Packs</caption>
            <thead>
            <tr>
                <th>
                    <div onClick={() => requestSort('name')}>
                        name
                    </div>
                </th>
                <th>
                    <div onClick={() => requestSort('cardsCount')}>
                        cardsCount
                    </div>
                </th>
                <th>
                    <div onClick={() => requestSort('updated')}>
                        updated
                    </div>
                </th>
                <th>
                    <button onClick={() => setModal(true)}>
                        Add
                    </button>

                    <Modal visible={isModal}
                           title={'add pack'}
                           content={<div>content</div>}
                           footer={<button onClick={onClose}>close</button>}
                           onClose={onClose}
                    />

                </th>
            </tr>
            </thead>

            <tbody>
            {
                items.map(i => {
                    return (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.cardsCount}</td>
                            <td>{i.updated}</td>
                        </tr>
                    )
                })
            }
            </tbody>


        </table>
    )
}