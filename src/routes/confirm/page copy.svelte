<script lang="ts">
  import { onMount } from 'svelte';
  import { formStore } from '$lib/stores';

  
  let formData: any = {};
  let isSubmitting = false;
  let submitError = null;
  let imageFile: File | null = null;
  let imagePreview: string | null = null;
  
  onMount(() => {
    // Get form data from URL params
    const params = new URLSearchParams(window.location.search);
    formData = {
      fullName: params.get('fullName') || '',
      email: params.get('email') || '',
      nik: params.get('nik') || '',
      streetAddress: params.get('streetAddress') || '',
      district: params.get('district') || '',
      city: params.get('city') || '',
      province: params.get('province') || '',
      referralCode: 'LDRX',
      referralCode2: 'LDRA'
    };
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

      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzsKIncCnHDP9hDCYD2UfYUWTzLfWeRKp_Glyf_ev99wmP4XeoIFP-Z1z_dOuvZCy321Q/exec';

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
  
</script>

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 max-w-6xl mx-auto w-full px-4">
    <div class="relative px-4 py-10 bg-white shadow rounded-3xl sm:p-10">
      <div class="mx-auto">
        <div class="flex items-center space-x-5 mb-8">
          <div class="pl-2">
            <h2 class="text-2xl font-semibold text-gray-700">Konfirmasi Data</h2>
            <p class="text-sm text-gray-500 mt-2">Periksa kembali data Anda sebelum mengirim</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">Nama Lengkap</p>
            <p class="text-lg">{formData.fullName}</p>
          </div>

          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">Email</p>
            <p class="text-lg">{formData.email}</p>
          </div>

          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">NIK</p>
            <p class="text-lg">{formData.nik}</p>
          </div>

          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">Alamat</p>
            <p class="text-lg">{formData.streetAddress}</p>
          </div>

          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">Kecamatan</p>
            <p class="text-lg">{formData.district}</p>
          </div>

          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">Kabupaten/Kota</p>
            <p class="text-lg">{formData.city}</p>
          </div>

          <div class="border-b pb-4">
            <p class="text-sm text-gray-500">Provinsi</p>
            <p class="text-lg">{formData.province}</p>
          </div>

          <!-- Image Upload Section -->
          <div class="border-b pb-4">
            <p class="text-sm text-gray-500 mb-2">Upload Foto</p>
            <input 
              type="file" 
              accept="image/*"
              on:change={handleImageUpload}
              class="mb-4"
            >
            {#if imagePreview}
              <div class="mt-4">
                <p class="text-sm text-gray-500 mb-2">Preview:</p>
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  class="max-w-md rounded-lg shadow-sm"
                />
              </div>
            {/if}
          </div>
        </div>

        <div class="pt-8 flex items-center space-x-4">
          <a 
            href="/"
            class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-100"
          >
            <span class="bg-gray-100 px-4 py-2 rounded-md">Kembali</span>
          </a>
          <button 
            on:click={handleSubmit}
            disabled={isSubmitting}
            class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {#if isSubmitting}
              <span>Mengirim...</span>
            {:else}
              <span>Konfirmasi & Kirim</span>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>