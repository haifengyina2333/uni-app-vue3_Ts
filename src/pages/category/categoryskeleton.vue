<!--
此文件为开发者工具生成，生成时间: 2023/9/3下午7:03:39
使用方法：
在 D:\BaiduSyncdisk\CODE\work\2023_8-31_uniapp+v3+ts+pinia的电商项目\uni-app-vue3_Ts\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\BaiduSyncdisk\CODE\work\2023_8-31_uniapp+v3+ts+pinia的电商项目\uni-app-vue3_Ts\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
    <view class="sk-container">
        <view class="viewport">
            <view class="search">
                <view class="input">
                    <text
                        class="icon-search sk-transparent sk-text-14-2857-17 sk-text sk-pseudo sk-pseudo-circle"
                        >女靴</text
                    >
                </view>
            </view>
            <view class="categories">
                <scroll-view scroll-y="true" class="primary">
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-115 sk-text">居家</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-164 sk-text">美食</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-184 sk-text">服饰</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-41 sk-text">母婴</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-988 sk-text">个护</text>
                    </view>
                    <view class="item active sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-521 sk-text">严选</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-994 sk-text">数码</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-635 sk-text">运动</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-693 sk-text">杂项</text>
                    </view>
                </scroll-view>
                <scroll-view scroll-y="true" class="secondary">
                    <view is="components/RainSwiper" class="banner">
                        <view class="carousel RainSwiper--carousel">
                            <swiper circular="true" interval="3000" current="0" autoplay="false">
                                <swiper-item
                                    style="
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        transform: translate(0%, 0px) translateZ(0px);
                                    "
                                >
                                    <navigator
                                        class="navigator RainSwiper--navigator"
                                        hover-class="none"
                                    >
                                        <image
                                            class="image RainSwiper--image sk-image"
                                            mode="aspectFill"
                                        ></image>
                                    </navigator>
                                </swiper-item>
                                <swiper-item
                                    style="
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        transform: translate(100%, 0px) translateZ(0px);
                                    "
                                >
                                    <navigator
                                        class="navigator RainSwiper--navigator"
                                        hover-class="none"
                                    >
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
                    <view class="panel">
                        <view class="title">
                            <text class="name sk-transparent sk-text-26-6667-472 sk-text"
                                >滋补保健</text
                            >
                            <navigator
                                class="more sk-transparent sk-text-30-0000-826 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none"
                                >全部</navigator
                            >
                        </view>
                        <view class="section"></view>
                    </view>
                    <view class="panel">
                        <view class="title">
                            <text class="name sk-transparent sk-text-26-6667-129 sk-text"
                                >床品家纺</text
                            >
                            <navigator
                                class="more sk-transparent sk-text-30-0000-982 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none"
                                >全部</navigator
                            >
                        </view>
                        <view class="section">
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view
                                    class="name ellipsis sk-transparent sk-text-14-2857-84 sk-text"
                                    >泰国玻尿酸天然乳胶枕礼盒</view
                                >
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-812 sk-text"
                                        >205.00</text
                                    >
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view
                                    class="name ellipsis sk-transparent sk-text-14-2857-546 sk-text"
                                    >泰国进口乳胶，儿童抗菌防螨护颈乳胶枕
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-975 sk-text"
                                        >149.00</text
                                    >
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view
                                    class="name ellipsis sk-transparent sk-text-14-2857-98 sk-text"
                                    >睡着按摩颈椎泰国93%含量天然乳胶枕
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-892 sk-text"
                                        >179.00</text
                                    >
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view
                                    class="name ellipsis sk-transparent sk-text-14-2857-812 sk-text"
                                    >轻盈柔软如睡云端天然乳胶透气夏凉被
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-951 sk-text"
                                        >339.00</text
                                    >
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view
                                    class="name ellipsis sk-transparent sk-text-14-2857-928 sk-text"
                                    >奢享丝滑睡眠，儿童真丝蚕丝被</view
                                >
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-257 sk-text"
                                        >1480.00</text
                                    >
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view
                                    class="name ellipsis sk-transparent sk-text-14-2857-382 sk-text"
                                    >偏爱低枕选它泰国93%含量天然乳胶面包枕
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-327 sk-text"
                                        >139.00</text
                                    >
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                            </navigator>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { reactive, toRefs, onMounted, watch, ref, computed } from 'vue'
</script>

<style lang="scss">
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-17 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 39.2rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-115 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-164 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-184 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-41 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-988 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-521 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-994 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-635 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-14-2857-693 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
    position: relative !important;
}

.sk-text-26-6667-472 {
    background-image: linear-gradient(
        transparent 26.6667%,
        #eeeeee 0%,
        #eeeeee 73.3333%,
        transparent 0%
    ) !important;
    background-size: 100% 60rpx;
    position: relative !important;
}

.sk-text-30-0000-826 {
    background-image: linear-gradient(
        transparent 30%,
        #eeeeee 0%,
        #eeeeee 70%,
        transparent 0%
    ) !important;
    background-size: 100% 60rpx;
    position: relative !important;
}

.sk-text-26-6667-129 {
    background-image: linear-gradient(
        transparent 26.6667%,
        #eeeeee 0%,
        #eeeeee 73.3333%,
        transparent 0%
    ) !important;
    background-size: 100% 60rpx;
    position: relative !important;
}

.sk-text-30-0000-982 {
    background-image: linear-gradient(
        transparent 30%,
        #eeeeee 0%,
        #eeeeee 70%,
        transparent 0%
    ) !important;
    background-size: 100% 60rpx;
    position: relative !important;
}

.sk-text-14-2857-84 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-812 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-546 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
    position: relative !important;
}

.sk-text-14-2857-975 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-98 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
    position: relative !important;
}

.sk-text-14-2857-892 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-951 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-928 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
    position: relative !important;
}

.sk-text-14-2857-257 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
    position: relative !important;
}

.sk-text-14-2857-382 {
    background-image: linear-gradient(
        transparent 14.2857%,
        #eeeeee 0%,
        #eeeeee 85.7143%,
        transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
    position: relative !important;
}

.sk-text-14-2857-327 {
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
