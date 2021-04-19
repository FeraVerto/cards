export type LoginPostType = {
    password: string
    email: string
    rememberMe: boolean
}
export type LoginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

export type LogoutResponseType = {
    info: `logOut success —ฅ/ᐠ.̫ .ᐟ\ฅ—`;

    error: string;
}

export type cardType = {
    _id: string
    user_id: string
    name: string
    path: "/def" // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}

export type cardPacksType = cardType[]

export type PacksResponseType = {
    cardPacks: cardPacksType
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number// количество элементов на странице
}

export type PackResponseType = {
    newCardsPack: cardType
    token: string
    tokenDeathTime: number
}

export type updatedCardsPackType = {
    cardsCount: number
    created: string
    deckCover: null | ""
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

export type updatedCardsPackResponseType = {
    token: string
    tokenDeathTime: number
    updatedCardsPack: updatedCardsPackType
}

export type cardItemType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

export type cardsType = Array<cardItemType>

export type cardsResponseType = {
    cards: cardsType
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
