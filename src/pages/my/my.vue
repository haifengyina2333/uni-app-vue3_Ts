<template>
    <view class="my">
        <view>会员信息：{{ memberStore.profile }}</view>
        <button
            @tap="
                memberStore.setProfile({
                    nickname: '黑马先锋',
                })
            "
            size="mini"
            plain
            type="primary"
        >
            保存用户信息
        </button>
        <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">
            清理用户信息
        </button>
        <button @tap="request">发送请求</button>
    </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()
const request = async () => {
    let res = await http({
        method: 'GET',
        url: '/member/profile',
        header: {},
    })
    console.log('数据获取成功', res)
}
</script>

<style lang="scss">
//
</style>
