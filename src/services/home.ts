import { PageRusult, PageParams } from '@/types/global.d'
import { BannerItem, CatrgoryPanelItem, HotPanelItem, GuessLike } from '@/types/home.d'
import { http } from '@/utils/http'
// 首页区域
// 广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}
// 十个分类
export const getHomeCategoryAPI = () => {
    return http<CatrgoryPanelItem[]>({
        method: 'GET',
        url: '/home/category/mutli',
    })
}
//热门推荐
export const getHomeHostPanelAPI = () => {
    return http<HotPanelItem[]>({
        method: 'GET',
        url: '/home/hot/mutli',
    })
}
// 猜你喜欢
export const getGuessLikeAPI = (data?: PageParams) => {
    return http<PageRusult<GuessLike>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data,
    })
}
