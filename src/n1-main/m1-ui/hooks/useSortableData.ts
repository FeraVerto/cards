import React, {useMemo, useState} from "react";

export const useSortableData = (items: any, config = null) => {

    //состояние объекта с ключем и направлением сортировки
    const [sortConfig, setSortConfig] = useState<{
        key: string
        direction: string
    } | null>(config);

    //производит сортировку массива объектов по переданному ключу + по направлению сортировки (больше, меньше)
    //не мутирует items
    //результат закеширован
    const sortedItems = useMemo(() => {
        console.log("useSortableData",items)
        let sortableItems = [...items];
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

    //принимает ключ по которому производится сортировка
    //усстанавливает значение ключа и направление сортировки в локальный стейт
    const requestSort = (key: string) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    }

    //возвращает отсортированный массив
    //функцию, которая принимает ключ
    //и локальный стейт
    return {items: sortedItems, requestSort, sortConfig};
}