<script lang="ts">
    // You can add props or logic here if needed
    export const companyName = "Lubkita";
    export const year = new Date().getFullYear();
  </script>
  
  <footer class="bg-yellow-800 md:px-10 md:pb-10 w-full flex flex-col p-5">
        <div class="flex w-full md:space-x-32 space-x-10">
            <div class="flex flex-col text-white w-1/2">
                <div>
                <img src="/footer-logo.png" alt="logo" class="h-auto md:w-44 w-32">
            </div>
            <div class="flex flex-col md:text-base text-xs">
                <div class="font-thin">Jl. Teluk Teratai I/64, Desa/Kelurahan Kelapa Gading Barat, Kec. Kelapa Gading, Kota Adm. Jakarta Utara, Provinsi DKI Jakarta</div>
                <div class="border-t border-white my-4"></div>
                <div class="font-thin"><b>Phone</b> : +62 81188801078</div>
                <div class="font-thin"><b>E-mail</b> : info@lubkita.com</div>
            </div>
            <p class="hidden md:block text-gray-200 mt-10 md:text-base text-sm md:text-left text-center">Copyright © PT. Lumbung Artha Kita. All Rights Reserved</p>
        </div>  
        <div class="flex flex-col text-white w-1/2 md:justify-center space-y-7 justify-end">
            <div class="space-y-2 flex flex-col md:text-lg text-xs font-semibold">
                <a href="/" class="hover:scale-110 hover:underline transition-all">Beranda</a>
                <a href="/katalog-ldr.pdf" target="_blank" rel="noopener noreferrer" class="hover:scale-110 hover:underline transition-all">Katalog kami</a>
                <a href="/panduan-membership-gold2.pdf" target="_blank" rel="noopener noreferrer" class="hover:scale-110 hover:underline transition-all">Panduan membership gold</a>
                <a href="/panduan-membership-platinum.pdf" target="_blank" rel="noopener noreferrer" class="hover:scale-110 hover:underline transition-all">Panduan membership platinum</a>
                <a href="https://lubkita.com" class="hover:scale-110 hover:underline transition-all">Lubkita.com</a>
            </div>
            <div class="flex w-fit  md:space-x-4 space-x-2">
                <div class="w-1/3">
                    <a href="https://www.instagram.com/lubkita.id/" target="_blank" rel="noopener noreferrer">
                        <img src="/footer-icon-instagram.png" alt="instagram" class="h-auto w-7 md:w-10 hover:scale-110 transition-all">
                    </a>
                </div>
                <div class="my-auto">•</div>
                <div class="w-1/3">
                    <a href="https://www.tiktok.com/@lubkita.id" target="_blank" rel="noopener noreferrer">
                        <img src="/footer-icon-tiktok.png" alt="facebook" class="h-auto w-7 md:w-10 hover:scale-110 transition-all">
                    </a>
                </div>
                <div class="my-auto">•</div>
                <div class="w-1/3">
                    <a href="https://www.youtube.com/@Lubkita_idl" target="_blank" rel="noopener noreferrer">
                        <img src="/footer-icon-youtube.png" alt="youtube" class="h-auto w-7 md:w-10 hover:scale-110 transition-all">
                    </a>
                </div>
            </div>
        </div>
    <!--
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-center mx-auto">
          <p class="text-lg font-semibold">{companyName}</p>
          <p class="text-sm text-gray-200">© {year} All rights reserved.</p>
        </div>
        <div class="flex space-x-6">
          <a href="/" class="hover:text-gray-300 transition-colors">Home</a>
          <a href="/about" class="hover:text-gray-300 transition-colors">About</a>
          <a href="/contact" class="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        
        <div class="mt-4 md:mt-0">
          <div class="flex space-x-4">
            
            <a href="#" class="hover:text-gray-300 transition-colors">Twitter</a>
            <a href="#" class="hover:text-gray-300 transition-colors">LinkedIn</a>
            <a href="#" class="hover:text-gray-300 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
      -->
    </div>
    <div>
        <p class="text-gray-200 mt-10 md:text-base text-sm md:text-left text-center md:hidden">Copyright © PT. Lumbung Artha Kita. All Rights Reserved</p>
    </div>
  </footer>