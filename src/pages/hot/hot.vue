<template>
    <view class="viewport">
        <!-- 推荐封面图 -->
        <view class="cover">
            <image :src="bannerPicture"> </image>
        </view>
        <!-- 推荐选项 -->
        <view class="tabs">
            <text
                class="text"
                :class="{ active: index === activeIndex }"
                v-for="(item, index) in subTypes"
                :key="item.id"
                @tap="activeIndex = index"
                >{{ item.title }}</text
            >
        </view>

        <!-- 推荐列表 -->
        <scroll-view
            class="scroll-view"
            v-for="(item, index) in subTypes"
            :key="item.id"
            v-show="activeIndex === index"
            @scrolltolower="onScrolltolower"
            scroll-y
        >
            <view class="goods">
                <navigator
                    hover-class="none"
                    class="navigator"
                    v-for="goods in item.goodsItems.items"
                    :key="goods.id"
                    :url="`/pages/goods/goods?id=${goods.id}`"
                >
                    <image class="thumb" :src="goods.picture"></image>
                    <view class="name ellipsis">{{ goods.name }}</view>
                    <view class="price">
                        <text class="symbol">¥</text>
                        <text class="number">{{ goods.price }}</text>
                    </view>
                </navigator>
            </view>
            <view class="loading-text">正在加载...</view>
        </scroll-view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getHomeRecommendAPI } from '@/services/hot'
import { onLoad } from '@dcloudio/uni-app'
import { SubTypeItem } from '@/types/hot.d'
const hotMap = [
    { type: '1', title: '特惠推荐', url: '/hot/preference' },
    { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
    { type: '3', title: '一站买全', url: '/hot/oneStop' },
    { type: '4', title: '新鲜好物', url: '/hot/new' },
]
// uniapp获取页面参数
const query = defineProps<{
    type: string
}>()

const currUrlMap = hotMap.find((x) => x.type === query.type)
uni.setNavigationBarTitle({
    title: currUrlMap!.title,
})
const bannerPicture = ref('')
const subTypes = ref<SubTypeItem[]>([])
const getHotData = async () => {
    const res = await getHomeRecommendAPI(currUrlMap!.url)
    bannerPicture.value = res.result.bannerPicture
    subTypes.value = res.result.subTypes
}
const activeIndex = ref(0)

const onScrolltolower = async () => {
    const currsubType = subTypes.value[activeIndex.value]
    currsubType.goodsItems.page++
    const res = await getHomeRecommendAPI(currUrlMap!.url, {
        subType: currsubType.id,
        page: currsubType.goodsItems.page,
        pageSize: currsubType.goodsItems.pageSize,
    })
    const newData = res.result.subTypes[activeIndex.value]
    currsubType.goodsItems.items.push(...newData.goodsItems.items)
}

// 页面周期函数--监听页面加载
onLoad(() => {
    getHotData()
})

// 页面周期函数--监听页面初次渲染完成
// onReady()
// 页面周期函数--监听页面显示(not-nvue)
// onShow()
// 页面周期函数--监听页面隐藏
// onHide()
// 页面周期函数--监听页面卸载
// onUnload()
// 页面处理函数--监听用户下拉动作
// onPullDownRefresh() { uni.stopPullDownRefresh(); },
// 页面处理函数--监听用户上拉触底
// onReachBottom() {},
// 页面处理函数--监听页面滚动(not-nvue)
// onPageScroll(event) {},
// 页面处理函数--用户点击右上角分享
// onShareAppMessage(options) {},
</script>

<style lang="scss">
page {
    height: 100%;
    background-color: #f4f4f4;
}

.viewport {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 180rpx 0 0;
    position: relative;
}

.cover {
    width: 750rpx;
    height: 225rpx;
    border-radius: 0 0 40rpx 40rpx;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
}

.tabs {
    display: flex;
    justify-content: space-evenly;
    height: 100rpx;
    line-height: 90rpx;
    margin: 0 20rpx;
    font-size: 28rpx;
    border-radius: 10rpx;
    box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
    color: #333;
    background-color: #fff;
    position: relative;
    z-index: 9;

    .text {
        margin: 0 20rpx;
        position: relative;
    }

    .active {
        &::after {
            content: '';
            width: 40rpx;
            height: 4rpx;
            transform: translate(-50%);
            background-color: #27ba9b;
            position: absolute;
            left: 50%;
            bottom: 24rpx;
        }
    }
}

.scroll-view {
    flex: 1;
}

.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0rpx 20rpx 20rpx;

    .navigator {
        width: 345rpx;
        padding: 20rpx;
        margin-top: 20rpx;
        border-radius: 10rpx;
        background-color: #fff;
    }

    .thumb {
        width: 305rpx;
        height: 305rpx;
    }

    .name {
        height: 88rpx;
        font-size: 26rpx;
    }

    .price {
        line-height: 1;
        color: #cf4444;
        font-size: 30rpx;
    }

    .symbol {
        font-size: 70%;
    }

    .decimal {
        font-size: 70%;
    }
}

.loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0 50rpx;
}
</style>
