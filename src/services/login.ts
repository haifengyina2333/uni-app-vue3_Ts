import { http } from '@/utils/http'
import { LoginResult } from '@/types/member.d'
// 登录请求 需要企业的资格 无法使用
export const postLoginWeixinAPI = (params: LoginParams) => {
    return http<LoginResult>({
        url: '/login/wxMin',
        method: 'POST',
        data: params,
    })
}
// 登录请求 测试使用
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
