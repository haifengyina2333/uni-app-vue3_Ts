import { RainGuessInstance } from '@/components/components.d'
import { ref } from 'vue'

export default () => {
    const guessRef = ref<RainGuessInstance>()
    const onScrolltolower = () => {
        guessRef.value?.getMore()
    }
    return {
        guessRef,
        onScrolltolower,
    }
}
