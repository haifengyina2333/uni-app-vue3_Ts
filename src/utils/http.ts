import { useMemberStore } from '@/stores/index'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor: UniApp.InterceptorOptions = {
    invoke(options: UniApp.RequestOptions) {
        // log
        console.log(options)

        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        options.timeout = 10000
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        }
        const MemberStore = useMemberStore()
        const token = MemberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
        console.log(options)
    },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            // 响应成功
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    const MemberStore = useMemberStore()
                    MemberStore.clearProfile()
                    uni.navigateTo({
                        url: '../login/login',
                    })
                    reject(res)
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求失败',
                    })
                    reject(res)
                }
            },
            // 响应失败
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误,换个网络试一试',
                })
                reject(err)
            },
        })
    })
}
interface Data<T> {
    code: string
    msg: string
    result: T
}
