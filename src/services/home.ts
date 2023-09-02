import { BannerItem } from '@/types/home.d.ts'
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
