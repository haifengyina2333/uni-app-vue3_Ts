import { http } from '@/utils/http'
import { GoodsResult } from '@/types/goods.d'

export const getGoodsByIdAPI = (id: string) => {
    return http<GoodsResult>({
        method: 'GET',
        url: '/goods',
        data: {
            id,
        },
    })
}
