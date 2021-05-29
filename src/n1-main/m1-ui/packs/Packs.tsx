import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../m2-bll/store"
import {useEffect} from "react"
import {deletePackTC, getPacksTC} from "../../m2-bll/packs-reducer"
import {Table} from "../table/Table"
import {cardPacksType, cardType} from "../common/types/types";
import s from "./Packs.module.css"
import {useSortableData} from "../common/hooks/useSortableData";

export const Packs = () => {

    const error = useSelector<AppStateType, string | null>(state => state.packs.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [])

    let deletePack = (id: string) => {
        dispatch(deletePackTC(id))
    }

    const data = useSelector<AppStateType, cardPacksType>(state => state.packs.cardPacks)
    console.log('data',data)
    //хук для сортировки items
    const {items, requestSort} = useSortableData(data);

    return (
        <div className={s.packs}>
            {error !== null && <div>{error}</div>}
            <Table title={["name", "cardsCount", "updated", "actions"]}
                   caption={"Packs"}
                   items={items}
                   f={(items: any) => [items.name, items.cardsCount, items.updated]}
                   deletePack={deletePack}
                   requestSort={requestSort}
            />
        </div>
    )
}
