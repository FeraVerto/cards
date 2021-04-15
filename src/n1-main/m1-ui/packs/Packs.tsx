import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../m2-bll/store"
import {useEffect} from "react"
import {getPacks} from "../../m2-bll/packs-reducer"
import {Table} from "../table/Table"
import {cardPacksType} from "../common/types/types";
import s from "./Packs.module.css"

export const Packs = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacks())
    }, [])

    const data = useSelector<AppStateType, cardPacksType>(state => state.packs.cardPacks)

    return (
        <div className={s.packs}>
            <Table items={data}/>
        </div>
    )
}
