import { PageParams } from '@/types/global.d'
import { HotResult } from '@/types/hot.d'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType?: string }
export const getHomeRecommendAPI = (url: string, data?: HotParams) => {
    return http<HotResult>({
        method: 'GET',
        url,
        data,
    })
}
