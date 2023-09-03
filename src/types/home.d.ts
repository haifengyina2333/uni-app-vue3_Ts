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
export type GuessLike = {
    desc: string
    /** 商品折扣 */
    discount: number
    /** id */
    id: string
    /** 商品名称 */
    name: string
    /** 商品已下单数量 */
    orderNum: number
    /** 商品图片 */
    picture: string
    /** 商品价格 */
    price: number
}
