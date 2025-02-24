<div class="flex flex-col">
    <div 
        class="flex flex-col w-full bg-center bg-no-repeat bg-cover h-auto min-h-[100vh]"
        style="background-image: url('/page-ldr-headerwallpaper.png');"
    >
        <div class=" rounded-r-3xl bg-[#c3ad12]/85 my-auto md:w-1/2 w-4/5 p-5 md:p-10">
        <div class="font-bold md:text-5xl text-3xl text-white ">LUMBUNG DIGITAL RAKYAT</div>

        <div class="flex flex-col space-y-4 md:my-10 my-6">
            <div class="md:text-xl text-sm font-light text-white">
            Lumbung Digital Rakyat (LDR) Mitra sukses pengusaha desa, dalam proses digitalisasi pasar. Lumbung Digital Rakyat (LDR), kunci sukses dalam memperluas jangkauan bisnis anda di Lubkita.com, platform dikhususkan untuk mengembangkan memberdayakan ekonomi lokal dalam digitalisasi dan pelatihan.
            </div>
            <div class="md:text-xl text-sm font-light text-white">
            LDR memberikan dukungan teknis dan pelatihan digital, memastikan pengusaha desa dapat memanfaatkan teknologi dengan efektif untuk mengembangkan bisnis mereka.
            </div>
        </div>
        </div>
    </div>

    <!--
    <div class="absolute inset-x-0 bottom-0 md:h-44 h-24 bg-gradient-to-t from-amber-100 to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 md:h-44 h-24 bg-gradient-to-t from-amber-100 to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 md:h-24 h-24 bg-gradient-to-t from-amber-100 to-transparent"></div>

    <div class="bg-amber-100 p-10 flex flex-col ">
        <div class="flex flex-col mb-10 space-y-2 w-2/3 mx-auto">
        <div class="text-5xl font-bold text-center">HUB BISNIS KREATIF LDR</div>
        <div class="text-xl font-light text-center">
            LDR memberikan dukungan teknis dan pelatihan digital, memastikan pengusaha desa dapat memanfaatkan teknologi dengan efektif untuk mengembangkan bisnis mereka.
        </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 w-full md:h-[60vh] h-[90vh] md:gap-0 gap-2">

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
                <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                    Pelatihan<br>Digital
                </div>
                <div class="text-xs md:text-xl font-light text-left md:p-4 p-2 bg-white/90 text-white transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:bg-opacity-90"
                    class:opacity-0={selectedOption !== 'pelatihan'}
                    class:translate-y-full={selectedOption !== 'pelatihan'}>
                    {menuContent.pelatihan}
                </div>
            </div>






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
                <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                    Usaha<br>Pemasaran Digital
                </div>
                <div class="text-xs md:text-xl text-left md:p-4 p-2 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
                    class:opacity-0={selectedOption !== 'pemasaran'}
                    class:translate-y-full={selectedOption !== 'pemasaran'}>
                    {menuContent.pemasaran}
                </div>
            </div>




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
                <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 md:rounded-br-3xl rounded-br-xl group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                    Membangun<br>Jaringan
                </div>
                <div class="text-xs md:text-xl text-left md:p-4 p-2 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
                    class:opacity-0={selectedOption !== 'jaringan'}
                    class:translate-y-full={selectedOption !== 'jaringan'}>
                    {menuContent.jaringan}
                </div>
            </div>





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
                <div class="md:text-xl text-sm text-left font-bold hover:text-white transition-colors relative z-10 text-white w-fit p-2 md:p-5 rounded-br-3xl group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90">
                    Pendampingan<br>UMKM Digital
                </div>
                <div class="text-xs md:text-xl text-left md:p-4 p-2 bg-white/90 text-black transition-all duration-300 absolute bottom-0 left-0 right-0 group-[.selected]:bg-[#c3ad12]/85 group-[.selected]:text-white group-[.selected]:bg-opacity-90"
                    class:opacity-0={selectedOption !== 'pendampingan'}
                    class:translate-y-full={selectedOption !== 'pendampingan'}>
                    {menuContent.pendampingan}
                </div>
            </div>
        </div>
    </div>
    <div class="bg-red-100 py-64">
        <div class="text-5xl font-bold text-center">DAMPAK LDR TERHADAP BISNIS ANDA</div>
    </div>
    -->

    <!--
    <div class="flex flex-col my-10 px-5 space-y-3">
        <div>
        <div class="text-5xl font-bold text-center uppercase">Dampak LDR Terhadap Bisnis Anda</div>
        </div>
        <div class="flex bg-orange-200 py-4">
            <img class="w-1/2 h-[30vh] bg-red-500 object-cover" src="/page-ldr-pasarluas.png" alt="Lumbung Digital Rakyat">
            <div class="w-1/2 flex flex-col p-5">
                <div class="text-2xl font-bold">Pasar yang Luas</div>
                <div class="text-lg font-light">Kesempatan untuk mendapatkan pasar berbagai daerah di seluruh Indonesia</div>
            </div>
        </div>
        <div class="flex bg-orange-200 py-4">
            <div class="w-1/2 flex flex-col p-5">
                <div class="text-2xl font-bold">Keuntungan Semakin Banyak</div>
                <div class="text-lg font-light">Dengan menjangkau pasar yang luas, kalian bisa mendapatkan keuntungan yang semakin banyak</div>
            </div>
            <div class="w-1/2 bg-red-500">image</div>
        </div>
        <div class="flex bg-orange-200 py-4">
            <div class="w-1/2 bg-red-500">image</div>
            <div class="w-1/2 flex flex-col p-5">
                <div class="text-2xl font-bold">Pelatihan dan Inovasi</div>
                <div class="text-lg font-light">Bisnis akan mendapatkan pelatihan dan invoasi agar produk selalu bisa terjual</div>
            </div>
        </div>
        <div class="flex bg-orange-200 py-4">
            <div class="w-1/2 flex flex-col p-5">
                <div class="text-2xl font-bold">Fleksibilitas dan Skalabilitas</div>
                <div class="text-lg font-light">mengelola inventaris dan menyesuaikan stok dengan cepat sesuai permintaan pasar tanpa perlu memperbesar ruang penyimpanan fisik.</div>
            </div>
            <div class="w-1/2 bg-red-500">image</div>
        </div>
        <div class="flex bg-orange-200 py-4">
            <div class="w-1/2 bg-red-500">image</div>
            <div class="w-1/2 flex flex-col p-5">
                <div class="text-2xl font-bold">Pengurangan Biaya Operasional</div>
                <div class="text-lg font-light">Tidak perlu membuka toko fisik, mengurangi kebutuhan akan staf, dan meminimalkan biaya pemasaran tradisional.</div>
            </div>
        </div>
    </div>
    -->
</div>

<style>
  /* Svelte scopes styles automatically, no need for scoped attribute */
  input, textarea {
    @apply p-3;
  }
</style>

<script lang="ts">
    let selectedOption: 'pelatihan' | 'pemasaran' | 'jaringan' | 'pendampingan' = 'pelatihan';
    let isWebcamSelected = false;
    
    const menuContent = {
        pelatihan: "Memberikan pelatihan untuk petani dan pelaku usaha mikro dalam mengelola hasil tani, produksi, dan pemasaran menggunakan teknologi digital.",
        pemasaran: "Membantu pelaku usaha desa memasarkan produk melalui Lubkita.com dan platform e-commerce lainnya, termasuk pelatihan pemasaran digital dan pengelolaan transaksi online.",
        jaringan: "Membangun jaringan antar pelaku usaha desa untuk berbagi pengalaman, informasi, dan memperluas kolaborasi bisnis.",
        pendampingan: "Menyediakan layanan pendampingan dan bimbingan ekslusif untuk mengelola usaha dan meningkatkan kesempatan untuk meraih keuntungan yang lebih besar."
    };
</script>