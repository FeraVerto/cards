import {cardPacksType} from "../common/types/types";
import React from 'react'
import {useSortableData} from "../hooks/useSortableData";

type TableProps = {
    items: cardPacksType
}


export const Table: React.FC<TableProps> = (props) => {

    const {items, requestSort} = useSortableData(props.items);
    //const {items, requestSort, sortConfig} = useSortableData(props.items);
    /*const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };*/

    return (
        <table>
            <caption>Packs</caption>
            <thead>
            <tr>
                <th>
                    <button type="button" onClick={() => requestSort('name')}>
                        name
                    </button>
                </th>
                <th>
                    <button type="button" onClick={() => requestSort('cardsCount')}>
                        cardsCount
                    </button>
                </th>
                <th>
                    <button type="button" onClick={() => requestSort('updated')}>
                        updated
                    </button>
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