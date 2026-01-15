import { type DotLottieCommonPlayer } from '@lottiefiles/dotlottie-web';
import lottie, { type AnimationConfig } from 'lottie-web';

export const useLottie = () => {
    const initLottie = (
        container: HTMLElement,
        options: Omit<AnimationConfig, 'container'>
    ): DotLottieCommonPlayer => {
        return lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            ...options,
        });
    };

    return {
        initLottie,
    };
};
