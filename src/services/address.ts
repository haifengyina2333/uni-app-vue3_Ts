import { AddressParams, AddressItem } from '@/types/address.d'
import { http } from '@/utils/http'
// 添加收货地址
export const postAddAddressAPI = (params: AddressParams) => {
    return http({
        url: '/member/address',
        method: 'POST',
        data: params,
    })
}

export const getAddressAPI = () => {
    return http<AddressItem[]>({
        url: '/member/address',
        method: 'GET',
    })
}
export const getAddressByIdAPI = (id: string) => {
    return http<AddressItem[]>({
        url: `/member/address/${id}`,
        method: 'GET',
    })
}

export const putAddressByIdAPI = (id: string, params: AddressParams) => {
    return http<AddressItem[]>({
        url: `/member/address/${id}`,
        method: 'PUT',
        data: params,
    })
}
export const delAddressByIdAPI = (id: string) => {
    return http({
        url: `/member/address/${id}`,
        method: 'DELETE',
    })
}
