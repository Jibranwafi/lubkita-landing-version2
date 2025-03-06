<script lang="ts">
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

type FormFields = keyof Omit<FormData, 'referralCode' | 'referralCode2'>;

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

let currentStep = 1;
const totalSteps = 4;

// Group form fields by step
const steps: Record<number, FormFields[]> = {
    1: ['fullName', 'email'],
    2: ['nik', 'phoneNumber'],
    3: ['streetAddress', 'district'],
    4: ['city', 'province']
};

function validateForm() {
    if (!formData.fullName.trim()) {
    alert('Silakan masukkan nama lengkap');
    return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
    alert('Silakan masukkan alamat email yang valid');
    return false;
    }
    if (!formData.nik.trim() || formData.nik.length !== 16) {
    alert('Silakan masukkan NIK yang valid (16 digit)');
    return false;
    }
    if (!formData.phoneNumber.trim()) {
    alert('Silakan masukkan nomor telepon');
    return false;
    }
    if (!formData.streetAddress.trim()) {
    alert('Silakan masukkan alamat jalan');
    return false;
    }
    if (!formData.district.trim()) {
    alert('Silakan masukkan kecamatan');
    return false;
    }
    if (!formData.city.trim()) {
    alert('Silakan masukkan kabupaten/kota');
    return false;
    }
    if (!formData.province.trim()) {
    alert('Silakan masukkan provinsi');
    return false;
    }
    return true;
}

function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    
    if (!validateForm()) {
    return;
    }

    // Create URL with form data
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
    params.append(key, value);
    });

    // Redirect to review page with form data
    window.location.href = `/review?${params.toString()}`;
}

function resetForm() {
    formData = {
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
    }
}

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            currentStep++;
        } else {
            // Show confirmation modal/page
            const params = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
                params.append(key, value);
            });
            window.location.href = `/review?${params.toString()}`;
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
    }
}

function validateCurrentStep() {
    const currentFields = steps[currentStep];
    for (const field of currentFields) {
        if (!formData[field]?.trim()) {
            const fieldNames = {
                fullName: 'nama lengkap',
                email: 'email',
                nik: 'NIK',
                phoneNumber: 'nomor telepon',
                streetAddress: 'alamat jalan',
                district: 'kecamatan',
                city: 'kota',
                province: 'provinsi'
            };
            alert(`Silakan masukkan ${fieldNames[field]}`);
            return false;
        }
        if (field === 'email' && !formData.email.includes('@')) {
            alert('Silakan masukkan alamat email yang valid');
            return false;
        }
        if (field === 'nik' && formData.nik.length !== 16) {
            alert('Silakan masukkan NIK yang valid (16 digit)');
            return false;
        }
    }
    return true;
}
</script>

<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12" style="background-image: url('/pendaftaran-background7.png'); background-size: cover; background-position: center;">
<div class="relative py-3 max-w-6xl mx-auto w-full md:px-24 px-4">
    <div class="flex items-center space-x-5 mb-10 text-center mx-auto w-full justify-center">
        <div class="pl-2 font-semibold self-start text-gray-700">
            <h2 class="leading-relaxed md:text-4xl text-2xl">Formulir Pendaftaran LDR</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">Silakan lengkapi semua field di bawah ini</p>
        </div>
    </div>
    <div class="relative px-4 md:py-10 py-5 bg-white/80 shadow rounded-3xl sm:p-10">
    <div class="mx-auto">
        
        <!-- Progress bar -->
        <div class="mb-12">
            <div class="flex justify-between mb-2">
                {#each Array(totalSteps) as _, i}
                    <div class="flex flex-col items-center">
                        <div class={`w-8 h-8 rounded-full flex items-center justify-center ${
                            currentStep > i + 1 
                                ? 'bg-green-500' 
                                : currentStep === i + 1 
                                    ? 'bg-[#d1ad07]' 
                                    : 'bg-gray-400'
                            } text-white`}
                        >
                            {#if currentStep > i + 1}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            {:else}
                                {i + 1}
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
            <div class="w-full bg-gray-300 h-2 rounded-full">
                <div class="bg-[#d1ad07] h-2 rounded-full transition-all duration-300" style="width: {(currentStep / totalSteps) * 100}%"></div>
            </div>
        </div>

        <form on:submit|preventDefault={handleSubmit} class="divide-y divide-gray-300">
            <!-- Step 1: Personal Information -->
            {#if currentStep === 1}
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold mb-4">Informasi Pribadi</h3>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Nama Lengkap</label>
                        <input 
                            type="text" 
                            bind:value={formData.fullName}
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan nama lengkap Anda"
                        >
                    </div>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Email</label>
                        <input 
                            type="email" 
                            bind:value={formData.email}
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="email@contoh.com"
                        >
                    </div>
                </div>
            {/if}

            <!-- Step 2: Identity -->
            {#if currentStep === 2}
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold mb-4">Informasi Identitas</h3>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">NIK</label>
                        <input 
                            type="text" 
                            bind:value={formData.nik}
                            maxlength="16"
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan 16 digit NIK Anda"
                        >
                    </div>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Nomor Telepon</label>
                        <input 
                            type="tel" 
                            bind:value={formData.phoneNumber}
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan nomor telepon Anda"
                        >
                    </div>
                </div>
            {/if}

            <!-- Step 3: Address Part 1 -->
            {#if currentStep === 3}
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold mb-4">Informasi Alamat (1/2)</h3>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Alamat Jalan</label>
                        <textarea 
                            bind:value={formData.streetAddress}
                            rows="2"
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan alamat lengkap Anda"
                        ></textarea>
                    </div>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Kecamatan</label>
                        <input 
                            type="text" 
                            bind:value={formData.district}
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan nama kecamatan"
                        >
                    </div>
                </div>
            {/if}

            <!-- Step 4: Address Part 2 -->
            {#if currentStep === 4}
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold mb-4">Informasi Alamat (2/2)</h3>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Kabupaten/Kota</label>
                        <input 
                            type="text" 
                            bind:value={formData.city}
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan nama kabupaten/kota"
                        >
                    </div>
                    <div class="flex flex-col md:text-base text-sm">
                        <label class="leading-loose font-light">Provinsi</label>
                        <input 
                            type="text" 
                            bind:value={formData.province}
                            class="px-4 py-2 border rounded-md md:text-base text-xs"
                            placeholder="Masukkan nama provinsi"
                        >
                    </div>
                </div>
            {/if}

            <!-- Navigation buttons -->
            <div class="pt-4 flex items-center space-x-4 mt-10">
                {#if currentStep > 1}
                    <button 
                        type="button"
                        on:click={previousStep}
                        class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-100"
                    >
                        <span class="bg-gray-100 px-4 py-2 rounded-md">Sebelumnya</span>
                    </button>
                {/if}
                
                <button 
                    type="button"
                    on:click={nextStep}
                    class="bg-[#d1ad07] flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-yellow-700"
                >
                    <span>{currentStep === totalSteps ? 'Konfirmasi' : 'Selanjutnya'}</span>
                </button>
            </div>
        </form>
    </div>
    </div>
</div>
</div>

<style>
/* Add any additional styles here */
input, textarea {
    @apply p-3;
}
</style>