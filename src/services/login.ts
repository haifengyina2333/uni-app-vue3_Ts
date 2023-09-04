import { http } from '@/utils/http'
import { LoginResult } from '@/types/member.d'

export const postLoginWeixinAPI = (params: LoginParams) => {
    return http<LoginResult>({
        url: '/login/wxMin',
        method: 'POST',
        data: params,
    })
}
export const postLoginTestAPI = (phone: string) => {
    return http<LoginResult>({
        url: '/login/wxMin/simple',
        method: 'POST',
        data: {
            phoneNumber: phone,
        },
    })
}

type LoginParams = {
    code: string
    encryptedData: string
    iv: string
}
