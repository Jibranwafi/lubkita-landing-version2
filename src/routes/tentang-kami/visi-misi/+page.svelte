<div class="min-h-screen py-6 bg-cover bg-center bg-no-repeat md:px-0 " style="background-image: url('/page-visimisi-background.png')">
    <div class="flex justify-end">
        <div class="bg-yellow-300 bg-gradient-to-t text-black px-6 py-5 rounded-l-full mb-8 md:w-1/3 w-1/2">
            <h1 class="text-4xl font-bold">Visi & Misi</h1>
        </div>
    </div>
<div class="max-w-7xl mx-auto">
    <!-- Header -->

    <div class="flex flex-col md:flex-row gap-8">
        <!-- Vision Section -->
        <div class="flex flex-col gap-8 md:w-1/2 md:px-0 px-6">
            <div class="bg-white rounded-lg shadow-lg px-6 pt-6 h-fit bg-opacity-80">
                <h2 class="text-3xl font-bold mb-4 text-center">Visi</h2>
                <div class="flex justify-center mb-4">
                    <div class="flex">
                        {#each Array(5) as _, i}
                        <span class="text-yellow-500 text-2xl">★</span>
                        {/each}
                    </div>
                </div>
                <p class="text-gray-700 text-center md:text-lg pb-10">
                Menjadi penyedia dan penggerak utama produk pangan berkualitas serta
                infrastruktur logistik berteknologi tinggi untuk mendukung ketahanan pangan
                nasional dan mendorong kemandirian ekonomi masyarakat Indonesia
                melalui inovasi dan digitalisasi yang berkelanjutan.
                </p>
                <div class="w-full">
                    <img 
                        src="/page-visimisi-man2.png" 
                        alt="Visi Misi Illustration" 
                        class="w-3/4 h-auto mx-auto"
                    />
                </div>
            </div>
        </div>

        <!-- Mission Section -->
         <div class="flex flex-col md:w-1/2 md:px-0 px-6">
            <div class="w-full hidden md:block">
                <img 
                    src="/page-visimisi-woman2.png" 
                    alt="Visi Misi Illustration" 
                    class="w-2/3 h-auto mx-auto"
                />
            </div>
            <div class="bg-white rounded-lg shadow-lg px-6 pt-6 h-fit md:pb-16 bg-opacity-80">
                <h2 class="text-3xl font-bold mb-4 text-center">Misi</h2>
                <div class="flex justify-center mb-4">
                    <div class="flex">
                        {#each Array(5) as _, i}
                        <span class="text-yellow-500 text-2xl">★</span>
                        {/each}
                    </div>
                    </div>
                    <ul class="space-y-3 text-gray-700 list-disc pl-5 md:text-lg">
                        <li>Mendukung Program Ketahanan Pangan Nasional</li>
                        <li>Berperan aktif dalam menyediakan produk pangan berkualitas dengan distribusi yang efisien, tepat waktu, dan merata di seluruh Indonesia.</li>
                        <li>Mendorong Pembangunan Ekonomi Kerakyatan</li>
                        <li>Mengoptimalkan sistem digitalisasi pangan untuk mempercepat pemerataan pasokan, mendukung kesejahteraan rakyat, dan menguatkan ekonomi kerakyatan nasional.</li>
                        <li>Memberikan Solusi Kompetitif</li>
                        <li>Menyediakan layanan dan infrastruktur logistik premium dengan teknologi terkini yang mendukung pertumbuhan usaha pemerintah, mitra bisnis, dan masyarakat.</li>
                        <li>Inovasi dan Pertumbuhan Berkelanjutan</li>
                        <li>Terus mencari ide-ide baru untuk mengembangkan produk, teknologi, dan kemitraan yang kuat demi kemajuan sektor pangan nasional.</li>
                        <li>Kolaborasi yang Strategis</li>
                        <li>Bekerja sama dengan pemerintah, asosiasi, dan sektor swasta untuk menciptakan ekosistem pangan yang kokoh, mandiri, dan berkelanjutan.</li>
                    </ul>
                    <div class="w-full pt-5 md:hidden">
                        <img 
                            src="/page-visimisi-woman2.png" 
                            alt="Visi Misi Illustration" 
                            class="w-2/3 h-auto mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* Svelte scopes styles automatically */
</style>