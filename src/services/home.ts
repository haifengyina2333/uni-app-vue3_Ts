import { BannerItem, CatrgoryPanelItem } from '@/types/home.d.ts'
import { http } from '@/utils/http'
// 首页广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}
// 分类数据
export const getHomeCategoryAPI = () => {
    return http<CatrgoryPanelItem[]>({
        method: 'GET',
        url: '/home/category/mutli',
    })
}
