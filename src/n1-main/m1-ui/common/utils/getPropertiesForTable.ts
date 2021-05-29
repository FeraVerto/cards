//items: obj, [...props]: Array<string> - массив ключей
//Функция вытаскивает из обьекта только нужные свойства и возвращает новый обьект
//с этими свойствами
//return {}
export const getPropertiesForTable = (items: any, [...props]: Array<string>) => {

    return items.map((i: any) => {
        let obj = {}
        for (let key in i) {
            [...props].map((m: string) => {
                //@ts-ignore
                if (key && key === m) return obj[`${m}`] = i[key] || "-----"
            })
        }
        return obj
    })

}



/*getPropertiesForTable(items)*/

//(obj: ObjType) => [obj.value1, obj.value2]