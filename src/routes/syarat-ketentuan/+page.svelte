<script>
let activeTab = 'lubkita';
</script>

<div class="min-h-screen bg-syarat-ketentuan p-6">
<div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="bg-gray-600 text-white py-6 rounded-lg">
    <h1 class="text-4xl font-bold text-center">Syarat Dan Ketentuan</h1>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center border-b-2 mt-8">
    <div class="inline-flex bg-gray-100 rounded-t-lg p-1">
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
    <div class="bg-white bg-opacity-80 border-2 shadow-lg rounded-b-lg p-6">
    {#if activeTab === 'lubkita'}
    <div class="mx-auto py-8">
        <h1 class="text-2xl font-bold text-center mb-8">SYARAT DAN KETENTUAN KEANGGOTAAN LUBKITA.COM</h1>
        
        <p class="mb-6">Selamat datang di www.lubkita.com.<br>
        Syarat & ketentuan yang ditetapkan di bawah ini mengatur pemakaian jasa yang ditawarkan oleh PT. Lumbung Artha Kita terkait penggunaan situs www.lubkita.com. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna di bawah hukum.</p>
        
        <p class="mb-8">Dengan mendaftar dan/atau menggunakan situs www.lubkita.com, maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat & ketentuan. Syarat & ketentuan ini merupakan bentuk kesepakatan yang dituangkan dalam sebuah perjanjian yang sah antara Pengguna dengan PT.Lumbung Artha Kita. Jika pengguna tidak menyetujui salah satu, pesebagian, atau seluruh isi Syarat & ketentuan, maka pengguna tidak diperkenankan menggunakan layanan di www.lubkita.com.</p>

        <!-- Section A -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">A. Definisi</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>PT Lumbung Artha Kita adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.lubkita.com, yakni situs pencarian toko dan Barang yang dijual oleh penjual terdaftar. Selanjutnya disebut Lubkita.</li>
                <li>Situs Lubkita adalah www.lubkita.com.</li>
                <li>Syarat & ketentuan adalah perjanjian antara Pengguna dan Lubkita yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Lubkita, serta tata cara penggunaan sistem layanan Lubkita.</li>
                <li>Pengguna adalah pihak yang menggunakan layanan Lubkita, termasuk namun tidak terbatas pada pembeli, penjual maupun pihak lain yang sekedar berkunjung ke Situs Lubkita.</li>
                <li>Pembeli adalah Pengguna terdaftar yang melakukan permintaan atas Barang yang dijual oleh Penjual di Situs Lubkita.</li>
                <li>Penjual adalah Pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran atas suatu Barang kepada para Pengguna Situs Lubkita.</li>
                <li>Barang adalah benda yang berwujud / memiliki fisik Barang yang dapat diantar / memenuhi kriteria pengiriman oleh perusahaan jasa pengiriman Barang.</li>
                <li>Saldo Refund adalah fasilitas penampungan sementara atas dana milik Pembeli (bukan fasilitas penyimpanan dana), yang disediakan Lubkita untuk menampung pengembalian dana transaksi (refund) pembelian Barang, produk digital, dan/atau produk keuangan. Dana ini hanya dapat digunakan kembali untuk melakukan pembelian pada Situs Lubkita dan/atau ditarik ke akun bank yang terdaftar.</li>
                <li>Saldo Penghasilan adalah fasilitas penampungan sementara atas dana milik Penjual (bukan fasilitas penyimpanan dana), yang disediakan Lubkita untuk menampung dana hasil penjualan Barang, produk investasi, dan/atau komisi affiliate pada Situs Lubkita. Dana ini hanya dapat ditarik ke akun bank yang terdaftar dan tidak dapat digunakan kembali untuk melakukan pembelian pada Situs Lubkita.</li>
                <li>Feed adalah fitur pada Situs/Aplikasi Lubkita yang menampilkan konten dari Penjual, KOL, atau pihak lainnya terkait Barang tertentu.</li>
                <li>Key Opinion Leaders atau KOL adalah pihak yang mempromosikan Barang atau Penjual tertentu melalui Feed.</li>
                <li>Rekening Resmi Lubkita adalah rekening bersama yang disepakati oleh Lubkita dan para pengguna untuk proses transaksi jual beli di Situs Lubkita.</li>
                <li>Internal Dropshipper adalah transaksi yang seluruhnya terjadi di ruang lingkup Lubkita yang dilakukan oleh Penjual dengan membeli Barang dari Penjual lainnya dan menjualnya kembali melalui Situs Lubkita.</li>
            </ol>
        </div>

        <!-- Section B -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">B. Akun, Saldo Refund, Saldo Penghasilan, Password dan Keamanan</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Pengguna menyatakan dan menjamin bahwa Pengguna telah berusia minimal 18 (delapan belas) tahun atau sudah menikah dan tidak berada di bawah perwalian atau pengampuan dan Pengguna secara hukum memiliki kapasitas dan berhak untuk mengikatkan diri pada Syarat dan Ketentuan ini. Jika Pengguna tidak memenuhi ketentuan tersebut namun tetap mengakses atau menggunakan Situs/Aplikasi, layanan yang tersedia di Situs/Aplikasi, konten pihak ketiga yang berada di Situs/Aplikasi, penawaran di Situs/Aplikasi atau metode pembayaran yang berlaku di Situs/Aplikasi, Pengguna menyatakan dan menjamin bahwa tindakan Pengguna membuka, mengakses atau melakukan aktivitas lain dalam Situs/Aplikasi telah disetujui oleh orang tua, wali atau pengampu Pengguna. Pengguna secara tegas mengesampingkan setiap hak berdasarkan peraturan perundang-undangan yang berlaku untuk membatalkan atau mencabut setiap dan seluruh persetujuan yang Pengguna berikan berdasarkan Syarat dan Ketentuan ini pada waktu Pengguna dianggap telah dewasa secara hukum.</li>
                <li>Lubkita tidak memungut biaya pendaftaran kepada Pengguna Basic.</li>
                <li>Pengguna memahami bahwa 1 (satu) nomor telepon hanya dapat digunakan untuk mendaftar 1 (satu) akun Pengguna Lubkita, kecuali bagi Pengguna yang telah memiliki beberapa akun dengan 1 (satu) nomor telepon sebelumnya.</li>
                <li>Pengguna yang telah mendaftar berhak bertindak sebagai:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Pembeli</li>
                        <li>Penjual, dengan memanfaatkan layanan buka toko.</li>
                    </ol>
                </li>
                <li>Pengguna yang akan bertindak sebagai Penjual diwajibkan memilih pilihan menggunakan layanan buka toko. Setelah menggunakan layanan buka toko, Pengguna berhak melakukan pengaturan terhadap item-item yang akan diperdagangkan di etalase pribadi Pengguna.</li>
                <li>Lubkita tanpa pemberitahuan terlebih dahulu kepada Pengguna, memiliki kewenangan untuk melakukan tindakan yang perlu atas setiap dugaan pelanggaran atau pelanggaran Syarat & ketentuan dan/atau hukum yang berlaku, yakni tindakan berupa memindahkan Barang ke gudang, penghapusan Barang, moderasi toko, penutupan toko, pembatalan listing, suspensi akun, dan/atau penghapusan akun pengguna.</li>
                <li>Lubkita memiliki kewenangan untuk menutup toko atau akun Pengguna baik sementara maupun permanen apabila didapati adanya tindakan kecurangan dalam bertransaksi, pelanggaran terhadap Syarat dan Ketentuan Lubkita, termasuk namun tidak terbatas pada Kebijakan Penalti. Pengguna menyetujui bahwa Lubkita berhak melakukan tindakan lain yang diperlukan terkait hal tersebut, termasuk namun tidak terbatas pada menolak pengajuan pembukaan toko yang baru apabila ditemukan kesamaan data.</li>
                <li>Pengguna memahami dan menyetujui untuk tidak menggunakan, memodifikasi, membongkar, melakukan kegiatan penggandaan, menjual kembali dan/atau kegiatan mengeksploitasi lainnya pada sistem perangkat lunak atau perangkat keras, jaringan dan/atau data Situs/Aplikasi dengan teknologi otomatis atau manual tanpa adanya izin dari Lubkita.</li>
                <li>Pengguna menyetujui untuk tidak menggunakan dan/atau mengakses sistem Lubkita secara langsung atau tidak langsung baik keseluruhan atau sebagian dengan virus, perangkat lunak, atau teknologi lainnya yang dapat mengakibatkan melemahkan, merusak, mengganggu atau menghambat, membatasi dan/atau mengambil alih fungsionalitas serta integritas dari sistem perangkat lunak atau perangkat keras, jaringan, dan/atau data pada Situs/Aplikasi Lubkita.</li>
                <li>Pengguna dilarang untuk menciptakan dan/atau menggunakan perangkat keras/lunak/fitur dan/atau alat lainnya, termasuk namun tidak terbatas pada emulator, robot, macro, crawler dan/atau perangkat otomatis yang bertujuan untuk mengakses atau menggunakan layanan pada sistem Lubkita, seperti namun tidak terbatas pada : (i) manipulasi data Toko; (ii) membuat banyak akun; (iii) memanipulasi perangkat yang bertujuan untuk merugikan Lubkita; (iv) kegiatan perambanan (crawling/scraping) atau penyalinan konten; (v) kegiatan otomatisasi dalam transaksi, jual beli, promosi,dan lain sebagainya; (vi) penambahan produk ke etalase; (vii) mengumpulkan (harvest) atau mencuri data pengguna; (viii) melakukan spamming, mengirimkan komunikasi elektronik dalam jumlah besar, mengirimkan surat berantai; dan/atau (ix) aktivitas lain yang secara wajar dapat dinilai sebagai tindakan manipulasi layanan dan sistem.</li>
                <li>Lubkita memiliki kewenangan untuk melakukan penyesuaian jumlah transaksi toko, penyesuaian jumlah reputasi, dan/atau melakukan proses moderasi/menutup akun Pengguna, jika diketahui atau diduga adanya kecurangan oleh Pengguna yang bertujuan memanipulasi data transaksi Pengguna demi meningkatkan reputasi toko (review dan atau jumlah transaksi). Contohnya adalah melakukan proses belanja ke toko sendiri dengan menggunakan akun pribadi atau akun pribadi lainnya.</li>
                <li>Saldo Refund berasal dari pengembalian dana transaksi (refund) pembelian Barang, produk digital, dan/atau produk keuangan di Situs Lubkita dan tidak bisa dilakukan penambahan secara sendiri (top up).</li>
                <li>Saldo Refund dapat digunakan sebagai salah satu metode pembayaran atas transaksi pembelian Barang, produk digital, dan/atau produk investasi di Situs Lubkita, dan dapat dilakukan penarikan dana (withdrawal) ke rekening bank yang terdaftar pada akun Pengguna.</li>
                <li>Saldo Penghasilan hanya berasal dari hasil penjualan Barang, produk investasi, dan/atau komisi affiliate pada Situs Lubkita dan tidak bisa dilakukan penambahan secara sendiri (top up).</li>
                <li>Saldo Penghasilan hanya dapat dilakukan penarikan dana (withdrawal) ke rekening bank yang terdaftar pada akun Pengguna, dan tidak dapat digunakan sebagai metode pembayaran atas transaksi pembelian Barang, produk digital, dan/atau produk investasi di Situs Lubkita, namun dapat digunakan untuk fitur-fitur berlangganan yang membantu Penjual, seperti TopAds atau promo cashback toko.</li>
                <li>Lubkita memiliki kewenangan untuk melakukan pembekuan Saldo Refund dan Saldo Penghasilan Pengguna apabila ditemukan / diduga adanya tindak kecurangan dalam bertransaksi dan/atau pelanggaran terhadap syarat dan ketentuan Lubkita.</li>
                <li>Penjual dilarang melakukan duplikasi toko, duplikasi produk, atau tindakan-tindakan lain yang dapat diindikasikan sebagai usaha persaingan tidak sehat.</li>
                <li>Pengguna memiliki hak untuk melakukan perubahan nama toko dan/atau domain toko sesuai dengan kebijakan yang ditentukan oleh Lubkita. Pengguna harus memastikan bahwa perubahan pada nama toko dan/atau domain toko telah sesuai dengan yang diinginkan dan Pengguna bertanggung jawab secara pribadi atas perubahan nama toko dan/atau domain toko yang dilakukan oleh Pengguna. Pengguna menyetujui bahwa setiap perikatan dan tindakan hukum yang terjadi sebelum perubahan nama toko dan/atau domain toko tetap mengikat Pengguna.</li>
                <li>Pengguna memiliki hak untuk melakukan perubahan pada nama akun sebanyak jumlah kesempatan yang disediakan dan Lubkita berhak merubah jumlah kesempatan perubahan pada nama akun. Pengguna harus memastikan bahwa perubahan pada nama akun telah sesuai dengan yang diinginkan dan bertanggung jawab secara pribadi atas perubahan nama akun yang dilakukan oleh Pengguna. Pengguna menyetujui bahwa setiap perikatan yang terjadi sebelum perubahan nama tetap mengikat Pengguna.</li>
                <li>Pengguna bertanggung jawab secara pribadi untuk menjaga kerahasiaan akun dan password untuk semua aktivitas yang terjadi dalam akun Pengguna.</li>
                <li>Lubkita tidak akan meminta username, password maupun kode SMS verifikasi atau kode OTP milik akun Pengguna untuk alasan apapun, oleh karena itu Lubkita menghimbau Pengguna agar tidak memberikan data tersebut maupun data penting lainnya kepada pihak yang mengatasnamakan Lubkita atau pihak lain yang tidak dapat dijamin keamanannya.</li>
                <li>Pengguna setuju untuk memastikan bahwa Pengguna keluar dari akun di akhir setiap sesi dan memberitahu Lubkita jika ada penggunaan tanpa izin atas sandi atau akun Pengguna.</li>
                <li>Pengguna dengan ini menyatakan bahwa Lubkita tidak bertanggung jawab atas kerugian ataupun kendala yang timbul atas penyalahgunaan akun Pengguna yang diakibatkan oleh kelalaian Pengguna, termasuk namun tidak terbatas pada menyetujui dan/atau memberikan akses masuk akun yang dikirimkan oleh Lubkita melalui pesan notifikasi kepada pihak lain melalui perangkat Pengguna, meminjamkan akun kepada pihak lain, mengakses link atau tautan yang diberikan oleh pihak lain, memberikan atau memperlihatkan kode verifikasi (OTP), password atau email kepada pihak lain, maupun kelalaian Pengguna lainnya yang mengakibatkan kerugian ataupun kendala pada akun Pengguna.</li>
                <li>Pengguna memahami dan menyetujui bahwa untuk mempergunakan fasilitas keamanan one time password (OTP) maka penyedia jasa telekomunikasi terkait dapat sewaktu-waktu mengenakan biaya kepada Pengguna dengan nominal sebagai berikut (i) Rp 500 ditambah Pajak Pertambahan Nilai (PPN) sesuai dengan peraturan perundang-undang perpajakan yang berlaku di Indonesia untuk Indosat, Tri, XL, Smartfren, dan Esia; (ii) Rp 200 ditambah PPN sesuai dengan peraturan perundang-undang perpajakan yang berlaku di Indonesia Telkomsel.</li>
                <li>Penjual dilarang mempromosikan toko dan/atau Barang secara langsung menggunakan fasilitas pesan pribadi, diskusi produk, ulasan produk yang dapat mengganggu kenyamanan Pengguna lain.</li>
            </ol>
        </div>

        <!-- Section C -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">C. Transaksi Pembelian</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Pembeli wajib bertransaksi melalui prosedur transaksi yang telah ditetapkan oleh Lubkita. Pembeli melakukan pembayaran dengan menggunakan metode pembayaran yang sebelumnya telah dipilih oleh Pembeli, dan kemudian Lubkita akan meneruskan dana ke pihak Penjual apabila tahapan transaksi jual beli pada sistem Lubkita telah selesai.</li>
                <li>Saat melakukan pembelian Barang, Pembeli menyetujui bahwa:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Pembeli bertanggung jawab untuk membaca, memahami, dan menyetujui informasi/deskripsi keseluruhan Barang (termasuk didalamnya namun tidak terbatas pada warna, kualitas, fungsi, dan lainnya) sebelum membuat tawaran atau komitmen untuk membeli.</li>
                        <li>Pembeli mengakui bahwa warna sebenarnya dari produk sebagaimana terlihat di Situs/Aplikasi Lubkita tergantung pada monitor komputer dan layar handphone Pembeli. Lubkita telah melakukan upaya terbaik untuk memastikan warna dalam foto-foto yang ditampilkan pada Situs/Aplikasi Lubkita muncul seakurat mungkin, tetapi tidak dapat menjamin bahwa penampilan warna pada Situs dan aplikasi Lubkita akan akurat.</li>
                        <li>Pengguna masuk ke dalam kontrak yang mengikat secara hukum untuk membeli Barang ketika Pengguna membeli suatu barang.</li>
                        <li>Lubkita tidak mengalihkan kepemilikan secara hukum atas barang-barang dari Penjual kepada Pembeli.</li>
                    </ol>
                </li>
                <li>Pembeli memahami dan menyetujui bahwa ketersediaan stok Barang merupakan tanggung jawab Penjual yang menawarkan Barang tersebut, sehingga ketersediaan stok Barang dapat berubah sewaktu-waktu, dengan situasi sebagai berikut:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>jika stok Barang kosong, maka Penjual dapat menolak pesanan dan pembayaran atas Barang yang bersangkutan dikembalikan kepada Pembeli.</li>
                        <li>jika Pembeli membeli lebih dari 1 (satu) Barang berbeda dan terdapat stok Barang yang kosong, maka Penjual dapat menerima pesanan Barang sebagian dengan persetujuan Pembeli dan Pembeli akan menerima pengembalian pembayaran sebagian.</li>
                        <li>jika Pembeli membeli lebih dari 1 (satu) Barang yang sama dan Penjual tidak dapat memenuhi seluruh pesanan, maka Penjual dapat menerima pesanan Barang sebagian dengan persetujuan Pembeli dan Pembeli akan menerima pengembalian pembayaran sebagian.</li>
                    </ol>
                </li>
                <li>Penerimaan pesanan Barang sebagian oleh Penjual tidak dapat diproses tanpa persetujuan Pembeli, sehingga jika terdapat perubahan stok Barang, maka Pembeli akan mendapatkan notifikasi melalui Aplikasi Lubkita dan Pembeli dapat menyetujui atau menolak tawaran Penjual sesuai batas waktu konfirmasi pesanan berdasarkan jenis pengiriman yang dipilih. Jika tidak ada konfirmasi dari Pembeli, maka pesanan akan dibatalkan secara otomatis.</li>
                <li>Pembeli memahami dan menyetujui dengan menerima pesanan Barang sebagian, maka pengembalian pembayaran sebagian akan diterima oleh Pembeli ketika transaksi selesai sebagaimana dijelaskan pada poin 22 dan 23 di bawah dst.</li>
                <li>Pembeli memahami sepenuhnya dan menyetujui bahwa segala transaksi yang dilakukan antara Pembeli dan Penjual selain melalui Rekening Resmi Lubkita dan/atau tanpa sepengetahuan Lubkita (melalui fasilitas/jaringan pribadi, pengiriman pesan, pengaturan transaksi khusus diluar situs Lubkita atau upaya lainnya) adalah merupakan tanggung jawab pribadi dari Pembeli.</li>
                <li>Lubkita memiliki kewenangan sepenuhnya untuk menolak pembayaran tanpa pemberitahuan terlebih dahulu.</li>
                <li>Pembeli menyetujui dan memahami bahwa dengan menggunakan Situs/Aplikasi Lubkita pada saat Pembeli melakukan transaksi pembelian, Lubkita akan meneruskan data informasi Pembeli kepada Penjual.</li>
                <li>Pembeli yang menggunakan metode pembayaran transfer bank, nilai total pembayaran akan ditambahkan kode unik untuk mempermudah proses verifikasi. Jika pembayaran tersebut telah diverifikasi, maka kode unik akan dikembalikan ke Saldo Refund Pembeli secara real time.</li>
                <li>Pembeli wajib melakukan pembayaran dengan metode pembayaran yang dipilih dengan nominal yang sesuai dengan jumlah tagihan beserta kode unik (apabila ada) yang tertera pada halaman pembayaran. PT Lubkita tidak bertanggung jawab atas kerugian yang dialami Pembeli, apabila Pembeli melakukan pembayaran yang tidak sesuai dengan jumlah tagihan yang tertera pada halaman pembayaran.</li>
                <li>Pembayaran oleh Pembeli wajib dilakukan segera (selambat-lambatnya dalam batas waktu 1x24 jam) setelah Pembeli melakukan check-out. Jika dalam batas waktu tersebut pembayaran belum dilakukan oleh Pembeli, Lubkita memiliki kewenangan untuk membatalkan transaksi tersebut. Pengguna tidak berhak mengajukan klaim atau tuntutan atas pembatalan transaksi tersebut.</li>
                <li>Pembeli disarankan untuk memeriksa dan melakukan pembayaran sesuai dengan nominal tagihan yang tertera pada halaman pembayaran. Khusus pembayaran melalui manual transfer bank, apabila terdapat kekurangan pembayaran, maka akan dicukupi dengan mengurangi saldo Lubkita pada akun Pembeli. Apabila saldo Lubkita pada akun Pembeli juga tidak mencukupi kekurangan Pembayaran, Pembeli akan mendapatkan pemberitahuan melalui pesan bantuan, chat atau email yang terdaftar di Lubkita untuk melakukan pembayaran kembali senilai kekurangannya hingga batas waktu akhir penerimaan pembayaran yang telah ditentukan sebelumnya.</li>
                <li>Pembayaran dengan metode pembayaran transfer bank (verifikasi manual) sangat disarankan mengunggah bukti pembayaran pada Aplikasi Lubkita untuk mempermudah proses verifikasi.</li>
                <li>Pembeli memahami dan menyetujui bahwa masalah keterlambatan proses pembayaran dan biaya tambahan yang disebabkan oleh perbedaan bank yang Pembeli pergunakan dengan bank Rekening resmi Lubkita adalah tanggung jawab Pembeli secara pribadi.</li>
                <li>Pengembalian dana dari Lubkita kepada Pembeli hanya dapat dilakukan jika dalam keadaan-keadaan tertentu berikut ini:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Kelebihan pembayaran dari Pembeli atas harga Barang,</li>
                        <li>Pembeli menyetujui penerimaan Barang sebagian yang ditawarkan oleh Penjual,</li>
                        <li>Masalah pengiriman Barang telah teridentifikasi secara jelas dari Penjual yang mengakibatkan pesanan Barang tidak sampai,</li>
                        <li>Penjual tidak bisa menyanggupi order karena kehabisan stok, perubahan ongkos kirim, maupun penyebab lainnya,</li>
                        <li>Penjual sudah menyanggupi pengiriman order Barang, tetapi setelah batas waktu yang ditentukan ternyata Penjual tidak mengirimkan Barang hingga batas waktu yang telah ditentukan.</li>
                        <li>Penyelesaian permasalahan melalui Pusat Resolusi berupa keputusan untuk pengembalian dana kepada Pembeli atau hasil keputusan dari pihak Lubkita.</li>
                    </ol>
                </li>
                <li>Apabila terjadi proses pengembalian dana, maka pengembalian akan dilakukan melalui Saldo Refund milik Pengguna yang akan bertambah sesuai dengan jumlah pengembalian dana. Jika Pengguna menggunakan pilihan metode pembayaran kartu kredit maka pengembalian dana akan merujuk pada ketentuan bagian L. Kartu Kredit.</li>
                <li>Pembeli dilarang untuk membagi 1 (satu) transaksi pembelian Barang menjadi 2 (dua) transaksi atau lebih secara terpisah untuk membagi nilai pembayaran (split payment) dengan tujuan memanipulasi metode pembayaran dan/atau mendapatkan manfaat lebih yang melanggar Syarat dan Ketentuan, yang dilakukan dengan cara apa pun termasuk namun tidak terbatas dengan menghubungi Penjual untuk melakukan perubahan harga dan/atau membeli beberapa produk untuk membagi jumlah harga dari suatu produk yang diinginkan.</li>
                <li>Pembeli memahami dan menyetujui untuk melepaskan Lubkita dari tanggung jawab apabila terjadi kendala atas transaksi yang menggunakan metode split payment, termasuk namun tidak terbatas pada kendala transaksi, kendala pembayaran, kendala pengiriman, maupun kerusakan dan/atau kehilangan Barang baik sebagian maupun seluruhnya.</li>
                <li>Lubkita berwenang untuk melakukan tindakan-tindakan yang diperlukan apabila diketahui terdapat transaksi pembelian menggunakan metode split payment, termasuk namun tidak terbatas pada pembatalan transaksi dan/atau pembatalan promo atau cashback.</li>
                <li>Pembeli menyetujui untuk tidak memberitahukan atau menyerahkan bukti pembayaran dan/atau data pembayaran kepada pihak lain selain Lubkita. Dalam hal terjadi kerugian akibat pemberitahuan atau penyerahan bukti pembayaran dan/atau data pembayaran oleh Pembeli kepada pihak lain, maka hal tersebut akan menjadi tanggung jawab Pembeli.</li>
                <li>Pembeli memahami dan menyetujui bahwa Pembeli bertanggungjawab untuk menjaga informasi terkait transaksi dan pengiriman melalui Situs/Aplikasi Lubkita. Seluruh tindakan termasuk namun tidak terbatas pada kesepakatan yang dilakukan atas transaksi pembelian, pengembalian maupun penukaran Barang diluar Situs/Aplikasi Lubkita adalah bukan tanggung jawab Lubkita, sehingga klaim serta kerugian yang timbul akibat tindakan tersebut menjadi tanggung jawab masing-masing pihak secara pribadi.</li>
                <li>Pembeli wajib melakukan konfirmasi penerimaan Barang, setelah menerima kiriman Barang yang dibeli. Lubkita memberikan batas waktu 2 (dua) hari setelah pengiriman berstatus "terkirim" pada sistem Lubkita, untuk Pembeli melakukan konfirmasi penerimaan Barang. Jika dalam batas waktu tersebut tidak ada konfirmasi atau klaim dari pihak Pembeli, maka dengan demikian Pembeli menyatakan menyetujui dilakukannya konfirmasi penerimaan Barang secara otomatis oleh sistem Lubkita.</li>
                <li>Setelah adanya konfirmasi penerimaan Barang atau konfirmasi penerimaan Barang otomatis, maka dana pihak Pembeli yang dikirimkan ke Rekening resmi Lubkita akan di lanjut kirimkan ke pihak Penjual (transaksi dianggap selesai).</li>
                <li>Pembeli memahami dan menyetujui bahwa setiap klaim yang dilayangkan setelah adanya konfirmasi / konfirmasi otomatis penerimaan Barang adalah bukan menjadi tanggung jawab Lubkita. Kerugian yang timbul setelah adanya konfirmasi/konfirmasi otomatis penerimaan Barang menjadi tanggung jawab Pembeli secara pribadi.</li>
                <li>Pembeli memahami dan menyetujui bahwa setiap masalah pengiriman Barang yang disebabkan keterlambatan pembayaran adalah merupakan tanggung jawab dari Pembeli.</li>
                <li>Pengguna memahami dan menyetujui jika ditemukan adanya indikasi kecurangan, pelanggaran Syarat dan Ketentuan Lubkita atau ketentuan hukum yang berlaku, maka Lubkita berwenang untuk melakukan tindakan-tindakan yang diperlukan termasuk namun tidak terbatas pada tindakan pembatasan pilihan metode pembayaran, melakukan pembatalan transaksi tanpa pemberitahuan sebelumnya.</li>
            </ol>
        </div>

        <!-- Section D -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">D. Transaksi Penjualan</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Penjual dilarang memanipulasi harga Barang dengan tujuan apapun.</li>
                <li>Penjual dilarang melakukan penawaran / berdagang Barang terlarang sesuai dengan yang telah ditetapkan pada ketentuan Poin J. Jenis Barang.</li>
                <li>Penjual wajib memberikan foto dan informasi produk dengan lengkap dan jelas sesuai dengan kondisi dan kualitas produk yang dijualnya. Apabila terdapat ketidaksesuaian antara foto dan informasi produk yang diunggah oleh Penjual dengan produk yang diterima oleh Pembeli, maka Lubkita berhak membatalkan/menahan dana transaksi.</li>
                <li>Dalam menggunakan Fasilitas "Judul Produk", "Foto Produk", "Catatan" dan "Deskripsi Produk", Penjual dilarang membuat peraturan bersifat klausula baku yang tidak memenuhi peraturan perundang-undangan yang berlaku di Indonesia, termasuk namun tidak terbatas pada (i) tidak menerima komplain, (ii) tidak menerima retur (penukaran barang), (iii) tidak menerima refund (pengembalian dana), (iv) barang tidak bergaransi, (v) pengalihan tanggung jawab (termasuk tidak terbatas pada penanggungan ongkos kirim), (vi) penyusutan nilai harga dan (vii) pengiriman barang acak secara sepihak. Jika terdapat pertentangan antara catatan toko dan/atau deskripsi produk dengan Syarat & Ketentuan Lubkita, maka peraturan yang berlaku adalah Syarat & Ketentuan Lubkita.</li>
                <li>Penjual wajib memberikan balasan untuk menerima, menerima sebagian, atau menolak pesanan Barang pihak Pembeli dalam batas waktu 2 hari terhitung sejak adanya notifikasi pesanan Barang dari Lubkita. Jika dalam batas waktu tersebut tidak ada balasan dari Penjual maka secara otomatis pesanan akan dibatalkan.</li>
                <li>Dalam hal Penjual menerima pesanan Barang sebagian, Penjual dapat mengubah jumlah pesanan Barang yang masuk dari Pembeli karena alasan ketersediaan stok Barang, untuk kemudian pesanan Barang dapat diproses oleh Penjual menjadi pesanan Barang sebagian.</li>
                <li>Penerimaan pesanan Barang sebagian hanya dapat diproses oleh Penjual dengan persetujuan dari Pembeli.</li>
                <li>Penjual memahami dan menyetujui bahwa jika Penjual melakukan penerimaan pesanan Barang sebagian melebihi batas yang telah ditentukan oleh Lubkita, maka akan berpengaruh pada skor toko Penjual.</li>
                <li>Demi menjaga kenyamanan Pembeli dalam bertransaksi, Penjual memahami dan menyetujui bahwa Lubkita berhak melakukan moderasi toko Penjual apabila Penjual melakukan penolakan, pembatalan dan/atau tidak merespon pesanan Barang milik Pembeli dengan dugaan untuk memanipulasi transaksi, pelanggaran atas Syarat dan Ketentuan, dan/atau kecurangan atau penyalahgunaan lainnya.</li>
                <li>Penjual dilarang untuk menyediakan metode pembayaran terpisah (split payment) dan/atau membagi 1 (satu) transaksi pembelian Barang menjadi 2 (dua) transaksi yang berbeda dengan tujuan untuk memanipulasi metode pembayaran dan/atau mendapatkan manfaat lebih yang melanggar Syarat dan Ketentuan, yang dilakukan dengan cara apa pun termasuk namun tidak terbatas dengan menggunakan layanan "varian produk" atau menjual beberapa produk sehingga membagi jumlah harga atau transaksi dari suatu produk yang diinginkan.</li>
                <li>Penjual memahami dan menyetujui untuk melepaskan Lubkita dari tanggung jawab apabila terjadi kendala atas transaksi yang menggunakan metode split payment, termasuk namun tidak terbatas pada kendala transaksi, kendala pembayaran, kendala pengiriman, maupun kerusakan dan/atau kehilangan produk baik sebagian maupun seluruhnya.</li>
                <li>Lubkita berwenang untuk melakukan tindakan-tindakan yang diperlukan apabila diketahui terdapat transaksi penjualan menggunakan metode split payment, termasuk namun tidak terbatas pada pembatalan transaksi, penyesuaian reputasi toko, penghapusan produk, moderasi toko, dan/atau penutupan toko.</li>
                <li>Penjual menyetujui dan memahami bahwa dengan menerima data informasi Pembeli yang terdapat dalam Situs/Aplikasi wajib menjaga kerahasiaan dan dilarang menyalahgunakan data informasi Pembeli dalam bentuk apapun. Lubkita berhak, tanpa pemberitahuan sebelumnya, melakukan investigasi dan memberikan sanksi terhadap dugaan atau laporan penyalahgunaan data Pembeli.</li>
                <li>Penjual diharapkan untuk memasukkan nomor resi pengiriman Barang atau AWB (air way bill) yang valid, yaitu:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Tanggal pembuatan resi pengiriman Barang tidak lebih dulu dari tanggal transaksi pembelian Barang;</li>
                        <li>Nomor resi pengiriman Barang harus dapat dilacak atau ditemukan pada web situs pelacakan atau sistem jasa ekspedisi rekanan Lubkita; dan/atau</li>
                        <li>Merupakan resi pengiriman Barang yang memang diperuntukkan untuk pembeli yang akan menerima paket tersebut (detail pengiriman harus sama).</li>
                    </ol>
                </li>
                <li>Penjual wajib memasukkan nomor resi pengiriman Barang yang valid dalam batas waktu 2 x 24 jam (tidak termasuk hari Sabtu/Minggu/libur Nasional) terhitung sejak adanya notifikasi pesanan Barang dari Lubkita.</li>
                <li>Apabila Penjual memasukkan nomor resi pengiriman Barang yang invalid atau tidak dapat terlacak, Penjual wajib memasukkan nomor resi pengiriman Barang yang valid dalam batas waktu 1 x 24 jam (tidak termasuk hari Sabtu/Minggu/libur Nasional) terhitung sejak adanya notifikasi nomor resi invalid atau tidak terlacak yang diberikan oleh Lubkita kepada Penjual.</li>
                <li>Jika dalam batas waktu tersebut dalam Syarat & Ketentuan Poin D. 15 dan D. 16 pihak Penjual tidak memasukkan nomor resi pengiriman Barang yang valid, maka secara otomatis pesanan dianggap dibatalkan. Jika Penjual tetap mengirimkan Barang setelah melebihi batas waktu pengiriman sebagaimana dijelaskan diatas, maka Penjual memahami bahwa transaksi akan tetap dibatalkan untuk kemudian Penjual dapat melakukan penarikan Barang pada kurir tempat Barang dikirimkan.</li>
                <li>Penjual memahami dan menyetujui bahwa kurir pengiriman tidak dapat diubah oleh Penjual setelah Penjual melakukan konfirmasi pengiriman dan sepenuhnya menjadi tanggung jawab Penjual.</li>
                <li>Lubkita berwenang untuk membatalkan transaksi dan/atau menahan dana transaksi dalam hal: (i) nomor resi kurir pengiriman Barang yang diberikan oleh Penjual tidak sesuai dan/atau diduga tidak sesuai dengan transaksi yang terjadi di Situs Lubkita; (ii) Penjual mengirimkan Barang melalui jasa kurir/logistik selain dari yang disediakan dan terhubung dengan Situs Lubkita; (iii) jika nama produk dan deskripsi produk tidak sesuai/tidak jelas dengan produk yang dikirim; (iv) jika ditemukan adanya manipulasi transaksi; dan/atau (v) mencantumkan nomor resi pengiriman Barang yang telah digunakan oleh Penjual lainnya (internal dropshipper)</li>
                <li>Penjual memahami dan menyetujui bahwa seluruh Pajak sehubungan dengan transaksi Penjualan (namun tidak terbatas pada perubahan informasi toko dan/atau barang), akan dilaporkan dan diurus sendiri oleh masing-masing Penjual sesuai dengan ketentuan pajak yang berlaku di peraturan perundang-undangan di Indonesia.</li>
                <li>Apabila disepakati oleh Penjual dan Pembeli, penggunaan jasa Logistik yang berbeda dari pilihan awal pembeli dapat dilakukan (dengan ketentuan bahwa tarif pengiriman tersebut adalah di bawah tarif pengiriman awal).</li>
                <li>Lubkita berwenang memotong kelebihan tarif pengiriman dari dana pembayaran pembeli dan mengembalikan selisih kelebihan tarif pengiriman kepada Pembeli.</li>
                <li>Penjual memahami sepenuhnya dan menyetujui bahwa invoice yang diterbitkan adalah atas nama Penjual.</li>
            </ol>
        </div>

        <!-- Section E -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">E. Penataan Etalase</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Penjual dilarang mempergunakan etalase (termasuk dan tidak terbatas pada informasi toko dan informasi barang) sebagai media untuk beriklan atau melakukan promosi ke halaman situs lain diluar situs Lubkita.</li>
                <li>Penjual dilarang memberikan data kontak pribadi dengan maksud untuk melakukan transaksi secara langsung kepada Pembeli / calon Pembeli.</li>
                <li>Penjual dilarang memberikan keterangan (informasi toko dan/atau Barang) selain/diluar daripada keterangan toko dan/atau Barang yang bersangkutan.</li>
                <li>Penamaan Barang dan informasi produk harus dilakukan sesuai dengan informasi detail, spesifikasi, dan kondisi Barang, dengan demikian Pengguna tidak diperkenankan untuk mencantumkan nama, deskripsi, gambar dan/atau kata yang tidak berkaitan dan/atau tidak sesuai dengan Barang tersebut.</li>
                <li>Penjual yang menambahkan referensi video pada etalase Toko yang bersumber dari link pihak ketiga, maka Penjual wajib untuk mematuhi kebijakan yang dipersyaratkan oleh pihak ketiga tersebut termasuk namun tidak terbatas pada persyaratan layanan Youtube sebagaimana dapat dilihat DI SINI dan kebijakan privasi Google sebagaimana dapat dilihat DI SINI apabila Penjual menambahkan referensi video yang bersumber dari Youtube maupun Google. Dalam hal penjual menggunakan referensi video dari Youtube, application programming interface (API) Lubkita menggunakan layanan API Yotube.</li>
                <li>Penamaan Barang dan informasi produk harus sesuai dengan kondisi Barang yang ditampilkan dan Pengguna tidak diperkenankan mencantumkan nama dan informasi yang tidak sesuai dengan kondisi Barang.</li>
                <li>Lubkita berhak tanpa pemberitahuan sebelumnya untuk melakukan penarikan subsidi (cashback), pembatalan benefit Rewards, penurunan konten dan/atau moderasi toko, apabila didapati pelanggaran sebagaimana diatur pada Point E.4 dan E.5.</li>
                <li>Penjual wajib memisahkan tiap-tiap Barang yang memiliki ukuran dan harga yang berbeda.</li>
                <li>Lubkita memiliki kewenangan mengambil-alih sub-domain toko Penjual jika akun Penjual sudah tidak aktif lebih dari 9 bulan, dan/atau pemilik merek dagang resmi (sesuai dengan Daftar Umum Merek di Indonesia) dengan nama yang sama dengan sub-domain Penjual melakukan klaim terhadapnya dikarenakan mereka ingin menggunakan sub-domain tersebut.</li>
                <li>Lubkita memiliki kewenangan untuk mengubah nama dan/atau memakai nama Toko dan/atau domain Pengguna untuk kepentingan internal Lubkita.</li>
                <li>Penjual memahami dan menyetujui bahwa Lubkita dapat melakukan penghapusan Barang yang terdapat di etalase toko apabila Barang tersebut memenuhi kriteria penghapusan sebagaimana ditentukan oleh Lubkita. Penghapusan Barang termasuk pada data-data terkait yang relevan dengan Barang tersebut.</li>
                <li>Dalam hal Barang yang terdapat di etalase toko Penjual memenuhi kriteria penghapusan, Barang tersebut akan masuk ke dalam masa tenggang di mana Penjual diberi waktu untuk melakukan perbaikan-perbaikan sebagaimana relevan untuk menghindari penghapusan oleh sistem.</li>
                <li>Apabila masa tenggang Barang telah berakhir dan Penjual tidak melakukan perbaikan-perbaikan sebagaimana relevan, maka Penjual menyetujui penghapusan yang dilakukan oleh Lubkita.</li>
            </ol>
        </div>

        <!-- Section F -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">F. Biaya Layanan dan Biaya Jasa Aplikasi</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Biaya Layanan merupakan biaya atas penggunaan dan pemanfaatan layanan Situs/Aplikasi dalam pelaksanaan transaksi pembelian barang/jasa yang dilakukan oleh Pengguna pada Situs/Aplikasi.</li>
                <li>Biaya Jasa Aplikasi merupakan biaya penggunaan pada Situs/Aplikasi Lubkita untuk tujuan pemeliharaan sistem dan peningkatan kualitas layanan melalui Situs/Aplikasi Lubkita.</li>
                <li>Lubkita tidak mengetahui dan oleh karenanya tidak dapat menjamin keabsahan Barang yang dijual atau dibeli secara mandiri oleh Pengguna, untuk itu Pengguna wajib memastikan bahwa Barang yang dijual atau dibeli tidak melanggar ketentuan dalam poin J. Jenis Barang dan/atau ketentuan Peraturan Perundang-undangan yang berlaku.</li>
                <li>Dalam hal ditemukannya dan/atau terdapat dugaan pelanggaran Barang pada transaksi Pengguna, maka Biaya Layanan yang dikenakan kepada Pengguna dan Biaya Jasa Aplikasi atas transaksi yang dikenakan kepada Pembeli akan dikembalikan kepada masing-masing Pengguna. Pengguna dengan ini menjamin, membebaskan dan melepaskan Lubkita dari segala tuntutan hukum atas pelanggaran yang dilakukan oleh Pengguna.</li>
            </ol>
        </div>

        <!-- Section G -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">G. Harga</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Harga Barang yang terdapat dalam situs Lubkita adalah harga yang ditetapkan oleh Penjual. Penjual dilarang memanipulasi harga barang dengan cara apapun.</li>
                <li>Penjual dilarang menetapkan harga yang tidak wajar pada Barang yang ditawarkan melalui Situs Lubkita. Lubkita berhak untuk melakukan tindakan berupa memindahkan Barang ke gudang, pemeriksaan, penundaan, atau penurunan konten serta tindakan lainnya berdasarkan penilaian sendiri dari Lubkita atas dasar penetapan harga yang tidak wajar.</li>
                <li>Pembeli memahami dan menyetujui bahwa kesalahan keterangan harga dan informasi lainnya yang disebabkan tidak terbaharuinya halaman situs Lubkita dikarenakan browser/ISP yang dipakai Pembeli adalah tanggung jawab Pembeli.</li>
                <li>Penjual memahami dan menyetujui bahwa kesalahan ketik yang menyebabkan keterangan harga atau informasi lain menjadi tidak benar/sesuai adalah tanggung jawab Penjual. Perlu diingat dalam hal ini, apabila terjadi kesalahan pengetikan keterangan harga Barang yang tidak disengaja, Penjual berhak menolak pesanan Barang yang dilakukan oleh pembeli.</li>
                <li>Pengguna memahami dan menyetujui bahwa setiap masalah dan/atau perselisihan yang terjadi akibat ketidaksepahaman antara Penjual dan Pembeli tentang harga bukanlah merupakan tanggung jawab Lubkita.</li>
                <li>Dengan melakukan pemesanan melalui Lubkita, Pengguna menyetujui untuk membayar total biaya yang harus dibayarkan sebagaimana tertera dalam halaman pembayaran, yang terdiri dari harga barang, ongkos kirim, dan biaya-biaya lain yang mungkin timbul dan akan diuraikan secara tegas dalam halaman pembayaran. Pengguna setuju untuk melakukan pembayaran melalui metode pembayaran yang telah dipilih sebelumnya oleh Pengguna.</li>
                <li>Batasan harga maksimal satuan untuk Barang yang dapat ditawarkan adalah Rp. 10.000.000.000,-</li>
                <li>Situs Lubkita untuk saat ini hanya melayani transaksi jual beli Barang dalam mata uang Rupiah.</li>
            </ol>
        </div>

        <!-- Section H -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">H. Tarif Pengiriman</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <p>Pembeli memahami dan mengerti bahwa Lubkita telah melakukan usaha sebaik mungkin dalam memberikan informasi tarif pengiriman kepada Pembeli berdasarkan lokasi secara akurat, namun Lubkita tidak dapat menjamin keakuratan data tersebut dengan yang ada pada cabang setempat. Karena itu Lubkita menyarankan kepada Penjual untuk mencatat terlebih dahulu tarif yang diberikan Lubkita, agar dapat dibandingkan dengan tarif yang dibebankan di cabang setempat. Apabila mendapati perbedaan, mohon sekiranya untuk menginformasikan kepada kami melalui menu contact us dengan memberikan data harga yang didapat beserta kota asal dan tujuan, agar dapat kami telusuri lebih lanjut. Pengguna memahami dan menyetujui bahwa selisih biaya pengiriman Barang adalah di luar tanggung jawab Lubkita, dan oleh karena itu, adalah kebijakan Penjual sendiri untuk membatalkan atau tetap melakukan pengiriman Barang.</p>

            </ol>
        </div>

        <!-- Section I -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">I. Konten</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Dalam menggunakan setiap fitur dan/atau layanan Lubkita, Pengguna dilarang untuk menggunggah atau mempergunakan kata-kata, komentar, gambar, video atau konten apapun yang mengandung unsur SARA, diskriminasi, merendahkan atau menyudutkan orang lain, vulgar, bersifat ancaman, beriklan atau melakukan promosi ke situs selain Situs Lubkita, atau hal-hal lain yang dapat dianggap tidak sesuai dengan nilai dan norma sosial maupun berdasarkan kebijakan yang ditentukan sendiri oleh Lubkita. Lubkita berhak melakukan tindakan yang diperlukan atas pelanggaran ketentuan ini, antara lain penghapusan konten, moderasi toko, pemblokiran akun, dan lain-lain.</li>
                <li>Pengguna dilarang mempergunakan foto/gambar Barang yang memiliki watermark yang menandakan hak kepemilikan orang lain.</li>
                <li>Pengguna dengan ini memahami dan menyetujui bahwa penyalahgunaan foto/gambar yang di unggah oleh Pengguna adalah tanggung jawab Pengguna secara pribadi.</li>
                <li>Penjual tidak diperkenankan untuk mempergunakan foto/gambar Barang atau logo toko sebagai media untuk beriklan atau melakukan promosi ke situs-situs lain diluar Situs Lubkita, atau memberikan data kontak pribadi untuk melakukan transaksi secara langsung kepada pembeli / calon pembeli.</li>
                <li>Penjual menjamin foto/gambar yang diunggah tidak termasuk konten yang dilarang berdasarkan Poin I. 1 atau melanggar hak milik pihak lain. Apabila didapati foto/gambar melanggar konten berdasarkan Poin I. 1 atau terdapat laporan pelanggaran hak milik pihak lain, maka Lubkita berhak melakukan tindakan yang diperlukan atas pelanggaran ketentuan ini, termasuk namun tidak terbatas pada penghapusan konten dan/atau tindakan lainnya yang perlu dilakukan.</li>
                <li>Ketika Pengguna mengunggah ke Situs Lubkita dengan konten atau posting konten, Pengguna memberikan Lubkita hak non-eksklusif, di seluruh dunia, secara terus-menerus, tidak dapat dibatalkan, bebas royalti, disublisensikan (melalui beberapa tingkatan) hak untuk melaksanakan setiap dan semua hak cipta, publisitas, merek dagang, hak basis data dan hak kekayaan intelektual yang Pengguna miliki dalam konten, di media manapun yang dikenal sekarang atau di masa depan. Selanjutnya, untuk sepenuhnya diizinkan oleh hukum yang berlaku, Anda mengesampingkan hak moral dan berjanji untuk tidak menuntut hak-hak tersebut terhadap Lubkita.</li>
                <li>Pengguna menjamin bahwa tidak melanggar hak kekayaan intelektual dalam mengunggah konten Pengguna kedalam situs Lubkita. Setiap Pengguna dengan ini bertanggung jawab secara pribadi atas pelanggaran hak kekayaan intelektual dalam mengunggah konten di Situs Lubkita.</li>
                <li>Lubkita menyediakan fitur "Diskusi Produk" untuk memudahkan pembeli berinteraksi dengan penjual, perihal Barang yang ditawarkan. Penjual tidak diperkenankan menggunakan fitur tersebut untuk tujuan dengan cara apa pun menaikkan harga Barang dagangannya, termasuk di dalamnya memberi komentar pertama kali atau memberi komentar selanjutnya / terus menerus secara berkala (flooding / spam).</li>
                <li>Meskipun kami mencoba untuk menawarkan informasi yang dapat diandalkan, kami tidak bisa menjanjikan bahwa katalog akan selalu akurat dan terbarui, dan Pengguna setuju bahwa Pengguna tidak akan meminta Lubkita bertanggung jawab atas ketimpangan dalam katalog. Katalog mungkin termasuk hak cipta, merek dagang atau hak milik lainnya.</li>
                <li>Konten atau materi yang akan ditampilkan atau ditayangkan pada Situs/Aplikasi Lubkita melalui Feed akan tunduk pada Ketentuan Situs, peraturan hukum, serta etika pariwara yang berlaku.</li>
                <li>KOL, Pengguna atau pihak lainnya yang menggunakan fitur Feed bertanggungjawab penuh terhadap konten atau materi yang diunggah melalui fitur Feed.</li>
                <li>Lubkita berhak untuk sewaktu-waktu menurunkan konten atau materi yang terdapat pada Feed yang dianggap melanggar Syarat dan Ketentuan Situs, peraturan hukum yang berlaku, serta etika pariwara yang berlaku.</li>
                <li>Lubkita berhak untuk sewaktu-waktu tanpa pemberitahuan sebelumnya, melakukan tindakan penurunan konten produk di aplikasi Lubkita versi Android pada setiap produk tembakau / rokok elektrik atau pun produk penunjangnya, produk obat-obatan atau vitamin yang mengandung zat yang dilarang, atau produk digital yang seharusnya dibeli melalui suatu aplikasi secara langsung, sesuai dengan Kebijakan Google Play Store.</li>
                <li>Lubkita berhak sewaktu-waktu tanpa pemberitahuan sebelumnya, untuk mengambil tindakan berupa penurunan reputasi toko atau moderasi toko, apabila Penjual diduga melakukan manipulasi konten sebagaimana diatur dalam poin I. 13 dan 14, termasuk namun tidak terbatas pada manipulasi penulisan nama, gambar, deskripsi, kategori produk, dan/atau kegiatan lainnya yang bertujuan untuk mengelabui penjualan konten sebagaimana diatur dalam poin I. 13 dan 14 agar tetap dapat melakukan penawaran menggunakan Aplikasi Android.</li>
            </ol>
        </div>

        <!-- Section J -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">J. Jenis Barang dan Jasa</h2>
            <p class="mb-4 text-gray-600">Berikut ini adalah daftar jenis Barang dan Jasa yang dilarang dan/atau dibatasi untuk diperdagangkan oleh Penjual pada Situs Lubkita:</p>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Segala jenis obat-obatan maupun zat-zat lain yang dilarang ataupun dibatasi peredarannya menurut ketentuan hukum yang berlaku, termasuk namun tidak terbatas pada ketentuan Undang-Undang Narkotika, Undang-Undang Psikotropika, dan Undang-Undang Kesehatan. Termasuk pula dalam ketentuan ini adalah obat keras, obat-obatan yang memerlukan resep dokter, obat bius dan sejenisnya, atau obat yang tidak memiliki izin edar dari Badan Pengawas Obat dan Makanan (BPOM).</li>
                <li>Kosmetik dan makanan minuman yang membahayakan keselamatan penggunanya, ataupun yang tidak mempunyai izin edar dari Badan Pengawas Obat dan Makanan (BPOM).</li>
                <li>Bahan yang diklasifikasikan sebagai Bahan Berbahaya menurut Peraturan Menteri Perdagangan yang berlaku.</li>
                <li>Jenis Produk tertentu yang wajib memiliki:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>SNI;</li>
                        <li>Petunjuk penggunaan dalam Bahasa Indonesia; atau</li>
                        <li>Label dalam Bahasa Indonesia.</li>
                    </ol>
                    Sementara yang diperjualbelikan tidak mencantumkan hal-hal tersebut.
                </li>
                <li>Barang-barang lain yang kepemilikannya ataupun peredarannya melanggar ketentuan hukum yang berlaku di Indonesia.</li>
                <li>Barang yang merupakan hasil dan/atau terkait pelanggaran Hak Cipta atau Merek, termasuk namun tidak terbatas pada:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Penggunaan Merek pihak lain tanpa izin, termasuk namun tidak terbatas pada pada nama, deskripsi, video, atau foto produk;</li>
                        <li>Barang palsu / imitasi / bajakan;</li>
                        <li>Penggunaan hak cipta pihak lain tanpa izin pada Barang yang dijual;</li>
                        <li>Pelanggaran hak cipta pihak lain tanpa izin pada gambar, video, atau deskripsi produk; dan/atau</li>
                        <li>Pelanggaran hak kekayaan intelektual lainnya pada Barang yang dijual.</li>
                    </ol>
                </li>
                <li>Barang dewasa yang bersifat seksual berupa obat perangsang, alat bantu seks yang mengandung konten pornografi, serta obat kuat dan obat-obatan dewasa, baik yang tidak memiliki izin edar BPOM maupun yang peredarannya dibatasi oleh ketentuan hukum yang berlaku.</li>
                <li>Minuman beralkohol.</li>
                <li>Iklan.</li>
                <li>Segala bentuk tulisan yang dapat berpengaruh negatif terhadap pemakaian situs ini.</li>
                <li>Pakaian dalam bekas.</li>
                <li>Senjata api, senjata tajam, senapan angin, dan segala macam senjata.</li>
                <li>Dokumen pemerintahan dan perjalanan.</li>
                <li>Seragam pemerintahan.</li>
                <li>Bagian/Organ manusia.</li>
                <li>Mailing list dan informasi pribadi.</li>
                <li>Barang-Barang yang melecehkan pihak/ras tertentu atau dapat merendahkan martabat orang lain.</li>
                <li>Pestisida, kecuali pestisida untuk penggunaan yang telah mempunyai nomor pendaftaran dan izin dari Kementerian Pertanian Republik Indonesia.</li>
                <li>Atribut kepolisian.</li>
                <li>Barang hasil tindak pencurian.</li>
                <li>Pembuka kunci dan segala aksesori penunjang tindakan perampokan/pencurian.</li>
                <li>Barang yang dapat dan atau mudah meledak, menyala atau terbakar sendiri.</li>
                <li>Barang cetakan/rekaman yang isinya dapat mengganggu keamanan & ketertiban serta stabilitas nasional.</li>
                <li>Hewan berbahaya dan/atau Hewan yang dilindungi, Penjual dan Pembeli wajib memperhatikan ketentuan penjualan hewan peliharaan pada Situs/Aplikasi.</li>
                <li>Uang tunai termasuk valuta asing kecuali Penjual memiliki dan dapat mencantumkan izin sebagai Penyelenggara Kegiatan Usaha Penukaran Valuta Asing Bukan Bank berdasarkan Peraturan Bank Indonesia No.18/20/PBI/2016 dan/atau peraturan lainnya yang terkait dengan penukaran valuta asing.</li>
                <li>Materai, kecuali materai tempel yang dijual oleh Penjual yang merupakan pihak yang ditunjuk secara resmi oleh PT Pos Indonesia (Persero) untuk menjual meterai tempel melalui Situs/Aplikasi.</li>
                <li>Pengacak sinyal, penghilang sinyal, dan/atau alat-alat lain yang dapat mengganggu sinyal atau jaringan telekomunikasi.</li>
                <li>Perlengkapan dan peralatan judi.</li>
                <li>Jimat-jimat, benda-benda yang diklaim berkekuatan gaib dan memberi ilmu kesaktian.</li>
                <li>Barang dengan hak Distribusi Eksklusif yang hanya dapat diperdagangkan dengan sistem penjualan langsung oleh penjual resmi dan/atau Barang dengan sistem penjualan Multi Level Marketing.</li>
                <li>Produk non fisik yang tidak dapat dikirimkan melalui jasa kurir, termasuk namun tidak terbatas pada produk pulsa/voucher (telepon, listrik, game, dan/atau credit digital), tiket pesawat dan/atau tiket kereta.</li>
                <li>Tiket pertunjukan, termasuk namun tidak terbatas pada tiket konser, baik fisik maupun non fisik.</li>
                <li>Dokumen-dokumen resmi seperti Sertifikat Toefl, Ijazah, Surat Dokter, Kwitansi, dan lain sebagainya.</li>
                <li>Segala jenis Barang lain yang bertentangan dengan peraturan pengiriman Barang Indonesia.</li>
                <li>Barang-barang lain yang melanggar ketentuan hukum yang berlaku di Indonesia, termasuk namun tidak terbatas pada ketentuan peraturan perpajakan, perizinan, peredaran Barang, kewajiban pendaftaran Barang dan/atau proses pengadaan Barang tersebut (baik melalui impor dan/atau produksi dalam negeri).</li>
                <li>Segala jenis Jasa kecuali untuk penawaran yang berasal dari Lubkita dan afiliasinya termasuk namun tidak terbatas pada jasa print, jasa kebersihan, jasa wedding dan parenting.</li>
                <li>Segala jenis Barang yang isinya tidak pasti, bersifat acak dan/atau undian, termasuk namun tidak terbatas pada Produk Kotak Misteri. Ketentuan tersebut di kecualikan untuk Official Store dan Afiliasi Lubkita.</li>
                <li>Alat Kesehatan yang wajib memiliki izin edar dari Kementerian Kesehatan atau tidak boleh diperdagangkan secara bebas.</li>
            </ol>
        </div>

        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">K. Kartu Kredit</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Pengguna dapat memilih untuk mempergunakan pilihan metode pembayaran menggunakan kartu kredit untuk transaksi pembelian Barang dan produk digital melalui Situs Lubkita.</li>
                <li>Transaksi pembelian barang dengan menggunakan kartu kredit dapat dilakukan untuk transaksi pembelian dengan nilai total belanja:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>minimal Rp50.000 (lima puluh ribu rupiah) hingga maksimal Rp50.000.000 (lima puluh juta rupiah) untuk transaksi marketplace.</li>
                        <li>minimal Rp50.000,- (lima puluh ribu Rupiah) hingga maksimal Rp10.000.000,- (sepuluh juta Rupiah) menggunakan kartu kredit non cicilan untuk produk digital. Maksimal transaksi tidak berlaku untuk produk Tiket Kereta Api, Tiket Pesawat, Hotel, Hiburan, Food & Voucher, E-Invoicing, dan operator tertentu Biaya Pendidikan dan Premi Asuransi.</li>
                    </ol>
                </li>
                <p class="ml-6 mt-2">Transaksi dapat dilakukan hingga Rp500.000.000,- (lima ratus juta rupiah) khusus untuk pembelian produk mobil pada Official Store.</p>
                <li>Transaksi pembelian barang dengan menggunakan kartu kredit wajib mengikuti syarat dan ketentuan yang diatur oleh Lubkita dan mempergunakan kurir/logistik yang disediakan dan terhubung dengan Situs Lubkita.</li>
                <li>Pengguna dilarang untuk mempergunakan metode pembayaran kartu kredit di luar peruntukan sebagai alat pembayaran.</li>
                <li>Apabila terdapat transaksi pembelian barang dengan menggunakan kartu kredit yang melanggar ketentuan hukum dan/atau syarat ketentuan Lubkita, maka Lubkita berwenang untuk: menahan dana transaksi selama diperlukan oleh Lubkita, pihak Bank, maupun mitra payment gateway terkait untuk melakukan investigasi yang diperlukan, sekurang-kurangnya 14 (empat belas) hari; melakukan pemotongan dana sebesar 15% (lima belas persen) dari nilai transaksi, serta menarik kembali nilai subsidi sehubungan penggunaan kartu kredit.</li>
                <li>Lubkita berwenang untuk melakukan investigasi terhadap transaksi Kartu Kredit dengan melakukan penahanan proses verifikasi pembayaran sebelum transaksi diteruskan ke Penjual sampai batas waktu tertentu hingga mendapatkan konfirmasi dari partner bank penyedia kartu kredit, maupun mitra payment gateway. Lubkita juga berwenang untuk melakukan pembatasan metode pembayaran dan/atau melakukan pembatalan transaksi Kartu Kredit apabila terdapat indikasi pelanggaran ketentuan hukum yang berlaku dan/atau Syarat dan Ketentuan Lubkita.</li>
                <li>Dalam proses verifkasi yang dilakukan oleh partner bank dan/atau mitra payment gateway Pengguna akan dihubungi oleh partner bank dan/atau mitra payment gateway, jika Pengguna tidak melakukan penyangkalan atau pembatalan terhadap verifikasi tersebut, maka transaksi akan diteruskan ke Penjual dan Lubkita tidak bertanggung jawab apabila terjadi kerugian yang disebabkan oleh kelalaian Pengguna.</li>
                <li>Pengguna memahami dan menyetujui bahwa bertanggung jawab secara pribadi untuk menjaga kerahasiaan dan/atau keamanan data Kartu Kredit milik Pengguna dengan cara menjaga kerahasiaan nomor Kartu Kredit, kode CVV Kartu Kredit, dan kode SMS verifikasi atau kode SMS OTP (One-time Password) yang telah dikirimkan oleh pihak Bank saat melakukan transaksi.</li>
                <li>Lubkita akan menghentikan kerjasama dengan Penjual yang melakukan tindakan yang dapat merugikan prinsipal, penerbit, acquirer dan /atau pemegang kartu kredit, antara lain memproses penarikan / gesek tunai (cash withdrawal transaction).</li>
                <li>Apabila transaksi pembelian tidak berhasil dan/atau dibatalkan, maka tagihan atas transaksi tersebut akan dibatalkan dan dana transaksi akan dikembalikan ke limit kartu kredit pembeli di tagihan berikutnya. Ketentuan pada ayat ini tidak berlaku untuk transaksi pembelian barang dengan menggunakan kartu kredit yang melanggar ketentuan hukum dan/atau syarat ketentuan Lubkita.</li>
                <li>Transaksi pembelian yang menggunakan metode pembayaran kartu kredit dengan sistem cicilan akan dikenakan biaya layanan dari total biaya yang harus dibayarkan berdasarkan tenor cicilan yang dipilih dan untuk metode pembayaran Kartu Kredit tanpa cicilan tidak akan dikenakan biaya layanan. Biaya layanan ini diberlakukan untuk tujuan pemeliharaan sistem dan peningkatan layanan dalam berbelanja.</li>
                <li>Transaksi pembelian yang menggunakan metode pembayaran cicilan kartu kredit akan dikenakan biaya layanan yang diberlakukan untuk tujuan pemeliharaan sistem dan peningkatan layanan dalam bertransaksi melalui Lubkita, dengan rincian sebagai berikut:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Cicilan 3 (tiga) bulan sebesar 2.5% (dua koma lima persen)</li>
                        <li>Cicilan 6 (enam) bulan sebesar 3.5% (tiga koma lima persen)</li>
                        <li>Cicilan 12 (dua belas) bulan sebesar 6% (enam persen)</li>
                        <li>Cicilan 18 (delapan belas) bulan sebesar 8% (delapan persen)</li>
                        <li>Cicilan 24 (dua puluh empat) bulan sebesar 10% (sepuluh persen)</li>
                    </ol>
                </li>
                <li>Apabila seluruh transaksi dalam satu pembayaran yang menggunakan kartu kredit dibatalkan, maka biaya layanan tersebut akan dikembalikan ke limit kartu kredit Pengguna. Namun apabila hanya sebagian transaksi dalam satu pembayaran yang menggunakan kartu kredit dibatalkan, maka biaya layanan tersebut tidak akan ikut serta dikembalikan.</li>
            </ol>
        </div>
        
        <!-- Section L -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">L. Pengiriman Barang</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Pengiriman Barang dalam sistem Lubkita wajib menggunakan jasa perusahaan ekspedisi yang telah mendapatkan verifikasi rekanan Lubkita yang dipilih oleh Pembeli. Apabila Penjual memasukkan resi di luar dari resi partner rekanan Lubkita (termasuk di dalamnya resi pengiriman dari kurir luar negeri), Lubkita berhak untuk menolak resi tersebut; dimana hal ini dapat mengakibatkan dibatalkannya sebuah pesanan.</li>
                <li>Setiap ketentuan berkenaan dengan proses pengiriman Barang adalah wewenang sepenuhnya penyedia jasa layanan pengiriman Barang.</li>
                <li>Penjual wajib memenuhi ketentuan yang ditetapkan oleh jasa layanan pengiriman barang tersebut dan bertanggung jawab atas setiap Barang yang dikirimkan.</li>
                <li>Penjual memahami dan menyetujui bahwa Penjual wajib memenuhi standar pengemasan pengiriman Barang berdasarkan ketentuan kategori Barang sebagai berikut:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Cairan wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa, karton atau kardus, lakban, peredam ruang kosong, lapisan luar paket, dan stiker fragile. Optional menggunakan packing kayu (biaya dibebankan kepada Pembeli atau Penjual sesuai dengan kesepakatan).</li>
                        <li>Elektronik (baterai, komputer, handphone, dan laptop), barang pecah belah, barang tajam / runcing wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa, karton atau kardus, lakban, peredam ruang kosong, lapisan luar paket, packing kayu (biaya dibebankan kepada Pembeli atau Penjual sesuai dengan kesepakatan), dan stiker fragile.</li>
                        <li>Makanan wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa, karton atau kardus, lakban, peredam ruang kosong, lapisan luar paket, dan stiker fragile.</li>
                        <li>Lain-lain wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa, karton atau kardus, lakban, dan peredam ruang kosong. Optional menggunakan lapisan luar paket, packing kayu (biaya dibebankan kepada Pembeli atau Penjual sesuai dengan kesepakatan), dan stiker fragile.</li>
                    </ol>
                </li>
                <li>Dalam hal diperlukan untuk dilakukan proses pengembalian barang, maka Pengguna, baik Penjual maupun Pembeli, diwajibkan untuk melakukan pengiriman barang langsung ke masing-masing Pembeli maupun Penjual. Lubkita tidak menerima pengembalian atau pengiriman barang atas transaksi yang dilakukan oleh Pengguna dalam kondisi apapun.</li>
                <li>Dalam hal terjadi kendala dalam proses pengiriman berupa barang hilang, barang rusak, dan lain sebagainya, Pembeli dan Penjual dapat melaporkan ke pihak Lubkita sesuai dengan ketentuan batas waktu pelaporan dan klaim masing-masing penyedia jasa layanan pengiriman Barang yang digunakan Pembeli dan Penjual.</li>
                <li>Informasi lebih lengkap terkait penyedia jasa layanan pengiriman Barang beserta dengan ketentuan yang berlaku pada masing-masing penyedia jasa layanan pengiriman Barang</li>
            </ol>
        </div>

        <!-- Section M -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">M. Pusat Resolusi</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Pusat Resolusi adalah fitur yang disediakan oleh Lubkita untuk memfasilitasi penyelesaian masalah transaksi antara Pembeli dan Penjual.</li>
                <li>Fitur ini akan secara otomatis menahan dana pembayaran barang ke Penjual sampai dengan permasalahan yang dilaporkan ke Pusat Resolusi selesai.</li>
                <li>Dalam menggunakan fitur ini, Pembeli dan Penjual diharapkan memberikan bukti-bukti transaksi jual beli berupa foto barang, nota pembelian, slip resi pengiriman dan bukti-bukti penunjang lainnya yang dapat menjadi dasar pembenar atas setiap argumen yang dikeluarkan oleh masing-masing pihak.</li>
                <li>Penyelesaian permasalahan melalui Pusat Resolusi dapat berupa solusi yang dihasilkan berdasarkan kesepakatan bersama antara Pembeli dan Penjual.</li>
                <li>Jika Penjual tidak memberikan jawaban dalam jangka waktu 2 x 24 jam sejak kendala dibuat, maka kendala secara otomatis akan terselesaikan berdasarkan solusi yang diajukan oleh Pembeli.</li>
                <li>Jika tidak ditemukan kesepakatan antara Pembeli dan Penjual dalam jangka waktu 2 x 24 jam, maka Lubkita memiliki hak untuk membantu menyelesaikan kendala.</li>
                <li>Dalam hal Lubkita membantu menyelesaikan kendala, maka sesuai dengan Syarat dan Ketentuan Poin C. 27 dan Poin D. 23, Pembeli dan Penjual menyetujui bahwa Lubkita berwenang untuk mengambil keputusan atas permasalahan tersebut dengan melihat bukti-bukti yang ada dan/atau bukti-bukti baru yang harus dilengkapi masing-masing pihak.</li>
                <li>Lubkita berwenang untuk melakukan mediasi dan/atau mengambil keputusan untuk penyelesaian masalah didalam diskusi Pusat Resolusi, meskipun salah satu pihak (Pembeli atau Penjual) belum memberikan tanggapan atas solusi yang diberikan Pusat Resolusi dalam jangka waktu 2 x 24 jam, dalam hal:
                    <ol class="list-decimal ml-8 mt-2">
                        <li>Adanya informasi dari pihak ketiga yang berkaitan dalam jalannya transaksi, yakni antara lain kurir pengiriman yang memberikan informasi terkait status terkini dari resi pengiriman paket;</li>
                        <li>Bukti dari Pembeli dan/atau Penjual yang dikirimkan melalui jalur komunikasi lain (email Lubkita, Layanan Pengguna, dan lainnya) yang perlu diteruskan ke Pusat Resolusi dengan dasar transparansi masalah;</li>
                        <li>Laporan dari salah satu pihak disebabkan adanya kelalaian Pembeli atau Penjual;</li>
                        <li>Salah satu pihak (Pembeli atau Penjual) terindikasi melakukan tindakan kecurangan;</li>
                        <li>Kondisi tertentu yang menyebabkan Lubkita perlu segera melakukan mediasi.</li>
                    </ol>
                </li>
                <li>Atas keputusan pertama Lubkita diatas, baik Pembeli dan Penjual memiliki hak untuk banding, dengan persyaratan bahwa pihak yang mengajukan upaya banding harus mengajukan bukti baru di luar dari bukti-bukti sebelumnya.</li>
                <li>Pembeli dan Penjual dengan ini menyetujui bahwa Keputusan Lubkita atas upaya banding adalah keputusan akhir yang tidak dapat diganggu gugat dan mengikat pihak Penjual dan Pembeli untuk mematuhinya.</li>
                <li>Pengguna memahami bahwa Pusat Resolusi tidak berlaku untuk produk pakaian dalam bekas, kendala yang berkaitan dengan rasa, aroma dan/atau tekstur produk, dan semua produk dalam daftar jenis barang yang dilarang diperjual-belikan di Lubkita seperti yang ada di halaman Syarat dan Ketentuan.</li>
                <li>Pembeli dan Penjual memahami dan menyetujui bahwa dalam penyelesaian kendala di Pusat Resolusi, Pembeli dan Penjual wajib memberikan tanggapan atas kendala yang ada hingga selesai dengan mematuhi ketentuan dan batas waktu sebagaimana yang telah ditentukan pihak Lubkita pada diskusi terkait.</li>
                <li>Pembeli dan Penjual memahami dan menyetujui bahwa penanggungan ongkos kirim yang timbul selama proses penyelesaian kendala pada Pusat Resolusi didasarkan oleh bukti-bukti dan/atau kesepakatan yang diberikan oleh kedua belah pihak. Apabila Pembeli dan/atau Penjual tidak bersedia untuk menanggung ongkos kirim tersebut, maka Lubkita berwenang memberikan keputusan penanggungan ongkos kirim berdasarkan perkembangan diskusi dan bukti yang ada.</li>
                <li>Pembeli memahami dan menyetujui bahwa setelah adanya kesepakatan untuk pengiriman Barang kembali ke Penjual, apabila dalam waktu maksimal 2 x 24 jam (tidak termasuk hari libur nasional, Sabtu dan Minggu) terhitung sejak Penjual memberikan alamat, Pembeli tidak kunjung melakukan pengiriman barang, maka Lubkita berwenang untuk mengambil keputusan berdasarkan perkembangan diskusi dan bukti yang ada.</li>
                <li>Penjual memahami dan menyetujui bahwa pengiriman Barang pengganti untuk Pembeli dapat dilakukan maksimal 2 (dua) hari kerja (tidak termasuk hari libur nasional, sabtu dan minggu) terhitung sejak terdapat status pengiriman dari kurir logistik bahwa Barang yang dikembalikan oleh Pembeli sudah diterima oleh Penjual. Apabila didapati bahwa Penjual tidak memenuhi ketentuan ini, maka Lubkita berwenang untuk mengambil keputusan berdasarkan perkembangan diskusi dan bukti yang ada.</li>
                <li>Pembeli dan Penjual memahami dan menyetujui bahwa batas waktu untuk pemberian bukti adalah maksimal 2 x 24 jam terhitung sejak Lubkita melakukan permintaan bukti kepada Pembeli dan Penjual atas transaksi terkait.</li>
                <li>Lubkita memiliki kontak Pusat Resolusi berupa nomor Lubkita Care, yang akan menghubungi Pengguna untuk membantu menyelesaikan kendala transaksi. Nomor Lubkita Care tidak dapat dihubungi oleh Pengguna karena akan terblokir oleh sistem atau terhubung dengan respons suara interaktif Lubkita. Berikut adalah nomor Lubkita Care: 082177726868</li>
                <li>Pengguna dapat memberikan akses kepada Lubkita untuk menyimpan nomor Lubkita Care ke perangkat Pengguna melalui notifikasi yang muncul setelah Pengguna mengajukan komplain/keluhan pada halaman Lubkita Care. Pengguna memahami dan menyetujui bahwa pemberian akses kepada Lubkita dalam menyimpan nomor Lubkita Care bertujuan untuk mempermudah Pengguna mengenali kontak Lubkita.</li>
                <li>Pengguna memahami dan menyetujui untuk melepaskan Lubkita dari segala tanggung jawab atas kerugian yang timbul akibat kesalahan dan/atau kelalaian yang dilakukan oleh Pengguna baik dalam pelaporan maupun kesalahan lainnya dalam menentukan kendala.</li>
                <li>Tata cara menggunakan Pusat Resolusi selengkapnya dapat dilihat pada Halaman Bantuan Pusat Resolusi.</li>
            </ol>
        </div>

        <!-- Section N -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">N. Ketentuan Lain</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Apabila Pengguna mempergunakan fitur/layanan yang tersedia dalam Situs/Aplikasi Lubkita, maka Pengguna dengan ini menyatakan memahami dan menyetujui segala syarat dan ketentuan yang diatur khusus sehubungan dengan fitur/layanan yang digunakan.</li>
                <li>Segala hal yang belum dan/atau tidak diatur dalam syarat dan ketentuan khusus dalam fitur tersebut maka akan sepenuhnya merujuk pada syarat dan ketentuan Lubkita secara umum.</li>
                <li>Dengan menyetujui Syarat dan Ketentuan Lubkita, maka Pengguna telah dianggap tunduk pada Kebijakan Privasi Lubkita.</li>
            </ol>
        </div>

        <!-- Section O -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">O. Penolakan Jaminan Dan Batasan Tanggung Jawab</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <li>Lubkita adalah portal web dengan model Costumer to Customer Marketplace, yang menyediakan layanan kepada Pengguna untuk dapat menjadi Penjual maupun Pembeli di website Lubkita. Dengan demikian transaksi yang terjadi adalah transaksi antar member Lubkita, sehingga Pengguna memahami bahwa batasan tanggung jawab Lubkita secara proporsional adalah sebagai penyedia jasa portal web.</li>
                <li>Lubkita selalu berupaya untuk menjaga Layanan Lubkita aman, nyaman, dan berfungsi dengan baik, tapi kami tidak dapat menjamin operasi terus-menerus atau akses ke Layanan kami dapat selalu sempurna. Informasi dan data dalam situs Lubkita memiliki kemungkinan tidak terjadi secara real time.</li>
                <li>Pengguna setuju bahwa Anda memanfaatkan Layanan Lubkita atas risiko Pengguna sendiri, dan Layanan Lubkita diberikan kepada Anda pada "SEBAGAIMANA ADANYA" dan "SEBAGAIMANA TERSEDIA".</li>
                <li>Sejauh diizinkan oleh hukum yang berlaku, Lubkita (termasuk Induk Perusahaan, direktur, dan karyawan) adalah tidak bertanggung jawab, dan Anda setuju untuk tidak menuntut Lubkita bertanggung jawab, atas segala kerusakan atau kerugian (termasuk namun tidak terbatas pada hilangnya uang, reputasi, keuntungan, atau kerugian tak berwujud lainnya) yang diakibatkan secara langsung atau tidak langsung dari:
                    <ol class="list-disc ml-8 mt-2">
                        <li>Penggunaan atau ketidakmampuan Pengguna dalam menggunakan Layanan Lubkita.</li>
                        <li>Harga, Pengiriman atau petunjuk lain yang tersedia dalam layanan Lubkita.</li>
                        <li>Keterlambatan atau gangguan dalam Layanan Lubkita.</li>
                        <li>Kelalaian dan kerugian yang ditimbulkan oleh masing-masing Pengguna.</li>
                        <li>Kualitas Barang.</li>
                        <li>Pengiriman Barang.</li>
                        <li>Pelanggaran Hak atas Kekayaan Intelektual.</li>
                        <li>Perselisihan antar pengguna.</li>
                        <li>Pencemaran nama baik pihak lain.</li>
                        <li>Setiap penyalahgunaan Barang yang sudah dibeli pihak Pengguna.</li>
                        <li>Kerugian akibat pembayaran tidak resmi kepada pihak lain selain ke Rekening Resmi Lubkita, yang dengan cara apapun mengatas-namakan Lubkita ataupun kelalaian penulisan rekening dan/atau informasi lainnya dan/atau kelalaian pihak bank.</li>
                        <li>Pengiriman untuk perbaikan Barang yang bergaransi resmi dari pihak produsen. Pembeli dapat membawa Barang langsung kepada pusat layanan servis terdekat dengan kartu garansi dan faktur pembelian.</li>
                        <li>Virus atau perangkat lunak berbahaya lainnya (bot, script, automation tool selain fitur Power Merchant, Power Merchant Pro, hacking tool) yang diperoleh dengan mengakses, atau menghubungkan ke layanan Lubkita.</li>
                        <li>Gangguan, bug, kesalahan atau ketidakakuratan apapun dalam Layanan Lubkita.</li>
                        <li>Kerusakan pada perangkat keras Anda dari penggunaan setiap Layanan Lubkita.</li>
                        <li>Isi, tindakan, atau tidak adanya tindakan dari pihak ketiga, termasuk terkait dengan Produk yang ada dalam situs Lubkita yang diduga palsu.</li>
                        <li>Tindak penegakan yang diambil sehubungan dengan akun Pengguna.</li>
                        <li>Adanya tindakan peretasan yang dilakukan oleh pihak ketiga kepada akun pengguna.</li>
                    </ol>
                </li>
            </ol>
        </div>

        <!-- Section P -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">P. Pelepasan</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <p>Jika Anda memiliki perselisihan dengan satu atau lebih pengguna, Anda melepaskan Lubkita (termasuk Induk Perusahaan, Direktur, dan karyawan) dari klaim dan tuntutan atas kerusakan dan kerugian (aktual dan tersirat) dari setiap jenis dan sifatnya, yang dikenal dan tidak dikenal, yang timbul dari atau dengan cara apapun berhubungan dengan sengketa tersebut, termasuk namun tidak terbatas pada kerugian yang timbul dari pembelian Barang yang telah dilarang pada Poin J. Jenis Barang. Dengan demikian maka Pengguna dengan sengaja melepaskan segala perlindungan hukum (yang terdapat dalam undang-undang atau peraturan hukum yang lain) yang akan membatasi cakupan ketentuan pelepasan ini.</p>
            </ol>
        </div>

        <!-- Section Q -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">Q. Ganti Rugi</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <p>Pengguna akan melepaskan Lubkita dari tuntutan ganti rugi dan menjaga Lubkita (termasuk Induk Perusahaan, direktur, dan karyawan) dari setiap klaim atau tuntutan, termasuk biaya hukum yang wajar, yang dilakukan oleh pihak ketiga yang timbul dalam hal Anda melanggar Perjanjian ini, penggunaan Layanan Lubkita yang tidak semestinya dan/ atau pelanggaran Anda terhadap hukum atau hak-hak pihak ketiga.</p>
            </ol>
        </div>

        <!-- Section R -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">R. Pilihan Hukum</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <p>Perjanjian ini akan diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan pertentangan aturan hukum. Anda setuju bahwa tindakan hukum apapun atau sengketa yang mungkin timbul dari, berhubungan dengan, atau berada dalam cara apapun berhubungan dengan situs dan/atau Perjanjian ini akan diselesaikan secara eksklusif dalam yurisdiksi pengadilan Republik Indonesia.</p>
            </ol>
        </div>

        <!-- Section S -->
        <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">S. Pembaharuan</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-6">
                <p>Syarat & ketentuan mungkin diubah dan/atau diperbaharui dari waktu ke waktu tanpa pemberitahuan sebelumnya. Lubkita menyarankan agar anda membaca secara seksama dan memeriksa halaman Syarat & ketentuan ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap mengakses dan menggunakan layanan Lubkita, maka pengguna dianggap menyetujui perubahan-perubahan dalam Syarat & Ketentuan.</p>
            </ol>
        </div>
    </div>

    {:else}



    
    <div class="py-8">
        <!-- LDR content here -->
        <h2 class="text-2xl font-bold text-center mb-8">SYARAT DAN KETENTUAN KEANGGOTAAN LUMBUNG DIGITAL RAKYAT</h2>

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
        <li>Satu set perangkat komputer lengkap</li>
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
.bg-syarat-ketentuan {
    background-image: url('/page-syaratketentuan-wallpaper.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>