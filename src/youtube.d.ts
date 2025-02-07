declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: {
            Player: new (
                iframe: Element,
                options: {
                    events?: {
                        onStateChange?: (event: { data: number }) => void;
                    };
                }
            ) => {
                pauseVideo: () => void;
                playVideo: () => void;
            };
        };
    }
}

export {}; 