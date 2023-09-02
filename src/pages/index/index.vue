<script setup lang="ts">
import { ref } from 'vue'
import RainSwiper from '@/components/RainSwiper.vue'
import CustomNavbar from '@/pages/index/components/CustomNavbar'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { BannerItem, CatrgoryPanelItem } from '@/types/home.d.ts'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CatrgoryPanelItem[]>([])
const getHomeBannerData = async () => {
    const res = await getHomeBannerAPI()
    bannerList.value = res.result
}
const getHomeCategoryData = async () => {
    const res = await getHomeCategoryAPI()
    categoryList.value = res.result
    console.log(res)
}
onLoad(() => {
    getHomeBannerData()
    getHomeCategoryData()
})
</script>

<template>
    <CustomNavbar></CustomNavbar>
    <RainSwiper :list="bannerList"></RainSwiper>
    <CategoryPanel :categoryList="categoryList"></CategoryPanel>
</template>

<style lang="scss">
page {
    background-color: #f7f7f7;
}
</style>
