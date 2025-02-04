declare module 'svelte-carousel' {
    import { SvelteComponentTyped } from 'svelte';

    export interface CarouselProps {
        particlesToShow?: number;
        particlesToScroll?: number;
        autoplay?: boolean;
        autoplayDuration?: number;
        arrows?: boolean;
        dots?: boolean;
        infinite?: boolean;
        duration?: number;
        pauseOnFocus?: boolean;
        currentPageIndex?: number;
    }

    export default class Carousel extends SvelteComponentTyped<CarouselProps> {}
}