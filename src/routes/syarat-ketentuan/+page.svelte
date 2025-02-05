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
          <h2 class="text-2xl font-bold">Terms & Conditions</h2>
    
          <!-- Introduction -->
          <div class="space-y-4">
            <p class="text-gray-600">
              Selamat datang di www.lubkita.com.<br>
              Syarat & ketentuan yang ditetapkan di bawah ini mengatur pemakaian jasa yang ditawarkan oleh PT. Lumbung Artha Kita terkait penggunaan situs www.lubkita.com. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna di bawah hukum.
            </p>
      
            <p class="text-gray-600">
              Dengan mendaftar dan/atau menggunakan situs www.lubkita.com, maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat & ketentuan. Syarat & ketentuan ini merupakan bentuk kesepakatan yang dituangkan dalam sebuah perjanjian yang sah antara Pengguna dengan PT.Lumbung Artha Kita. Jika pengguna tidak menyetujui salah satu, pesebagian, atau seluruh isi Syarat & ketentuan, maka pengguna tidak diperkenankan menggunakan layanan di www.lubkita.com.
            </p>
          </div>
      
          <!-- Section A -->
          <section class="space-y-4">
            <h3 class="text-xl font-bold">A. Definisi</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>PT Lumbung Artha Kita adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.lubkita.com, yakni situs pencarian toko dan Barang yang dijual oleh penjual terdaftar. Selanjutnya disebut Lubkita.</li>
              <li>Situs Lubkita adalah www.lubkita.com.</li>
              <li>Syarat & ketentuan adalah perjanjian antara Pengguna dan Lubkita yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Lubkita, serta tata cara penggunaan sistem layanan Lubkita.</li>
              <li>Pengguna adalah pihak yang menggunakan layanan Lubkita, termasuk namun tidak terbatas pada pembeli, penjual maupun pihak lain yang sekedar berkunjung ke Situs Lubkita.</li>
              <li>Pembeli adalah Pengguna terdaftar yang melakukan permintaan atas Barang yang dijual oleh Penjual di Situs Lubkita.</li>
              <li>Penjual adalah Pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran atas suatu Barang kepada para Pengguna Situs Lubkita.</li>
              <li>Barang adalah benda yang berwujud / memiliki fisik Barang yang dapat diantar / memenuhi kriteria pengiriman oleh perusahaan jasa pengiriman Barang.</li>
              <li>Saldo Refund adalah fasilitas penampungan sementara atas dana milik Pembeli (bukan fasilitas penyimpanan dana), yang disediakan Lubkita untuk menampung pengembalian dana transaksi (refund) pembelian Barang, produk digital, dan/atau produk keuangan.</li>
              <li>Saldo Penghasilan adalah fasilitas penampungan sementara atas dana milik Penjual (bukan fasilitas penyimpanan dana), yang disediakan Lubkita untuk menampung dana hasil penjualan Barang, produk investasi, dan/atau komisi affiliate pada Situs Lubkita.</li>
              <li>Feed adalah fitur pada Situs/Aplikasi Lubkita yang menampilkan konten dari Penjual, KOL, atau pihak lainnya terkait Barang tertentu.</li>
              <li>Key Opinion Leaders atau KOL adalah pihak yang mempromosikan Barang atau Penjual tertentu melalui Feed.</li>
              <li>Rekening Resmi Lubkita adalah rekening bersama yang disepakati oleh Lubkita dan para pengguna untuk proses transaksi jual beli di Situs Lubkita.</li>
              <li>Internal Dropshipper adalah transaksi yang seluruhnya terjadi di ruang lingkup Lubkita yang dilakukan oleh Penjual dengan membeli Barang dari Penjual lainnya dan menjualnya kembali melalui Situs Lubkita.</li>
            </ol>
          </section>
      
          <!-- Section B -->
          <section class="space-y-4">
            <h3 class="text-xl font-bold">B. Akun, Saldo Refund, Saldo Penghasilan, Password dan Keamanan</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Pengguna menyatakan dan menjamin bahwa Pengguna telah berusia minimal 18 (delapan belas) tahun atau sudah menikah dan tidak berada di bawah perwalian atau pengampuan dan Pengguna secara hukum memiliki kapasitas dan berhak untuk mengikatkan diri pada Syarat dan Ketentuan ini...</li>
              <li>Lubkita tidak memungut biaya pendaftaran kepada Pengguna Basic.</li>
              <li>Pengguna memahami bahwa 1 (satu) nomor telepon hanya dapat digunakan untuk mendaftar 1 (satu) akun Pengguna Lubkita, kecuali bagi Pengguna yang telah memiliki beberapa akun dengan 1 (satu) nomor telepon sebelumnya.</li>
              <li>Pengguna yang telah mendaftar berhak bertindak sebagai:
                <ol class="list-decimal list-inside ml-4">
                  <li>Pembeli</li>
                  <li>Penjual, dengan memanfaatkan layanan buka toko.</li>
                </ol>
              </li>
              <li>Pengguna yang akan bertindak sebagai Penjual diwajibkan memilih pilihan menggunakan layanan buka toko...</li>
              <li>Lubkita tanpa pemberitahuan terlebih dahulu kepada Pengguna, memiliki kewenangan untuk melakukan tindakan yang perlu...</li>
              <li>Lubkita memiliki kewenangan untuk menutup toko atau akun Pengguna baik sementara maupun permanen...</li>
              <li>Pengguna memahami dan menyetujui untuk tidak menggunakan, memodifikasi, membongkar...</li>
              <li>Pengguna menyetujui untuk tidak menggunakan dan/atau mengakses sistem Lubkita secara langsung...</li>
              <li>Pengguna dilarang untuk menciptakan dan/atau menggunakan perangkat keras/lunak/fitur...</li>
              <li>Lubkita memiliki kewenangan untuk melakukan penyesuaian jumlah transaksi toko...</li>
              <li>Saldo Refund berasal dari pengembalian dana transaksi (refund) pembelian Barang...</li>
              <li>Saldo Refund dapat digunakan sebagai salah satu metode pembayaran...</li>
              <li>Saldo Penghasilan hanya berasal dari hasil penjualan Barang...</li>
              <li>Saldo Penghasilan hanya dapat dilakukan penarikan dana (withdrawal)...</li>
              <li>Lubkita memiliki kewenangan untuk melakukan pembekuan Saldo Refund...</li>
              <li>Penjual dilarang melakukan duplikasi toko, duplikasi produk...</li>
              <li>Pengguna memiliki hak untuk melakukan perubahan nama toko...</li>
              <li>Pengguna memiliki hak untuk melakukan perubahan pada nama akun...</li>
              <li>Pengguna bertanggung jawab secara pribadi untuk menjaga kerahasiaan akun...</li>
              <li>Lubkita tidak akan meminta username, password maupun kode SMS verifikasi...</li>
              <li>Pengguna setuju untuk memastikan bahwa Pengguna keluar dari akun...</li>
              <li>Pengguna dengan ini menyatakan bahwa Lubkita tidak bertanggung jawab...</li>
              <li>Pengguna memahami dan menyetujui bahwa untuk mempergunakan fasilitas keamanan one time password...</li>
              <li>Penjual dilarang mempromosikan toko dan/atau Barang secara langsung...</li>
            </ol>
          </section>
          
          <section class="space-y-4">
            <h3 class="text-xl font-bold">C. Transaksi Pembelian</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Pembeli wajib bertransaksi melalui prosedur transaksi yang telah ditetapkan oleh Lubkita...</li>
              <li>Saat melakukan pembelian Barang, Pembeli menyetujui bahwa:
                <ol class="list-decimal list-inside ml-4">
                  <li>Pembeli bertanggung jawab untuk membaca, memahami, dan menyetujui informasi/deskripsi keseluruhan Barang...</li>
                  <li>Pembeli mengakui bahwa warna sebenarnya dari produk sebagaimana terlihat di Situs/Aplikasi Lubkita...</li>
                  <li>Pengguna masuk ke dalam kontrak yang mengikat secara hukum untuk membeli Barang...</li>
                  <li>Lubkita tidak mengalihkan kepemilikan secara hukum atas barang-barang dari Penjual kepada Pembeli.</li>
                </ol>
              </li>
              <li>Pembeli memahami dan menyetujui bahwa ketersediaan stok Barang merupakan tanggung jawab Penjual...
                <ol class="list-decimal list-inside ml-4">
                  <li>jika stok Barang kosong, maka Penjual dapat menolak pesanan...</li>
                  <li>jika Pembeli membeli lebih dari 1 (satu) Barang berbeda dan terdapat stok Barang yang kosong...</li>
                  <li>jika Pembeli membeli lebih dari 1 (satu) Barang yang sama dan Penjual tidak dapat memenuhi seluruh pesanan...</li>
                </ol>
              </li>
              <li>Pembeli memahami dan menyetujui dengan menerima pesanan Barang sebagian...</li>
              <li>a. jika stok Barang kosong, maka Penjual dapat menolak pesanan...</li>
              <li>Pembeli memahami sepenuhnya dan menyetujui bahwa segala transaksi yang dilakukan...</li>
              <li>Lubkita memiliki kewenangan sepenuhnya untuk menolak pembayaran...</li>
              <li>Pembeli menyetujui dan memahami bahwa dengan menggunakan Situs/Aplikasi Lubkita...</li>
              <li>Pembeli yang menggunakan metode pembayaran transfer bank...</li>
              <li>Pembeli wajib melakukan pembayaran dengan metode pembayaran yang dipilih...</li>
              <li>Pembayaran oleh Pembeli wajib dilakukan segera...</li>
              <li>Pembeli disarankan untuk memeriksa dan melakukan pembayaran...</li>
              <li>Pembayaran dengan metode pembayaran transfer bank...</li>
              <li>Pembeli memahami dan menyetujui bahwa masalah keterlambatan proses pembayaran...</li>
              <li>Pengembalian dana dari Lubkita kepada Pembeli hanya dapat dilakukan jika dalam keadaan-keadaan tertentu berikut ini:
                <ol class="list-decimal list-inside ml-4">
                  <li>Kelebihan pembayaran dari Pembeli atas harga Barang,</li>
                  <li>Pembeli menyetujui penerimaan Barang sebagian yang ditawarkan oleh Penjual,</li>
                  <li>Masalah pengiriman Barang telah teridentifikasi secara jelas...</li>
                  <li>Penjual tidak bisa menyanggupi order karena kehabisan stok...</li>
                  <li>Penjual sudah menyanggupi pengiriman order Barang...</li>
                  <li>Penyelesaian permasalahan melalui Pusat Resolusi...</li>
                </ol>
              </li>
              <li>Apabila terjadi proses pengembalian dana...</li>
              <li>Pembeli dilarang untuk membagi 1 (satu) transaksi pembelian Barang...</li>
              <li>Pembeli memahami dan menyetujui untuk melepaskan Lubkita dari tanggung jawab...</li>
              <li>Lubkita berwenang untuk melakukan tindakan-tindakan yang diperlukan...</li>
              <li>Pembeli menyetujui untuk tidak memberitahukan atau menyerahkan bukti pembayaran...</li>
              <li>Pembeli memahami dan menyetujui bahwa Pembeli bertanggungjawab...</li>
              <li>Pembeli wajib melakukan konfirmasi penerimaan Barang...</li>
              <li>Setelah adanya konfirmasi penerimaan Barang atau konfirmasi penerimaan Barang otomatis...</li>
              <li>Pembeli memahami dan menyetujui bahwa setiap klaim yang dilayangkan...</li>
              <li>Pembeli memahami dan menyetujui bahwa setiap masalah pengiriman Barang...</li>
              <li>Pengguna memahami dan menyetujui jika ditemukan adanya indikasi kecurangan...</li>
            </ol>
          </section>


          <section class="space-y-4">
            <h3 class="text-xl font-bold">D. Transaksi Penjualan</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Penjual dilarang memanipulasi harga Barang dengan tujuan apapun.</li>
              <li>Penjual dilarang melakukan penawaran / berdagang Barang terlarang sesuai dengan yang telah ditetapkan pada ketentuan Poin J. Jenis Barang.</li>
              <li>Penjual wajib memberikan foto dan informasi produk dengan lengkap dan jelas sesuai dengan kondisi dan kualitas produk yang dijualnya...</li>
              <li>Dalam menggunakan Fasilitas "Judul Produk", "Foto Produk", "Catatan" dan "Deskripsi Produk", Penjual dilarang membuat peraturan bersifat klausula baku...</li>
              <li>Penjual wajib memberikan balasan untuk menerima, menerima sebagian, atau menolak pesanan Barang pihak Pembeli...</li>
              <li>Dalam hal Penjual menerima pesanan Barang sebagian, Penjual dapat mengubah jumlah pesanan Barang...</li>
              <li>Penerimaan pesanan Barang sebagian hanya dapat diproses oleh Penjual dengan persetujuan dari Pembeli.</li>
              <li>Penjual memahami dan menyetujui bahwa jika Penjual melakukan penerimaan pesanan Barang sebagian...</li>
              <li>Demi menjaga kenyamanan Pembeli dalam bertransaksi, Penjual memahami dan menyetujui...</li>
              <li>Penjual dilarang untuk menyediakan metode pembayaran terpisah (split payment)...</li>
              <li>Penjual memahami dan menyetujui untuk melepaskan Lubkita dari tanggung jawab...</li>
              <li>Lubkita berwenang untuk melakukan tindakan-tindakan yang diperlukan...</li>
              <li>Penjual menyetujui dan memahami bahwa dengan menerima data informasi Pembeli...</li>
              <li>Penjual diharapkan untuk memasukkan nomor resi pengiriman Barang atau AWB (air way bill) yang valid, yaitu:
                <ol class="list-decimal list-inside ml-4">
                  <li>Tanggal pembuatan resi pengiriman Barang tidak lebih dulu dari tanggal transaksi pembelian Barang;</li>
                  <li>Nomor resi pengiriman Barang harus dapat dilacak atau ditemukan pada web situs pelacakan...</li>
                  <li>Merupakan resi pengiriman Barang yang memang diperuntukkan untuk pembeli yang akan menerima paket tersebut...</li>
                </ol>
              </li>
              <li>Penjual wajib memasukkan nomor resi pengiriman Barang yang valid dalam batas waktu 2 x 24 jam...</li>
              <li>Apabila Penjual memasukkan nomor resi pengiriman Barang yang invalid atau tidak dapat terlacak...</li>
              <li>Jika dalam batas waktu tersebut dalam Syarat & Ketentuan Poin D. 15 dan D. 16 pihak Penjual tidak memasukkan nomor resi...</li>
              <li>Penjual memahami dan menyetujui bahwa kurir pengiriman tidak dapat diubah oleh Penjual...</li>
              <li>Lubkita berwenang untuk membatalkan transaksi dan/atau menahan dana transaksi dalam hal...</li>
              <li>Penjual memahami dan menyetujui bahwa seluruh Pajak sehubungan dengan transaksi Penjualan...</li>
              <li>Apabila disepakati oleh Penjual dan Pembeli, penggunaan jasa Logistik yang berbeda...</li>
              <li>Lubkita berwenang memotong kelebihan tarif pengiriman dari dana pembayaran pembeli...</li>
              <li>Penjual memahami sepenuhnya dan menyetujui bahwa invoice yang diterbitkan adalah atas nama Penjual.</li>
            </ol>
          </section>

          <section class="space-y-4">
            <h3 class="text-xl font-bold">E. Penataan Etalase</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Penjual dilarang mempergunakan etalase (termasuk dan tidak terbatas pada informasi toko dan informasi barang) sebagai media untuk beriklan atau melakukan promosi ke halaman situs lain diluar situs Lubkita.</li>
              <li>Penjual dilarang memberikan data kontak pribadi dengan maksud untuk melakukan transaksi secara langsung kepada Pembeli / calon Pembeli.</li>
              <li>Penjual dilarang memberikan keterangan (informasi toko dan/atau Barang) selain/diluar daripada keterangan toko dan/atau Barang yang bersangkutan.</li>
              <li>Penamaan Barang dan informasi produk harus dilakukan sesuai dengan informasi detail, spesifikasi, dan kondisi Barang...</li>
              <li>Penjual yang menambahkan referensi video pada etalase Toko yang bersumber dari link pihak ketiga, maka Penjual wajib untuk mematuhi kebijakan yang dipersyaratkan oleh pihak ketiga tersebut...</li>
              <li>Penamaan Barang dan informasi produk harus sesuai dengan kondisi Barang yang ditampilkan...</li>
              <li>Lubkita berhak tanpa pemberitahuan sebelumnya untuk melakukan penarikan subsidi (cashback), pembatalan benefit Rewards...</li>
              <li>Penjual wajib memisahkan tiap-tiap Barang yang memiliki ukuran dan harga yang berbeda.</li>
              <li>Lubkita memiliki kewenangan mengambil-alih sub-domain toko Penjual jika akun Penjual sudah tidak aktif lebih dari 9 bulan...</li>
              <li>Lubkita memiliki kewenangan untuk mengubah nama dan/atau memakai nama Toko dan/atau domain Pengguna untuk kepentingan internal Lubkita.</li>
              <li>Penjual memahami dan menyetujui bahwa Lubkita dapat melakukan penghapusan Barang yang terdapat di etalase toko...</li>
              <li>Dalam hal Barang yang terdapat di etalase toko Penjual memenuhi kriteria penghapusan...</li>
              <li>Apabila masa tenggang Barang telah berakhir dan Penjual tidak melakukan perbaikan-perbaikan sebagaimana relevan...</li>
            </ol>
          </section>

          <section class="space-y-4">
            <h3 class="text-xl font-bold">F. Biaya Layanan dan Biaya Jasa Aplikasi</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Biaya Layanan merupakan biaya atas penggunaan dan pemanfaatan layanan Situs/Aplikasi dalam pelaksanaan transaksi pembelian barang/jasa yang dilakukan oleh Pengguna pada Situs/Aplikasi.</li>
              <li>Biaya Jasa Aplikasi merupakan biaya penggunaan pada Situs/Aplikasi Lubkita untuk tujuan pemeliharaan sistem dan peningkatan kualitas layanan melalui Situs/Aplikasi Lubkita.</li>
              <li>Lubkita tidak mengetahui dan oleh karenanya tidak dapat menjamin keabsahan Barang yang dijual atau dibeli secara mandiri oleh Pengguna, untuk itu Pengguna wajib memastikan bahwa Barang yang dijual atau dibeli tidak melanggar ketentuan dalam poin J. Jenis Barang dan/atau ketentuan Peraturan Perundang-undangan yang berlaku.</li>
              <li>Dalam hal ditemukannya dan/atau terdapat dugaan pelanggaran Barang pada transaksi Pengguna, maka Biaya Layanan yang dikenakan kepada Pengguna dan Biaya Jasa Aplikasi atas transaksi yang dikenakan kepada Pembeli akan dikembalikan kepada masing-masing Pengguna. Pengguna dengan ini menjamin, membebaskan dan melepaskan Lubkita dari segala tuntutan hukum atas pelanggaran yang dilakukan oleh Pengguna.</li>
            </ol>
          </section>


          <section class="space-y-4">
            <h3 class="text-xl font-bold">G. Harga</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Harga Barang yang terdapat dalam situs Lubkita adalah harga yang ditetapkan oleh Penjual. Penjual dilarang memanipulasi harga barang dengan cara apapun.</li>
              <li>Penjual dilarang menetapkan harga yang tidak wajar pada Barang yang ditawarkan melalui Situs Lubkita. Lubkita berhak untuk melakukan tindakan berupa memindahkan Barang ke gudang, pemeriksaan, penundaan, atau penurunan konten serta tindakan lainnya berdasarkan penilaian sendiri dari Lubkita atas dasar penetapan harga yang tidak wajar.</li>
              <li>Pembeli memahami dan menyetujui bahwa kesalahan keterangan harga dan informasi lainnya yang disebabkan tidak terbaharuinya halaman situs Lubkita dikarenakan browser/ISP yang dipakai Pembeli adalah tanggung jawab Pembeli.</li>
              <li>Penjual memahami dan menyetujui bahwa kesalahan ketik yang menyebabkan keterangan harga atau informasi lain menjadi tidak benar/sesuai adalah tanggung jawab Penjual. Perlu diingat dalam hal ini, apabila terjadi kesalahan pengetikan keterangan harga Barang yang tidak disengaja, Penjual berhak menolak pesanan Barang yang dilakukan oleh pembeli.</li>
              <li>Pengguna memahami dan menyetujui bahwa setiap masalah dan/atau perselisihan yang terjadi akibat ketidaksepahaman antara Penjual dan Pembeli tentang harga bukanlah merupakan tanggung jawab Lubkita.</li>
              <li>Dengan melakukan pemesanan melalui Lubkita, Pengguna menyetujui untuk membayar total biaya yang harus dibayarkan sebagaimana tertera dalam halaman pembayaran, yang terdiri dari harga barang, ongkos kirim, dan biaya-biaya lain yang mungkin timbul dan akan diuraikan secara tegas dalam halaman pembayaran. Pengguna setuju untuk melakukan pembayaran melalui metode pembayaran yang telah dipilih sebelumnya oleh Pengguna.</li>
              <li>Batasan harga maksimal satuan untuk Barang yang dapat ditawarkan adalah Rp. 10.000.000.000,-</li>
              <li>Situs Lubkita untuk saat ini hanya melayani transaksi jual beli Barang dalam mata uang Rupiah.</li>
            </ol>
          </section>

          <section class="space-y-4">
            <h3 class="text-xl font-bold">H. Tarif Pengiriman</h3>
            <div class="space-y-4 text-gray-600 ml-4">
              <p>Pembeli memahami dan mengerti bahwa Lubkita telah melakukan usaha sebaik mungkin dalam memberikan informasi tarif pengiriman kepada Pembeli berdasarkan lokasi secara akurat, namun Lubkita tidak dapat menjamin keakuratan data tersebut dengan yang ada pada cabang setempat.</p>
              
              <p>Karena itu Lubkita menyarankan kepada Penjual untuk mencatat terlebih dahulu tarif yang diberikan Lubkita, agar dapat dibandingkan dengan tarif yang dibebankan di cabang setempat. Apabila mendapati perbedaan, mohon sekiranya untuk menginformasikan kepada kami melalui menu contact us dengan memberikan data harga yang didapat beserta kota asal dan tujuan, agar dapat kami telusuri lebih lanjut.</p>
              
              <p>Pengguna memahami dan menyetujui bahwa selisih biaya pengiriman Barang adalah di luar tanggung jawab Lubkita, dan oleh karena itu, adalah kebijakan Penjual sendiri untuk membatalkan atau tetap melakukan pengiriman Barang.</p>
            </div>
          </section>


          <section class="space-y-4">
            <h3 class="text-xl font-bold">I. Konten</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Dalam menggunakan setiap fitur dan/atau layanan Lubkita, Pengguna dilarang untuk menggunggah atau mempergunakan kata-kata, komentar, gambar, video atau konten apapun yang mengandung unsur SARA, diskriminasi, merendahkan atau menyudutkan orang lain...</li>
              <li>Pengguna dilarang mempergunakan foto/gambar Barang yang memiliki watermark yang menandakan hak kepemilikan orang lain.</li>
              <li>Pengguna dengan ini memahami dan menyetujui bahwa penyalahgunaan foto/gambar yang di unggah oleh Pengguna adalah tanggung jawab Pengguna secara pribadi.</li>
              <li>Penjual tidak diperkenankan untuk mempergunakan foto/gambar Barang atau logo toko sebagai media untuk beriklan...</li>
              <li>Penjual menjamin foto/gambar yang diunggah tidak termasuk konten yang dilarang berdasarkan Poin I. 1 atau melanggar hak milik pihak lain...</li>
              <li>Ketika Pengguna mengunggah ke Situs Lubkita dengan konten atau posting konten, Pengguna memberikan Lubkita hak non-eksklusif...</li>
              <li>Pengguna menjamin bahwa tidak melanggar hak kekayaan intelektual dalam mengunggah konten Pengguna kedalam situs Lubkita...</li>
              <li>Lubkita menyediakan fitur "Diskusi Produk" untuk memudahkan pembeli berinteraksi dengan penjual...</li>
              <li>Meskipun kami mencoba untuk menawarkan informasi yang dapat diandalkan, kami tidak bisa menjanjikan bahwa katalog akan selalu akurat...</li>
              <li>Konten atau materi yang akan ditampilkan atau ditayangkan pada Situs/Aplikasi Lubkita melalui Feed akan tunduk pada Ketentuan Situs...</li>
              <li>KOL, Pengguna atau pihak lainnya yang menggunakan fitur Feed bertanggungjawab penuh terhadap konten atau materi yang diunggah melalui fitur Feed.</li>
              <li>Lubkita berhak untuk sewaktu-waktu menurunkan konten atau materi yang terdapat pada Feed...</li>
              <li>Lubkita berhak untuk sewaktu-waktu tanpa pemberitahuan sebelumnya, melakukan tindakan penurunan konten produk di aplikasi Lubkita versi Android...</li>
              <li>Lubkita berhak sewaktu-waktu tanpa pemberitahuan sebelumnya, untuk mengambil tindakan berupa penurunan reputasi toko atau moderasi toko...</li>
            </ol>
          </section>


          <section class="space-y-4">
            <h3 class="text-xl font-bold">J. Jenis Barang dan Jasa</h3>
            <p class="text-gray-600 ml-4">Berikut ini adalah daftar jenis Barang dan Jasa yang dilarang dan/atau dibatasi untuk diperdagangkan oleh Penjual pada Situs Lubkita:</p>
            
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Segala jenis obat-obatan maupun zat-zat lain yang dilarang ataupun dibatasi peredarannya...</li>
              <li>Kosmetik dan makanan minuman yang membahayakan keselamatan penggunanya...</li>
              <li>Bahan yang diklasifikasikan sebagai Bahan Berbahaya menurut Peraturan Menteri Perdagangan yang berlaku.</li>
              <li>Jenis Produk tertentu yang wajib memiliki:
                <ol class="list-decimal list-inside ml-4">
                  <li>SNI;</li>
                  <li>Petunjuk penggunaan dalam Bahasa Indonesia; atau</li>
                  <li>Label dalam Bahasa Indonesia.</li>
                </ol>
                <p class="ml-4 mt-2">Sementara yang diperjualbelikan tidak mencantumkan hal-hal tersebut.</p>
              </li>
              <li>Barang-barang lain yang kepemilikannya ataupun peredarannya melanggar ketentuan hukum yang berlaku di Indonesia.</li>
              <li>Barang yang merupakan hasil dan/atau terkait pelanggaran Hak Cipta atau Merek, termasuk namun tidak terbatas pada:
                <ol class="list-decimal list-inside ml-4">
                  <li>Penggunaan Merek pihak lain tanpa izin...</li>
                  <li>Barang palsu / imitasi / bajakan;</li>
                  <li>Penggunaan hak cipta pihak lain tanpa izin pada Barang yang dijual;</li>
                  <li>Pelanggaran hak cipta pihak lain tanpa izin pada gambar, video, atau deskripsi produk; dan/atau</li>
                  <li>Pelanggaran hak kekayaan intelektual lainnya pada Barang yang dijual.</li>
                </ol>
              </li>
              <li>Barang dewasa yang bersifat seksual berupa obat perangsang...</li>
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
              <li>Pestisida, kecuali pestisida untuk penggunaan yang telah mempunyai nomor pendaftaran...</li>
              <li>Atribut kepolisian.</li>
              <li>Barang hasil tindak pencurian.</li>
              <li>Pembuka kunci dan segala aksesori penunjang tindakan perampokan/pencurian.</li>
              <li>Barang yang dapat dan atau mudah meledak, menyala atau terbakar sendiri.</li>
              <li>Barang cetakan/rekaman yang isinya dapat mengganggu keamanan & ketertiban...</li>
              <li>Hewan berbahaya dan/atau Hewan yang dilindungi...</li>
              <li>Uang tunai termasuk valuta asing kecuali Penjual memiliki dan dapat mencantumkan izin...</li>
              <li>Materai, kecuali materai tempel yang dijual oleh Penjual yang merupakan pihak yang ditunjuk secara resmi...</li>
              <li>Pengacak sinyal, penghilang sinyal, dan/atau alat-alat lain yang dapat mengganggu sinyal...</li>
              <li>Perlengkapan dan peralatan judi.</li>
              <li>Jimat-jimat, benda-benda yang diklaim berkekuatan gaib dan memberi ilmu kesaktian.</li>
              <li>Barang dengan hak Distribusi Eksklusif...</li>
              <li>Produk non fisik yang tidak dapat dikirimkan melalui jasa kurir...</li>
              <li>Tiket pertunjukan, termasuk namun tidak terbatas pada tiket konser...</li>
              <li>Dokumen-dokumen resmi seperti Sertifikat Toefl, Ijazah, Surat Dokter...</li>
              <li>Segala jenis Barang lain yang bertentangan dengan peraturan pengiriman Barang Indonesia.</li>
              <li>Barang-barang lain yang melanggar ketentuan hukum yang berlaku di Indonesia...</li>
              <li>Segala jenis Jasa kecuali untuk penawaran yang berasal dari Lubkita dan afiliasinya...</li>
              <li>Segala jenis Barang yang isinya tidak pasti, bersifat acak dan/atau undian...</li>
              <li>Alat Kesehatan yang wajib memiliki izin edar dari Kementerian Kesehatan...</li>
            </ol>
          </section>



          <section class="space-y-4">
            <h3 class="text-xl font-bold">K. Kartu Kredit</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Pengguna dapat memilih untuk mempergunakan pilihan metode pembayaran menggunakan kartu kredit...</li>
              <li>Transaksi pembelian barang dengan menggunakan kartu kredit dapat dilakukan untuk transaksi pembelian dengan nilai total belanja:
                <ol class="list-decimal list-inside ml-4">
                  <li>minimal Rp50.000 (lima puluh ribu rupiah) hingga maksimal Rp50.000.000 (lima puluh juta rupiah) untuk transaksi marketplace.</li>
                  <li>minimal Rp50.000,- (lima puluh ribu Rupiah) hingga maksimal Rp10.000.000,- (sepuluh juta Rupiah) menggunakan kartu kredit non cicilan untuk produk digital...</li>
                </ol>
                <p class="ml-4 mt-2">Transaksi dapat dilakukan hingga Rp500.000.000,- (lima ratus juta rupiah) khusus untuk pembelian produk mobil pada Official Store.</p>
              </li>
              <li>Transaksi pembelian barang dengan menggunakan kartu kredit wajib mengikuti syarat dan ketentuan...</li>
              <li>Pengguna dilarang untuk mempergunakan metode pembayaran kartu kredit di luar peruntukan sebagai alat pembayaran.</li>
              <li>Apabila terdapat transaksi pembelian barang dengan menggunakan kartu kredit yang melanggar ketentuan hukum...</li>
              <li>Lubkita berwenang untuk melakukan investigasi terhadap transaksi Kartu Kredit...</li>
              <li>Dalam proses verifkasi yang dilakukan oleh partner bank dan/atau mitra payment gateway...</li>
              <li>Pengguna memahami dan menyetujui bahwa bertanggung jawab secara pribadi untuk menjaga kerahasiaan...</li>
              <li>Lubkita akan menghentikan kerjasama dengan Penjual yang melakukan tindakan yang dapat merugikan prinsipal...</li>
              <li>Apabila transaksi pembelian tidak berhasil dan/atau dibatalkan...</li>
              <li>Transaksi pembelian yang menggunakan metode pembayaran kartu kredit dengan sistem cicilan akan dikenakan biaya layanan...</li>
              <li>Transaksi pembelian yang menggunakan metode pembayaran cicilan kartu kredit akan dikenakan biaya layanan yang diberlakukan untuk tujuan pemeliharaan sistem dan peningkatan layanan dalam bertransaksi melalui Lubkita, dengan rincian sebagai berikut:</li>
              <li>Cicilan 3 (tiga) bulan sebesar 2.5% (dua koma lima persen)</li>
              <li>Cicilan 6 (enam) bulan sebesar 3.5% (tiga koma lima persen)</li>
              <li>Cicilan 12 (dua belas) bulan sebesar 6% (enam persen)</li>
              <li>Cicilan 18 (delapan belas) bulan sebesar 8% (delapan persen)</li>
              <li>Cicilan 24 (dua puluh empat) bulan sebesar 10% (sepuluh persen)</li>
              <li>Apabila seluruh transaksi dalam satu pembayaran yang menggunakan kartu kredit dibatalkan...</li>
            </ol>
          </section>

          <section class="space-y-4">
            <h3 class="text-xl font-bold">L. Pengiriman Barang</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Pengiriman Barang dalam sistem Lubkita wajib menggunakan jasa perusahaan ekspedisi yang telah mendapatkan verifikasi rekanan Lubkita...</li>
              <li>Setiap ketentuan berkenaan dengan proses pengiriman Barang adalah wewenang sepenuhnya penyedia jasa layanan pengiriman Barang.</li>
              <li>Penjual wajib memenuhi ketentuan yang ditetapkan oleh jasa layanan pengiriman barang tersebut dan bertanggung jawab atas setiap Barang yang dikirimkan.</li>
              <li>Penjual memahami dan menyetujui bahwa Penjual wajib memenuhi standar pengemasan pengiriman Barang berdasarkan ketentuan kategori Barang sebagai berikut:
                <ol class="list-decimal list-inside ml-4">
                  <li>Cairan wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa, karton atau kardus, lakban, peredam ruang kosong, lapisan luar paket, dan stiker fragile...</li>
                  <li>Elektronik (baterai, komputer, handphone, dan laptop), barang pecah belah, barang tajam / runcing wajib menggunakan kemasan plastik...</li>
                  <li>Makanan wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa...</li>
                  <li>Lain-lain wajib menggunakan kemasan plastik, bubble wrap atau kemasan sejenis dengan fungsi serupa...</li>
                </ol>
              </li>
              <li>Dalam hal diperlukan untuk dilakukan proses pengembalian barang, maka Pengguna, baik Penjual maupun Pembeli, diwajibkan untuk melakukan pengiriman barang langsung ke masing-masing Pembeli maupun Penjual...</li>
              <li>Dalam hal terjadi kendala dalam proses pengiriman berupa barang hilang, barang rusak, dan lain sebagainya...</li>
              <li>Informasi lebih lengkap terkait penyedia jasa layanan pengiriman Barang beserta dengan ketentuan yang berlaku pada masing-masing penyedia jasa layanan pengiriman Barang</li>
            </ol>
          </section>


          <section class="space-y-4">
            <h3 class="text-xl font-bold">M. Pusat Resolusi</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Pusat Resolusi adalah fitur yang disediakan oleh Lubkita untuk memfasilitasi penyelesaian masalah transaksi antara Pembeli dan Penjual.</li>
              <li>Fitur ini akan secara otomatis menahan dana pembayaran barang ke Penjual sampai dengan permasalahan yang dilaporkan ke Pusat Resolusi selesai.</li>
              <li>Dalam menggunakan fitur ini, Pembeli dan Penjual diharapkan memberikan bukti-bukti transaksi jual beli berupa foto barang...</li>
              <li>Penyelesaian permasalahan melalui Pusat Resolusi dapat berupa solusi yang dihasilkan berdasarkan kesepakatan bersama antara Pembeli dan Penjual.</li>
              <li>Jika Penjual tidak memberikan jawaban dalam jangka waktu 2 x 24 jam sejak kendala dibuat...</li>
              <li>Jika tidak ditemukan kesepakatan antara Pembeli dan Penjual dalam jangka waktu 2 x 24 jam...</li>
              <li>Dalam hal Lubkita membantu menyelesaikan kendala, maka sesuai dengan Syarat dan Ketentuan Poin C. 27 dan Poin D. 23...</li>
              <li>Lubkita berwenang untuk melakukan mediasi dan/atau mengambil keputusan untuk penyelesaian masalah didalam diskusi Pusat Resolusi, meskipun salah satu pihak (Pembeli atau Penjual) belum memberikan tanggapan atas solusi yang diberikan Pusat Resolusi dalam jangka waktu 2 x 24 jam, dalam hal:
                <ol class="list-decimal list-inside ml-4">
                  <li>Adanya informasi dari pihak ketiga yang berkaitan dalam jalannya transaksi...</li>
                  <li>Bukti dari Pembeli dan/atau Penjual yang dikirimkan melalui jalur komunikasi lain...</li>
                  <li>Laporan dari salah satu pihak disebabkan adanya kelalaian Pembeli atau Penjual;</li>
                  <li>Salah satu pihak (Pembeli atau Penjual) terindikasi melakukan tindakan kecurangan;</li>
                  <li>Kondisi tertentu yang menyebabkan Lubkita perlu segera melakukan mediasi.</li>
                </ol>
              </li>
              <li>Atas keputusan pertama Lubkita diatas, baik Pembeli dan Penjual memiliki hak untuk banding...</li>
              <li>Pembeli dan Penjual dengan ini menyetujui bahwa Keputusan Lubkita atas upaya banding adalah keputusan akhir...</li>
              <li>Pengguna memahami bahwa Pusat Resolusi tidak berlaku untuk produk pakaian dalam bekas...</li>
              <li>Pembeli dan Penjual memahami dan menyetujui bahwa dalam penyelesaian kendala di Pusat Resolusi...</li>
              <li>Pembeli dan Penjual memahami dan menyetujui bahwa penanggungan ongkos kirim yang timbul selama proses penyelesaian kendala...</li>
              <li>Pembeli memahami dan menyetujui bahwa setelah adanya kesepakatan untuk pengiriman Barang kembali ke Penjual...</li>
              <li>Penjual memahami dan menyetujui bahwa pengiriman Barang pengganti untuk Pembeli dapat dilakukan maksimal 2 (dua) hari kerja...</li>
              <li>Pembeli dan Penjual memahami dan menyetujui bahwa batas waktu untuk pemberian bukti adalah maksimal 2 x 24 jam...</li>
              <li>Lubkita memiliki kontak Pusat Resolusi berupa nomor Lubkita Care, yang akan menghubungi Pengguna untuk membantu menyelesaikan kendala transaksi...</li>
              <li>Pengguna dapat memberikan akses kepada Lubkita untuk menyimpan nomor Lubkita Care ke perangkat Pengguna...</li>
              <li>Pengguna memahami dan menyetujui untuk melepaskan Lubkita dari segala tanggung jawab atas kerugian...</li>
              <li>Tata cara menggunakan Pusat Resolusi selengkapnya dapat dilihat pada Halaman Bantuan Pusat Resolusi.</li>
            </ol>
          </section>




          <section class="space-y-4">
            <h3 class="text-xl font-bold">N. Ketentuan Lain</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Apabila Pengguna mempergunakan fitur/layanan yang tersedia dalam Situs/Aplikasi Lubkita, maka Pengguna dengan ini menyatakan memahami dan menyetujui segala syarat dan ketentuan yang diatur khusus sehubungan dengan fitur/layanan yang digunakan.</li>
              <li>Segala hal yang belum dan/atau tidak diatur dalam syarat dan ketentuan khusus dalam fitur tersebut maka akan sepenuhnya merujuk pada syarat dan ketentuan Lubkita secara umum.</li>
              <li>Dengan menyetujui Syarat dan Ketentuan Lubkita, maka Pengguna telah dianggap tunduk pada Kebijakan Privasi Lubkita.</li>
            </ol>
          </section>



          <section class="space-y-4">
            <h3 class="text-xl font-bold">O. Penolakan Jaminan Dan Batasan Tanggung Jawab</h3>
            <div class="space-y-4 text-gray-600 ml-4">
              <p>Lubkita adalah portal web dengan model Costumer to Customer Marketplace, yang menyediakan layanan kepada Pengguna untuk dapat menjadi Penjual maupun Pembeli di website Lubkita. Dengan demikian transaksi yang terjadi adalah transaksi antar member Lubkita, sehingga Pengguna memahami bahwa batasan tanggung jawab Lubkita secara proporsional adalah sebagai penyedia jasa portal web.</p>
              
              <p>Lubkita selalu berupaya untuk menjaga Layanan Lubkita aman, nyaman, dan berfungsi dengan baik, tapi kami tidak dapat menjamin operasi terus-menerus atau akses ke Layanan kami dapat selalu sempurna. Informasi dan data dalam situs Lubkita memiliki kemungkinan tidak terjadi secara real time.</p>
              
              <p>Pengguna setuju bahwa Anda memanfaatkan Layanan Lubkita atas risiko Pengguna sendiri, dan Layanan Lubkita diberikan kepada Anda pada "SEBAGAIMANA ADANYA" dan "SEBAGAIMANA TERSEDIA".</p>
              
              <p>Sejauh diizinkan oleh hukum yang berlaku, Lubkita (termasuk Induk Perusahaan, direktur, dan karyawan) adalah tidak bertanggung jawab, dan Anda setuju untuk tidak menuntut Lubkita bertanggung jawab, atas segala kerusakan atau kerugian (termasuk namun tidak terbatas pada hilangnya uang, reputasi, keuntungan, atau kerugian tak berwujud lainnya) yang diakibatkan secara langsung atau tidak langsung dari:</p>
              
              <ul class="list-disc ml-6 space-y-2">
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
                <li>Kerugian akibat pembayaran tidak resmi kepada pihak lain selain ke Rekening Resmi Lubkita...</li>
                <li>Pengiriman untuk perbaikan Barang yang bergaransi resmi dari pihak produsen...</li>
                <li>Virus atau perangkat lunak berbahaya lainnya...</li>
                <li>Gangguan, bug, kesalahan atau ketidakakuratan apapun dalam Layanan Lubkita.</li>
                <li>Kerusakan pada perangkat keras Anda dari penggunaan setiap Layanan Lubkita.</li>
                <li>Isi, tindakan, atau tidak adanya tindakan dari pihak ketiga...</li>
                <li>Tindak penegakan yang diambil sehubungan dengan akun Pengguna.</li>
                <li>Adanya tindakan peretasan yang dilakukan oleh pihak ketiga kepada akun pengguna.</li>
              </ul>
            </div>
          </section>


          <section class="space-y-4">
            <h3 class="text-xl font-bold">P. Pelepasan</h3>
            <p class="text-gray-600 ml-4">
              Jika Anda memiliki perselisihan dengan satu atau lebih pengguna, Anda melepaskan Lubkita (termasuk Induk Perusahaan, Direktur, dan karyawan) dari klaim dan tuntutan atas kerusakan dan kerugian (aktual dan tersirat) dari setiap jenis dan sifatnya, yang dikenal dan tidak dikenal, yang timbul dari atau dengan cara apapun berhubungan dengan sengketa tersebut, termasuk namun tidak terbatas pada kerugian yang timbul dari pembelian Barang yang telah dilarang pada Poin J. Jenis Barang. Dengan demikian maka Pengguna dengan sengaja melepaskan segala perlindungan hukum (yang terdapat dalam undang-undang atau peraturan hukum yang lain) yang akan membatasi cakupan ketentuan pelepasan ini.
            </p>
          </section>
          
          <section class="space-y-4">
            <h3 class="text-xl font-bold">Q. Ganti Rugi</h3>
            <p class="text-gray-600 ml-4">
              Pengguna akan melepaskan Lubkita dari tuntutan ganti rugi dan menjaga Lubkita (termasuk Induk Perusahaan, direktur, dan karyawan) dari setiap klaim atau tuntutan, termasuk biaya hukum yang wajar, yang dilakukan oleh pihak ketiga yang timbul dalam hal Anda melanggar Perjanjian ini, penggunaan Layanan Lubkita yang tidak semestinya dan/ atau pelanggaran Anda terhadap hukum atau hak-hak pihak ketiga.
            </p>
          </section>
          
          <section class="space-y-4">
            <h3 class="text-xl font-bold">R. Pilihan Hukum</h3>
            <p class="text-gray-600 ml-4">
              Perjanjian ini akan diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan pertentangan aturan hukum. Anda setuju bahwa tindakan hukum apapun atau sengketa yang mungkin timbul dari, berhubungan dengan, atau berada dalam cara apapun berhubungan dengan situs dan/atau Perjanjian ini akan diselesaikan secara eksklusif dalam yurisdiksi pengadilan Republik Indonesia.
            </p>
          </section>
          
          <section class="space-y-4">
            <h3 class="text-xl font-bold">S. Pembaharuan</h3>
            <p class="text-gray-600 ml-4">
              Syarat & ketentuan mungkin diubah dan/atau diperbaharui dari waktu ke waktu tanpa pemberitahuan sebelumnya. Lubkita menyarankan agar anda membaca secara seksama dan memeriksa halaman Syarat & ketentuan ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap mengakses dan menggunakan layanan Lubkita, maka pengguna dianggap menyetujui perubahan-perubahan dalam Syarat & Ketentuan.
            </p>
          </section>
          
          <div class="mt-8 text-right text-gray-600">
            <p>Last Update: 05/08/2024</p>
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