<script setup lang="ts">
import { ref } from 'vue'
import { postAddAddressAPI, getAddressByIdAPI, putAddressByIdAPI } from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'
const rules = {
    receiver: {
        rules: [{ required: true, errorMessage: '请你输入收货人姓名' }],
    },
    contact: {
        rules: [
            { required: true, errorMessage: '请你输入联系方式' },
            { pattern: /^1[3-9]\d{9}$/, errorMessage: '请你输入正确的手机号' },
        ],
    },
    fullLocation: {
        reles: [{ required: true, errorMessage: '请你选择地区' }],
    },
    address: {
        reles: [{ required: true, errorMessage: '请你输入详细地址' }],
    },
}
const formref = ref()
const props = defineProps<{
    id?: string
}>()
// 根据url显示不同的标题
uni.setNavigationBarTitle({
    title: props.id ? '修改地址' : '新建地址',
})
const getAddressByIdData = async () => {
    if (props.id) {
        const res = await getAddressByIdAPI(props.id)
        console.log(res)
        Object.assign(form.value, res.result)
        console.log(form.value)
    }
}
onLoad(() => {
    getAddressByIdData()
})
// 表单数据
const form = ref({
    receiver: '', // 收货人
    contact: '', // 联系方式
    fullLocation: '', // 省市区(前端展示)
    provinceCode: '', // 省份编码(后端参数)
    cityCode: '', // 城市编码(后端参数)
    countyCode: '', // 区/县编码(后端参数)
    address: '', // 详细地址
    isDefault: 0, // 默认地址，1为是，0为否
})
const onPickerChange = (e) => {
    form.value.fullLocation = e.detail.value.join(' ')
    const [provinceCode, cityCode, countyCode] = e.detail.code!
    // 数据合并的方法
    Object.assign(form.value, {
        provinceCode,
        cityCode,
        countyCode,
    })
}

const onSwitchChange = (e) => {
    form.value.isDefault = e.detail.value ? 1 : 0
}

const onSave = async () => {
    try {
        formref.value.validate?.()

        if (!props.id) {
            const res = await postAddAddressAPI(form.value)
            console.log(res)
        } else {
            const res = await putAddressByIdAPI(props.id, form.value)
            console.log(res)
        }
        uni.showToast({
            title: props.id ? '修改成功' : '添加成功',
            icon: 'success',
        })
        setTimeout(() => {
            uni.navigateBack()
        }, 600)
    } catch (err) {
        uni.showToast({
            icon: 'error',
            title: '请你填写完整信息',
        })
    }
}
</script>

<template>
    <view class="content">
        <uni-forms :rules="rules" :modelValue="form" ref="formref">
            <!-- 表单内容 -->
            <uni-forms-item name="receiver" class="form-item">
                <text class="label">收货人</text>
                <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
            </uni-forms-item>
            <uni-forms-item name="contact" class="form-item">
                <text class="label">手机号码</text>
                <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
            </uni-forms-item>
            <uni-forms-item name="fullLocation" class="form-item">
                <text class="label">所在地区</text>
                <picker
                    class="picker"
                    mode="region"
                    :value="form.fullLocation.split(' ')"
                    @change="onPickerChange"
                >
                    <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
                    <view v-else class="placeholder">请选择省/市/区(县)</view>
                </picker>
            </uni-forms-item>
            <uni-forms-item name="address" class="form-item">
                <text class="label">详细地址</text>
                <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
            </uni-forms-item>
            <view class="form-item">
                <label class="label">设为默认地址</label>
                <switch class="switch" color="#27ba9b" :checked="false" @change="onSwitchChange" />
            </view>
        </uni-forms>
    </view>
    <!-- 提交按钮 -->
    <button class="button" @tap="onSave">保存并使用</button>
</template>

<style lang="scss">
page {
    background-color: #f4f4f4;
}

.content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;

    .form-item,
    .uni-forms-item {
        display: flex;
        align-items: center;
        min-height: 96rpx;
        padding: 25rpx 10rpx 40rpx;
        background-color: #fff;
        font-size: 28rpx;
        border-bottom: 1rpx solid #ddd;
        position: relative;
        margin-bottom: 0;

        // 调整 uni-forms 样式
        .uni-forms-item__content {
            display: flex;
        }

        .uni-forms-item__error {
            margin-left: 200rpx;
        }

        &:last-child {
            border: none;
        }

        .label {
            width: 200rpx;
            color: #333;
        }

        .input {
            flex: 1;
            display: block;
            height: 46rpx;
        }

        .switch {
            position: absolute;
            right: -20rpx;
            transform: scale(0.8);
        }

        .picker {
            flex: 1;
        }

        .placeholder {
            color: #808080;
        }
    }
}

.button {
    height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
}
</style>
