export type PageRusult<T> = {
    items: T[]
    counts: number
    /** 当前页数 */
    page: number
    /** 总页数 */
    pages: number
    /** 每页条数 */
    pageSize: number
}
export type PageParams = {
    /** 页码：默认值为 1 */
    page?: number
    /** 页大小：默认值为 10 */
    pageSize?: number
}
export type GoodsItem = {
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
