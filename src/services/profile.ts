import { http } from '@/utils/http'
import { ProfileDetail } from '@/types/profile.d'
export const getUserInfoAPI = () => {
    return http<ProfileDetail>({
        url: '/member/profile',
        method: 'GET',
    })
}
