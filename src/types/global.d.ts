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
