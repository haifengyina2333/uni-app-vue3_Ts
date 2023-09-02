import RainSwiper from './RainSwiper.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        RainSwiper: typeof RainSwiper
    }
}
