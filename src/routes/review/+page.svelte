<script lang="ts">
    import { onMount } from 'svelte';
    
    type FormData = {
        fullName: string;
        email: string;
        nik: string;
        phoneNumber: string;
        streetAddress: string;
        district: string;
        city: string;
        province: string;
        referralCode: string;
        referralCode2: string;
    };

    let formData: FormData = {
        fullName: '',
        email: '',
        nik: '',
        phoneNumber: '',
        streetAddress: '',
        district: '',
        city: '',
        province: '',
        referralCode: 'LDRX',
        referralCode2: 'LDRA'
    };

    onMount(() => {
        // Get form data from URL params
        const params = new URLSearchParams(window.location.search);
        Object.keys(formData).forEach(key => {
            formData[key as keyof FormData] = params.get(key) || '';
        });
    });

    function handleEdit() {
        // Go back to the form with the current data
        const params = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
            params.append(key, value);
        });
        window.location.href = `/pendaftaran/LDR0A?${params.toString()}`;
    }

    function handleConfirm() {
        // Proceed to payment/confirmation page
        const params = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
            params.append(key, value);
        });
        window.location.href = `/confirm?${params.toString()}`;
    }
</script>

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style="background-image: url('/pendaftaran-background7.png'); background-size: cover; background-position: center;">
    <div class="relative py-3 max-w-4xl mx-auto w-full px-4">
        <div class="mb-8 text-center">
            <h2 class="text-3xl font-semibold text-gray-700 mb-2">Review Informasi Anda</h2>
            <p class="text-gray-500">Silakan periksa informasi Anda sebelum melanjutkan ke pembayaran</p>
        </div>
        <div class="relative px-4 py-10 bg-white/70 shadow rounded-3xl sm:p-10">
            <div class="mx-auto">

                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Personal Information -->
                    <div class="space-y-4">
                        <h3 class="text-xl font-semibold text-gray-600">Informasi Pribadi</h3>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Nama Lengkap</p>
                            <p class="text-sm md:text-lg">{formData.fullName}</p>
                        </div>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Email</p>
                            <p class="text-sm md:text-lg">{formData.email}</p>
                        </div>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">NIK</p>
                            <p class="text-sm md:text-lg">{formData.nik}</p>
                        </div>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Nomor Telepon</p>
                            <p class="text-sm md:text-lg">{formData.phoneNumber}</p>
                        </div>
                    </div>

                    <!-- Address Information -->
                    <div class="space-y-4 my-10 md:my-0">
                        <h3 class="text-xl font-semibold text-gray-600 ">Informasi Alamat</h3>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Alamat Jalan</p>
                            <p class="text-sm md:text-lg">{formData.streetAddress}</p>
                        </div>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Kecamatan</p>
                            <p class="text-sm md:text-lg">{formData.district}</p>
                        </div>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Kabupaten/Kota</p>
                            <p class="text-sm md:text-lg">{formData.city}</p>
                        </div>
                        <div class="bg-yellow-50 shadow-sm shadow-yellow-600 md:p-4 p-2 rounded-lg md:space-y-0 space-y-1">
                            <p class="text-sm md:text-base text-gray-500">Provinsi</p>
                            <p class="text-sm md:text-lg">{formData.province}</p>
                        </div>
                    </div>
                </div>

                <!-- Package Information -->
                <div class="mt-8 p-6 bg-yellow-50 shadow-sm shadow-yellow-600 md:rounded-lg p-2 md:space-y-0 space-y-1">
                    <h3 class="text-xl font-semibold text-yellow-800 mb-4">Paket yang Dipilih</h3>
                    <div class="space-y-2">
                        <p class="text-yellow-700">✓ Membership Lubkita.com Paket Gold</p>
                        <p class="text-yellow-700">✓ Android TV LED 32 Inc</p>
                        <p class="text-yellow-700">✓ 1 Set Personal Computer + Koneksi Internet</p>
                        <p class="text-yellow-700">✓ Webcam untuk Pertemuan Online</p>
                        <p class="text-yellow-700">✓ Fasilitas Zoom</p>
                        <p class="text-yellow-700">✓ Marketing Plan Membership Gold</p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="mt-8 flex gap-4">
                    <button
                        on:click={handleEdit}
                        class="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                        Ubah Informasi
                    </button>
                    <button
                        on:click={handleConfirm}
                        class="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        Lanjut ke Pembayaran
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>