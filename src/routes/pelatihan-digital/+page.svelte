<script lang="ts">
interface Video {
    id: string;
    title: string;
    description: string;
    duration: string;
    type: 'youtube-video' | 'local-video' | 'materi';
    youtubeId?: string;
    videoUrl?: string;
    thumbnail?: string;
    materiContent?: {
        url: string;
        type: 'image' | 'gif' | 'local-video';
    }[];
}

interface Playlist {
    name: string;
    videoIds: string[];
}

let videos: Video[] = [
    {
        id: '1',
        title: 'Masyarakat Sulawesi Tengah Antusias Menyambut Program Digitalisasi Lubkita',
        description: 'Digitalisasi memiliki potensi besar untuk meningkatkan kualitas hidup masyarakat Sulawesi Tengah. Namun, berbagai tantangan perlu diatasi agar transformasi dapat berjalan secara inklusif dan berkelanjutan.',
        youtubeId: 'EGIGaXAv5U4',
        duration: '6:39',
        type: 'youtube-video'
    },
    {
        id: '2',
        title: 'Bisnis Aman Grosir Berkelas',
        description: 'Dalam era di mana kepercayaan semakin menipis, terutama dalam bisnis wholesale, Lubkita hadir sebagai solusi terdepan dengan komitmen pada keamanan. Kami memahami bahwa keamanan transaksi dan pengiriman barang menjadi prioritas utama.',
        youtubeId: 'yoNpER_P_Ns',
        duration: '2:14',
        type: 'youtube-video'
    },

    {
        id: '3',
        title: 'Testimoni Seller Lubkita',
        description: 'Kami menyediakan berbagai macam produk dengan harga grosir yang sangat kompetitif. Kami bekerja sama dengan produsen langsung, sehingga Anda bisa mendapatkan harga terbaik tanpa perantara.',
        youtubeId: 'g77BMHYMSDc',
        duration: '1:54',
        type: 'youtube-video'
    },
//    {
//        id: '4',
//        title: 'Cara Maksimalkan Traffic Marketing di Medsos',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        youtubeId: '',
//        duration: '',
//        type: 'materi',
//        thumbnail: '/page-paket-gold2.jpeg',
//        materiContent: [
//            { url: '/samplevideo1.mp4', type: 'local-video' },
//            { url: '/samplevideo2.mp4', type: 'local-video' },
//            { url: '/samplegif2.gif', type: 'gif' },
//            { url: '/samplevideo3.mp4', type: 'local-video' },
//        ]
//   },
//    {
//        id: '5',
//        title: 'Perbedaan Member Gold dan Platinum',
//       description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        videoUrl: '/lubkita-animasi1.mp4',
//        duration: '10:30',
//        type: 'local-video',
//        thumbnail: '/page-videopelatihan-thumbnail.png'
//    },
//    {
//        id: '6',
//        title: 'Bisnis Aman Grosir Berkelas',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        youtubeId: 'yoNpER_P_Ns',
//        duration: '10:30',
//        type: 'youtube-video'
//    },
//    {
//        id: '7',
//        title: 'Bisnis Aman Grosir Berkelas',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        youtubeId: 'yoNpER_P_Ns',
//        duration: '10:30',
//        type: 'youtube-video'
//    },
//    {
//        id: '8',
//        title: 'Bisnis Aman Grosir Berkelas',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        youtubeId: 'yoNpER_P_Ns',
//        duration: '10:30',
//        type: 'youtube-video'
//    },
//    
//    {
//        id: '9',
//        title: 'Perbedaan Member Gold dan Platinum',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        videoUrl: '/lubkita-animasi.mp4',
//        duration: '10:30',
//        type: 'local-video',
//        thumbnail: '/paket-platinum2.png'
//    },
//    {
//        id: '10',
//        title: 'Bisnis Aman Grosir Berkelas',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        youtubeId: 'yoNpER_P_Ns',
//        duration: '10:30',
//        type: 'youtube-video'
//    },
//    {
//        id: '11',
//        title: 'Cara Maksimalkan Traffic Marketing di Medsos',
//        description: 'Pelajari dasar-dasar digital marketing dan strategi pemasaran online yang efektif.',
//        youtubeId: '',
//        duration: '',
//        type: 'materi',
//        thumbnail: '/page-paket-gold2.jpeg',
//        materiContent: [
//            { url: '/samplevideo1.mp4', type: 'local-video' },
//            { url: '/samplevideo2.mp4', type: 'local-video' },
//            { url: '/samplegif2.gif', type: 'gif' },
//            { url: '/samplevideo3.mp4', type: 'local-video' },
//        ]
//    },

    // Add more videos as needed
];

let playlists: Playlist[] = [
    {
        name: 'Pengenalan Lubkita',
        videoIds: ['1', '2', '3', '1']
    }, 
    {
        name: 'Testimoni Seller',
        videoIds: ['3']
    }, 
];

let selectedPlaylist: string = playlists[0].name;
let currentFeaturedPage = 0;
let featuredVideosPerPage: number;

// Use browser-only code to check screen width
$: featuredVideosPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

// Add window resize listener
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        featuredVideosPerPage = window.innerWidth < 768 ? 1 : 3;
    });
}

let selectedVideo: Video | null = null;
let currentPage = 1;
const videosPerPage = 6;

// Add new state for carousel
let currentSlideIndex = 0;

// Add these variables after the existing let declarations
let searchQuery = '';
let showFilters = false;
let selectedFilter = 'all'; // Can be 'all', 'video', or 'materi'

// Add this new state variable after other let declarations
let hasSelectedVideo = false;

function getVideoSource(video: Video) {
    if (video.type === 'youtube-video' && video.youtubeId) {
        return `https://www.youtube.com/embed/${video.youtubeId}`;
    }
    return video.videoUrl || '';
}

function getNextVideo() {
    const currentIndex = videos.findIndex(v => v.id === selectedVideo?.id);
    if (currentIndex < videos.length - 1) {
        selectedVideo = videos[currentIndex + 1];
    }
}

function getPreviousVideo() {
    const currentIndex = videos.findIndex(v => v.id === selectedVideo?.id);
    if (currentIndex > 0) {
        selectedVideo = videos[currentIndex - 1];
    }
}

function nextSlide() {
    if (selectedVideo?.materiContent) {
        currentSlideIndex = (currentSlideIndex + 1) % selectedVideo.materiContent.length;
        // After changing slide, play video if it's a local video
        if (selectedVideo.materiContent[currentSlideIndex].type === 'local-video') {
            setTimeout(() => {
                const videoElement = document.querySelector('video');
                if (videoElement) {
                    videoElement.play();
                }
            }, 0);
        }
    }
}

function previousSlide() {
    if (selectedVideo?.materiContent) {
        currentSlideIndex = (currentSlideIndex - 1 + selectedVideo.materiContent.length) % selectedVideo.materiContent.length;
    }
}

// Update the filtering logic
$: filteredVideos = videos
    .filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            video.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = selectedFilter === 'all' || 
                            (selectedFilter === 'video' && (video.type === 'youtube-video' || video.type === 'local-video')) ||
                            (selectedFilter === 'materi' && video.type === 'materi');
        return matchesSearch && matchesFilter;
    });

$: paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
);
$: totalPages = Math.ceil(filteredVideos.length / videosPerPage);

function getPlaylistVideos(playlistName: string): Video[] {
    const playlist = playlists.find(p => p.name === playlistName);
    if (!playlist) return [];
    return playlist.videoIds
        .map(id => videos.find(v => v.id === id))
        .filter((v): v is Video => v !== undefined);
}

function nextFeaturedPage() {
    const playlistVideos = getPlaylistVideos(selectedPlaylist);
    const maxPages = Math.ceil(playlistVideos.length / featuredVideosPerPage) - 1;
    currentFeaturedPage = Math.min(currentFeaturedPage + 1, maxPages);
}

function previousFeaturedPage() {
    currentFeaturedPage = Math.max(currentFeaturedPage - 1, 0);
}

$: currentFeaturedVideos = getPlaylistVideos(selectedPlaylist).slice(
    currentFeaturedPage * featuredVideosPerPage,
    (currentFeaturedPage + 1) * featuredVideosPerPage
);

$: hasNextPage = currentFeaturedVideos.length === featuredVideosPerPage &&
    currentFeaturedPage < Math.ceil(getPlaylistVideos(selectedPlaylist).length / featuredVideosPerPage) - 1;

$: hasPreviousPage = currentFeaturedPage > 0;

// Add this computed property to check if there are any videos in playlists
$: hasPlaylistVideos = playlists.some(playlist => playlist.videoIds.length > 0);

// Update the video selection logic to set hasSelectedVideo
function selectVideo(video: Video) {
    selectedVideo = video;
    hasSelectedVideo = true;
}
</script>

<div class="bg-red-300 flex flex-col">
    
    <div class=" bg-yellow-300">
        <div class="flex flex-col relative">
            <img 
                src="/page-videopelatihan-header3.png" 
                alt="LDR Wallpaper" 
                class="w-full object-cover h-[40vh] md:h-auto"
            >
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-amber-200 to-transparent"></div>
        </div>
    </div>
    <div class="flex w-full flex-col">
        
        {#if hasPlaylistVideos}
            <div class="p-3 py-10 w-full flex flex-col bg-amber-200 space-y-4">
                <div class="text-center text-4xl font-bold">
                    Featured Videos
                </div>

                <div class="flex p-3 space-x-4 justify-center w-full">
                    {#each playlists as playlist}
                        <button 
                            class="flex flex-col justify-center p-2 px-4 rounded-full font-semibold transition-colors {selectedPlaylist === playlist.name ? 'bg-yellow-700 text-white' : 'text-black border-4 border-yellow-400 bg-yellow-100'}"
                            on:click={() => {
                                selectedPlaylist = playlist.name;
                                currentFeaturedPage = 0;
                            }}
                        >
                            {playlist.name}
                        </button>
                    {/each}
                </div>

                <div class="flex">
                    <button 
                        class="w-1/12 flex flex-col justify-center items-center text-3xl font-bold
                            transition-all duration-300
                            {hasPreviousPage 
                                ? 'text-black cursor-pointer hover:scale-125 hover:text-amber-600 active:scale-95' 
                                : 'text-gray-400 cursor-not-allowed opacity-50'}"
                        on:click={previousFeaturedPage}
                        disabled={!hasPreviousPage}
                    >
                        ←
                    </button>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12">
                        {#each currentFeaturedVideos as video}
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div 
                                class="bg-white flex flex-col space-y-2 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 hover:bg-yellow-300"
                                on:click={() => selectVideo(video)}
                            >
                                <div class="relative border-b-8 border-l-8 border-t-8 bg-slate-700 overflow-hidden
                                    {video.type === 'youtube-video' || video.type === 'local-video' ? 'border-red-200' : 'border-teal-300'}">
                                    <!-- Container with 16:9 aspect ratio -->
                                    <div class="pb-[56.25%]">
                                        <img 
                                            src={video.type === 'youtube-video' 
                                                ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                                                : video.thumbnail || '/thumbnails/default-video.jpg'}
                                            alt={video.title}
                                            class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div class="absolute bottom-0 right-0 w-fit flex ml-auto rounded-tl-full px-5 text-xl border-l-8 border-t-8 transition-colors duration-300
                                        {video.type === 'youtube-video' || video.type === 'local-video' 
                                            ? 'bg-red-200 border-red-200 hover:bg-red-300 hover:border-red-300' 
                                            : 'bg-teal-300 border-teal-300 hover:bg-teal-400 hover:border-teal-400'}">
                                        {video.type === 'youtube-video' || video.type === 'local-video' ? `Video • ${video.duration}` : 'Materi'}
                                    </div>
                                </div>
                                <div class="p-4 transition-colors duration-300 hover:bg-yellow-300 space-y-4">
                                    <div class="font-semibold md:text-2xl text-lg">{video.title}</div>
                                    <div class="line-clamp-2 md:text-lg text-sm">{video.description}</div>
                                </div>
                            </div>
                        {/each}
                    </div>

                    <button 
                        class="w-1/12 flex flex-col justify-center items-center text-3xl font-bold
                            transition-all duration-300
                            {hasNextPage 
                                ? 'text-black cursor-pointer hover:scale-125 hover:text-amber-600 active:scale-95' 
                                : 'text-gray-400 cursor-not-allowed opacity-50'}"
                        on:click={nextFeaturedPage}
                        disabled={!hasNextPage}
                    >
                        →
                    </button>
                </div>
            </div>
        {/if}

        {#if hasSelectedVideo && selectedVideo}
            <div class="flex bg-yellow-100 {selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video' ? 'md:flex-row md:p-16 p-8 md:space-y-0 space-y-10 md:space-x-10' : 'flex-col md:p-8 p-0 md:space-y-10 space-y-5 '} flex-col">
                <div class="{selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video' ? 'md:w-2/3' : 'w-full'} relative">
                    {#if selectedVideo.type === 'youtube-video'}
                        <div class="w-full pb-[56.25%] relative">
                            <iframe
                                class="absolute top-0 left-0 w-full h-full rounded-xl"
                                src={getVideoSource(selectedVideo)}
                                title={selectedVideo.title}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    {:else if selectedVideo.type === 'local-video'}
                        <div class="w-full pb-[56.25%]">
                            <video 
                                class="absolute top-0 left-0 w-full h-full object-contain rounded-xl bg-black"
                                controls
                                src={getVideoSource(selectedVideo)}
                                autoplay
                            >
                                <track kind="captions">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    {:else}
                        <div class="flex flex-col">
                            <div class="w-full pb-[56.25%] relative">
                                {#if selectedVideo.materiContent && selectedVideo.materiContent.length > 0}
                                    {#if selectedVideo.materiContent[currentSlideIndex].type === 'local-video'}
                                        <video 
                                            class="absolute top-0 left-0 w-full h-full object-contain rounded-xl bg-black"
                                            controls
                                            src={selectedVideo.materiContent[currentSlideIndex].url}
                                            autoplay
                                        >
                                            <track kind="captions">
                                            Your browser does not support the video tag.
                                        </video>
                                    {:else}
                                        <img 
                                            src={selectedVideo.materiContent[currentSlideIndex].url}
                                            alt={`Slide ${currentSlideIndex + 1}`}
                                            class="absolute top-0 left-0 w-full h-full object-contain rounded-xl"
                                        />
                                    {/if}
                                    <!-- Carousel Controls -->
                                    <div class="absolute inset-y-0 left-0 flex items-center">
                                        <button 
                                            class="bg-black bg-opacity-50 text-white p-2 rounded-r"
                                            on:click={previousSlide}
                                        >
                                            ←
                                        </button>
                                    </div>
                                    <div class="absolute inset-y-0 right-0 flex items-center">
                                        <button 
                                            class="bg-black bg-opacity-50 text-white p-2 rounded-l"
                                            on:click={nextSlide}
                                        >
                                            →
                                        </button>
                                    </div>
                                {:else}
                                    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-xl">
                                        No content available
                                    </div>
                                {/if}
                            </div>
                            <!-- Slide Indicators moved outside the video container -->
                            {#if selectedVideo.materiContent && selectedVideo.materiContent.length > 0}
                                <div class="flex justify-center space-x-2 mt-4">
                                    {#each selectedVideo.materiContent as _, index}
                                        <div 
                                            class="w-2 h-2 rounded-full {index === currentSlideIndex ? 'bg-black' : 'bg-gray-400'}"
                                        ></div>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    {/if}
                </div>

                <div class="{selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video' ? 'md:w-1/3' : 'w-full'} flex flex-col space-y-4 {selectedVideo.type === 'materi' ? 'items-center text-center p-8' : ''}">
                    <div class="font-semibold text-4xl">{selectedVideo.title}</div>
                    <div class="flex my-2 {selectedVideo.type === 'materi' ? 'justify-center' : ''}">
                        {#if selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video'}
                            <div class="bg-red-100 px-2 text-xl">Video</div>
                            <div class="bg-red-400 px-2 text-red-100 font-bold text-xl">{selectedVideo.duration}</div>
                        {:else}
                            <div class="bg-teal-300 px-2 text-xl">Materi Pelatihan</div>
                        {/if}
                    </div>
                    <div class="text-base md:text-xl font-light break-words">{selectedVideo.description}</div>
                    <div class="flex space-x-4 {selectedVideo.type === 'materi' ? 'justify-center' : ''}">
                        <button 
                            class="bg-amber-400 px-4 py-2 rounded-lg font-semibold disabled:opacity-50"
                            on:click={getPreviousVideo}
                            disabled={videos.findIndex(v => v.id === (selectedVideo?.id ?? '')) === 0}
                        >
                            Video Sebelumnya
                        </button>
                        <button 
                            class="bg-amber-400 px-4 py-2 rounded-lg font-semibold disabled:opacity-50"
                            on:click={getNextVideo}
                            disabled={videos.findIndex(v => v.id === (selectedVideo?.id ?? '')) === videos.length - 1}
                        >
                            Video Selanjutnya
                        </button>
                    </div>
                    <!--
                    <div class="text-xl font-semibold flex flex-col">
                        Share video ini
                        <div class="flex space-x-2">
                            <button class="border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
                                <i class="fab fa-facebook"></i>
                            </button>
                            <button class="border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button class="border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button class="border-2 border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
                                <i class="fab fa-telegram"></i>
                            </button>
                        </div>
                    </div>
                    -->
                </div>
            </div>
        {/if}

        <div class="flex flex-col p-3 py-10 bg-amber-300">
            <div class="p-5">
                <div class="text-2xl md:text-4xl font-bold text-center">Jelajahi Materi Pelatihan Digital Kami</div>
            </div>
            
            <div class="bg-amber-300 p-5 flex md:flex-row flex-col justify-center w-full mx-auto relative md:text-base text-sm ">
                <div class="flex"></div>
                <input
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Cari materi pelatihan..."
                    class="rounded-l-full p-3 w-1/2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 md:text-base text-sm"
                />
                <button 
                    class="p-2 w-fit rounded-r-full px-5 bg-orange-400 hover:bg-orange-500 transition-colors flex flex-col justify-center items-center font-bold text-white md:text-base text-sm"
                >
                    Cari
                </button>


                <div class="relative">
                    <button 
                        class="p-2 border-4 border-slate-400 w-fit mx-5 flex bg-slate-300 rounded-2xl hover:bg-slate-400 transition-colors"
                        on:click={() => showFilters = !showFilters}
                    >
                        <div class="w-fit flex flex-col justify-center items-center font-bold md:text-base text-sm">
                            Atur pencarian
                        </div>
                        <div class="px-2 w-fit flex flex-col justify-center items-center my-auto">
                            <img src="/page-videopelatihan-sort-icon.png" alt="filter" class="w-6 h-6">
                        </div>
                    </button>

                    {#if showFilters}
                        <div class="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl p-6 z-10 min-w-[250px] border-2 border-amber-200">
                            <div class="flex flex-col space-y-4">
                                <div class="font-semibold text-lg border-b pb-2 text-amber-800">Filter Konten</div>
                                <label class="flex items-center space-x-3 cursor-pointer p-2 hover:bg-amber-50 rounded-lg transition-colors">
                                    <input 
                                        type="radio" 
                                        bind:group={selectedFilter} 
                                        value="all"
                                        class="form-radio text-amber-500 w-5 h-5 focus:ring-amber-500"
                                    >
                                    <div class="flex items-center space-x-2">
                                        <img src="/page-videopelatihan-all-icon.png" alt="all" class="w-5 h-5">
                                        <span class="text-gray-700">Semua Konten</span>
                                    </div>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer p-2 hover:bg-amber-50 rounded-lg transition-colors">
                                    <input 
                                        type="radio" 
                                        bind:group={selectedFilter} 
                                        value="video"
                                        class="form-radio text-amber-500 w-5 h-5 focus:ring-amber-500"
                                    >
                                    <div class="flex items-center space-x-2">
                                        <img src="/page-videopelatihan-video-icon.png" alt="video" class="w-5 h-5">
                                        <span class="text-gray-700">Video</span>
                                    </div>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer p-2 hover:bg-amber-50 rounded-lg transition-colors">
                                    <input 
                                        type="radio" 
                                        bind:group={selectedFilter} 
                                        value="materi"
                                        class="form-radio text-amber-500 w-5 h-5 focus:ring-amber-500"
                                    >
                                    <div class="flex items-center space-x-2">
                                        <img src="/page-videopelatihan-materi-icon.png" alt="materi" class="w-5 h-5">
                                        <span class="text-gray-700">Materi</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    {/if}
                </div>
            </div> 


            
            <div class="min-h-[600px] bg-amber-300">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 h-fit ">
                    {#each paginatedVideos as video}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div 
                            class="flex flex-col md:flex-row bg-yellow-100 cursor-pointer hover:bg-yellow-200 transition-colors"
                            on:click={() => selectVideo(video)}
                        > 
                            <div class="w-full md:w-1/2">
                                <div class="pb-[56.25%] relative">
                                    <img 
                                        src={video.type === 'youtube-video' 
                                            ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                                            : video.thumbnail || '/thumbnails/default-video.jpg'}
                                        alt={video.title}
                                        class="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 p-5 space-y-2">
                                <div class="font-semibold md:text-2xl text-base line-clamp-2">{video.title}</div>
                                {#if video.type === 'youtube-video' || video.type === 'local-video'}
                                    <div class="flex">
                                        <div class="bg-red-200 px-2 font-light md:text-lg text-sm">Video</div>
                                        <div class="bg-red-400 px-2 md:text-lg text-sm font-bold text-red-100">{video.duration}</div>
                                    </div>
                                {:else}
                                    <div class="bg-teal-300 px-2 font-light text-lg w-fit">Materi Pelatihan</div>
                                {/if}
                                <div class="line-clamp-2 md:text-base text-xs">{video.description}</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>


            <div class=" bg-amber-200 flex justify-center py-5 space-x-2 rounded-3xl w-fit px-44 mx-auto">
                {#each Array(totalPages) as _, i}
                    <div 
                        class="px-5 py-2 w-fit rounded-xl cursor-pointer font-bold {currentPage === i + 1 ? 'bg-amber-400' : ''}"
                        on:click|preventDefault={() => {
                            currentPage = i + 1;
                        }}
                    >
                        {i + 1}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
input, textarea {
    @apply p-3;
}
</style>