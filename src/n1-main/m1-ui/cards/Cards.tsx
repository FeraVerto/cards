import Table3 from "../table/Table3";
import {Table} from "../table/Table";
import React from "react";
import {deletePackTC} from "../../m2-bll/packs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {cardPacksType} from "../common/types/types";
import s from "./Cards.module.css"
import {useSortableData} from "../hooks/useSortableData";

export const Cards = () => {
    const dispatch = useDispatch()
    const data = useSelector<AppStateType, cardPacksType>(state => state.packs.cardPacks)

    let deleteCard = (id: string) => {
        //dispatch(deleteCardTC(id))
    }

    //хук для сортировки items
    const {items, requestSort} = useSortableData(data);

    return (
        <div className={s.cards}>
            <Table title={["question", "answer", "grade", "updated", "url"]}
                   caption={"Cards"}
                   items={items}
                   deletePack={deleteCard}
                   requestSort={requestSort}/>
        </div>
    )
}