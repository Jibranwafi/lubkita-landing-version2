<div class="bg-white md:p-6 flex flex-col">

<div class="flex flex-col">

        <img 
            src="/paket-gold3.png" 
            alt="LDR Wallpaper" 
            class="w-full object-cover rounded-t-2xl"
        >
    <div class="relative">
        <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-white to-transparent md:flex hidden"></div>
        <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-white to-transparent md:flex hidden"></div>
    </div>
    <div class=" p-3 text-center text-3xl md:text-4xl font-bold italic">
        Solusi sempurna untuk bisnis yang siap naik level di dunia digital!
    </div>
    <div class=" p-3 text-center text-base md:text-2xl italic mb-20">
        Paket Gold memberikan Anda akses lengkap ke fitur promosi flashsale, dukungan iklan terintegrasi, dan priority support dengan respons cepat. Dengan 2 keyword SEO kompetitif menengah, paket social media starter (5 Feed + 3 Reels), dan traffic hingga 500 pengunjung/hari, bisnis Anda akan mendapat posisi listing prioritas 2 di marketplace. Lengkap dengan budget iklan Google 15/15 hari dan setup website profesional, paket Gold adalah investasi cerdas untuk membangun presence digital yang kuat.
    </div>

    <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 p-5">
        <div class=" pl-3 md:w-1/2 w-full flex flex-col space-y-3 bg-lime-200 rounded-3xl pb-3">
        
        

            <div class="flex rounded-t-2xl text-2xl font-bold h-64 justify-start" style="background-image: url('/page-paket-benefit2.png'); background-size: cover; background-position: center;">
                <div class="bg-yellow-50 w-fit md:text-3xl text-xl p-5 h-fit rounded-br-2xl rounded-tl-2xl">IN MARKETING</div>
            </div>


            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('care')}
                >
                    <img 
                        src="/page-paket-gold-inmarketing-icons1.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Promo (Flashsale & Premium Bandages Gold)</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.care ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.care}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Di paket Gold, kamu mendapatkan akses penuh ke sistem flash sale dan profil tokomu akan menerima badges Membership Gold dan Verified Seller,yang menandakan toko mu adalah toko terpercaya dengan promo-promo esklusif.
                    </div>
                {/if}
            </div>


            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit2')}
                >
                    <img 
                        src="/page-paket-gold-inmarketing-icons2.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Dashboard Sistem Manajemen Konten (CMS)</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit2 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit2}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Penjual memiliki kemampuan untuk menambahkan produk mereka sendiri ke platform. Ini berarti mereka dapat membuat daftar produk baru, termasuk deskripsi yang detail, gambar, dan kategorisasi, tanpa perlu melewati proses persetujuan yang panjang. Penjual dapat menentukan harga produk mereka secara mandiri. Mereka memiliki otonomi untuk menyesuaikan harga berdasarkan kondisi pasar, persaingan, dan strategi bisnis mereka sendiri.
                    </div>
                {/if}
            </div>

            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit3')}
                >
                    <img 
                        src="/page-paket-gold-inmarketing-icons3.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Prioritas Listing (Daftar Prioritas) & Toko Pilihan</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit3 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit3}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Membantu produk Anda muncul lebih sering di hasil pencarian yang relevan, serta memberikan posisi khusus di halaman kategori produk. Ketika pembeli menjelajahi kategori tertentu, produk Anda akan mendapat slot premium di bagian atas halaman kategori tersebut.
                    </div>
                {/if}
            </div>


            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit4')}
                >
                    <img 
                        src="/page-paket-gold-inmarketing-icons4.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Produk Highlight (Produk Unggulan)</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit4 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit4}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Produk Unggulan (Product Highlight) adalah fitur yang memungkinkan penjual untuk menonjolkan produk-produk terpilih di toko online mereka. Fitur ini memungkinkan produk tertentu mendapatkan penempatan khusus yang lebih menonjol, biasanya di bagian atas toko atau di posisi strategis lainnya.
                    </div>
                {/if}
            </div>










        </div>
        <div class="pl-3 md:w-1/2 w-full flex flex-col space-y-3 bg-yellow-200 rounded-3xl pb-3">
        
        
            <div class="flex rounded-t-2xl text-2xl font-bold h-64 justify-start" style="background-image: url('/page-paket-benefit2.png'); background-size: cover; background-position: center;">
                <div class="bg-yellow-50 w-fit md:text-3xl text-xl p-5 h-fit rounded-br-2xl rounded-tl-2xl">OUT MARKETING</div>
            </div>


            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('care2')}
                >
                    <img 
                        src="/page-paket-gold-outmarketing-icons1.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">SEO (Pengaturan Kata Kunci)</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.care2 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.care2}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Kami hadir dengan solusi SEO yang tepat untuk mendongkrak visibilitas bisnismu di Google! Dalam paket GOLD ini, kamu mendapatkan layanan optimasi untuk 4 kata kunci strategis - 2 kata kunci persaingan rendah dan 2 kata kunci persaingan menengah, yang dirancang khusus untuk memaksimalkan peluang bisnismu muncul di halaman pertama Google!
                    </div>
                {/if}
            </div>


            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit2_2')}
                >
                    <img 
                        src="/page-paket-gold-outmarketing-icons2.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Promosi oleh Google ADS</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit2_2 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit2_2}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Fitur "Promosi oleh Google" dalam paket GOLD memberikan layanan periklanan Google Ads dengan detail sebagai berikut: <b>DAPATKAN BUDGET 1JT/15 HARI UNTUK PROMOSI BISNISMU DI GOOGLE! </b>
                    </div>
                {/if}
            </div>

            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit3_2')}
                >
                    <img 
                        src="/page-paket-gold-outmarketing-icons3.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Pilihan Template Design Promosi</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit3_2 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit3_2}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Tampil menarik di dunia digital tak perlu lagi ribet dan mahal! Paket Template Design Promosi kami hadir dengan koleksi lengkap template profesional yang siap pakai untuk semua kebutuhan promosimu. Dari feed Instagram yang eye-catching, banner marketplace yang menarik klik, hingga design email marketing yang bikin customer penasaran - semuanya ada dalam satu paket lengkap!
                    </div>
                {/if}
            </div>


            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit4_2')}
                >
                    <img 
                        src="/page-paket-gold-outmarketing-icons4.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Repost Video Profile 60 Detik</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit4_2 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit4_2}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Media sosial kami, baik Instagram dan TikTok telah memiliki banyak pengikut secara online. Nikmati pengalaman video profil toko/produk anda di posting ulang oleh media sosial kami dengan banyak pengikut, yang hal ini akan meningkatkan jumlah orang yang menyaksikan, menyukai, dan membagikan konten video profile anda.
                    </div>
                {/if}
            </div>





            <div class="accordion-item bg-yellow-50 border-yellow-300 p-4 mr-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <button 
                    class="w-full flex items-center gap-3"
                    on:click={() => toggleDropdown('benefit5_2')}
                >
                    <img 
                        src="/page-paket-gold-outmarketing-icons5.png" 
                        alt="Weezer Symbol" 
                        class="w-[10%] aspect-square object-contain p-1"
                    />
                    <div class="flex-1 border-b border-slate-300 flex items-center justify-between">
                        <span class="md:text-2xl text-base font-semibold py-1 text-left text-yellow-800 ">Social Media</span>
                        <svg 
                            class="h-6 w-6 transition-transform duration-300 {openStates.benefit5_2 ? 'rotate-180' : ''}"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                
                {#if openStates.benefit5_2}
                    <div transition:slide={{ duration: 300 }} class="mt-3 md:text-base text-sm">
                        Kami memiliki akun media sosial dengan follower yang cukup besar untuk membantu engagment toko anda dengan, 5 curated konten feed posts (Beranda), 3 professional konten video reels, Premium copywriting (Naskah Konten Premium), Viral optimization strategy" (Pengoptimalan Strategi Viral).
                    </div>
                {/if}
            </div>


        
        
        </div>
    </div>


    <div class="mt-10 p-10 py-56 text-center flex flex-col space-y-4" style="background-image: url('/page-paket-gold-mapicon2.png'); background-size: cover; background-position: center;"> 
        <div class="md:text-5xl font-bold italic text-xl">
            PEMASARAN EKSKLUSIF<br>BISNIS ANDA MELALUI PAKET GOLD
        </div>
        <div class="md:text-xl text-sm italic font-light">
            Kembangkan jangkauan pengenalan produk anda demi kemajuan ekonomi bersama.
        </div>
    </div>


    
    {#if mounted}
        <div class="my-10 px-4">
            <Carousel
                particlesToShow={width >= 768 ? 3 : 1}
                particlesToScroll={1}
                autoplay={shouldEnableCarousel()}
                autoplayDuration={10000}
                arrows={shouldEnableCarousel()}
                dots={shouldEnableCarousel()}
                let:loaded
            >
                <div class="carousel-item p-4">
                    <img 
                        src="/page-paket-gold-keunggulan1.png" 
                        alt="Transformasi Visual" 
                        class="w-full h-auto object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-xl font-bold mb-2">💫 Transformasi Visual</h3>
                    <p class="text-gray-600">
                        Produk lokal Anda tampil profesional dan modern dengan Template Visual Branding dan deskripsi produk yang menjual dan SEO-friendly.
                    </p>
                </div>

                <div class="carousel-item p-4">
                    <img 
                        src="/page-paket-gold-keunggulan2.png" 
                        alt="Jangkauan Tanpa Batas" 
                        class="w-full h-auto object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-xl font-bold mb-2">🚀 Jangkauan Tanpa Batas</h3>
                    <p class="text-gray-600">
                        Jaringan Akses Nasional dengan sistem distribusi terintegrasi, peluang ekspansi pasar yang luas, dan koneksi dengan pembeli di seluruh Indonesia.
                    </p>
                </div>

                <div class="carousel-item p-4">
                    <img 
                        src="/page-paket-gold-keunggulan3.png" 
                        alt="Keunggulan Platform" 
                        class="w-full h-auto object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-xl font-bold mb-2">🌐 Keunggulan Platform</h3>
                    <p class="text-gray-600">
                        Interface yang mudah digunakan dengan sistem pembayaran yang aman.
                    </p>
                </div>
            </Carousel>
        </div>
    {/if}


    <div class="flex justify-center my-10">
        <div class="flex flex-col items-center w-5/6">

            <a href="https://www.lubkita.com/landing_page/register" class="flex flex-col justify-center md:mt-10 mt-5">
                <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg uppercase tracking-wider text-lg">
                    Daftar Membership Gold Sekarang
                </button>
            </a>
            <button 
                on:click={() => showPdfModal = true} 
                class="inline-flex items-center gap-2 bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6 py-2 rounded-full mt-6 transition-all duration-200 font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Lihat Panduan Membership
            </button>
        </div>
    </div>
</div>             
</div>

{#if showPdfModal}
<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg w-full max-w-4xl">
        <div class="flex justify-between items-center p-4 ">
            <h3 class="md:text-xl text-sm font-semibold bg-yellow-200 p-2 rounded-lg">Panduan Membership Gold</h3>
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
                src="/panduan-membership-gold2.pdf"
                title="Panduan Membership PDF"
                class="w-full h-full"
            ></iframe>
        </div>
    </div>
</div>
{/if}

<style>
/* Svelte scopes styles automatically, no need for scoped attribute */

input, textarea {
@apply p-3;
}

:global(.carousel-item) {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
    transition: transform 0.2s;
}

:global(.carousel-item:hover) {
    transform: translateY(-4px);
}

/* Add styles for disabled carousel state */
:global(.carousel-disabled) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
</style>

<script lang="ts">
import { slide } from 'svelte/transition';
import Carousel from 'svelte-carousel';
import { onMount } from 'svelte';

let width: number;
let showPdfModal = false;
let mounted = false;

// Number of carousel items - update this if you change the number of items
const TOTAL_ITEMS = 3;

function shouldEnableCarousel() {
    // Enable carousel if:
    // 1. Screen is mobile (width < 768) OR
    // 2. Number of items is more than 3
    return width < 768 || TOTAL_ITEMS > 3;
}

onMount(() => {
    mounted = true;
    width = window.innerWidth;
    window.addEventListener('resize', () => {
        width = window.innerWidth;
    });

    return () => {
        window.removeEventListener('resize', () => {
            width = window.innerWidth;
        });
    };
});

let openStates = {
    care: false,
    benefit2: false,
    benefit3: false,
    benefit4: false,

    care2: false,
    benefit2_2: false,
    benefit3_2: false,
    benefit4_2: false,
    benefit5_2: false
};

/** @param {string} key */
function toggleDropdown(key: keyof typeof openStates): void {
    let currentState = false;
    if (key === 'care') currentState = openStates.care;
    else if (key === 'benefit2') currentState = openStates.benefit2;
    else if (key === 'benefit3') currentState = openStates.benefit3;
    else if (key === 'benefit4') currentState = openStates.benefit4;
    
    else if (key === 'care2') currentState = openStates.care2;
    else if (key === 'benefit2_2') currentState = openStates.benefit2_2;
    else if (key === 'benefit3_2') currentState = openStates.benefit3_2;
    else if (key === 'benefit4_2') currentState = openStates.benefit4_2;

    openStates = {
        care: false,
        benefit2: false,
        benefit3: false,
        benefit4: false,
        care2: false,
        benefit2_2: false,
        benefit3_2: false,
        benefit4_2: false,
        benefit5_2: false,
        [key]: !currentState
    };
}
</script>