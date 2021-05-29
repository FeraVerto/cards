import {Table} from "../table/Table";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {cardItemType, cardPacksType, cardsType} from "../common/types/types";
import s from "./Cards.module.css"
import {useSortableData} from "../common/hooks/useSortableData";
import {getCardsTC} from "../../m2-bll/cards-reducer";


export const Cards = () => {
    const dispatch = useDispatch()
    const data = useSelector<AppStateType, cardPacksType>(state => state.packs.cardPacks)

    useEffect(() => {
        dispatch(getCardsTC("608057f48637cd0c64ca062e"))
    }, [])

    let deleteCard = (id: string) => {
        //dispatch(deleteCardTC(id))
    }

    //хук для сортировки items
    const {items, requestSort} = useSortableData(data);

    /*type XXX = {
        question: string
        answer: string
        grade: string
        updated: string
        url: string
    }*/
    /*const data = [
        {question: " hi?", answer: "hi", grade: "12", updated: "11111", url: "2222222"},
        {question: " hi?", answer: "hi", grade: "12", updated: "11111", url: "2222222"},
        {question: " hi?", answer: "hi", grade: "12", updated: "11111", url: "2222222"}
    ]*/

    console.log("items", items)
    return (
        <div className={s.cards}>
            <Table title={["question", "answer", "grade", "updated", "actions"]}
                   caption={"Cards"}
                   f={(items: any) => [items.question, items.answer, items.grade, items.updated]}
/*
                   f={(items: any) => [items._id, items.question, items.answer, items.grade, items.updated]}
*/
                   items = {items}
                   deletePack={deleteCard}
                   requestSort={requestSort}/>
        </div>

    )
}
