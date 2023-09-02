import RainSwiper from './RainSwiper.vue'
import RainGuess from './RainGuess.vue'
declare module 'vue' {
    export interface GlobalComponents {
        RainSwiper: typeof RainSwiper
        RainGuess: typeof RainGuess
    }
}
export type RainGuessInstance = InstanceType<typeof RainGuess>
export type RainSwiperInstance = InstanceType<typeof RainSwiper>
