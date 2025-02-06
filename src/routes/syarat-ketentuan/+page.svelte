<script>
  let activeTab = 'lubkita';
</script>

<div class="min-h-screen bg-gray-100 p-6">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="bg-gray-600 text-white py-6 rounded-t-lg">
      <h1 class="text-4xl font-bold text-center">Syarat Dan Ketentuan</h1>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center border-b my-8">
      <div class="inline-flex bg-gray-100 rounded-lg p-1">
        <button 
          on:click={() => activeTab = 'lubkita'}
          class="px-8 py-2 rounded-lg font-medium transition-colors duration-200 {activeTab === 'lubkita' 
            ? 'bg-white text-yellow-500 shadow-sm' 
            : 'text-gray-500 hover:bg-gray-200'}"
        >
          Lubkita
        </button>
        <button 
          on:click={() => activeTab = 'ldr'}
          class="px-8 py-2 rounded-lg font-medium transition-colors duration-200 {activeTab === 'ldr' 
            ? 'bg-white text-yellow-500 shadow-sm' 
            : 'text-gray-500 hover:bg-gray-200'}"
        >
          LDR
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-white shadow-lg rounded-b-lg p-6">
      {#if activeTab === 'lubkita'}
      <div class="mx-auto py-8">
        <h1 class="text-3xl font-bold text-center mb-8">SYARAT DAN KETENTUAN KEANGGOTAAN LUBKITA.COM</h1>

        <!-- Section 1 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">1. KETENTUAN UMUM</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>1.1. Dengan mendaftar dan/atau berlangganan paket keanggotaan di Lubkita.com, pengguna menyatakan setuju untuk tunduk pada Syarat dan Ketentuan ini, serta peraturan lain yang mungkin diberlakukan di kemudian hari.</p>
            
            <p>1.2. Lubkita.com berhak untuk mengubah atau memperbarui Syarat dan Ketentuan kapan saja. Perubahan akan berlaku 3 (tiga) hari setelah diumumkan melalui situs web resmi atau media komunikasi lain yang ditentukan oleh Lubkita.com. Anggota yang tidak menyetujui perubahan berhak mengajukan pembatalan keanggotaan dengan memberikan pemberitahuan tertulis dalam jangka waktu tersebut namun sesuai dengan persetujuan Lubkita.com.</p>
            
            <p>1.3. Semua biaya yang disebutkan dalam dokumen ini dinyatakan dalam mata uang Rupiah Indonesia (IDR)</p>
            
            <p>1.4. Semua biaya yang tercantum dalam Syarat dan Ketentuan ini bersifat eksklusif dan belum termasuk pajak apapun yang diwajibkan berdasarkan peraturan perundang-undangan yang berlaku di Republik Indonesia. Pajak yang dikenakan, termasuk namun tidak terbatas pada Pajak Pertambahan Nilai (PPN) atau pajak lainnya, sepenuhnya menjadi tanggung jawab pengguna dan wajib dibayarkan bersamaan dengan biaya layanan. Kegagalan pengguna untuk memenuhi kewajiban pembayaran pajak tidak membebaskan pengguna dari kewajiban membayar biaya layanan yang telah ditentukan.</p>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">2. PAKET KEANGGOTAAN</h2>
          <div class="space-y-6 md:ml-6 ml-2">
            <div>
              <h3 class="font-medium mb-2">2.1. Keanggotaan Gold (Rp22.000.000 per bulan)</h3>
              <ul class="list-disc pl-5 space-y-1">
                <li>Termasuk layanan promosi: Flashsale dan Bandages.</li>
                <li>Akses ke fitur Iklan, Dukungan Prioritas 2, dan Dashboard.</li>
                <li>Listing Produk Unggulan, Pertemuan Langsung, dan layanan Lubkita Care.</li>
                <li>Hingga 5 postingan media sosial dan 3 reels per bulan.</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-medium mb-2">2.2. Keanggotaan Platinum (Rp28.000.000 per bulan)</h3>
              <ul class="list-disc pl-5 space-y-1">
                <li>Termasuk semua fitur dalam Keanggotaan Gold dan Prioritas 1 untuk listing toko.</li>
                <li>Layanan SEO untuk 4 kata kunci dengan tingkat persaingan tinggi.</li>
                <li>Alokasi anggaran yang lebih tinggi untuk iklan Google hingga Rp3.000.000 per 30 hari.</li>
                <li>Keterlibatan media sosial yang ditingkatkan dengan 15 postingan dan 6 reels per bulan.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Section 3 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">3. KETENTUAN PEMBAYARAN</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>3.1. Biaya setup awal sebesar Rp2.000.000 wajib dibayarkan oleh setiap Pengguna sebelum memperoleh akses ke paket keanggotaan.</p>
            
            <p>3.2. Seluruh biaya keanggotaan harus dilunasi di muka sebelum Pengguna mendapatkan akses ke fasilitas yang disediakan oleh Lubkita.com.</p>
            
            <p>3.3. Pembayaran yang telah dilakukan tidak dapat dikembalikan (non-refundable), kecuali dalam keadaan tertentu yang telah disetujui secara resmi oleh Lubkita.com.</p>
            
            <p>3.4. Setiap transaksi pembayaran hanya dianggap sah jika dilakukan melalui metode pembayaran resmi yang telah ditentukan oleh Lubkita.com.</p>
            
            <p>3.5. Pengeluaran iklan atau layanan tambahan yang melebihi alokasi anggaran akan dikenakan biaya tambahan sebesar 20% dari total biaya tambahan tersebut.</p>
          </div>
        </div>

        <!-- Section 4 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">4. LINGKUP LAYANAN</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>4.1. Lubkita.com akan menyediakan layanan dan fitur sesuai dengan paket keanggotaan yang dipilih oleh Pengguna.</p>
            
            <p>4.2. Lubkita.com tidak memberikan jaminan terhadap hasil layanan tertentu, termasuk namun tidak terbatas pada peningkatan lalu lintas atau konversi penjualan, yang dapat dipengaruhi oleh faktor eksternal di luar kendali Lubkita.com.</p>
            
            <p>4.3. Alokasi lalu lintas maksimum per bulan adalah 500 untuk Keanggotaan Gold dan 1.200 untuk Keanggotaan Platinum.</p>
          </div>
        </div>

        <!-- Section 5 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">5. BATASAN TANGGUNG JAWAB</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>5.1. Lubkita.com tidak bertanggung jawab atas kegagalan anggota dalam mencapai hasil tertentu, termasuk peningkatan pendapatan, keuntungan bisnis, atau hasil promosi lainnya, yang bergantung pada usaha dan faktor eksternal masing-masing anggota.</p>
            
            <p>5.2. Lubkita.com tidak memberikan jaminan hasil usaha tertentu bagi anggota. Keberhasilan anggota sepenuhnya bergantung pada strategi, usaha, dan kondisi eksternal masing-masing.</p>
          </div>
        </div>

        <!-- Section 6 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">6. PEMBATALAN DAN PENGEMBALIAN DANA</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>6.1. Pembatalan keanggotaan hanya dapat diajukan secara tertulis paling lambat 15 (lima belas) hari sebelum tanggal siklus tagihan berikutnya.</p>
            
            <p>6.2. Tidak ada pengembalian dana untuk layanan yang tidak digunakan atau apabila Pengguna mengakhiri perjanjian sebelum masa berlaku layanan berakhir.</p>
          </div>
        </div>

        <!-- Section 7 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">7. TANGGUNG JAWAB DAN GANTI RUGI</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>7.1. Lubkita.com tidak bertanggung jawab atas kehilangan, kerusakan akibat penundaan atau kegagalan pelaksanaan layanan karena keadaan yang diakibatkan oleh keadaan kahar (force majeure), termasuk tetapi tidak terbatas pada bencana alam, gangguan jaringan, atau tindakan pihak ketiga.</p>
            
            <p>7.2. Pengguna setuju untuk mengganti kerugian kepada Lubkita.com atas segala klaim, tuntutan, atau kerugian yang timbul akibat pelanggaran Syarat dan Ketentuan ini oleh pengguna.</p>
          </div>
        </div>

        <!-- Section 8 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">8. KONTAK DAN DUKUNGAN</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>8.1. Tingkat dukungan diberikan berdasarkan paket keanggotaan: Prioritas 1 untuk Keanggotaan Platinum dan Prioritas 2 untuk Keanggotaan Gold.</p>
            
            <p>8.2. Pengguna dapat menghubungi tim dukungan melalui dashboard resmi untuk bantuan teknis atau pertanyaan terkait layanan.</p>
          </div>
        </div>

        <!-- Section 9 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">9. HAK KEKAYAAN INTELEKTUAL</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>9.1. Seluruh materi, konten, dan perangkat lunak yang disediakan oleh Lubkita.com merupakan hak kekayaan intelektual eksklusif milik Lubkita.com, kecuali dinyatakan lain secara tertulis.</p>
            
            <p>9.2. Pengguna dilarang untuk mereproduksi, menyebarluaskan, atau menggunakan materi promosi tanpa izin resmi tertulis dari Lubkita.com.</p>
          </div>
        </div>

        <!-- Section 10 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">10. PERLINDUNGAN DATA PRIBADI</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>10.1. Data pribadi anggota yang dikumpulkan oleh Lubkita.com akan digunakan semata-mata untuk keperluan administrasi dan pelaksanaan program, sesuai dengan Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.</p>
            
            <p>10.2. Lubkita.com tidak akan membagikan data pribadi anggota kepada pihak ketiga tanpa persetujuan tertulis kecuali diwajibkan oleh hukum.</p>
          </div>
        </div>

        <!-- Section 11 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">11. PENYELESAIAN SENGKETA DAN HUKUM YANG BERLAKU</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>11.1. Syarat dan Ketentuan ini diatur berdasarkan hukum Indonesia, khususnya tetapi tidak terbatas pada:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Kitab Undang-Undang Hukum Perdata (KUHPerdata)</li>
              <li>Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik</li>
              <li>Undang-Undang No. 19 Tahun 2016 tentang Perubahan atas Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik</li>
              <li>Undang-Undang No. 1 Tahun 2024 tentang Informasi dan Transaksi Elektronik: Memperbarui dan menyempurnakan ketentuan sebelumnya, termasuk perlindungan data digital, validitas dokumen elektronik, dan penguatan kerangka hukum untuk transaksi elektronik.</li>
              <li>Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi</li>
              <li>Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta</li>
            </ul>
            
            <p>11.2. Segala perselisihan yang timbul dari Syarat dan Ketentuan ini akan diselesaikan terlebih dahulu melalui musyawarah mufakat.</p>
            
            <p>11.3. Apabila tidak tercapai kesepakatan melalui musyawarah, sengketa akan diselesaikan di pengadilan yang berwenang di Indonesia sesuai dengan hukum yang berlaku.</p>
          </div>
        </div>

        <!-- Section 12 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">12. KEADAAN MEMAKSA (FORCE MAJEURE)</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>Keadaan memaksa mencakup tetapi tidak terbatas pada bencana alam, kebakaran, banjir, kerusuhan sipil, pandemi, gangguan sistem teknologi informasi, atau peraturan pemerintah yang tidak terduga. Dalam keadaan memaksa, pelaksanaan kewajiban akan ditunda sampai keadaan tersebut berakhir.</p>
          </div>
        </div>

        <!-- Section 13 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">13. DISCLAIMER PELUANG USAHA</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>13.1. Lubkita.com tidak menjamin keberhasilan finansial, peningkatan keuntungan, atau hasil usaha tertentu dari keanggotaan.</p>
            
            <p>13.2. Anggota memahami bahwa segala bentuk kerugian atau kerusakan yang timbul akibat keanggotaan adalah tanggung jawab penuh anggota.</p>
          </div>
        </div>

        <!-- Section 14 -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">14. PERNYATAAN PERSETUJUAN</h2>
          <div class="space-y-4 md:ml-6 ml-2">
            <p>Dengan mendaftar dan/atau berlangganan keanggotaan di Lubkita.com, pengguna menyatakan bahwa mereka telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan ini tanpa terkecuali.</p>
          </div>
        </div>
      </div>

      {:else}
      <div class="py-8">
        <!-- LDR content here -->
        <h2 class="text-3xl font-bold text-center mb-8">SYARAT DAN KETENTUAN KEANGGOTAAN LUMBUNG DIGITAL RAKYAT</h2>

        <p class="mt-4 font-semibold md:text-xl my-3">1. KETENTUAN UMUM</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Dengan mendaftar sebagai anggota Lumbung Digital Rakyat, pengguna menyatakan setuju untuk tunduk pada Syarat dan Ketentuan ini, serta peraturan lain yang mungkin diberlakukan di kemudian hari.</li>
          <li>Lumbung Digital Rakyat berhak untuk mengubah atau memperbarui Syarat dan Ketentuan kapan saja. Perubahan akan berlaku 3 (tiga) hari setelah diumumkan melalui situs web resmi atau media komunikasi lain yang ditentukan oleh Lumbung Digital Rakyat.</li>
          <li>Semua biaya yang disebutkan dalam dokumen ini dinyatakan dalam mata uang Rupiah Indonesia (IDR).</li>
          <li>Semua biaya yang tercantum dalam Syarat dan Ketentuan ini bersifat eksklusif dan belum termasuk pajak apapun yang diwajibkan berdasarkan peraturan perundang-undangan yang berlaku di Republik Indonesia.</li>
          <li>Kegagalan pengguna untuk memenuhi kewajiban pembayaran pajak tidak membebaskan pengguna dari kewajiban membayar biaya layanan yang telah ditentukan.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">2. FASILITAS MEMBERSHIP</p>
        <p>Dengan membayar biaya keanggotaan sebesar Rp32.000.000, anggota akan menerima fasilitas berikut:</p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 ml-6">
          <li>Kemitraan eksklusif dengan Lubkita.com.</li>
          <li>Satu unit TV 32 inci.</li>
          <li>Satu set perangkat komputer lengkap dengan jaringan internet.</li>
          <li>Webcam untuk kegiatan daring.</li>
          <li>Pelatihan digital intensif selama 3 hari.</li>
          <li>Akses ke fasilitas Zoom untuk kegiatan daring.</li>
          <li>Paket Gold dari Lubkita.com yang meliputi dukungan prioritas dan tampilan utama pada dashboard.</li>
          <li>Logo produk unggulan dan prioritas listing di toko pilihan.</li>
          <li>Layanan iklan, Lubkita Care, dan admin produk.</li>
        </ul>

        <p class="mt-4 font-semibold md:text-xl my-3">3. KETENTUAN PEMBAYARAN</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Biaya keanggotaan harus dilunasi di muka sebelum anggota mendapatkan akses ke fasilitas yang disediakan.</li>
          <li>Tidak ada pengembalian dana untuk pembayaran yang telah dilakukan, kecuali terjadi pembatalan yang disetujui secara resmi oleh pihak Lumbung Digital Rakyat.</li>
          <li>Segala bentuk pembayaran dianggap sah hanya jika dilakukan melalui metode pembayaran resmi yang ditentukan oleh Lumbung Digital Rakyat.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">4. HAK DAN KEWAJIBAN ANGGOTA</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Anggota wajib menjaga seluruh fasilitas yang diberikan dalam kondisi baik dan tidak memperjualbelikan, memindahtangankan, atau menyewakannya tanpa izin tertulis dari Lumbung Digital Rakyat.</li>
          <li>Anggota bertanggung jawab untuk memanfaatkan fasilitas secara optimal sesuai tujuan program, termasuk mengikuti pelatihan yang disediakan.</li>
          <li>Lumbung Digital Rakyat berhak melakukan audit atau pemeriksaan berkala terhadap perangkat yang diberikan, baik secara langsung maupun digital, untuk memastikan kepatuhan terhadap Syarat dan Ketentuan ini.</li>
          <li>Jika terjadi kerusakan atau kehilangan perangkat yang disebabkan oleh kelalaian anggota, biaya perbaikan atau penggantian akan sepenuhnya menjadi tanggung jawab anggota.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">5. BATASAN TANGGUNG JAWAB</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Lumbung Digital Rakyat tidak bertanggung jawab atas kegagalan anggota dalam mencapai hasil tertentu, termasuk peningkatan pendapatan, keuntungan bisnis, atau hasil promosi lainnya, yang bergantung pada usaha dan faktor eksternal masing-masing anggota.</li>
          <li>Lumbung Digital Rakyat tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan fasilitas di luar tujuan yang telah ditentukan.</li>
          <li>Lumbung Digital Rakyat tidak memberikan jaminan hasil usaha tertentu bagi anggota. Keberhasilan anggota sepenuhnya bergantung pada strategi, usaha, dan kondisi eksternal masing-masing.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">6. PEMBATALAN KEANGGOTAAN</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Anggota dapat membatalkan keanggotaan dengan mengajukan permohonan tertulis minimal 90 hari sebelum tanggal efektif pembatalan.</li>
          <li>Lumbung Digital Rakyat berhak membatalkan keanggotaan anggota yang melanggar Syarat dan Ketentuan yang berlaku tanpa kewajiban untuk memberikan kompensasi.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">7. KEKAYAAN INTELEKTUAL</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Semua materi pelatihan, perangkat lunak, dan dokumentasi lain yang disediakan adalah milik eksklusif Lumbung Digital Rakyat.</li>
          <li>Anggota tidak diperbolehkan menggandakan, menyebarluaskan, atau memodifikasi materi pelatihan tanpa izin tertulis dari Lumbung Digital Rakyat.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">8. PERLINDUNGAN DATA PRIBADI</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Data pribadi anggota yang dikumpulkan oleh Lumbung Digital Rakyat akan digunakan semata-mata untuk keperluan administrasi dan pelaksanaan program, sesuai dengan Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.</li>
          <li>Lumbung Digital Rakyat tidak akan membagikan data pribadi anggota kepada pihak ketiga tanpa persetujuan tertulis kecuali diwajibkan oleh hukum.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">9. PENYELESAIAN SENGKETA DAN HUKUM YANG BERLAKU</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Syarat dan Ketentuan ini diatur berdasarkan hukum Indonesia, khususnya tetapi tidak terbatas pada:</li>
          <ul class="list-disc list-inside space-y-2 text-gray-600 ml-6">
            <li>Kitab Undang-Undang Hukum Perdata (KUHPerdata)</li>
            <li>Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik</li>
            <li>Undang-Undang No. 19 Tahun 2016 tentang Perubahan atas Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik</li>
            <li>Undang-Undang No. 1 Tahun 2024 tentang Informasi dan Transaksi Elektronik: Memperbarui dan menyempurnakan ketentuan sebelumnya, termasuk perlindungan data digital, validitas dokumen elektronik, dan penguatan kerangka hukum untuk transaksi elektronik.</li>
            <li>Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi</li>
            <li>Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta</li>
          </ul>
          <li>Segala perselisihan yang timbul dari Syarat dan Ketentuan ini akan diselesaikan terlebih dahulu melalui musyawarah mufakat.</li>
          <li>Apabila tidak tercapai kesepakatan melalui musyawarah, sengketa akan diselesaikan di pengadilan yang berwenang di Indonesia sesuai dengan hukum yang berlaku.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">10. KEADAAN MEMAKSA (FORCE MAJEURE)</p>
        <p>Keadaan memaksa mencakup tetapi tidak terbatas pada bencana alam, kebakaran, banjir, kerusuhan sipil, pandemi, gangguan sistem teknologi informasi, atau peraturan pemerintah yang tidak terduga. Dalam keadaan memaksa, pelaksanaan kewajiban akan ditunda sampai keadaan tersebut berakhir.</p>

        <p class="mt-4 font-semibold md:text-xl my-3">11. DISCLAIMER PELUANG USAHA</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Lumbung Digital Rakyat tidak menjamin keberhasilan finansial, peningkatan keuntungan, atau hasil usaha tertentu dari keanggotaan.</li>
          <li>Anggota memahami bahwa segala bentuk kerugian atau kerusakan yang timbul akibat keanggotaan adalah tanggung jawab penuh anggota.</li>
        </ol>

        <p class="mt-4 font-semibold md:text-xl my-3">12. PERNYATAAN PERSETUJUAN</p>
        <p>Dengan mendaftar dan/atau berlangganan keanggotaan di Lubkita.com, pengguna menyatakan bahwa mereka telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan ini tanpa terkecuali.</p>
      </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Add any Svelte-specific styles here if needed */
</style>