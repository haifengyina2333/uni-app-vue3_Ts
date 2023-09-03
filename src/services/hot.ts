import { PageParams } from '@/types/global.d'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType?: string }
export const getHomeRecommendAPI = (url: string, data?: HotParams) => {
    return http({
        method: 'GET',
        url,
        data,
    })
}
