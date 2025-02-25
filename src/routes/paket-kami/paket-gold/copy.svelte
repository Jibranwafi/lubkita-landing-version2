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
        <div class=" p-3 text-center text-lg md:text-2xl italic">
            Paket Gold memberikan Anda akses lengkap ke fitur promosi flashsale, dukungan iklan terintegrasi, dan priority support dengan respons cepat. Dengan 2 keyword SEO kompetitif menengah, paket social media starter (5 Feed + 3 Reels), dan traffic hingga 500 pengunjung/hari, bisnis Anda akan mendapat posisi listing prioritas 2 di marketplace. Lengkap dengan budget iklan Google 15/15 hari dan setup website profesional, paket Gold adalah investasi cerdas untuk membangun presence digital yang kuat.
        </div>



        <div class="mt-20 md:text-4xl text-2xl font-bold text-center bg-slate-100 w-fit mx-auto px-10 py-5 rounded-t-3xl">Fitur yang akan di dapat:</div>





        <div class="flex md:space-x-5 items-start bg-slate-100 p-5 md:flex-row flex-col md:space-y-0 space-y-5">

            
            <div class="flex flex-col w-full md:w-1/2 bg-yellow-200 pl-3 pb-3 rounded-2xl space-y-2">


                
                <div class="flex rounded-t-2xl text-2xl font-bold h-44 justify-start" style="background-image: url('/page-paket-benefit2.png'); background-size: cover; background-position: center;">
                    <div class="bg-yellow-200 w-fit md:text-3xl text-2xl p-5 h-fit rounded-br-2xl">IN MARKETING</div>
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
                            <span class="text-2xl font-semibold py-1 text-left text-yellow-800">Promo (Flashsale & Premium Bandages Gold)</span>
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
                        <div transition:slide={{ duration: 300 }} class="mt-3">
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
                            <span class="text-2xl font-semibold py-1 text-left text-yellow-800">Monitor Performa Real-Time</span>
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
                        <div transition:slide={{ duration: 300 }} class="mt-3">
                            Performa promosi secara langsung melalui dashboard yang menunjukkan jumlah pengunjung, tingkat konversi, nilai rata-rata pesanan, dan sumber traffic. Data ini membantu Anda mengambil keputusan cepat untuk optimasi promosi yang sedang berjalan.
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
                            <span class="text-2xl font-semibold py-1 text-left text-yellow-800">Priority Support dan Dashboard</span>
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
                        <div transition:slide={{ duration: 300 }} class="mt-3">
                            Tim support akan merespon pertanyaan, keluhan, atau bantuan teknis yang Anda butuhkan dalam waktu maksimal 60 menit, sehingga operasional bisnis Anda tidak terganggu terlalu lama.
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
                            <span class="text-2xl font-semibold py-1 text-left text-yellow-800">Prioritas Listing</span>
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
                        <div transition:slide={{ duration: 300 }} class="mt-3">
                            Membantu produk Anda muncul lebih sering di hasil pencarian yang relevan. Sistem akan mengoptimasi kata kunci produk Anda dan menempatkannya di posisi strategis saat pembeli mencari produk serupa.
                        </div>
                    {/if}
                </div>








            </div>

            <div class="flex flex-col md:w-1/2 w-full bg-yellow-200 pl-3 pb-3 rounded-2xl space-y-2 ">
                <div class="flex rounded-t-2xl text-2xl font-bold h-44 justify-start" style="background-image: url('/page-paket-gold-outmarketing-icons.png'); background-size: cover; background-position: center;">
                    <div class="bg-yellow-200 w-fit md:text-3xl text-2xl p-5 h-fit rounded-br-2xl">OUT MARKETING</div>
                </div>
                
                <!-- Social Media Package Content -->
                <div class="p-6 space-y-6 bg-white rounded-xl shadow-md border-2 border-yellow-300 mr-3 ">
                    <h2 class="text-3xl font-bold text-yellow-800 border-b-2 border-yellow-200 pb-3">
                        Social Media and Profile Intensive Class
                    </h2>
                    <p class="text-xl text-yellow-700 bg-yellow-50 p-3 rounded-lg inline-block">
                        (6 Feed, 2 Reels)
                    </p>
                    
                    <p class="text-lg text-gray-700 bg-yellow-50 p-4 rounded-lg">
                        Kami memiliki akun media sosial dengan follower yang cukup besar untuk membantu engagment toko anda.
                    </p>
                    
                    <div class="mt-8 bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                        <h3 class="text-2xl font-bold text-[#4A3419] mb-4">Full-scale social presence:</h3>
                        <ul class="list-none space-y-4 mt-4 text-lg">
                            <li class="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span class="text-yellow-500 text-xl">•</span> 
                                <span class="text-gray-800">6 curated feed posts</span>
                            </li>
                            <li class="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span class="text-yellow-500 text-xl">•</span> 
                                <span class="text-gray-800">2 professional reels</span>
                            </li>
                            <li class="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span class="text-yellow-500 text-xl">•</span> 
                                <span class="text-gray-800">Premium copywriting</span>
                            </li>
                            <li class="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <span class="text-yellow-500 text-xl">•</span> 
                                <span class="text-gray-800">Viral optimization strategy</span>
                            </li>
                        </ul>
                    </div>
                </div>




            </div>


            




        </div>




         <!--
        <div class="flex w-full">
                <div class="flex md:flex-row flex-col w-full justify-center p-10 md:space-x-10 md:p-5">
                    <img 
                        src="/paket-gold-premium1-1.png" 
                        alt="Gold Package Premium Feature 1" 
                        class="md:w-6/12 w-full object-cover"
                    >
                    <img 
                        src="/Paket-gold-premium2.png" 
                        alt="Gold Package Premium Feature 2" 
                        class="md:w-6/12 w-full object-cover"
                    >
                </div>
        </div>
        -->
        <!--
        <div class="border-2 border-black p-5 mt-20 text-center">
            Mengapa memilih paket gold?
        </div>
        <div class="border-2 border-black flex">
            <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 1</div>
            <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 2</div>
            <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 3</div>
            <div class="w-1/4 p-5 bg-yellow-200 border-2 border-black">benefit 4</div>
        </div>
        -->
        <div class="flex justify-center my-10">
            <!--
            <div class="w-1/10 hidden md:flex">
                <img 
                src="/page-paket-gold-man.png" 
                alt="LDR Wallpaper" 
                class="w-full object-contain p-20"
                >
            </div>
            -->
            <div class="flex flex-col items-center w-5/6">
                <!--
                <div class="flex flex-col">
                    <div class="text-center md:text-4xl text-xl font-bold mb-5">Cek katalog kami sekarang!</div>
                    <a href="https://online.fliphtml5.com/mweze/qnik/" target="_blank" rel="noopener noreferrer">
                        <img 
                        src="/salinan-lubkita.png" 
                        alt="Lubkita Logo" 
                        class="w-full rounded-3xl cursor-pointer hover:opacity-90 transition-opacity"
                    />
                </a>
                </div>
                -->
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
            <!--
            <div class="1/10 hidden md:flex">
                <img 
                src="/page-paket-gold-woman.png" 
                alt="LDR Wallpaper" 
                class="w-full h-auto object-contain p-20"
                >
            </div>
            -->
        </div>
        <div class="mt-20 text-center flex mx-auto w-full md:w-1/2">
            <div class="w-1/2 flex flex-col text-right p-4 bg-slate-300 md:rounded-l-3xl hover:bg-slate-200">
                <a href="/paket-kami/paket-platinum">
                    <div class="italic pl-4">Cek juga</div>
                    <div class="italic font-bold bg-slate-100 p-1 my-1 rounded-3xl pr-4">Paket Platinum</div>
                    <div class="italic pl-4">kita!</div>
                </a>
            </div>
            <div class="w-1/2 flex flex-col text-left p-4 bg-orange-300 md:rounded-r-3xl hover:bg-orange-200">
                <a href="/paket-kami/paket-ldr">
                    <div class="italic pl-4">Cek juga</div>
                    <div class="italic font-bold bg-orange-100 p-1 my-1 rounded-3xl pl-4">Paket LDR</div>
                    <div class="italic pl-4">kita!</div>
                </a>
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
</style>

<script>
    import { slide } from 'svelte/transition';
    
    let showPdfModal = false;
    
    let openStates = {
        care: false,
        benefit2: false,
        benefit3: false,
        benefit4: false,
        care2: false,
        benefit2_2: false,
        benefit3_2: false,
        benefit4_2: false
    };

    /** @param {string} key */
    function toggleDropdown(key) {
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
            [key]: !currentState
        };
    }
</script>