<script lang="ts">
import { onMount, onDestroy, tick } from 'svelte';
import { formStore } from '$lib/stores';


let formData: any = {};
let isSubmitting = false;
let submitError = null;
let imageFile: File | null = null;
let imagePreview: string | null = null;
let showInvoice = false;
let timeLeft = 3600; // 1 hour in seconds
let timerInterval: ReturnType<typeof setInterval>;
let invoiceNumber: string;

function generateInvoiceNumber() {
    const randomNum = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    return `LDRA${randomNum}`;
}

onMount(() => {
    // Generate invoice number
    invoiceNumber = generateInvoiceNumber();
    
    // Get form data from URL params
    const params = new URLSearchParams(window.location.search);
    formData = {
    fullName: params.get('fullName') || '',
    email: params.get('email') || '',
    nik: params.get('nik') || '',
    phoneNumber: params.get('phoneNumber') || '',
    streetAddress: params.get('streetAddress') || '',
    district: params.get('district') || '',
    city: params.get('city') || '',
    province: params.get('province') || '',
    referralCode: 'LDRX',
    referralCode2: 'LDRA'
    };
    // Start the timer
    startTimer();
});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            window.location.href = '/'; // Redirect to main page
        }
    }, 1000);
}

function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Cleanup on component destroy
onDestroy(() => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});

async function handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
    const file = input.files[0];
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran file terlalu besar. Maksimal 5MB.');
        return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
        alert('Hanya file gambar yang diperbolehkan.');
        return;
    }

    imageFile = file;

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);
    }
}



async function handleSubmit() {
    try {
    isSubmitting = true;
    submitError = null;

    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxQlyiVyVFMWopwHFv9aCKb7Vpx1iLQhYieJMWsKGTdxAt8w-W_b0OMFJKb3RBDPNZcJA/exec';

    const payload = {
        ...formData,
        imageData: imagePreview,
        imageType: imageFile?.type
    };

    console.log('Storing form data:', formData); // Debug log

    // Store ALL form data in the store before making the request
    formStore.update(currentData => ({
        ...currentData,
        fullName: formData.fullName,
        email: formData.email,
        nik: formData.nik,
        phoneNumber: formData.phoneNumber,
        streetAddress: formData.streetAddress,
        district: formData.district,
        city: formData.city,
        province: formData.province,
        imageUrl: imagePreview || ''
    }));

    const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    alert('Data berhasil dikirim!');
    
    // Use window.sessionStorage as backup
    sessionStorage.setItem('formData', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        nik: formData.nik,
        phoneNumber: formData.phoneNumber,
        streetAddress: formData.streetAddress,
        district: formData.district,
        city: formData.city,
        province: formData.province,
        imageUrl: imagePreview || ''
    }));

    window.location.href = '/success';

    } catch (error) {
    console.error('Error submitting form:', error);
    submitError = 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.';
    alert(submitError);
    } finally {
    isSubmitting = false;
    }
}

function toggleView() {
    showInvoice = !showInvoice;
}

async function printInvoice() {
    // First switch to invoice view if not already there
    if (!showInvoice) {
        showInvoice = true;
        // Wait for DOM to update
        await tick();
    }

    // Use window.print() directly - the browser's print dialog will handle the printing
    window.print();
}

async function printAssets() {
    // Create a temporary container
    const tempContainer = document.createElement('div');
    tempContainer.style.padding = '20px';
    tempContainer.style.fontFamily = 'Arial, sans-serif';
    
    // Add the text content directly
    tempContainer.innerHTML = `
        <h2 style="margin-bottom: 20px;">Asset yang anda dapatkan</h2>
        
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">Membership Lubkita.com</div>
            <div>Nikmati membership Lubkita.com dengan paket Gold</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">Android TV LED 32 Inc</div>
            <div>Anda akan memiliki fasilitas TV dengan materi pembelajaran digital</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">1 Set Personal Computer + Jaringan Internet</div>
            <div>Anda akan memiliki set PC yang sudah dilengkapi modem internet</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">Webcam (Mini Camera untuk Pertemuan Daring)</div>
            <div>Anda akan menerima Kamera yang mendukung pertemuan secara daring</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">Fasilitas Zoom</div>
            <div>Anda akan menerima link untuk pelatihan online via Zoom dengan kapasitas 100 orang</div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <div style="font-weight: bold;">Marketing Plan Membership Gold Lubkita.com</div>
            <div>Anda akan difasilitasi dengan layanan pemasaran digital berbasi Google dan MetaAds serta layanan tampilan utama dengan lencana produk unggulan</div>
        </div>
    `;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(tempContainer.innerHTML);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }
}

async function downloadPDF() {
    const element = document.getElementById('invoice-section');
    if (!element) return;

    // Create a clone of the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Adjust styles for PDF
    clone.style.padding = '10px'; // Reduce padding
    
    // Reduce text sizes
    const textElements = clone.querySelectorAll('div, td');
    textElements.forEach(el => {
        if (el instanceof HTMLElement) {
            if (el.classList.contains('text-4xl')) {
                el.style.fontSize = '24px';
            } else if (el.classList.contains('text-2xl')) {
                el.style.fontSize = '18px';
            } else {
                el.style.fontSize = '12px';
            }
        }
    });
    
    // Create a temporary container
    const container = document.createElement('div');
    container.appendChild(clone);
    
    // Import html2pdf dynamically
    const html2pdf = (await import('html2pdf.js')).default;
    
    const opt = {
        margin: 5, // Reduced margin
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        html2pdf().from(clone).set(opt).save();
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate PDF. Please try again.');
    }
}

</script>


<div class="flex justify-center border-b my-8">
    <div class="inline-flex bg-gray-100 rounded-lg p-1">
        <button 
            on:click={() => showInvoice = false}
            class="px-8 py-2 rounded-lg font-medium transition-colors duration-200 {!showInvoice 
                ? 'bg-white text-yellow-500 shadow-sm' 
                : 'text-gray-500 hover:bg-gray-200'}"
        >
            Detail Pembayaran
        </button>
        <button 
        on:click={() => showInvoice = true}
        class="px-8 py-2 rounded-lg font-medium transition-colors duration-200 {showInvoice 
            ? 'bg-white text-yellow-500 shadow-sm' 
            : 'text-gray-500 hover:bg-gray-200'}"
    >
        Invoice
    </button>
    </div>
</div>

{#if showInvoice}
<div class="flex justify-end px-20 mb-4 gap-4">
    <button 
        id="print-invoice-btn"
        on:click={printInvoice}
        class="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        Print Invoice
    </button>
    <button 
        on:click={downloadPDF}
        class="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download PDF
    </button>
</div>

<div id="invoice-section" class="flex flex-col md:p-20 p-5">
    <div class="flex">
        <div class="w-1/2 flex flex-col">
            <img 
                src="/lubkita-invoice-logo.png" 
                alt="Lubkita Logo" 
                class="w-1/2 object-contain mb-4"
            />
            <div class="md:text-base text-xs">Diterbitkan: Nama</div>
            <div class="md:text-base text-xs">Penjual: Lubkita</div>
        </div>
        <div class="w-1/2 flex flex-col">
            <div class="flex flex-col w-1/2 ml-auto mb-5">
                <div class="text-center md:text-4xl text-2xl">INVOICE</div>
                <div class="text-center md:text-base text-xs">Nomor: {invoiceNumber}</div>
            </div>
            <div class="text-right md:text-base text-xs">Untuk:</div>
            <div class="text-right md:text-base text-xs">Pembeli :  {formData.fullName}</div>
            <div class="text-right md:text-base text-xs">Tanggal Pembelian: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <div class="text-right md:text-base text-xs">Alamat Pengiriman: {formData.streetAddress}</div>
            <div class="text-right md:text-base text-xs">{formData.district}</div>
            <div class="text-right md:text-base text-xs">{formData.city}</div>
            <div class="text-right md:text-base text-xs">{formData.province}</div>
        </div>
    </div>

    <table class="w-full rounded-lg my-4">
        <thead class="border-2 border-black">
            <tr>
                <td class="p-4 text-left md:text-base text-xs md:w-1/3 w-1/4">INFO PRODUK</td>
                <td class="p-4 text-left md:text-base text-xs">JUMLAH</td>
                <td class="p-4 text-left md:text-base text-xs">HARGA SATUAN</td>
                <td class="p-4 text-left md:text-base text-xs">HARGA TOTAL</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-4" rowspan="5">
                    <div class="flex flex-col">
                        <div class="md:text-base text-xs">Membership LDR 1 Bulan</div>
                        <div class="md:text-base text-xs">Periode Aktif (3 Jan 2025 - 3 Feb 2025)</div>
                    </div>
                </td>
                <td class="p-4 md:text-base text-xs" rowspan="5">
                    1
                </td>
                <td class="p-4 md:text-base text-xs">15.000.000</td>
                <td class="p-4 md:text-base text-xs">15.000.000</td>
            </tr>
            <tr>
                <td class="p-4">
                    <div class="flex flex-col">
                        <div class="md:text-base text-xs">Total Semua Produk</div>
                        <div class="md:text-base text-xs">Ongkos Kirim</div>
                        <div class="md:text-base text-xs">Diskon Produk</div>
                    </div>
                </td>
                <td class="p-4">
                    <div class="flex flex-col">
                        <div class="md:text-base text-xs">15.000.000</div>
                        <div class="md:text-base text-xs">0</div>
                        <div class="md:text-base text-xs">0</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="p-4 md:text-base text-xs">Total Belanja</td>
                <td class="p-4 md:text-base text-xs">15.000.000</td>
            </tr>
            <tr>
                <td class="p-4 md:text-base text-xs">Biaya Layanan</td>
                <td class="p-4 md:text-base text-xs">0</td>
            </tr>
            <tr>
                <td class="p-4 md:text-base text-xs">TOTAL TAGIHAN</td>
                <td class="p-4 md:text-base text-xs">15.000.000</td>
            </tr>
        </tbody>
    </table>
    <table class="w-full rounded-lg my-4">
        <thead>
            <tr>
                <td class="border-2 border-black p-4 text-left md:text-base text-xs">METODE PEMBAYARAN</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-4 md:text-base text-xs" rowspan="4">
                    VA Mandiri
                </td>
            </tr>
        </tbody>
    </table>
</div>



{:else}
<div class="flex flex-col md:flex-row md:space-x-4 space-y-20 md:px-20 px-5 py-10 mx-auto">
    <div class="flex flex-col shadow-xl shadow-gray-300 rounded-2xl p-4 md:w-1/3 w-full mx-auto">

        <div class="text-3xl md:text-4xl font-bold md:mb-6 mb-3">Detail Pembayaran</div>


        <div class="flex flex-col p-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 w-full">
            <div class="flex justify-between mb-3">
                <div class="text-white font-semibold flex flex-col justify-end">Nominal Pembayaran (IDR)</div>
                <img 
                    src="/mandiri-logo.png" 
                    alt="Mandiri Logo" 
                    class="h-16 w-32 object-cover object-center rounded-xl"
                />
            </div>
            <div class="w-full text-center md:text-5xl text-5xl flex mb-3 font-bold text-white"><div class="text-base">Rp.</div> 50.000.000</div>
            <div class="w-1/2 font-semibold text-white">Nomor Rekening</div>
            <div class="w-1/2 font-semibold text-white flex items-center gap-2">
                10-1000-3888-383
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button 
                    class="hover:text-gray-200 transition-colors"
                    on:click={() => {
                        navigator.clipboard.writeText('10-1000-3888-383');
                        alert('Nomor rekening berhasil disalin!');
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                </button>
            </div>
        </div>


        <div class="flex w-3/4 space-x-5 my-5 ml-auto">
            <div class="flex flex-col w-full text-right">
                <div class="text-3xl">Bayar Sebelum</div>
                <div class="text-4xl font-bold">{formatTime(timeLeft)}</div>
            </div>
            <div class=" w-1/4 aspect-square  flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>


        <div class="flex flex-col my-5 space-y-5">
            <div class="flex flex-col bg-gray-200 p-3 rounded-lg">
                <div class="font-semibold">Konfirmasi Email:</div>
                <div class=" rounded-full">{formData.email}</div>
            </div>
            <div class="flex flex-col bg-gray-200 p-3 rounded-lg">
                <div class="font-semibold">Konfirmasi Whatsapp:</div>
                <div class=" rounded-full">{formData.phoneNumber}</div>
            </div>
        </div>


        <div class="flex rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 p-3">
            <div class="font-semibold text-2xl text-center w-full flex flex-col justify-center">
                <label class="bg-white rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    <span class="text-gray-800">Upload bukti pembayaran</span>
                    <input 
                        type="file" 
                        accept="image/*"
                        on:change={handleImageUpload}
                        class="hidden"
                    >
                </label>
                {#if imagePreview}
                    <div class="mt-6 bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto w-full">
                        <p class="text-sm text-gray-600 mb-3">Preview bukti pembayaran:</p>
                        <div class="relative aspect-[3/4] w-full">
                            <img 
                                src={imagePreview} 
                                alt="Preview bukti pembayaran" 
                                class="absolute inset-0 w-full h-full object-contain rounded-lg"
                            />
                        </div>
                    </div>
                {/if}
            </div>
        </div>
        <div class="flex space-x-3 md:my-10 my-6 md:hidden">
            <button 
                class="text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed p-2 md:text-xl text-base flex flex-col justify-center font-bold rounded-lg w-1/2"
                on:click={handleSubmit}
                disabled={isSubmitting || !imageFile}
            >
                {#if isSubmitting}
                    <span>Mengirim...</span>
                {:else if !imageFile}
                    <span>Upload bukti pembayaran terlebih dahulu</span>
                {:else}
                    <span class="text-center">
                        <div class="text-center">Selesaikan Pembayaran Anda</div>
                    </span>
                {/if}
            </button>
            <a href="https://www.lubkita.com" class="w-1/2">
                <div class="text-white bg-gradient-to-r from-blue-400 to-blue-600 p-2 md:text-xl text-base flex flex-col justify-center font-bold rounded-lg text-center hover:opacity-90 transition-opacity">
                    Login ke Lubkita.com
                </div>
            </a>
        </div>
    </div>






    <div class="flex flex-col shadow-xl shadow-gray-300 rounded-2xl md:w-2/3 w-full space-y-8 p-5">
        <div class="flex w-full justify-between items-center ">
            <div class="flex flex-col">
                <div class="font-semibold text-4xl">Detail Paket</div>
                <div class="text-lg">Apa saja yang anda dapatkan</div>
            </div>
            <div class="flex gap-2">
                <div 
                    id="print-assets-btn"
                    on:click={printAssets}
                    class="flex bg-gradient-to-r from-blue-400 to-blue-600 md:px-4 md:py-3 px-2 py-2 text-lg md:text-2xl text-white font-semibold rounded-xl w-24 md:w-36 justify-center items-center gap-2 cursor-pointer hover:from-blue-500 hover:to-blue-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print
                </div>
                <div 
                    on:click={downloadPDF}
                    class="flex bg-gradient-to-r from-blue-400 to-blue-600 md:px-4 md:py-3 px-2 py-2 text-lg md:text-2xl text-white font-semibold rounded-xl w-24 md:w-36 justify-center items-center gap-2 cursor-pointer hover:from-blue-500 hover:to-blue-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    PDF
                </div>
            </div>
        </div>

        <div id="assets-section">
            <div class="bg-gradient-to-r from-blue-400 to-blue-600 p-4 text-2xl text-white font-semibold rounded-xl text-center">
                Asset yang anda dapatkan
            </div>
            <div class="flex flex-col p-3">
                <div class="border-b border-gray-400 py-2">
                    <div class="font-semibold md:text-xl text-base">Membership Lubkita.com</div>
                    <div class="md:text-base text-sm">Nikmati membership Lubkita.com dengan paket Gold</div>
                </div>
                <div class="border-b border-gray-400 py-2">
                    <div class="font-semibold md:text-xl text-base">Android TV LED 32 Inc</div>
                    <div class="md:text-base text-sm">Anda akan memiliki fasilitas TV dengan materi pembelajaran digital</div>
                </div>
                <div class="border-b border-gray-400 py-2">
                    <div class="font-semibold md:text-xl text-base">1 Set Personal Computer + Jaringan Internet</div>
                    <div class="md:text-base text-sm">Anda akan memiliki set PC yang sudah dilengkapi modem internet</div>
                </div>
                <div class="border-b border-gray-400 py-2">
                    <div class="font-semibold md:text-xl text-base">Webcam (Mini Camera untuk Pertemuan Daring)</div>
                    <div class="md:text-base text-sm">Anda akan menerima Kamera yang mendukung pertemuan secara daring</div>
                </div>
                <div class="border-b border-gray-400 py-2">
                    <div class="font-semibold md:text-xl text-base">Fasilitas Zoom</div>
                    <div class="md:text-base text-sm">Anda akan menerima link untuk pelatihan online via Zoom dengan kapasitas 100 orang</div>
                </div>
                <div>
                    <div class="font-semibold md:text-xl text-base">Marketing Plan Membership Gold Lubkita.com</div>
                    <div class="md:text-base text-sm">Anda akan difasilitasi dengan layanan pemasaran digital berbasi Google dan MetaAds serta layanan tampilan utama dengan lencana produk unggulan</div>
                </div>
                <div class="md:flex space-x-3 md:my-10 my-6 hidden">
                    <button 
                        class="text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed p-2 md:text-xl text-base flex flex-col justify-center font-bold rounded-lg w-1/2 text-center"
                        on:click={handleSubmit}
                        disabled={isSubmitting || !imageFile}
                    >
                        {#if isSubmitting}
                            <span>Mengirim...</span>
                        {:else if !imageFile}
                            <span>Upload bukti pembayaran terlebih dahulu</span>
                        {:else}
                        <span class="text-center">
                            <div class="text-center">Selesaikan Pembayaran Anda</div>
                        </span>
                        {/if}
                    </button>
                    <a href="https://www.lubkita.com" class="w-1/2">
                        <div class="text-white bg-gradient-to-r from-blue-400 to-blue-600 p-2 md:text-xl text-base flex flex-col justify-center font-bold rounded-lg text-center hover:opacity-90 transition-opacity">
                            Login ke Lubkita.com
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>





</div>
{/if}

<style>
@media print {
    @page {
        margin: 20mm;
    }
    
    /* Remove default print styles */
    body * {
        visibility: visible !important;
    }
    
    /* Hide buttons when printing */
    button,
    .print-hide {
        display: none !important;
    }
}
</style>