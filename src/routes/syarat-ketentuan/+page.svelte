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
        <div class="space-y-4">
          <h2 class="text-xl font-bold mb-4">Terms & Conditions</h2>
          <p class="text-gray-600 mb-4">
            Selamat datang di www.lubkita.com.<br>
            Syarat & ketentuan yang ditetapkan di bawah ini mengatur pemakaian jasa yang ditawarkan oleh PT. Lumbung Artha Kita terkait penggunaan situs www.lubkita.com. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna di bawah hukum.
          </p>

          <div class="space-y-4">
            <h3 class="font-bold">A. Definisi</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600">
              <li>PT Lumbung Artha Kita adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.lubkita.com, yakni situs pencarian toko dan Barang yang dijual oleh penjual terdaftar. Selanjutnya disebut Lubkita.</li>
              <li>Situs Lubkita adalah www.lubkita.com.</li>
              <li>Syarat & ketentuan adalah perjanjian antara Pengguna dan Lubkita yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Lubkita, serta tata cara penggunaan sistem layanan Lubkita.</li>
              <li>Pengguna adalah pihak yang menggunakan layanan Lubkita, termasuk namun tidak terbatas pada pembeli, penjual maupun pihak lain yang sekedar berkunjung ke Situs Lubkita.</li>
              <li>Pembeli adalah Pengguna terdaftar yang melakukan permintaan atas Barang yang dijual oleh Penjual di Situs Lubkita.</li>
              <li>Penjual adalah Pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran atas suatu Barang kepada para Pengguna Situs Lubkita.</li>
              <li>Barang adalah benda yang berwujud / memiliki fisik Barang yang dapat diantar / memenuhi kriteria pengiriman oleh perusahaan jasa pengiriman Barang.</li>
            </ol>
          </div>
        </div>
      {:else}
      <div class="text-gray-600">
        <!-- LDR content here -->
        <h2 class="text-xl font-bold md:text-xl mb-4">Syarat dan Ketentuan Membership Lumbung Digital Rakyat</h2>

        <p class="mt-4 font-bold md:text-xl my-3">1. Ketentuan Umum</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Dengan mendaftar sebagai anggota Lumbung Digital Rakyat, pengguna menyatakan setuju untuk tunduk pada Syarat dan Ketentuan ini, serta peraturan lain yang mungkin diberlakukan di kemudian hari.</li>
          <li>Lumbung Digital Rakyat berhak untuk mengubah atau memperbarui Syarat dan Ketentuan kapan saja. Perubahan akan berlaku 3 (tiga) hari setelah diumumkan melalui situs web resmi atau media komunikasi lain yang ditentukan oleh Lumbung Digital Rakyat.</li>
          <li>Semua biaya yang disebutkan dalam dokumen ini dinyatakan dalam mata uang Rupiah Indonesia (IDR).</li>
          <li>Semua biaya yang tercantum dalam Syarat dan Ketentuan ini bersifat eksklusif dan belum termasuk pajak apapun yang diwajibkan berdasarkan peraturan perundang-undangan yang berlaku di Republik Indonesia.</li>
          <li>Kegagalan pengguna untuk memenuhi kewajiban pembayaran pajak tidak membebaskan pengguna dari kewajiban membayar biaya layanan yang telah ditentukan.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">2. Fasilitas Membership</p>
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

        <p class="mt-4 font-bold md:text-xl my-3">3. Ketentuan Pembayaran</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Biaya keanggotaan harus dilunasi di muka sebelum anggota mendapatkan akses ke fasilitas yang disediakan.</li>
          <li>Tidak ada pengembalian dana untuk pembayaran yang telah dilakukan, kecuali terjadi pembatalan yang disetujui secara resmi oleh pihak Lumbung Digital Rakyat.</li>
          <li>Segala bentuk pembayaran dianggap sah hanya jika dilakukan melalui metode pembayaran resmi yang ditentukan oleh Lumbung Digital Rakyat.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">4. Hak dan Kewajiban Anggota</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Anggota wajib menjaga seluruh fasilitas yang diberikan dalam kondisi baik dan tidak memperjualbelikan, memindahtangankan, atau menyewakannya tanpa izin tertulis dari Lumbung Digital Rakyat.</li>
          <li>Anggota bertanggung jawab untuk memanfaatkan fasilitas secara optimal sesuai tujuan program, termasuk mengikuti pelatihan yang disediakan.</li>
          <li>Lumbung Digital Rakyat berhak melakukan audit atau pemeriksaan berkala terhadap perangkat yang diberikan, baik secara langsung maupun digital, untuk memastikan kepatuhan terhadap Syarat dan Ketentuan ini.</li>
          <li>Jika terjadi kerusakan atau kehilangan perangkat yang disebabkan oleh kelalaian anggota, biaya perbaikan atau penggantian akan sepenuhnya menjadi tanggung jawab anggota.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">5. Batasan Tanggung Jawab</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Lumbung Digital Rakyat tidak bertanggung jawab atas kegagalan anggota dalam mencapai hasil tertentu, termasuk peningkatan pendapatan, keuntungan bisnis, atau hasil promosi lainnya, yang bergantung pada usaha dan faktor eksternal masing-masing anggota.</li>
          <li>Lumbung Digital Rakyat tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan fasilitas di luar tujuan yang telah ditentukan.</li>
          <li>Lumbung Digital Rakyat tidak memberikan jaminan hasil usaha tertentu bagi anggota. Keberhasilan anggota sepenuhnya bergantung pada strategi, usaha, dan kondisi eksternal masing-masing.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">6. Pembatalan Keanggotaan</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Anggota dapat membatalkan keanggotaan dengan mengajukan permohonan tertulis minimal 90 hari sebelum tanggal efektif pembatalan.</li>
          <li>Lumbung Digital Rakyat berhak membatalkan keanggotaan anggota yang melanggar Syarat dan Ketentuan yang berlaku tanpa kewajiban untuk memberikan kompensasi.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">7. Kekayaan Intelektual</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Semua materi pelatihan, perangkat lunak, dan dokumentasi lain yang disediakan adalah milik eksklusif Lumbung Digital Rakyat.</li>
          <li>Anggota tidak diperbolehkan menggandakan, menyebarluaskan, atau memodifikasi materi pelatihan tanpa izin tertulis dari Lumbung Digital Rakyat.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">8. Perlindungan Data Pribadi</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Data pribadi anggota yang dikumpulkan oleh Lumbung Digital Rakyat akan digunakan semata-mata untuk keperluan administrasi dan pelaksanaan program, sesuai dengan Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.</li>
          <li>Lumbung Digital Rakyat tidak akan membagikan data pribadi anggota kepada pihak ketiga tanpa persetujuan tertulis kecuali diwajibkan oleh hukum.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">9. Penyelesaian Sengketa dan Hukum yang Berlaku</p>
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

        <p class="mt-4 font-bold md:text-xl my-3">10. Keadaan Memaksa (Force Majeure)</p>
        <p>Keadaan memaksa mencakup tetapi tidak terbatas pada bencana alam, kebakaran, banjir, kerusuhan sipil, pandemi, gangguan sistem teknologi informasi, atau peraturan pemerintah yang tidak terduga. Dalam keadaan memaksa, pelaksanaan kewajiban akan ditunda sampai keadaan tersebut berakhir.</p>

        <p class="mt-4 font-bold md:text-xl my-3">11. Disclaimer Peluang Usaha</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
          <li>Lumbung Digital Rakyat tidak menjamin keberhasilan finansial, peningkatan keuntungan, atau hasil usaha tertentu dari keanggotaan.</li>
          <li>Anggota memahami bahwa segala bentuk kerugian atau kerusakan yang timbul akibat keanggotaan adalah tanggung jawab penuh anggota.</li>
        </ol>

        <p class="mt-4 font-bold md:text-xl my-3">12. Pernyataan Persetujuan</p>
        <p>Dengan mendaftar dan/atau berlangganan keanggotaan di Lubkita.com, pengguna menyatakan bahwa mereka telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan ini tanpa terkecuali.</p>
      </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Add any Svelte-specific styles here if needed */
</style>