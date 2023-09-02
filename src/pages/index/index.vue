<script setup lang="ts">
import { ref } from 'vue'
import RainSwiper from '@/components/RainSwiper.vue'
import CustomNavbar from '@/pages/index/components/CustomNavbar'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { BannerItem } from '@/types/home.d.ts'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
    const res = await getHomeBannerAPI()
    bannerList.value = res.result
}
onLoad(() => {
    getHomeBannerData()
})
</script>

<template>
    <CustomNavbar></CustomNavbar>
    <RainSwiper :list="bannerList"></RainSwiper>
</template>

<style lang="scss">
//
</style>
