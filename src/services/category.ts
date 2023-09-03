import { http } from '@/utils/http'
import { CategoryTopItem, CategoryChildItem } from '@/types/category.d'
export const getCategoryTopAPI = () => {
    return http<CategoryTopItem[]>({
        url: '/category/top',
        method: 'GET',
    })
}
