import {useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {cardPacksType, PacksResponseType} from "../common/types/types";
import React, {useMemo, useState} from 'react'

let title = ["name", "cardsCount", "updated"]

type Table2Props = {
    items: cardPacksType
}


export const Table2: React.FC<Table2Props> = (props) => {

    const useSortableData = (items: cardPacksType, config = null) => {

        const [sortConfig, setSortConfig] = useState<{
            key: string
            direction: string
        } | null>(config);

        const sortedItems = useMemo(() => {
            let sortableItems = [...items];
            console.log("sortableItems ", items)
            if (sortConfig !== null) {
                sortableItems.sort((a: any, b: any) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            return sortableItems;
        }, [items, sortConfig]);

        const requestSort = (key: string) => {
            let direction = 'ascending';
            if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending';
            }
            setSortConfig({key, direction});
        }

        return {items: sortedItems, requestSort, sortConfig};
    }

    const {items, requestSort, sortConfig} = useSortableData(props.items);
    const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <table>
            <caption>Packs</caption>
            <thead>
            <tr>
                <th>
                    <button type="button" onClick={() => requestSort('name')} className={getClassNamesFor('name')}>
                        name
                    </button>
                </th>
                <th>
                    <button type="button" onClick={() => requestSort('cardsCount')}
                            className={getClassNamesFor('cardsCount')}>
                        cardsCount
                    </button>
                </th>
                <th>
                    <button type="button" onClick={() => requestSort('updated')}
                            className={getClassNamesFor('updated')}>
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