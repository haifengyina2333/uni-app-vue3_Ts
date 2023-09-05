import { http } from '@/utils/http'
import { ProfileDetail, ProfileParams } from '@/types/profile.d'
export const getUserInfoAPI = () => {
    return http<ProfileDetail>({
        url: '/member/profile',
        method: 'GET',
    })
}

export const putUserInfoAPI = (params: ProfileParams) => {
    return http<ProfileDetail>({
        url: '/member/profile',
        method: 'PUT',
        data: params,
    })
}
