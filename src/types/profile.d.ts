export type ProfileDetail = BaseProfile & {
    /** 性别 */
    gender?: Gender
    /** 生日 */
    birthday?: string
    /** 省市区 */
    fullLocation?: string
    /** 职业 */
    profession?: string
}
/** 性别 */
export type Gender = '女' | '男'

// 使用Pick在 ProfileDetail 取出四个类型
export type ProfileParams = Pick<
    ProfileDetail,
    'nickname' | 'gender' | 'birthday' | 'profession'
> & {
    provinceCode?: string
    cityCode?: string
    countyCode?: string
}
