<script lang="ts">
import { fade } from 'svelte/transition';
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
        videoButtons?: boolean; // Add this new property
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
        title: 'Digitalisasi Usaha Untuk Kemajuan Desa',
        description: 'Mengapa digitalisasi usaha penting untuk usaha kita?',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/digitalisasiusaha1.png',
        materiContent: [
            { url: '/digitalisasiusaha1.png', type: 'image' },
            { url: '/digitalisasiusaha2.png', type: 'image' },
            { url: '/digitalisasiusaha3.png', type: 'image' },
            { url: '/digitalisasiusaha4.png', type: 'image' },
            { url: '/digitalisasiusaha5.png', type: 'image' },
            { url: '/digitalisasiusaha6.png', type: 'image' },
            { url: '/digitalisasiusaha7.png', type: 'image' },
            { url: '/digitalisasiusaha8.png', type: 'image' },
            { url: '/digitalisasiusaha9.png', type: 'image' },
            { url: '/digitalisasiusaha10.png', type: 'image' },
            { url: '/digitalisasiusaha11.png', type: 'image' },
            { url: '/digitalisasiusaha12.png', type: 'image' },
            { url: '/digitalisasiusaha13.png', type: 'image' },
            { url: '/digitalisasiusaha14.png', type: 'image' },
            { url: '/digitalisasiusaha15.png', type: 'image' },
            { url: '/digitalisasiusaha16.png', type: 'image' },
            { url: '/digitalisasiusaha17.png', type: 'image' },
            
            
        ]
    },
    {
        id: '3',
        title: 'Bisnis Aman Grosir Berkelas',
        description: 'Dalam era di mana kepercayaan semakin menipis, terutama dalam bisnis wholesale, Lubkita hadir sebagai solusi terdepan dengan komitmen pada keamanan. Kami memahami bahwa keamanan transaksi dan pengiriman barang menjadi prioritas utama.',
        youtubeId: 'yoNpER_P_Ns',
        duration: '2:14',
        type: 'youtube-video'
    },
    {
        id: '4',
        title: 'Cara Pengoperasian E-Commerce Lubkkita',
        description: 'Mari kita cek bagaimana cara pengoperasian Lubkita',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/carapengoperasian1.png',
        materiContent: [
            { url: '/carapengoperasian1.png', type: 'image' },
            { url: '/carapengoperasian2.png', type: 'image' },
            { url: '/carapengoperasian3.png', type: 'image' },
            { url: '/carapengoperasian4.png', type: 'image' },
            { url: '/carapengoperasian5.png', type: 'image' },
            { url: '/carapengoperasian6.png', type: 'image' },
            { url: '/carapengoperasian7.png', type: 'image' },
            { url: '/carapengoperasian8.png', type: 'image' },
            { url: '/carapengoperasian9.png', type: 'image' },
            { url: '/carapengoperasian10.png', type: 'image' },
            { url: '/carapengoperasian11.png', type: 'image' },
            { url: '/carapengoperasian12.png', type: 'image' },
            { url: '/carapengoperasian13.png', type: 'image' },
            { url: '/carapengoperasian14.png', type: 'image' },
            { url: '/carapengoperasian15.png', type: 'image' },
            { url: '/carapengoperasian16.png', type: 'image' },
            { url: '/carapengoperasian17.png', type: 'image' },
            { url: '/carapengoperasian18.png', type: 'image' },
            { url: '/carapengoperasian19.png', type: 'image' },
            { url: '/carapengoperasian20.png', type: 'image' },
            { url: '/carapengoperasian21.png', type: 'image' },
            { url: '/carapengoperasian22.png', type: 'image' },
            { url: '/carapengoperasian23.png', type: 'image' },

            
            
        ]
    },
    {
        id: '5',
        title: 'Testimoni Seller Lubkita',
        description: 'Kami menyediakan berbagai macam produk dengan harga grosir yang sangat kompetitif. Kami bekerja sama dengan produsen langsung, sehingga Anda bisa mendapatkan harga terbaik tanpa perantara.',
        youtubeId: 'g77BMHYMSDc',
        duration: '1:54',
        type: 'youtube-video'
    },
    {
        id: '6',
        title: 'Pola Pembelian Digital',
        description: 'Di tengah derasnya arus perubahan teknologi yang mengubah setiap aspek kehidupan kita, transformasi digital telah menjadi lebih dari sekadar buzzword-ia adalah imperatif bisnis yang menentukan kelangsungan hidup organisasi di abad ke-21.',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/polapembeliandigital1.png',
        materiContent: [
            { url: '/polapembeliandigital1.png', type: 'image' },
            { url: '/polapembeliandigital2.png', type: 'image' },
            { url: '/polapembeliandigital3.png', type: 'image' },
            { url: '/polapembeliandigital4.png', type: 'image' },
            { url: '/polapembeliandigital5.png', type: 'image' },
            { url: '/polapembeliandigital6.png', type: 'image' },
            { url: '/polapembeliandigital7.png', type: 'image' },
            { url: '/polapembeliandigital8.png', type: 'image' },
            { url: '/polapembeliandigital9.png', type: 'image' },
            { url: '/polapembeliandigital10.png', type: 'image' },
            { url: '/polapembeliandigital11.png', type: 'image' },
            { url: '/polapembeliandigital12.png', type: 'image' },
            { url: '/polapembeliandigital13.png', type: 'image' },
            { url: '/polapembeliandigital14.png', type: 'image' },
            { url: '/polapembeliandigital15.png', type: 'image' },
            { url: '/polapembeliandigital16.png', type: 'image' },
            { url: '/polapembeliandigital17.png', type: 'image' },
            
            
        ]
    },
    {
        id: '7',
        title: 'Transformasi Bisnis di Era Digital',
        description: 'Transformasi digital telah menjadi imperatif bisnis di abad ke-21, bukan sekadar tren sementara. Kita menyaksikan bagaimana perusahaan raksasa seperti Kodak terpuruk karena gagal beradaptasi, sementara startup inovatif seperti Instagram meroket menjadi platform bernilai miliaran dolar.',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/transformasibisnis1.png',
        materiContent: [
            { url: '/transformasibisnis1.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis2.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis3.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis4.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis5.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis6.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis7.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis8.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis9.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis10.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis11.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis12.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis13.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis14.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis15.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis16.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis17.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis18.mp4', type: 'local-video', videoButtons: false },
            { url: '/transformasibisnis19.mp4', type: 'local-video', videoButtons: false },
            
        ]
    },
    {
        id: '8',
        title: 'Bisnis Tradisional vs Bisnis Digital',
        description: 'Perkembangan teknologi telah memicu transformasi fundamental dalam lanskap bisnis global.',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/bisnistradisional1.png',
        materiContent: [
            { url: '/bisnistradisional1.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional2.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional3.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional4.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional5.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional6.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional7.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional8.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional9.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional10.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional11.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional12.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional13.mp4', type: 'local-video', videoButtons: false},
            { url: '/bisnistradisional14.mp4', type: 'local-video', videoButtons: false},
            
        ]
    },

    {
        id: '9',
        title: 'Perkembangan E-commerce di Indonesia',
        description: 'E-commerce di Indonesia telah menempuh perjalanan panjang dan dinamis, mengubah cara masyarakat berbelanja dan berbisnis. Evolusi ini tidak terjadi dalam semalam, melainkan melalui beberapa fase pertumbuhan yang memiliki karakteristik unik, tantangan berbeda, dan pencapaian signifikan.',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/perkembanganecommerce1.png',
        materiContent: [
            { url: '/perkembanganecommerce1.png', type: 'image' },
            { url: '/perkembanganecommerce2.png', type: 'image' },
            { url: '/perkembanganecommerce3.png', type: 'image' },
            { url: '/perkembanganecommerce4.png', type: 'image' },
            { url: '/perkembanganecommerce5.png', type: 'image' },
            { url: '/perkembanganecommerce6.png', type: 'image' },
            { url: '/perkembanganecommerce7.png', type: 'image' },
            { url: '/perkembanganecommerce8.png', type: 'image' },
            { url: '/perkembanganecommerce9.png', type: 'image' },
            { url: '/perkembanganecommerce10.png', type: 'image' },
            { url: '/perkembanganecommerce11.png', type: 'image' },
            { url: '/perkembanganecommerce12.png', type: 'image' },
            { url: '/perkembanganecommerce13.png', type: 'image' },
            { url: '/perkembanganecommerce14.png', type: 'image' },
            { url: '/perkembanganecommerce15.png', type: 'image' },
        ]
    },
    {
        id: '10',
        title: 'Memahami Search Engine Optimization (SEO)',
        description: 'Memahami, Menerapkan, dan Memanfaatkan Search Engine Optimization.',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/searchoptimization1.png',
        materiContent: [
            { url: '/searchoptimization1.png', type: 'image' },
            { url: '/searchoptimization2.png', type: 'image' },
            { url: '/searchoptimization3.png', type: 'image' },
            { url: '/searchoptimization4.png', type: 'image' },
            { url: '/searchoptimization5.png', type: 'image' },
            { url: '/searchoptimization6.png', type: 'image' },
            { url: '/searchoptimization7.png', type: 'image' },
            { url: '/searchoptimization8.png', type: 'image' },
            { url: '/searchoptimization9.png', type: 'image' },
            { url: '/searchoptimization10.png', type: 'image' },
            { url: '/searchoptimization11.png', type: 'image' },
            { url: '/searchoptimization12.png', type: 'image' },
            { url: '/searchoptimization13.png', type: 'image' },
            { url: '/searchoptimization14.png', type: 'image' },
            { url: '/searchoptimization15.png', type: 'image' },
        ]
    },
    {
        id: '11',
        title: 'Belajar Pemasaran Digital',
        description: 'Pemasaran digital adalah cara kita mempromosikan produk atau jasa melalui internet dan perangkat digital. Bedanya dengan pemasaran biasa, kita tidak perlu memasang iklan di TV atau koran, tapi kita bisa melakukannya di internet!',
        youtubeId: '',
        duration: '',
        type: 'materi',
        thumbnail: '/belajarpemasaran1.png',
        materiContent: [
            { url: '/belajarpemasaran1.png', type: 'image' },
            { url: '/belajarpemasaran2.png', type: 'image' },
            { url: '/belajarpemasaran3.png', type: 'image' },
            { url: '/belajarpemasaran4.png', type: 'image' },
            { url: '/belajarpemasaran5.png', type: 'image' },
            { url: '/belajarpemasaran6.png', type: 'image' },
            { url: '/belajarpemasaran7.png', type: 'image' },
            { url: '/belajarpemasaran8.png', type: 'image' },
            { url: '/belajarpemasaran9.png', type: 'image' },
            { url: '/belajarpemasaran10.png', type: 'image' },
            { url: '/belajarpemasaran11.png', type: 'image' },
            { url: '/belajarpemasaran12.png', type: 'image' },
            { url: '/belajarpemasaran13.png', type: 'image' },

        ]
    },
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
        videoIds: ['7', '3', '4', '5']
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
        currentSlideIndex = 0; // Reset carousel when moving to next video
    }
}

function getPreviousVideo() {
    const currentIndex = videos.findIndex(v => v.id === selectedVideo?.id);
    if (currentIndex > 0) {
        selectedVideo = videos[currentIndex - 1];
        currentSlideIndex = 0; // Reset carousel when moving to previous video
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

// Update the video selection logic to include scrolling
function selectVideo(video: Video) {
    selectedVideo = video;
    hasSelectedVideo = true;
    currentSlideIndex = 0; // Reset carousel to first slide when selecting new video
    
    // Add smooth scrolling behavior
    setTimeout(() => {
        const videoElement = document.querySelector('#selected-video-content');
        if (videoElement) {
            videoElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}
</script>

<div class="flex flex-col">
    
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
                <div class="text-center md:text-4xl text-2xl font-bold">
                    Featured Videos
                </div>

                <div class="flex p-3 md:space-x-4 space-x-2 justify-center w-full">
                    {#each playlists as playlist}
                        <button 
                            class="md:text-base text-xs flex flex-col justify-center p-2 px-4 rounded-full font-semibold transition-colors {selectedPlaylist === playlist.name ? 'bg-yellow-700 text-white' : 'text-black md:border-4 border-2 border-yellow-400 bg-yellow-100 active:scale-95'}"
                            on:click={() => {
                                selectedPlaylist = playlist.name;
                                currentFeaturedPage = 0;
                            }}
                        >
                            {playlist.name}
                        </button>
                    {/each}
                </div>

                <div class="flex md:flex-row flex-col">
                    <button 
                        class="w-1/12 md:flex flex-col justify-center items-center text-3xl font-bold hidden
                            transition-all duration-300
                            {hasPreviousPage 
                                ? 'text-black cursor-pointer hover:scale-125 hover:text-amber-600 active:scale-95' 
                                : 'text-gray-400 cursor-not-allowed opacity-50'}"
                        on:click={previousFeaturedPage}
                        disabled={!hasPreviousPage}
                    >
                        ←
                    </button>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-10/12 w-full mx-auto">
                        {#each currentFeaturedVideos as video}
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div 
                                class="bg-white flex flex-col space-y-2 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-xl hover:bg-yellow-300"
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
                                    <div class="absolute bottom-0 right-0 w-fit flex ml-auto rounded-tl-full px-5 md:text-xl text-base font-bold border-l-8 border-t-8 transition-colors duration-300
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
                    <div class="flex justify-center space-x-2 mt-7 md:hidden">
                        {#each Array(Math.ceil(getPlaylistVideos(selectedPlaylist).length / featuredVideosPerPage)) as _, index}
                            <button 
                                class="w-3 h-3 rounded-full transition-all duration-300 {currentFeaturedPage === index ? 'bg-yellow-700 scale-125' : 'bg-yellow-400 hover:bg-yellow-500'}"
                                on:click={() => currentFeaturedPage = index}
                            />
                        {/each}
                    </div>
                    <div class="flex w-full justify-center md:hidden pt-5 space-x-4">
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

                    <button 
                        class="w-1/12 md:flex flex-col justify-center items-center text-3xl font-bold hidden
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

                <div class=" justify-center space-x-2 py-10 md:flex hidden">
                    {#each Array(Math.ceil(getPlaylistVideos(selectedPlaylist).length / featuredVideosPerPage)) as _, index}
                        <button 
                            class="w-3 h-3 rounded-full transition-all duration-300 {currentFeaturedPage === index ? 'bg-yellow-700 scale-125' : 'bg-yellow-400 hover:bg-yellow-500'}"
                            on:click={() => currentFeaturedPage = index}
                        />
                    {/each}
                </div>

                <!-- Add pagination dots -->
            </div>
        {/if}





        {#if hasSelectedVideo && selectedVideo}
            <div 
                class="flex bg-amber-50 {selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video' ? 'md:flex-row md:p-16 p-5 md:space-y-0 space-y-10 md:space-x-10' : 'flex-col md:p-8 p-0 md:space-y-10 pb-10 '} flex-col"
                id="selected-video-content"
            >
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
                        <div class="flex flex-col p-4 md:p-0">
                            <div class="w-full pb-[56.25%] relative">
                                {#if selectedVideo.materiContent && selectedVideo.materiContent.length > 0}
                                {#if selectedVideo.materiContent[currentSlideIndex].type === 'local-video'}
                                    {#key currentSlideIndex}
                                        <video 
                                            transition:fade={{ duration: 300 }}
                                            class="absolute top-0 left-0 w-full h-full object-contain rounded-xl bg-black"
                                            controls={selectedVideo.materiContent[currentSlideIndex].videoButtons ?? true}
                                            src={selectedVideo.materiContent[currentSlideIndex].url}
                                            autoplay
                                        >
                                            <track kind="captions">
                                            Your browser does not support the video tag.
                                        </video>
                                    {/key}
                                {:else}
                                    {#key currentSlideIndex}
                                        <img 
                                            transition:fade={{ duration: 300 }}
                                            src={selectedVideo.materiContent[currentSlideIndex].url}
                                            alt={`Slide ${currentSlideIndex + 1}`}
                                            class="absolute top-0 left-0 w-full h-full object-contain rounded-xl"
                                        />
                                    {/key}
                                {/if}
                                    <!-- Desktop Carousel Controls -->
                                    <div class="absolute inset-y-0 left-0 md:flex hidden items-center">
                                        <button 
                                            class="bg-black bg-opacity-50 text-white p-2 rounded-r"
                                            on:click={previousSlide}
                                        >
                                            ←
                                        </button>
                                    </div>
                                    <div class="absolute inset-y-0 right-0 md:flex hidden items-center">
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
                            {#if selectedVideo.materiContent && selectedVideo.materiContent.length > 0}
                            <div class="flex justify-center space-x-2 mt-5">
                                {#each selectedVideo.materiContent as _, index}
                                    <div 
                                        class="w-2 h-2 rounded-full {index === currentSlideIndex ? 'bg-black' : 'bg-gray-400'}"
                                    ></div>
                                {/each}
                            </div>
                        {/if}
                            <!-- Mobile Carousel Controls moved below -->
                            <div class="md:hidden flex justify-center space-x-3 pt-5 pb-5">
                                <button 
                                    class="bg-black bg-opacity-50 text-white p-2 rounded-full px-6 hover:scale-105 transition-all duration-300"
                                    on:click={previousSlide}
                                >
                                    ←
                                </button>
                                <button 
                                    class="bg-black bg-opacity-50 text-white p-2 rounded-full px-6 hover:scale-105 transition-all duration-300"
                                    on:click={nextSlide}
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    {/if}
                </div>

                <div class="{selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video' ?  'md:w-1/3 text-center md:text-left' : 'w-full'} flex flex-col space-y-2 md:space-y-4 {selectedVideo.type === 'materi' ? 'items-center text-center px-3' : ''}">
                    <div class="font-semibold md:text-4xl text-xl">{selectedVideo.title}</div>
                    <div class="flex my-2 md:justify-start justify-center {selectedVideo.type === 'materi' ? 'justify-center' : ''}">
                        {#if selectedVideo.type === 'youtube-video' || selectedVideo.type === 'local-video'}
                            <div class="bg-red-100 px-2 md:text-xl text-sm">Video</div>
                            <div class="bg-red-400 px-2 text-red-100 font-bold md:text-xl text-sm">{selectedVideo.duration}</div>
                        {:else}
                            <div class="bg-teal-300 px-2 md:text-xl text-base">Materi Pelatihan</div>
                        {/if}
                    </div>
                    <div class="text-sm md:text-xl font-light break-words">{selectedVideo.description}</div>
                    <div class="flex space-x-4 pt-8 md:justify-start justify-center {selectedVideo.type === 'materi' ? 'justify-center' : ''}">
                        <button 
                            class="bg-amber-400 px-4 py-2 rounded-lg font-semibold disabled:opacity-50 text-sm md:text-base"
                            on:click={getPreviousVideo}
                            disabled={videos.findIndex(v => v.id === (selectedVideo?.id ?? '')) === 0}
                        >
                            Video Sebelumnya
                        </button>
                        <button 
                            class="bg-amber-400 px-4 py-2 rounded-lg font-semibold disabled:opacity-50 text-sm md:text-base"
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
        <div class="flex flex-col py-10 bg-amber-200">
            
            <div class="p-5 hidden md:block">
                <div class="text-2xl md:text-4xl font-bold text-center">Jelajahi Materi Pelatihan Digital Kami</div>
            </div>
            <div class="p-5 block md:hidden">
                <div class="text-2xl md:text-4xl font-bold text-center">Jelajahi Materi<br>Pelatihan Digital Kami</div>
            </div>
            
            <div class="md:p-5 flex justify-center w-full mx-auto relative md:text-base text-sm my-3 md:my-0">
                <input
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Cari materi pelatihan..."
                    class="md:rounded-l-full rounded-l-xl w-1/2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 md:text-base text-sm border-none"
                />
                <button 
                    class="w-fit md:rounded-r-full rounded-r-xl md:px-5 px-3 bg-orange-400 hover:bg-orange-500 transition-colors flex flex-col justify-center items-center font-bold text-white md:text-base text-sm"
                >
                    Cari
                </button>


                <div class="relative pl-4">
                    <button 
                        class="md:border-4 border-2 border-slate-400 w-fit md:mx-5 md:px-0 px-2 flex bg-slate-300 rounded-2xl hover:bg-slate-400 transition-colors"
                        on:click={() => showFilters = !showFilters}
                    >

                        <div class="py-2 w-fit flex flex-col justify-center items-center my-auto md:px-5 px-2">
                            <img src="/page-videopelatihan-sort-icon.png" alt="filter" class="w-6 h-auto">
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


            
            <div class="min-h-[600px]">
                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 p-3 h-fit">
                    {#each paginatedVideos as video}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div 
                            class="flex flex-row bg-yellow-50 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-200 active:scale-95  shadow-md shadow-amber-300"
                            on:click={() => selectVideo(video)}
                        > 
                            <div class="w-full md:w-1/2 border-l-4 md:border-none {video.type === 'materi' ? 'border-teal-300' : 'border-red-200'}">
                                <div class="pb-[56.25%] relative">
                                    <img 
                                        src={video.type === 'youtube-video' 
                                            ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                                            : video.thumbnail || '/thumbnails/default-video.jpg'}
                                        alt={video.title}
                                        class="absolute top-0 left-0 w-full h-full object-cover "
                                    />
                                    <!-- Add mobile-only tag position -->
                                    <div class="absolute bottom-0 left-0 md:hidden borde">
                                        {#if video.type === 'youtube-video' || video.type === 'local-video'}
                                            <div class="flex">
                                                <div class="bg-red-200 px-2 font-light text-xs py-1">Video</div>
                                                <div class="bg-red-400 px-2 text-xs font-bold text-red-100 py-1 rounded-tr-xl">{video.duration}</div>
                                            </div>
                                        {:else}
                                            <div class="bg-teal-300 px-2 font-light text-xs w-fit py-1 rounded-tr-xl">Materi Pelatihan</div>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col w-full md:w-1/2 md:px-5 px-3 p-2 md:space-y-2 justify-center">
                                <div class="font-semibold lg:text-lg md:text-sm text-xs line-clamp-2">{video.title}</div>
                                <div class="border-t border-amber-300 md:hidden my-2"></div>
                                <div class="hidden md:block">
                                    {#if video.type === 'youtube-video' || video.type === 'local-video'}
                                        <div class="flex">
                                            <div class="bg-red-200 px-2 font-light lg:text-base md:text-xs text-xs">Video</div>
                                            <div class="bg-red-400 px-2 lg:text-base md:text-xs text-xs font-bold text-red-100">{video.duration}</div>
                                        </div>
                                    {:else}
                                        <div class="bg-teal-300 px-2 font-light lg:text-base md:text-xs text-xs w-fit">Materi Pelatihan</div>
                                    {/if}
                                </div>
                                <div class="line-clamp-2 lg:text-base md:text-sm text-xs">{video.description}</div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>


            <div class=" bg-amber-100 flex justify-center space-x-2 rounded-2xl w-fit md:text-base text-sm mx-auto p-2 mt-10">
                {#each Array(totalPages) as _, i}
                    <div 
                        class="px-4 py-2 w-fit rounded-xl cursor-pointer font-bold {currentPage === i + 1 ? 'bg-amber-300' : ''}"
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
    /* Remove if not using these elements */
    /* Or add input/textarea elements to your component if needed */
    input, textarea {
        padding: 0.75rem;
    }
</style>