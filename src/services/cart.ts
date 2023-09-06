import { http } from '@/utils/http'

export const postAddCartAPI = (params: { skuId: string; count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data: params,
    })
}
