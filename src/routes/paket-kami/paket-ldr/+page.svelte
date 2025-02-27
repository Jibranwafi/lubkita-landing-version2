<div class="bg-orange-100 flex flex-col">
    <div class="relative z-50">
        <slot></slot>
    </div>

    <div class="flex flex-col">
        <div class="flex flex-col relative">
            <img 
                src="/paket-ldr2.png" 
                alt="LDR Wallpaper" 
                class="w-full object-cover h-[vh] md:h-auto"
            >
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent md:flex hidden"></div>
            <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent md:flex hidden"></div>
        </div>
    <div class=" px-10 text-center text-2xl md:text-4xl font-bold italic">
        Digitalisasikan Bisinis Anda Sekarang Juga!
    </div>
    <div class=" p-3 text-center text-sm md:text-2xl italic md:px-16">
        <br><br>LDR (Lumbung Digital Rakyat) hadir sebagai pionir transformasi digital yang membangun jembatan kokoh antara potensi desa dengan pasar modern melalui Lubkita.com! Sebagai agen resmi, kami membawa misi besar untuk memperkuat ketahanan pangan nasional dan memberdayakan ekonomi kerakyatan melalui digitalisasi yang tepat guna.<br><br>
        Kami tidak hanya memberikan akses teknologi, tapi juga pendampingan lengkap - dari pelatihan digital marketing hingga akses pendanaan - yang memungkinkan petani dan UMKM desa memasarkan produknya ke seluruh Indonesia dengan mudah dan menguntungkan.<br><br>
        Dengan platform canggih Lubkita.com, kami menghapus kendala jarak dan rantai distribusi yang merugikan, membuka jalan bagi produk unggulan desa untuk bersaing di pasar nasional bahkan internasional. Mari bergabung dalam revolusi digital ini dan jadilah bagian dari gerakan yang mengubah wajah pertanian dan UMKM Indonesia menjadi lebih modern, efisien, dan menguntungkan - karena masa depan Indonesia ada di tangan kita!<br><br>
    </div>

    <div></div>
    <div class=" w-full flex flex-col">
        <div class="text-center md:text-4xl text-xl mt-10 bg-orange-200 w-fit mx-auto px-10 py-5 rounded-t-3xl font-extralight shadow-2xl shadow-slate-500">HUB Bisnis Kreatif LDR</div>
        <div class="bg-orange-200">
            <div class="px-3 md:px-10 pb-5 pt-10">
            <div class="grid grid-cols-2 md:grid-cols-4 w-full md:h-[60vh] h-[90vh] md:gap-0 gap-2">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div class="flex flex-col cursor-pointer hover:bg-slate-300 transition-colors relative group" 
                    on:click={() => selectedOption = 'pelatihan'}
                    class:selected={selectedOption === 'pelatihan'}>
                    <img 
                        src="/page-paket-ldr-pelatihandigital2.png" 
                        alt="Pelatihan Digital Background" 
                        class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                        class:brightness-50={selectedOption !== 'pelatihan'}
                        class:brightness-100={selectedOption === 'pelatihan'}
                    />
                    <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Pelatihan<br>Digital
                    </div>
                    <div class="text-xs md:text-xl font-light text-left md:p-4 p-2 bg-white/90 text-white transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:bg-opacity-90"
                        class:opacity-0={selectedOption !== 'pelatihan'}
                        class:translate-y-full={selectedOption !== 'pelatihan'}>
                        {menuContent.pelatihan}
                    </div>
                </div>





                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="flex flex-col cursor-pointer hover:bg-slate-300 transition-colors relative group"
                    on:click={() => selectedOption = 'pemasaran'}
                    class:selected={selectedOption === 'pemasaran'}>
                    <img 
                        src="/page-paket-ldr-pelatihandigital.png" 
                        alt="Pelatihan Digital Background" 
                        class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                        class:brightness-50={selectedOption !== 'pemasaran'}
                        class:brightness-100={selectedOption === 'pemasaran'}
                    />
                    <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Usaha<br>Pemasaran Digital
                    </div>
                    <div class="text-xs md:text-xl text-left md:p-4 p-2 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
                        class:opacity-0={selectedOption !== 'pemasaran'}
                        class:translate-y-full={selectedOption !== 'pemasaran'}>
                        {menuContent.pemasaran}
                    </div>
                </div>





                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="flex flex-col cursor-pointer hover:bg-slate-300 transition-colors relative group"
                    on:click={() => selectedOption = 'jaringan'}
                    class:selected={selectedOption === 'jaringan'}>
                    <img 
                        src="/page-paket-ldr-membangunjaringan.png" 
                        alt="Pelatihan Digital Background" 
                        class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                        class:brightness-50={selectedOption !== 'jaringan'}
                        class:brightness-100={selectedOption === 'jaringan'}
                    />
                    <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 md:rounded-br-3xl rounded-br-xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Membangun<br>Jaringan
                    </div>
                    <div class="text-xs md:text-xl text-left md:p-4 p-2 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
                        class:opacity-0={selectedOption !== 'jaringan'}
                        class:translate-y-full={selectedOption !== 'jaringan'}>
                        {menuContent.jaringan}
                    </div>
                </div>





                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="flex flex-col cursor-pointer hover:bg-slate-300 transition-colors relative group"
                    on:click={() => selectedOption = 'pendampingan'}
                    class:selected={selectedOption === 'pendampingan'}>
                    <img 
                        src="/page-paket-ldr-pendampingumkm.png" 
                        alt="Pelatihan Digital Background" 
                        class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                        class:brightness-50={selectedOption !== 'pendampingan'}
                        class:brightness-100={selectedOption === 'pendampingan'}
                    />
                    <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Pendampingan<br>Bisnis Digital
                    </div>
                    <div class="text-xs md:text-xl text-left md:p-4 p-2 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
                        class:opacity-0={selectedOption !== 'pendampingan'}
                        class:translate-y-full={selectedOption !== 'pendampingan'}>
                        {menuContent.pendampingan}
                    </div>
                </div>
            </div>
            </div>
            <div class="text-center md:text-4xl text-xl mt-10 bg-orange-300 w-fit mx-auto px-10 py-5 rounded-t-3xl font-extralight shadow-2xl shadow-slate-500">
                Anda akan mendapatkan:
            </div>


        <div class="flex flex-col bg-orange-300 z-10">
            <div class="flex md:pt-10 md:px-10 md:pb-20 flex-row z-10">





                <div class="md:w-fit w-full grid grid-cols-2 p-3 md:gap-4 gap-2">
                    <div class="flex flex-col bg-orange-200 md:hover:shadow-lg hover:shadow-none md:hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[0px] transition-all duration-300 ease-out pr-5 border-l-8 border-orange-700 md:shadow-xl shadow-slate-500">
                        <div class="flex">
                            <div class="bg-orange-700 md:rounded-br-3xl rounded-br-lg shadow-r w-1/3 md:p-3 p-2 my-auto">
                                <img src="/page-paket-ldr-icon-mitralubkita.png" alt="Mitra Lubkita" class="object-contain w-fit">
                            </div>
                            <div class="w-2/3 md:text-2xl text-xs font-bold text-orange-700 flex flex-col justify-center md:px-5 px-2">Kemitraan Lubkita.com</div>
                        </div>
                        <div class="text-orange-700 h-full flex flex-col justify-center font-light md:text-xl text-xs pl-3 w-full md:py-3 py-5">Kemitraan Lubkita.com agar kita dapat menyediakan bisnis anda dengan seorang admin dari tim kami</div>
                    </div>
                    <div class="flex flex-col bg-orange-200 md:hover:shadow-lg hover:shadow-none md:hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[0px] transition-all duration-300 ease-out pr-5 border-l-8 border-orange-700 md:shadow-xl shadow-slate-500">
                        <div class="flex">
                            <div class="bg-orange-700 md:rounded-br-3xl rounded-br-lg shadow-r w-1/3 md:p-3 p-2 my-auto">
                                <img src="/page-paket-ldr-icon-tv32.png" alt="TV 32 inch" class="object-contain w-fit">
                            </div>
                            <div class="w-2/3 md:text-2xl text-xs font-bold text-orange-700 flex flex-col justify-center md:px-5 px-2">TV 32 inch</div>
                        </div>
                        <div class="text-orange-700 h-full flex flex-col justify-center font-light md:text-xl text-xs pl-3 w-full md:py-3 py-5">TV Monitor 32 inc, utk zoom meeting, pelatihan dan komunikasi dengan tim Lubkita.com</div>
                    </div>
                    <div class="flex flex-col bg-orange-200 md:hover:shadow-lg hover:shadow-none md:hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[0px] transition-all duration-300 ease-out pr-5 border-l-8 border-orange-700 md:shadow-xl shadow-slate-500">
                        <div class="flex">
                            <div class="bg-orange-700 md:rounded-br-3xl rounded-br-lg shadow-r w-1/3 md:p-3 p-2 my-auto">
                                <img src="/page-paket-ldr-icon-setpc.png" alt="1 set PC" class="object-contain w-fit">
                            </div>
                            <div class="w-2/3 md:text-2xl text-xs font-bold text-orange-700 flex flex-col justify-center md:px-5 px-2">1 Set PC</div>
                        </div>
                        <div class="text-orange-700 h-full flex flex-col justify-center font-light md:text-xl text-xs pl-3 w-full md:py-3 py-5">1 set PC lengkap untuk menjalankan kegiatan dropshipping dan mengelola akun Lubkita.com</div>
                    </div>
                    <div class="flex flex-col bg-orange-200 md:hover:shadow-lg hover:shadow-none md:hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[0px] transition-all duration-300 ease-out pr-5 border-l-8 border-orange-700 md:shadow-xl shadow-slate-500">
                        <div class="flex">
                            <div class="bg-orange-700 md:rounded-br-3xl rounded-br-lg shadow-r w-1/3 md:p-3 p-2 my-auto">
                                <img src="/page-paket-ldr-icon-pelatihan.png" alt="Webcam" class="object-contain w-fit">
                            </div>
                            <div class="w-2/3 md:text-2xl text-xs font-bold text-orange-700 flex flex-col justify-center md:px-5 px-2">Pelatihan<br>Digital 3 Hari</div>
                        </div>
                        <div class="text-orange-700 h-full flex flex-col justify-center font-light md:text-xl text-xs pl-3 w-full md:py-3 py-5">Pelatihan 3 hari, pelatihan intensif tentang cara menggunakan Lubkita.com menjadi seller dan mengelola bisnis online.</div>
                    </div>






                    <div class="col-span-2 md:col-span-1 md:hidden">
                        <div class="bg-orange-200 w-full mx-auto flex rounded-3xl flex-col border-8 border-orange-200"> 
                            <img src="/page-paket-ldr-wallpaper-paketgold.png" alt="Paket Gold" class="w-full h-[30vh] object-cover rounded-xl">
                            <div class="relative">
                                <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-200 to-transparent"></div>
                                <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-200 to-transparent md:flex hidden"></div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex items-center">
                                    <div class="w-1/5 border-t-8 border-orange-700"></div>
                                    <div class="bg-orange-700 mx-auto md:px-6 md:py-4 px-4 py-2 rounded-full flex md:space-x-5 space-x-2 w-3/5">
                                        <svg class="md:w-16 w-10 aspect-square" viewBox="0 0 24 24" fill="white">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                        <div class="text-white md:text-2xl font-semibold flex flex-col justify-center text-sm">Membership<br>Gold Lubkita.com</div>
                                    </div>
                                    <div class="w-1/5 border-t-8 border-orange-700"></div>
                                </div>
                                <div class="flex flex-col space-y-2 py-5">
                                    <div class="border-b border-orange-700 font-light text-sm text-orange-700 p-2">Tampilan Utama Dashboard</div>
                                    <div class="border-b border-orange-700 font-light text-sm text-orange-700 p-2">Tampilan Logo Produk Unggulan</div>
                                    <div class="border-b border-orange-700 font-light text-sm text-orange-700 p-2">Prioritas Listing dan Toko Pilihan</div>
                                    <div class="border-b border-orange-700 font-light text-sm text-orange-700 p-2">Support Dalam Pengiklanan Toko dan Produk</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            
                


                <div class="bg-orange-200 w-full rounded-xl border-8 border-orange-200 hidden md:flex md:shadow-xl shadow-slate-500"> 
                    <div class="w-1/3">
                        <img 
                            src="/page-paket-ldr-wallpaper-paketgold.png" 
                            alt="Paket Gold" 
                            class="w-full h-full object-cover rounded-l-2xl"
                        >
                    </div>
                    <div class="flex flex-col w-2/3 border-l-8 border-orange-700">
                        <div class="flex items-center">
                            <div class="bg-orange-700 md:px-6 md:py-4 px-4 py-2 rounded-br-3xl flex md:space-x-5 space-x-2 w-fit">
                                <svg class="md:w-16 w-12 aspect-square" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <div class="text-white md:text-3xl font-semibold flex flex-col justify-center text-base">Membership<br>Gold Lubkita.com</div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2 py-5 text-2xl">
                            <div class=" text-orange-700 border-b border-orange-700 p-3 font-light">Tampilan Utama Dashboard</div>
                            <div class=" text-orange-700 border-b border-orange-700 p-3 font-light">Tampilan Logo Produk Unggulan</div>
                            <div class=" text-orange-700 border-b border-orange-700 p-3 font-light">Prioritas Listing dan Toko Pilihan</div>
                            <div class=" text-orange-700 border-b border-orange-700 p-3 font-light">Support Dalam Pengiklanan Toko dan Produk</div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        </div>
    
        
        <div class="flex md:p-32 py-32 px-4 relative" style="background-image: url('/page-paket-ldr-footerwallpaper4.png')">
            <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-300 to-transparent"></div>
            <div class="w-full flex flex-col justify-center space-y-6">
                <div class="text-white md:text-6xl text-3xl font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    Sebagai mitra LDR,<br>bisnis anda<br>dapat terjangkau<br>di seluruh Nusantara!
                </div>
                <div class="flex flex-col md:w-1/2 w-full space-y-5">
                    <div class="text-white text-sm font-light md:text-xl">
                        Dengan LDR, bisnis anda akan memiliki kemampuan<br>untuk bersaing di pasar nasional dan internasional.
                    </div>
                    <div class="flex w-full gap-4">
                        <a href="/pendaftaran/LDR0A"  class="text-orange-200 md:text-3xl font-bold bg-orange-700 px-4 py-2 rounded-xl uppercase tracking-wider text-center  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 justify-center flex-col w-fit hidden md:flex">
                            daftar sekarang
                        </a>
                        <a href="/pendaftaran/LDR0A"  class="text-orange-200 md:text-3xl font-bold bg-orange-700 px-4 py-2 rounded-xl uppercase tracking-wider text-center  drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex justify-center flex-col w-fit md:hidden">
                            daftar<br>sekarang
                        </a>
                        <a href="/paket-kami/paket-platinum" class="border-y-4 md:text-sm text-xs border-y-slate-600 bg-slate-300 px-4 py-2 rounded-lg text-center text-slate-700 bg-opacity-50 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">Cek juga<br><b><i>paket platinum</i></b> kami</a>
                    </div>
                    
                    
                </div>

            </div>
        </div>
        <!--

        <div class="relative bg-cover bg-center py-12" style="background-image: url('/page-paket-ldr-footerwallpaper3.png')">



            <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-300 to-transparent"></div>

            
            <div class="mt-10 text-center flex mx-auto w-full md:w-full">
                <div class="w-1/6 flex flex-col text-right pr-4 bg-yellow-300 md:rounded-r-full hover:bg-yellow-200 justify-center bg-opacity-70">
                <a href="/paket-kami/paket-gold">
                        <div class="italic pr-4">Cek juga</div>
                        <div class="italic font-bold bg-yellow-100 p-1 my-1 rounded-r-3xl pr-4">Paket Gold</div>
                        <div class="italic pr-4">kita!</div>
                </a>
                </div>
                <div class="w-2/3 flex flex-col space-y-2">
                    <a href="/pendaftaran/LDR0A" class="flex flex-col justify-center mx-auto w-2/3 my-auto">
                        <button class="bg-orange-200 hover:bg-orange-500 text-black hover:text-black font-bold py-6 px-8 transform hover:scale-105 transition-all duration-200 uppercase tracking-wider text-3xl border-y-8 border-orange-300 rounded-2xl bg-opacity-70">
                            Daftar Membership LDR Sekarang!
                        </button>
                    </a>
                    <a href="/pendaftaran/LDR0A" class="flex flex-col justify-center mx-auto w-2/5 my-auto">
                        <button class="bg-orange-700 hover:bg-orange-200 text-white hover:text-black py-2 transform hover:scale-105 transition-all duration-200 tracking-wider text-lg bg-opacity-60 rounded-b-3xl font-light italic">
                            Klik disini untuk mengetahui lebih lanjut
                        </button>
                    </a>
                </div>
                <div class="w-1/6 flex flex-col text-left pl-6 bg-slate-300 md:rounded-l-full hover:bg-slate-200 justify-center bg-opacity-70">
                    <a href="/paket-kami/paket-platinum">
                    <div class="italic pl-4">Cek juga</div>
                    <div class="italic font-bold bg-slate-100 p-1 my-1 rounded-l-3xl pl-4">Paket Platinum</div>
                    <div class="italic pl-4">kita!</div>
                    </a>
                </div>
            </div>
        </div>
        -->
    </div>


</div>             
</div>

<script lang="ts">
    let selectedOption: 'pelatihan' | 'pemasaran' | 'jaringan' | 'pendampingan' = 'pelatihan';
    let isWebcamSelected = false;
    
    const menuContent = {
        pelatihan: "Memberikan pelatihan kepada pelaku usaha mengenai digitalisasi bisnis melalui platform e-commerce grosir Lubkita.com, dan dasar dasar dari digitalisasi pemasaran produk.",
        pemasaran: "Membantu pelaku usaha desa memasarkan produk melalui platform e-commerce Lubkita.com dan media sosial lainnya, membantu mendesain dan memberikan template desain pemasaran produk digital bisnis anda, serta pelatihan pengelolaan transaksi & pemasaran online.",
        jaringan: "Membangun jaringan antar pelaku usaha desa untuk berbagi pengalaman, informasi, dan memperluas kolaborasi bisnis melalui Zoom Meeting antar mitra Lumbung Digital Rakyat.",
        pendampingan: "Menyediakan layanan pendampingan dan bimbingan ekslusif untuk mengelola usaha secara digital dan meningkatkan kesempatan untuk meraih keuntungan yang lebih besar."
    };
</script>