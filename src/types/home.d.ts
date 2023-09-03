// 首页轮播图的类型结果
export type BannerItem = {
    id: string
    imgUrl: string
    hrefUrl: string
    type: number
}

export type CatrgoryPanelItem = {
    icon: string
    id: number
    name: string
}

export type HotPanelItem = {
    alt: string
    id: number
    pictures: string[]
    target: number
    title: string
    type: number
}
export type GuessLike = GoodsItem
