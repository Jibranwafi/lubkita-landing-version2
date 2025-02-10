<script context="module" lang="ts">
    declare const YT: any;
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    let Carousel: any;
    let topCarouselRef: any;
    let bottomCarouselRef: any;
    let topVideos: HTMLVideoElement[] = [];
    let bottomVideos: HTMLVideoElement[] = [];
    let youtubePlayers: any[] = [];
    
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;

        // Load YouTube API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Initialize YouTube API
        window.onYouTubeIframeAPIReady = () => {
            const iframes = document.querySelectorAll('.youtube-player');
            iframes.forEach((iframe, index) => {
                youtubePlayers[index] = new YT.Player(iframe, {
                    events: {
                        'onStateChange': (event: { data: number }) => {
                            // When video ends (state = 0)
                            if (event.data === 0) {
                                if (bottomCarouselRef) {
                                    bottomCarouselRef.goToNext();
                                }
                            }
                        }
                    }
                });
            });
        };
    });
 
    function handleTopCarouselChange(event: CustomEvent) {
        topVideos.forEach(video => video.pause());
        const currentVideo = topVideos[event.detail];
        if (currentVideo) {
            currentVideo.play();
        }
    }

    function handleBottomCarouselChange(event: CustomEvent) {
        // Pause all YouTube videos
        youtubePlayers.forEach(player => {
            if (player && player.pauseVideo) {
                player.pauseVideo();
            }
        });
    }
 
    function handleTopVideoEnd() {
        if (topCarouselRef) {
            topCarouselRef.goToNext();
        }
    }

    function handleBottomVideoEnd() {
        if (bottomCarouselRef) {
            bottomCarouselRef.goToNext();
        }
    }
 
    function registerTopVideo(node: HTMLVideoElement) {
        node.addEventListener('ended', handleTopVideoEnd);
        topVideos = [...topVideos, node];
        
        return {
            destroy() {
                node.removeEventListener('ended', handleTopVideoEnd);
                topVideos = topVideos.filter(v => v !== node);
            }
        };
    }

    function registerBottomVideo(node: HTMLVideoElement) {
        node.addEventListener('ended', handleBottomVideoEnd);
        bottomVideos = [...bottomVideos, node];
        
        return {
            destroy() {
                node.removeEventListener('ended', handleBottomVideoEnd);
                bottomVideos = bottomVideos.filter(v => v !== node);
            }
        };
    }
</script>


<div class="min-h-screen bg-gray-50">

    <!-- Hero Section -->
    <div class="flex flex-col">

        <div class="p-4 md:p-8 mx-4 md:mx-10 rounded-b-3xl bg-cover bg-top bg-no-repeat" 
             style="background-image: url('/page-home-header1.jpg')">
            <div class="flex flex-col md:flex-row md:space-x-32">
                <div class="w-full md:w-1/2 flex flex-col p-4 md:p-9">
                    <div class="text-xl md:text-4xl font-bold text-white md:pt-0 pt-48">
                        Lumbung Digital Rakyat (LDR) Mitra sukses pengusaha desa.
                    </div>
                    <div class="text-sm md:text-2xl text-white my-5 md:my-10 md:pt-20">
                        Lumbung Digital Rakyat (LDR), kunci sukses dalam memperluas jangkauan bisnis anda di Lubkita.com, platform dikhususkan untuk mengembangkan memberdayakan ekonomi lokal dalam digitalisasi dan pelatihan.
                    </div>
                    <div class="flex space-x-10">




                    <a href="/pendaftaran/LDR0A" class="text-xl md:text-3xl text-center p-1 md:p-3 bg-yellow-400 rounded-2xl font-bold w-full md:w-2/3 flex flex-col justify-center">
                        Pendaftaran LDR
                    </a>



                    
                    </div>
                </div>

                <div class="w-full md:w-1/2 md:mt-0 h-full md:flex hidden flex-col justify-center text-right md:pl-20 md:pt-32"> 




                        {#if Carousel}
                            <svelte:component 
                                this={Carousel}
                                bind:this={topCarouselRef}
                                particlesToShow={1}
                                particlesToScroll={1}
                                autoplay={false}
                                on:pageChange={handleTopCarouselChange}
                            >
                                <div class="w-full p-4">
                                    <!-- svelte-ignore a11y_media_has_caption -->
                                    <video 
                                        use:registerTopVideo
                                        controls 
                                        class="w-full"
                                    >
                                        <source src="/lubkita-animasi1.mp4" type="video/mp4">
                                    </video>
                                </div>
                     
                                <div class="w-full p-4">
                                    <!-- svelte-ignore a11y_media_has_caption -->
                                    <video 
                                        use:registerTopVideo
                                        controls 
                                        class="w-full"
                                    >
                                        <source src="/lubkita-animasi2.mp4" type="video/mp4">
                                    </video>
                                </div>
                                <div class="w-full p-4">
                                    <!-- svelte-ignore a11y_media_has_caption -->
                                    <video 
                                        use:registerTopVideo
                                        controls 
                                        class="w-full"
                                    >
                                        <source src="/lubkita-animasi4.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </svelte:component>
                        {:else}
                            <div class="w-full h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                        {/if}


                    



                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 md:mt-0 h-full flex md:hidden flex-col justify-center text-right md:pl-32 md:pt-32"> 
                {#if Carousel}
                <svelte:component 
                    this={Carousel}
                    bind:this={topCarouselRef}
                    particlesToShow={1}
                    particlesToScroll={1}
                    autoplay={false}
                    on:pageChange={handleTopCarouselChange}
                >
                    <div class="w-full p-4">
                        <!-- svelte-ignore a11y_media_has_caption -->
                        <video 
                            use:registerTopVideo
                            controls 
                            class="w-full"
                        >
                            <source src="/lubkita-animasi1.mp4" type="video/mp4">
                        </video>
                    </div>
        
                    <div class="w-full p-4">
                        <!-- svelte-ignore a11y_media_has_caption -->
                        <video 
                            use:registerTopVideo
                            controls 
                            class="w-full"
                        >
                            <source src="/lubkita-animasi2.mp4" type="video/mp4">
                        </video>
                    </div>
                    
                    <div class="w-full p-4">
                        <!-- svelte-ignore a11y_media_has_caption -->
                        <video 
                            use:registerTopVideo
                            controls 
                            class="w-full"
                        >
                            <source src="/lubkita-animasi4.mp4" type="video/mp4">
                        </video>
                    </div>
                </svelte:component>
            {:else}
                <div class="w-full h-48 bg-gray-100 animate-pulse rounded-lg"></div>
            {/if}

        </div>
        

        <div class="w-11/12 md:w-5/6 flex flex-col md:flex-row justify-center mx-auto my-10 shadow-lg rounded-2xl p-5 border">
            <a href="/panduan-membership2.pdf" class="flex w-full md:w-1/3 hover:bg-slate-300 mb-4 md:mb-0">
                <div class="p-2 w-1/5">
                    <img src="/page-home-networking-icon.png" alt="networking" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base">PANDUAN MEMBERSHIP</div>
            </a>




            <a href="/pelatihan-digital" class="flex w-full md:w-1/3 hover:bg-slate-300 mb-4 md:mb-0">
                <div class="p-2 w-1/5">
                    <img src="/page-home-pelatihan-icon.png" alt="pelatihan" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base">PELATIHAN DIGITAL</div>
            </a>



            <a href="/syarat-ketentuan" class="flex w-full md:w-1/3 hover:bg-slate-300">
                <div class="p-2 w-1/5">
                    <img src="/page-home-credential-icon.png" alt="credential" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base">SYARAT & KETENTUAN</div>
            </a>




        </div>
        <div class="flex flex-col justify-center my-10">
            <div class="text-center text-4xl font-bold ">Cek katalog kami sekarang!</div>
        <a href="https://online.fliphtml5.com/mweze/qnik/" target="_blank" rel="noopener noreferrer">
            <img 
                src="/salinan-lubkita.png" 
                alt="Lubkita Logo" 
                class="rounded-3xl cursor-pointer hover:opacity-90 transition-opacity md:w-1/2 w-5/6 mx-auto my-10"
            />
        </a>
        </div>
        <div class="flex flex-col bg-amber-300 mx-4 md:mx-10 rounded-t-3xl">
            <div class="p-5 md:p-10 text-center flex flex-col">
                <div class="text-3xl md:text-4xl">Review</div>
                <div class="text-4xl md:text-5xl font-bold">Pengguna LDR</div>
            </div>
            <div class="px-4 md:px-20 pb-10 md:pb-20 pt-5 rounded-full flex flex-col justify-center"> <!-- Adjust height as needed -->
                <!--
                <video 
                class="w-full flex justify-center rounded-lg shadow-lg"
                controls
                autoplay
                muted
                loop
                >
                <source src="/testimoni-lubkita2-2-2.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                -->



                <div class="w-full h-full flex-col justify-center text-right"> 




                    {#if Carousel}
                        <svelte:component 
                            this={Carousel}
                            bind:this={bottomCarouselRef}
                            particlesToShow={1}
                            particlesToScroll={1}
                            autoplay={false}
                            on:pageChange={handleBottomCarouselChange}
                        >
                            <div class="w-full p-4 rounded-xl">
                                <iframe
                                    id="youtube-player-1"
                                    class="youtube-player w-full aspect-video rounded-xl shadow-lg"
                                    src="https://www.youtube.com/embed/biBuA07GBIU?enablejsapi=1"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                 
                            <div class="w-full p-4 rounded-xl">
                                <iframe
                                    id="youtube-player-2"
                                    class="youtube-player w-full aspect-video rounded-xl shadow-lg"
                                    src="https://www.youtube.com/embed/g77BMHYMSDc?enablejsapi=1"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div class="w-full p-4 rounded-xl">
                                <iframe
                                    id="youtube-player-2"
                                    class="youtube-player w-full aspect-video rounded-xl shadow-lg"
                                    src="https://www.youtube.com/embed/EGIGaXAv5U4"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </svelte:component>
                    {:else}
                        <div class="w-full h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                    {/if}


                



            </div>


                
            </div>
            <!--
            <div class="flex justify-center w-full border-2 border-black h-[600px] p-8">
                <Carousel :slides="slides">
                        <template #slide-0>
                            <div class="w-full h-full flex items-center justify-center p-16">
                                <span class="text-3xl bg-blue-300 w-full h-full rounded-3xl">
                                    Image1
                                </span>
                            </div>
                        </template>

                        <template #slide-1>
                            <div class="w-full h-full flex flex-col items-center justify-center p-16">
                                <div class="text-2xl italic">"quotes"</div>
                                <div class="border-t border-red-200 w-full mx-10 my-8"></div>
                                <div class="text-2xl font-bold">Name</div>
                            </div>
                        </template>

                        <template #slide-2>
                            <div class="w-full h-full flex items-center justify-center p-16">
                                <span class="text-3xl bg-yellow-300 w-full h-full rounded-3xl">
                                    Image3
                                </span>
                            </div>
                        </template>
                    </Carousel>
            </div>
            -->
            <!--
            <div class="grid grid-cols-2 bg-blue-400 p-10">
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-gray-200 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
                <div class="flex flex-col p-4 bg-slate-100 py-16">
                    <div class="text-center text-xl font-bold">Name</div>
                    <div class="border-t border-slate-400 m-3"></div>
                    <div class="text-center italic">"Review"</div>
                </div>
            </div>
            -->
        </div>
    </div>

    <!-- Contact Section -->

</div>
  
  <style>
    /* Svelte scopes styles automatically, no need for scoped attribute */
    input, textarea {
      @apply p-3;
    }
  </style>


