// 首页轮播图的类型结果
export type BannerItem = {
    id: String
    imgUrl: String
    hrefUrl: String
    type: Number
}

export type CatrgoryPanelItem = {
    icon: String
    id: Number
    name: String
}

export type HotPanelItem = {
    alt: String
    id: Number
    pictures: String[]
    target: Number
    title: String
    type: Number
}
export type GuessLike = {
    desc: String
    /** 商品折扣 */
    discount: Number
    /** id */
    id: String
    /** 商品名称 */
    name: String
    /** 商品已下单数量 */
    orderNum: Number
    /** 商品图片 */
    picture: String
    /** 商品价格 */
    price: Number
}
