<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
    let isOpen = false;
    let isAboutDropdownOpen = false;
    let isContactDropdownOpen = false;

    // Only needed for mobile now
    function handleClickOutside(event: MouseEvent) {
    if (window.innerWidth < 640) { // sm breakpoint
        const target = event.target as HTMLElement;
        if (!target.closest('.about-dropdown')) {
        isAboutDropdownOpen = false;
        }
        if (!target.closest('.contact-dropdown')) {
        isContactDropdownOpen = false;
        }
    }
    }
</script>

<svelte:window on:click={handleClickOutside} />

<!-- src/lib/components/Navbar.svelte -->
<nav class="bg-white drop-shadow-lg z-60">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
        <div class="flex w-full">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
            <img 
            src="/page-home-lubkitalogo-icon.png" 
            alt="Lubkita Logo" 
            class="h-10 md:h-16 w-auto mr-3"
            />
            <a href="/" class="md:text-xl text-base font-bold">LUMBUNG DIGITAL RAKYAT</a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center w-1/2 justify-center mx-auto"> <!-- Added items-center here -->
            <a href="/" class="text-gray-900 inline-flex items-center h-16 px-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300">
            Beranda
            </a>

            <!-- About Dropdown -->
            <div class="relative about-dropdown group h-16 flex items-center justify-center mx-auto"> <!-- Ensure this is relative -->
            <button 
                class="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 text-sm font-medium border-b-2 border-transparent group-hover:border-gray-300"
            >
                Paket kami
                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div class="invisible group-hover:visible absolute z-40 top-16 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-200"> <!-- Changed z-30 to z-40 -->
                <div class="py-1">
                <a href="/paket-kami/paket-gold" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paket Gold</a>
                <div class="w-full border-t border-gray"></div>
                <a href="/paket-kami/paket-platinum" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paket Platinum</a>
                <div class="w-full border-t border-gray"></div>
                <a href="/paket-kami/paket-ldr" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paket LDR</a>
                </div>
            </div>
            </div>

            <!-- Contact Dropdown -->
            <div class="relative contact-dropdown group h-16 flex items-center"> <!-- Ensure this is relative -->
            <button 
                class="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 text-sm font-medium border-b-2 border-transparent group-hover:border-gray-300"
            >
                Tentang Kami
                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div class="invisible group-hover:visible absolute z-30 top-16 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-200"> <!-- Changed z-20 to z-30 -->
                <div class="py-1">
                <a href="/tentang-kami/visi-misi" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visi & Misi</a>
                <div class="w-full border-t border-gray"></div>
                <a href="/tentang-kami/pt-lubkita" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PT Lumbung Artha Kita</a>
                <div class="w-full border-t border-gray"></div>
                <a href="/tentang-kami/lumbung-digital-rakyat" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LDR (Lumbung Digital Rakyat)</a>
                </div>
            </div>
            </div>
        </div>

        <div class="hidden md:flex items-center space-x-8 w-1/5 justify-center">
            <a href="https://www.instagram.com/lubkita.id" target="_blank" rel="noopener noreferrer">
                <img src="/page-home-instagram-icon.png" alt="Instagram" class="h-8 w-8">
            </a>
            <a href="mailto:info@lubkita.com">
                <img src="/page-home-email-icon.png" alt="email" class="h-8 w-8">
            </a>
            <a href="https://wa.me/6281188801078" target="_blank" rel="noopener noreferrer">
                <img src="/page-home-whatsapp-icon.png" alt="WhatsApp" class="h-8 w-8">
            </a>
        </div>


        </div>

        <!-- Mobile menu button -->
        <div class="sm:hidden flex items-center">
            <button 
                on:click={() => isOpen = !isOpen}
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>
    </div>

    <!-- Mobile menu (click-based) -->
    {#if isOpen}
    <div class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
        <a href="/" class="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">Beranda</a>
        
        <!-- Mobile About Dropdown -->
        <div class="relative">
            <button 
            on:click|stopPropagation={() => isAboutDropdownOpen = !isAboutDropdownOpen}
            class="text-gray-500 hover:text-gray-900 flex justify-between items-center w-full pl-3 pr-4 py-2 text-base font-medium"
            >
            Paket kami
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            {#if isAboutDropdownOpen}
            <div class="bg-gray-50">
                <a href="/paket-kami/paket-gold" class="block pl-6 pr-4 py-2 text-sm text-gray-500 hover:text-gray-900">Paket Gold</a>
                <a href="/paket-kami/paket-platinum" class="block pl-6 pr-4 py-2 text-sm text-gray-500 hover:text-gray-900">Paket Platinum</a>
                <a href="/paket-kami/paket-ldr" class="block pl-6 pr-4 py-2 text-sm text-gray-500 hover:text-gray-900">Paket LDR</a>
            </div>
            {/if}
        </div>

        <!-- Mobile Contact Dropdown -->
        <div class="relative">
            <button 
            on:click|stopPropagation={() => isContactDropdownOpen = !isContactDropdownOpen}
            class="text-gray-500 hover:text-gray-900 flex justify-between items-center w-full pl-3 pr-4 py-2 text-base font-medium"
            >
            Tentang Kami
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            {#if isContactDropdownOpen}
            <div class="bg-gray-50">
                <a href="/tentang-kami/visi-misi" class="block pl-6 pr-4 py-2 text-sm text-gray-500 hover:text-gray-900">Visi & Misi</a>
                <a href="/tentang-kami/pt-lubkita" class="block pl-6 pr-4 py-2 text-sm text-gray-500 hover:text-gray-900">PT Lumbung Artha Kita</a>
                <a href="/tentang-kami/lumbung-digital-rakyat" class="block pl-6 pr-4 py-2 text-sm text-gray-500 hover:text-gray-900">LDR (Lumbung Digital Rakyat)</a>
            </div>
            {/if}
        </div>
        </div>
        <div class="flex justify-center space-x-6 py-8">
            <a href="https://www.instagram.com/lubkita.id" target="_blank" rel="noopener noreferrer">
                <img src="/page-home-instagram-icon.png" alt="Instagram" class="h-8 w-8">
            </a>
            <a href="mailto:info@lubkita.com">
                <img src="/page-home-email-icon.png" alt="email" class="h-8 w-8">
            </a>
            <a href="https://wa.me/6281188801078" target="_blank" rel="noopener noreferrer">
                <img src="/page-home-whatsapp-icon.png" alt="WhatsApp" class="h-8 w-8">
            </a>
        </div>
    </div>
    {/if}
</nav>