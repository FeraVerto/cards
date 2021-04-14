import Table from "../table/Table";
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../m2-bll/store"
import {useEffect} from "react"
import {getPacks} from "../../m2-bll/packs-reducer"
import {Table2} from "../table/Table2"
import {cardPacksType, cardType, PacksResponseType} from "../common/types/types";

export const Packs = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacks())
    }, [])

    /*\
    ITableProps:
{
    "model": [
    {
        "title": (i) => RN,
        "render": (dataItem: any, modelIndex: number, dataIndex: number) => RN
    }
]
}
*/

    const data = useSelector<AppStateType, cardPacksType>(state => state.packs.cardPacks)
    //удалить
    console.log("Packs", data)
    //удалить
    return (
        <div>
            {/*<Table data={data} model={[]}/>*/}
            <Table2 items={data}/>
        </div>
    )
}
