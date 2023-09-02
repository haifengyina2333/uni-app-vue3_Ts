<template name="skeleton">
    <view class="sk-container">
        <view is="components/RainSwiper">
            <view class="carousel RainSwiper--carousel">
                <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                    <swiper-item
                        style="
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            transform: translate(0%, 0px) translateZ(0px);
                        "
                    >
                        <navigator class="navigator RainSwiper--navigator" hover-class="none">
                            <image
                                class="image RainSwiper--image sk-image"
                                mode="aspectFill"
                            ></image>
                        </navigator>
                    </swiper-item>
                </swiper>
                <view class="indicator RainSwiper--indicator">
                    <text class="dot RainSwiper--dot active RainSwiper--active"></text>
                    <text class="dot RainSwiper--dot"></text>
                    <text class="dot RainSwiper--dot"></text>
                    <text class="dot RainSwiper--dot"></text>
                    <text class="dot RainSwiper--dot"></text>
                </view>
            </view>
        </view>
        <view is="pages/index/components/CategoryPanel">
            <view class="category CategoryPanel--category">
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-434 sk-text"
                        >居家</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-562 sk-text"
                        >锦鲤</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-811 sk-text"
                        >服饰</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-260 sk-text"
                        >母婴</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-387 sk-text"
                        >个护</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-222 sk-text"
                        >严选</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-440 sk-text"
                        >数码</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-293 sk-text"
                        >运动</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-517 sk-text"
                        >杂项</text
                    >
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text
                        class="text CategoryPanel--text sk-transparent sk-text-14-2857-448 sk-text"
                        >品牌</text
                    >
                </navigator>
            </view>
        </view>
        <view is="pages/index/components/HotPanel">
            <view class="panel HotPanel--panel hot HotPanel--hot">
                <view class="item HotPanel--item">
                    <view class="title HotPanel--title">
                        <text
                            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-64 sk-text"
                            >特惠推荐</text
                        >
                        <text
                            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-538 sk-text"
                            >精选全攻略</text
                        >
                    </view>
                    <navigator class="cards HotPanel--cards" hover-class="none">
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
                <view class="item HotPanel--item">
                    <view class="title HotPanel--title">
                        <text
                            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-294 sk-text"
                            >爆款推荐</text
                        >
                        <text
                            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-367 sk-text"
                            >最受欢迎</text
                        >
                    </view>
                    <navigator class="cards HotPanel--cards" hover-class="none">
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
                <view class="item HotPanel--item">
                    <view class="title HotPanel--title">
                        <text
                            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-802 sk-text"
                            >一站买全</text
                        >
                        <text
                            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-914 sk-text"
                            >精心优选</text
                        >
                    </view>
                    <navigator class="cards HotPanel--cards" hover-class="none">
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
                <view class="item HotPanel--item">
                    <view class="title HotPanel--title">
                        <text
                            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-950 sk-text"
                            >新鲜好物</text
                        >
                        <text
                            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-648 sk-text"
                            >生活加分项</text
                        >
                    </view>
                    <navigator class="cards HotPanel--cards" hover-class="none">
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts"></script>

<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-3-5714-205 {
    background-image: linear-gradient(
        transparent 3.5714%,
        #eeeeee 0%,
        #eeeeee 96.4286%,
        transparent 0%
    ) !important;
    background-size: 100% 28rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-51 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 39.2rpx;
    position: relative !important;
}

.sk-text-14-2857-434 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-562 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-811 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-260 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-387 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-222 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-440 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-293 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-517 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-448 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-64 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
    position: relative !important;
}

.sk-text-14-2857-538 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-294 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
    position: relative !important;
}

.sk-text-14-2857-367 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-802 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
    position: relative !important;
}

.sk-text-14-2857-914 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-950 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
    position: relative !important;
}

.sk-text-14-2857-648 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-image {
    background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #efefef !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>
