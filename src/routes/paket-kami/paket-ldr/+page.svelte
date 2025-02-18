<div class="bg-orange-100 flex flex-col">

<div class="flex flex-col">
        <img 
            src="/paket-ldr2.png" 
            alt="LDR Wallpaper" 
            class="w-full object-cover"
        >
        <div class="relative">
        <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent md:flex hidden"></div>
        <div class="absolute inset-x-0 bottom-0 md:h-64 h-24 bg-gradient-to-t from-orange-100 to-transparent md:flex hidden"></div>
    </div>
    <div class=" px-10 text-center text-3xl md:text-4xl font-bold italic">
        Digitalisasikan Bisinis Anda Sekarang Juga
    </div>
    <div class=" p-3 text-center text-lg md:text-2xl italic md:px-16">
        <br><br>LDR (Lumbung Digital Rakyat) hadir sebagai pionir transformasi digital yang membangun jembatan kokoh antara potensi desa dengan pasar modern melalui Lubkita.com! Sebagai agen resmi, kami membawa misi besar untuk memperkuat ketahanan pangan nasional dan memberdayakan ekonomi kerakyatan melalui digitalisasi yang tepat guna.<br><br>
        Kami tidak hanya memberikan akses teknologi, tapi juga pendampingan lengkap - dari pelatihan digital marketing hingga akses pendanaan - yang memungkinkan petani dan UMKM desa memasarkan produknya ke seluruh Indonesia dengan mudah dan menguntungkan.<br><br>
        Dengan platform canggih Lubkita.com, kami menghapus kendala jarak dan rantai distribusi yang merugikan, membuka jalan bagi produk unggulan desa untuk bersaing di pasar nasional bahkan internasional. Mari bergabung dalam revolusi digital ini dan jadilah bagian dari gerakan yang mengubah wajah pertanian dan UMKM Indonesia menjadi lebih modern, efisien, dan menguntungkan - karena masa depan Indonesia ada di tangan kita!<br><br>
    </div>


    <div class=" w-full flex flex-col">
        <div class="text-center md:text-4xl text-xl mt-10 bg-orange-200 w-fit mx-auto px-10 py-5 rounded-t-3xl font-extralight shadow-2xl shadow-slate-500">Fitur yang akan anda dapat:</div>
        <div class="bg-orange-200">
            <div class="px-3 md:px-10 pb-5 pt-10">
            <div class="grid grid-cols-2 md:grid-cols-4 w-full md:h-[60vh] h-[100vh] md:gap-0 gap-2">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div class="flex flex-col cursor-pointer hover:bg-slate-300 transition-colors relative group" 
                    on:click={() => selectedOption = 'pelatihan'}
                    class:selected={selectedOption === 'pelatihan'}>
                    <img 
                        src="/page-paket-ldr-pelatihandigital.png" 
                        alt="Pelatihan Digital Background" 
                        class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                        class:brightness-50={selectedOption !== 'pelatihan'}
                        class:brightness-100={selectedOption === 'pelatihan'}
                    />
                    <div class="md:text-xl text-base text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Pelatihan<br>Digital
                    </div>
                    <div class="text-sm md:text-base font-light text-left p-4 bg-white/90 text-white transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:bg-opacity-90"
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
                        src="/page-paket-ldr-pemasarandigital.png" 
                        alt="Pelatihan Digital Background" 
                        class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                        class:brightness-50={selectedOption !== 'pemasaran'}
                        class:brightness-100={selectedOption === 'pemasaran'}
                    />
                    <div class="md:text-xl text-base text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Usaha<br>Pemasaran Digital
                    </div>
                    <div class="text-sm md:text-base text-left p-4 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
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
                    <div class="md:text-xl text-base text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 md:rounded-br-3xl rounded-br-xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Membangun<br>Jaringan
                    </div>
                    <div class="text-sm md:text-base text-left p-4 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
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
                    <div class="md:text-xl text-base text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                        Pendampingan<br>UMKM Digital
                    </div>
                    <div class="text-sm md:text-base text-left p-4 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-orange-700 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
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
            <div class="bg-orange-300 w-full grid grid-cols-2 md:grid-cols-3 md:p-10 p-3 md:gap-4 gap-2 ">
                <div class="flex md:h-44 h-20 bg-orange-200 p-1 hover:shadow-lg hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[-5px] transition-all duration-300 ease-out">
                    <div class="p-4 bg-orange-700 aspect-square rounded-r-3xl">
                        <img src="/page-paket-ldr-icon-mitralubkita.png" alt="Mitra Lubkita" class="w-full h-full object-contain">
                    </div>
                    <div class="text-orange-700 w-4/5 h-full flex flex-col justify-center font-light md:text-2xl text-sm pl-3">Mitra Lubkita.com</div>
                </div>
                <div class="flex md:h-44 h-20 bg-orange-200 p-1 hover:shadow-lg hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[-5px] transition-all duration-300 ease-out">
                    <div class="p-4 bg-orange-700 aspect-square rounded-r-3xl shadow-r">
                        <img src="/page-paket-ldr-icon-tv32.png" alt="TV 32 inch" class="w-full h-full object-contain">
                    </div>
                    <div class="text-orange-700 w-4/5 h-full flex flex-col justify-center font-light md:text-2xl text-sm pl-3">TV 32 inch</div>
                </div>
                <div class="flex md:h-44 h-20 bg-orange-200 p-1 hover:shadow-lg hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[-5px] transition-all duration-300 ease-out">
                    <div class="p-4 bg-orange-700 aspect-square rounded-r-3xl shadow-r">
                        <img src="/page-paket-ldr-icon-setpc.png" alt="1 set PC" class="w-full h-full object-contain">
                    </div>
                    <div class="text-orange-700 w-4/5 h-full flex flex-col justify-center font-light md:text-2xl text-sm pl-3">1 set PC</div>
                </div>
                <div class="flex md:h-44 h-20 bg-orange-200 p-1 hover:shadow-lg hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[-5px] transition-all duration-300 ease-out">
                    <div class="p-4 bg-orange-700 aspect-square rounded-r-3xl shadow-r">
                        <img src="/page-paket-ldr-icon-webcam.png" alt="Webcam" class="w-full h-full object-contain">
                    </div>
                    <div class="text-orange-700 w-4/5 h-full flex flex-col justify-center font-light md:text-2xl text-sm pl-3">Webcam</div>
                </div>
                <div class="flex md:h-44 h-20 bg-orange-200 p-1 hover:shadow-lg hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[-5px] transition-all duration-300 ease-out">
                    <div class="p-4 bg-orange-700 aspect-square rounded-r-3xl shadow-r">
                        <img src="/page-paket-ldr-icon-pelatihan.png" alt="Pelatihan Digital" class="w-full h-full object-contain">
                    </div>
                    <div class="text-orange-700 w-4/5 h-full flex flex-col justify-center font-light md:text-2xl text-sm pl-3">Pelatihan Digital<br>3 Hari </div>
                </div>
                <div class="flex md:h-44 h-20 bg-orange-200 p-1 hover:shadow-lg hover:shadow-slate-700 md:hover:translate-y-[-10px] hover:translate-y-[-5px] transition-all duration-300 ease-out">
                    <div class="p-4 bg-orange-700 aspect-square rounded-r-3xl shadow-r">
                        <img src="/page-paket-ldr-icon-fasilitaszoom.png" alt="Fasilitas Zoom" class="w-full h-full object-contain">
                    </div>
                    <div class="text-orange-700 w-4/5 h-full flex flex-col justify-center font-light md:text-2xl text-sm pl-3">Fasilitas Zoom</div>
                </div>
                <div class="md:col-span-3 col-span-2 border-2 border-black">
                    <div class="bg-orange-200 md:w-1/2 mx-auto w-full">
                        <img src="/page-paket-ldr-icon-paketgold.png" alt="Paket Gold" class="w-full h-full object-contain">
                        <div class="text-center text-2xl font-bold">paket gold</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="flex w-full">
        
        
        <div class="flex flex-col mx-auto w-full px-5 pt-10">
            <a href="/pendaftaran/LDR0A" class="text-xl md:text-3xl text-center p-1 md:p-3 bg-yellow-400 rounded-2xl font-bold w-full flex justify-center mx-auto mt-10">
                Daftar Paket LDR Sekarang!
            </a>
        </div>
    </div>
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
    <div class="mt-20 text-center flex mx-auto w-full md:w-1/2">
        <div class="w-1/2 flex flex-col text-right p-4 bg-yellow-300 md:rounded-l-3xl hover:bg-yellow-200">
        <a href="/paket-kami/paket-gold">
                <div class="italic pr-4">Cek juga</div>
                <div class="italic font-bold bg-yellow-100 p-1 my-1 rounded-3xl pr-4">Paket Gold</div>
                <div class="italic pr-4">kita!</div>
        </a>
        </div>
        <div class="w-1/2 flex flex-col text-left p-4 bg-slate-300 md:rounded-r-3xl hover:bg-slate-200">
            <a href="/paket-kami/paket-platinum">
            <div class="italic pl-4">Cek juga</div>
            <div class="italic font-bold bg-slate-100 p-1 my-1 rounded-3xl pl-4">Paket Platinum</div>
            <div class="italic pl-4">kita!</div>
            </a>
        </div>
    </div>
</div>             
</div>

<script lang="ts">
    let selectedOption: 'pelatihan' | 'pemasaran' | 'jaringan' | 'pendampingan' = 'pelatihan';
    
    const menuContent = {
        pelatihan: "Dapatkan pelatihan komprehensif tentang digital marketing, manajemen bisnis online, dan strategi pemasaran digital yang akan membawa bisnis Anda ke level berikutnya.",
        pemasaran: "Perluas jangkauan bisnis Anda dengan strategi pemasaran digital yang efektif. Kami membantu Anda memanfaatkan berbagai platform digital untuk meningkatkan visibilitas dan penjualan.",
        jaringan: "Bergabunglah dengan komunitas bisnis yang luas dan bangun koneksi yang berharga. Akses ke jaringan mitra bisnis, supplier, dan pelanggan potensial di seluruh Indonesia.",
        pendampingan: "Dapatkan bimbingan eksklusif dari tim ahli kami dalam mengembangkan bisnis digital Anda. Konsultasi regular dan pendampingan intensif untuk memastikan kesuksesan transformasi digital."
    };
</script>