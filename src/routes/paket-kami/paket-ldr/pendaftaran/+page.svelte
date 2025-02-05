<script lang="ts">
  let formData = {
    fullName: '',
    email: '',
    nik: '',
  };
  
  let isSubmitting = false;
  let submitError = null;

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
    return true;
  }

  function resetForm() {
    formData = {
      fullName: '',
      email: '',
      nik: '',
    };
    submitError = null;
  }

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      isSubmitting = true;
      submitError = null;

      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxscx7bpBsaZsABsZvsdIswXFrkaYM3pvnWadcfJcGHtbcFUJDfqIQvy6OkEWkYyCOI6g/exec';
      const formDataObj = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      });

      alert('Data berhasil dikirim!');
      resetForm();

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
        <div class="flex items-center space-x-5">
          <div class="pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 class="leading-relaxed">Formulir Pendaftaran LDR</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">Silakan lengkapi semua field di bawah ini</p>
          </div>
        </div>
        
        <form on:submit={handleSubmit} class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Nama Lengkap</label>
              <input 
                type="text" 
                bind:value={formData.fullName}
                class="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama lengkap Anda"
              >
            </div>
            
            <div class="flex flex-col">
              <label class="leading-loose">Email</label>
              <input 
                type="email" 
                bind:value={formData.email}
                class="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@contoh.com"
              >
            </div>

            <div class="flex flex-col">
              <label class="leading-loose">NIK</label>
              <input 
                type="text" 
                bind:value={formData.nik}
                maxlength="16"
                class="px-4 py-2 border w-full sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan 16 digit NIK"
              >
            </div>
          </div>

          <div class="pt-4 flex items-center space-x-4">
            <button 
              type="button"
              on:click={resetForm}
              class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-100"
            >
              <span class="bg-gray-100 px-4 py-2 rounded-md">Batal</span>
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {#if isSubmitting}
                <span>Mengirim...</span>
              {:else}
                <span>Kirim</span>
              {/if}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  /* Svelte scopes styles automatically */
  input, textarea {
    @apply p-3;
  }
</style>