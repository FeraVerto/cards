import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../m2-bll/store"
import {useEffect} from "react"
import {deletePackTC, getPacksTC} from "../../m2-bll/packs-reducer"
import {Table} from "../table/Table"
import {cardPacksType} from "../common/types/types";
import s from "./Packs.module.css"
import {useSortableData} from "../common/hooks/useSortableData";
import {AddPacksModal} from "./addPacksModal/AddPacksModal";
import {Modal} from "../common/Modal/Modal";
import Button from "../common/Button/Button";

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

    //хук для сортировки items
    const {items, requestSort} = useSortableData(data);

    let onCloseAdd = () => setModalAdd(false)
    const [isModalAdd, setModalAdd] = useState(false)

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
            <div className={s.button_group}>
                <Button className={s.button} onClick={() => setModalAdd(true)}>
                    add
                </Button>
            </div>

            <Modal visible={isModalAdd}
                   title={'add packs'}
                   content={<AddPacksModal onClose={onCloseAdd}/>}
                   onClose={onCloseAdd}
            />
        </div>
    )
}
