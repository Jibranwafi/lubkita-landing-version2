<script context="module" lang="ts">
    declare const YT: any;
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    let showPdfModal = false;
    let Carousel: any;
    let topCarouselRef: any;
    let bottomCarouselRef: any;
    let topVideos: HTMLVideoElement[] = [];
    let bottomVideos: HTMLVideoElement[] = [];
    let youtubePlayers: any[] = [];
    let currentVideoIndex = 0;
    const videoTitles = [
        "Bisnis grosir online menjanjikan",
        "Testimoni seller sukses online dengan grosir online Lubkita",
        "Penyambutan program Lubkita oleh masyarakat Palu"
    ];
    
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;

        // Initialize currentVideoIndex to 0
        currentVideoIndex = 0;

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
        // Update current video index
        currentVideoIndex = event.detail;
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


<div class="min-h-screen bg-cover bg-center bg-repeat" style="background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/page-home-wallpaper4.png')">

    <!-- Hero Section -->
    <div class="flex flex-col">

        <div class="p-4 md:p-8 mx-4 md:mx-10 rounded-b-3xl bg-cover bg-top bg-no-repeat" 
             style="background-image: url('/page-home-header4.png')">
            <div class="flex flex-col md:flex-row md:space-x-32">
                <div class="w-full md:w-1/2 flex flex-col p-4 md:p-9">
                    <div class="text-xl md:text-4xl font-bold text-white md:pt-0 pt-48">
                        Lumbung Digital Rakyat (LDR) Mitra sukses pengusaha desa.
                    </div>
                    <div class="text-sm md:text-2xl text-white my-5 md:my-10 md:pt-20">
                        Lumbung Digital Rakyat (LDR), kunci sukses dalam memperluas jangkauan bisnis anda di Lubkita.com, platform dikhususkan untuk mengembangkan memberdayakan ekonomi lokal dalam digitalisasi dan pelatihan.
                    </div>
                    <div class="flex space-x-10">




                    <a href="/pendaftaran/LDR0A" class="text-xl md:text-3xl text-center p-1 md:p-3 bg-yellow-400 rounded-2xl font-bold w-full md:w-2/3 flex flex-col justify-center hover:bg-yellow-800 hover:text-white transition-all duration-300 transform hover:scale-105">
                        Pendaftaran LDR
                    </a>



                    
                    </div>
                </div>

                <div class="w-full md:w-1/2 md:mt-0 h-full md:flex hidden flex-col justify-center text-right md:pl-28 md:pt-32"> 




                        {#if Carousel}
                            <svelte:component 
                                this={Carousel}
                                bind:this={topCarouselRef}
                                particlesToShow={1}
                                particlesToScroll={1}
                                autoplay={false}
                                on:pageChange={handleTopCarouselChange}
                                let:showPrevPage
                                let:showNextPage
                            >
                            <!--
                                <div slot="prev" let:showPrevPage>
                                    <button 
                                        on:click={showPrevPage} 
                                        class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-sm rounded-r"
                                    >
                                        ←
                                    </button>
                                </div>
                                
                                <div slot="next" let:showNextPage>
                                    <button 
                                        on:click={showNextPage} 
                                        class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-sm rounded-l"
                                    >
                                        →
                                    </button>
                                </div>
                            -->
                                <div class="w-full p-5">
                                    <div class="bg-black">
                                        <!-- svelte-ignore a11y_media_has_caption -->
                                        <video 
                                            use:registerTopVideo
                                            controls 
                                            class="w-full"
                                        >
                                            <source src="/lubkita-animasi1.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                </div>
                    
                                <div class="w-full p-5">
                                    <div class="bg-black">
                                        <!-- svelte-ignore a11y_media_has_caption -->
                                        <video 
                                            use:registerTopVideo
                                            controls 
                                            class="w-full"
                                        >
                                            <source src="/lubkita-animasi2.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                </div>

                                <div class="w-full p-5">
                                    <div class="bg-black">
                                        <!-- svelte-ignore a11y_media_has_caption -->
                                        <video 
                                            use:registerTopVideo
                                            controls 
                                            class="w-full"
                                        >
                                            <source src="/lubkita-animasi4.mp4" type="video/mp4">
                                        </video>
                                    </div>
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
                <div class="relative">
                    <svelte:component 
                        this={Carousel}
                        bind:this={topCarouselRef}
                        particlesToShow={1}
                        particlesToScroll={1}
                        autoplay={false}
                        on:pageChange={handleTopCarouselChange}
                        let:showPrevPage
                        let:showNextPage
                    >
                        <!-- Side navigation buttons -->
                        <div slot="prev" let:showPrevPage>
                            <button 
                                on:click={showPrevPage} 
                                class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-3xl rounded-r"
                            >
                                ←
                            </button>
                        </div>
                        
                        <div slot="next" let:showNextPage>
                            <button 
                                on:click={showNextPage} 
                                class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 text-3xl rounded-l"
                            >
                                →
                            </button>
                        </div>



                        <div class="w-full p-5">
                            <div class="bg-black">
                                <!-- svelte-ignore a11y_media_has_caption -->
                                <video 
                                    use:registerTopVideo
                                    controls 
                                    class="w-full"
                                >
                                    <source src="/lubkita-animasi1.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
            
                        <div class="w-full p-5">
                            <div class="bg-black">
                                <!-- svelte-ignore a11y_media_has_caption -->
                                <video 
                                    use:registerTopVideo
                                    controls 
                                    class="w-full"
                                >
                                    <source src="/lubkita-animasi2.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
    
                        <div class="w-full p-5">
                            <div class="bg-black">
                                <!-- svelte-ignore a11y_media_has_caption -->
                                <video 
                                    use:registerTopVideo
                                    controls 
                                    class="w-full"
                                >
                                    <source src="/lubkita-animasi4.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </svelte:component>

                    <!-- Bottom navigation buttons (outside the carousel) -->
                    <div class="flex justify-center gap-4 mt-4">
                        <button 
                            on:click={() => topCarouselRef.goToPrev()} 
                            class="bg-black bg-opacity-50 text-white px-4 py-2 rounded"
                        >
                            ←
                        </button>
                        <button 
                            on:click={() => topCarouselRef.goToNext()} 
                            class="bg-black bg-opacity-50 text-white px-4 py-2 rounded"
                        >
                            →
                        </button>
                    </div>
                </div>
            {:else}
                <div class="w-full h-48 bg-gray-100 animate-pulse rounded-lg"></div>
            {/if}

        </div>
        

        
        <div class="w-11/12 md:w-5/6 flex flex-col md:flex-row justify-center mx-auto my-10 shadow-lg rounded-2xl p-5 border bg-white">
            <button 
                on:click={() => showPdfModal = true} 
                class="flex w-full md:w-1/3 hover:bg-slate-300 mb-4 md:mb-0"
            >
                <div class="p-2 w-1/5">
                    <img src="/page-home-networking-icon.png" alt="networking" class="h-12 w-12 md:h-16 md:w-16 mx-auto">
                </div>
                <div class="p-2 w-4/5 font-bold flex flex-col justify-center text-sm md:text-base my-auto text-left">LIHAT KATALOG KAMI</div>
            </button>




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



        <div class="md:px-10 px-0 flex justify-center md:flex-row flex-col md:space-x-6 space-x-0 md:bg-transparent bg-white shadow-lg md:shadow-none rounded-2xl pb-10 m-5 md:pb-0 md:m-0">
            <div class="md:w-1/3 w-full">
                <img src="/page-home-credential-icon2.png" alt="Lubkita Logo" class="w-full mx-auto p-5 md:p-0">
            </div>
            <div class="md:w-1/3 w-full flex flex-col justify-center px-5 space-y-5">
                <div class="md:text-4xl text-xl font-bold">Membership lubkita.com sudah terintegrasi dengan LDR</div>
                <div class="md:text-base text-sm">Dengan platform canggih Lubkita.com, kami membantu mitra LDR menghapus kendala jarak dan rantai distribusi yang merugikan</div>
            </div>
        </div>
        <div class="md:w-full flex md:p-10 p-4 m-5 md:m-0 md:space-x-10 space-y-5 md:space-y-0 md:flex-row flex-col md:mx-auto bg-white md:bg-transparent shadow-lg md:shadow-none rounded-2xl">
            <div class="text-right flex flex-col justify-center md:space-y-5 space-y-2 md:w-1/4 w-full">
                <div class="md:text-4xl text-xl font-bold text-left md:text-right">Berikut adalah paket yang tersedia untuk anda</div>
                <div class="md:flex hidden text-4xl border-2 border-yellow-700 rounded-full px-2 w-fit ml-auto text-yellow-700">→</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-3/4 w-full">
                <div class="transition-transform duration-300 hover:scale-105 relative group">
                    <div class="space-y-3 p-10 flex flex-col rounded-xl h-[50vh] justify-center text-center text-white" style="background-image: url('/page-home-paketkami-gold.png'); background-size: cover; background-position: center;">
                        <div class="md:text-4xl text-2xl font-bold">Paket Gold</div>
                        <div class="md:text-base font-thin">Solusi sempurna untuk bisnis yang siap naik level di dunia digital!</div>
                        <a href="/paket-kami/paket-gold" class="md:opacity-0 md:group-hover:opacity-100 text-center mt-4 bg-black bg-opacity-50 py-2 px-4 rounded-lg text-white font-bold transition-opacity duration-300 hover:bg-opacity-70 md:text-base text-sm">
                            Ketahui Lebih Lanjut
                        </a>
                    </div>
                </div>
                
                <div class="transition-transform duration-300 hover:scale-105 relative group">
                    <div class="space-y-3 p-10 flex flex-col rounded-xl h-[50vh] justify-center text-center text-white" style="background-image: url('/page-home-paketkami-ldr.png'); background-size: cover; background-position: center;">
                        <div class="md:text-4xl text-2xl font-bold">Paket LDR</div>
                        <div class="md:text-base font-thin">Digitalisasikan Bisinis dan Grosir Anda Sekarang Juga!</div>
                        <a href="/paket-kami/paket-ldr" class="md:opacity-0 md:group-hover:opacity-100 text-center mt-4 bg-black bg-opacity-50 py-2 px-4 rounded-lg text-white font-bold transition-opacity duration-300 hover:bg-opacity-70 md:text-base text-sm">
                            Ketahui Lebih Lanjut
                        </a>
                    </div>
                </div>
                
                <div class="transition-transform duration-300 hover:scale-105 relative group">
                    <div class="space-y-3 p-10 flex flex-col rounded-xl h-[50vh] justify-center text-center text-white" style="background-image: url('/page-home-paketkami-platinum.png'); background-size: cover; background-position: center;">
                        <div class="md:text-4xl text-2xl font-bold">Paket Platinum</div>
                        <div class="md:text-base font-thin">Paket ultimate untuk mendominasi pasar dan bisnis digital!</div>
                        <a href="/paket-kami/paket-platinum" class="md:opacity-0 md:group-hover:opacity-100 text-center mt-4 bg-black bg-opacity-50 py-2 px-4 rounded-lg text-white font-bold transition-opacity duration-300 hover:bg-opacity-70 md:text-base text-sm">
                            Ketahui Lebih Lanjut
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex justify-center md:mx-10 md:my-16">
            <div class="flex flex-col bg-yellow-100 mx-4 md:mx-0 rounded-t-none md:rounded-3xl w-full md:shadow-lg shadow-slate-500 md:pb-5 pb-10">
                <div class="flex md:justify-end flex-col w-full mx-auto md:my-5 md:mt-10 my-5 md:space-y-5 space-y-2">
                    <div class="flex w-fit mx-auto md:space-x-8 space-x-0 md:flex-row flex-col items-center px-10 md:px-0">
                        <div class="my-auto text-xl md:text-4xl font-bold text-center mb-2 md:mb-0">Review Pengguna LDR</div>
                        <div class="my-auto text-2xl md:text-4xl font-bold text-center hidden md:block">•</div>
                        <div class="bg-white text-yellow-600 shadow-sm md:py-2 py-1 md:px-5 px-4 md:text-xl text-sm font-light rounded-full w-fit text-center">
                            {videoTitles[currentVideoIndex ?? 0]}
                        </div>
                    </div>
                    <!--
                    <div class="text-2xl md:text-5xl font-bold text-center">Review Pengguna LDR</div>
                    <div class="bg-white w-fit md:py-3 md:px-5 mx-auto px-4 md:text-2xl text-sm font-light rounded-full">
                        {videoTitles[currentVideoIndex ?? 0]}
                    </div>
                    -->
                </div>



                <div class="flex justify-center">
                    <div class="rounded-full flex flex-col justify-center w-full mx-auto"> <!-- Adjust height as needed -->
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
                                <div class="relative">
                                    <svelte:component 
                                        this={Carousel}
                                        bind:this={bottomCarouselRef}
                                        particlesToShow={1}
                                        particlesToScroll={1}
                                        autoplay={false}
                                        initialPageIndex={0}
                                        on:pageChange={handleBottomCarouselChange}
                                    >
                                        <!-- Side navigation buttons -->
                                        <div slot="prev" let:showPrevPage>
                                            <button 
                                                on:click={showPrevPage} 
                                                class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 text-3xl rounded-r z-10 hover:scale-110 bg-yellow-800 transition-transform duration-300 hover:bg-amber-700"
                                            >
                                                ←
                                            </button>
                                        </div>
                                        
                                        <div slot="next" let:showNextPage>
                                            <button 
                                                on:click={showNextPage} 
                                                class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 text-3xl rounded-l z-10 hover:scale-110 bg-yellow-800 transition-transform duration-300 hover:bg-amber-700"
                                            >
                                                →
                                            </button>
                                        </div>









                                    <div class="w-full p-4 md:px-16 rounded-xl">
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
                                    <div class="w-full p-4 md:px-16 rounded-xl">
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
                                    <div class="w-full p-4 md:px-16 rounded-xl">
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

                                        <!-- Carousel items here -->
                                    </svelte:component>

                                    <!-- Bottom navigation buttons (outside the carousel) -->
                                    <div class="flex justify-center gap-4 mt-4 md:hidden">
                                        <button 
                                            on:click={() => bottomCarouselRef.goToPrev()} 
                                            class="bg-black bg-opacity-50 text-white px-4 py-2 rounded"
                                        >
                                            ←
                                        </button>
                                        <button 
                                            on:click={() => bottomCarouselRef.goToNext()} 
                                            class="bg-black bg-opacity-50 text-white px-4 py-2 rounded"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            {:else}
                                <div class="w-full h-48 bg-gray-100 animate-pulse rounded-lg"></div>
                            {/if}
                        </div>    
                    </div>
                </div>


            </div>


<!--
            <div class="flex-col justify-center md:w-1/4 hidden md:flex bg-slate-700 bg-opacity-70 border-y-2 border-r-2 border-slate-200 rounded-tr-3xl p-10">

                <div class="text-center text-white text-4xl italic w-full p-3">Cek<br><b>katalog kami</b><br>sekarang!</div>
                <img src="/page-home-logo-katalog.png" alt="Katalog Logo" class="w-1/3 mx-auto object-contain mb-10 mt-5">
                <a href="https://online.fliphtml5.com/mweze/qnik/" target="_blank" rel="noopener noreferrer">
                    <img src="/salinan-lubkita.png" alt="Lubkita Logo" class="rounded-2xl cursor-pointer hover:opacity-90 transition-opacity mx-auto shadow-lg shadow-slate-400" />
                </a>
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

{#if showPdfModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg w-full max-w-4xl">
            <div class="flex justify-between items-center p-4">
                <h3 class="md:text-xl text-sm font-semibold my-auto flex flex-col justify-center bg-orange-200 p-2 rounded-lg">Katalog Kami</h3>
                <button 
                    on:click={() => showPdfModal = false}
                    class="text-gray-500 hover:text-gray-700"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="h-[70vh] overflow-y-auto p-4">
                <iframe
                    src="/katalog-ldr.pdf"
                    title="Panduan Membership PDF"
                    class="w-full h-full"
                ></iframe>
            </div>
        </div>
    </div>
{/if}


