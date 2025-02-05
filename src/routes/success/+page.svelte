<script lang="ts">
  import { onMount } from 'svelte';
  import { formStore } from '$lib/stores';
  
  let formData: any = {
    fullName: '',
    email: '',
    nik: '',
    streetAddress: '',
    district: '',
    city: '',
    province: '',
    imageUrl: ''
  };
  let isSendingEmail = false;
  let emailSent = false;
  let error = null;
  
  onMount(() => {
    // First try to get data from store
    const unsubscribe = formStore.subscribe(value => {
      if (value.email) {
        formData = value;
      } else {
        // If store is empty, try to get from sessionStorage
        const storedData = sessionStorage.getItem('formData');
        if (storedData) {
          formData = JSON.parse(storedData);
          // Update the store with the session data
          formStore.set(formData);
        }
      }
      console.log('Form data loaded:', formData);
    });

    return () => {
      unsubscribe();
    };
  });

  async function sendConfirmationEmail() {
    try {
      // Validate form data
      if (!formData.email) {
        throw new Error('Email is missing from form data');
      }

      if (!formData.fullName) {
        throw new Error('Form data is incomplete');
      }

      isSendingEmail = true;
      error = null;

      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxQlyiVyVFMWopwHFv9aCKb7Vpx1iLQhYieJMWsKGTdxAt8w-W_b0OMFJKb3RBDPNZcJA/exec';

      console.log('Sending email with data:', formData);

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sendEmail: true
        })
      });

      emailSent = true;
      alert('Email konfirmasi telah dikirim!');

    } catch (err: any) {
      console.error('Error sending email:', err);
      error = err.message || 'Gagal mengirim email konfirmasi. Silakan coba lagi.';
      alert(error);
    } finally {
      isSendingEmail = false;
    }
  }
</script>

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 max-w-6xl mx-auto w-full px-4">
    <div class="relative px-4 py-10 bg-white shadow rounded-3xl sm:p-10 text-center">
      <div class="mx-auto">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Pendaftaran Berhasil!</h2>
        <p class="text-gray-500 mb-8">Data Anda telah berhasil dikirim.</p>
        
        {#if formData.email}
          {#if !emailSent}
            <button 
              on:click={sendConfirmationEmail}
              disabled={isSendingEmail}
              class="mb-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {#if isSendingEmail}
                Mengirim Email...
              {:else}
                Kirim Konfirmasi via Email
              {/if}
            </button>
          {:else}
            <p class="text-green-500 mb-6">
              ✓ Email konfirmasi telah dikirim ke 
              <a 
                href="mailto:{formData.email}" 
                class="underline hover:text-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.email}
              </a>
            </p>
          {/if}
        {:else}
          <p class="text-yellow-500 mb-6">Data form tidak lengkap. Silakan isi form kembali.</p>
        {/if}

        <a 
          href="/"
          class="inline-block bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  </div>
</div>