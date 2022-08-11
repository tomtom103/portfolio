import createCache from "@emotion/cache";

const isBrowser = typeof window !== "undefined";

export default function createEmotionCache() {
    let insertionPoint;

    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = (emotionInsertionPoint ?? undefined) as HTMLElement;
    }

    return createCache({ key: 'mui-style', insertionPoint });
}