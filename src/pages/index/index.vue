<script setup lang="ts">
import { ref } from 'vue'
import RainSwiper from '@/components/RainSwiper.vue'
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHostPanelAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { BannerItem, CatrgoryPanelItem, HotPanelItem } from '@/types/home.d'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import { RainGuessInstance } from '@/components/components.d'
import PageSkeleton from './components/PageSkeleton.vue'
const isLoading = ref(false)
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CatrgoryPanelItem[]>([])
const hotPanelList = ref<HotPanelItem[]>([])
const getHomeBannerData = async () => {
    const res = await getHomeBannerAPI()
    bannerList.value = res.result
}
const getHomeCategoryData = async () => {
    const res = await getHomeCategoryAPI()
    categoryList.value = res.result
}
const getHomeHostPanelData = async () => {
    const res = await getHomeHostPanelAPI()
    hotPanelList.value = res.result
}
const onscrolltolower = () => {
    console.log('触发底部')
    guessRef.value?.getMore()
}
const guessRef = ref<RainGuessInstance>()
onLoad(async () => {
    isLoading.value = true
    await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHostPanelData()])
    isLoading.value = false
})
const isTriggered = ref(false)

const onrefresherrefresh = async () => {
    // 开始动画
    isTriggered.value = true
    console.log('下拉刷新触发')
    // 重置数据
    guessRef.value.resetPageParams()

    await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHostPanelData()])
    isTriggered.value = false
}
</script>

<template>
    <CustomNavbar></CustomNavbar>
    <scroll-view
        scroll-y
        class="scroll-view"
        @scrolltolower="onscrolltolower"
        refresher-enabled
        @refresherrefresh="onrefresherrefresh"
        :refresher-triggered="isTriggered"
    >
        <PageSkeleton v-if="isLoading"></PageSkeleton>
        <template v-else>
            <RainSwiper :list="bannerList"></RainSwiper>
            <CategoryPanel :categoryList="categoryList"></CategoryPanel>
            <HotPanel :list="hotPanelList"></HotPanel>
            <RainGuess ref="guessRef"></RainGuess>
        </template>
    </scroll-view>
</template>

<style lang="scss">
page {
    background-color: #f7f7f7;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.scroll-view {
    flex: 1;
}
</style>
