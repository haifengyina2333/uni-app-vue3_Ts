export type PageRusult<T> = {
    items: T[]
    counts: Number
    /** 当前页数 */
    page: Number
    /** 总页数 */
    pages: Number
    /** 每页条数 */
    pageSize: Number
}
export type PageParams = {
    /** 页码：默认值为 1 */
    page?: Number
    /** 页大小：默认值为 10 */
    pageSize?: Number
}
