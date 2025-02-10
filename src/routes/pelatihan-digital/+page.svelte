<script lang="ts">
  import { writable, derived } from 'svelte/store';

  // Sample video data - replace with your actual video data
  const videos = writable([
    { 
      id: 1, 
      title: 'Cara daftar penjual di Lubkita.com', 
      duration: '0:30', 
      url: '/lubkita-animasi1.mp4', 
      thumbnail: '/page-videopelatihan-thumbnail.png' 
    },
    { 
      id: 2, 
      title: 'Apa itu Lubkita.com?', 
      duration: '0:30', 
      url: '/lubkita-animasi2.mp4', 
      thumbnail: '/page-videopelatihan-thumbnail2.png' 
    },
  ]);

  type Video = {
    id: number;
    title: string;
    duration: string;
    url: string;
    thumbnail: string;
  };

  let selectedVideo: Video | null = null;
  let searchTerm = '';

  // Filter videos based on search term
  $: filteredVideos = $videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function playVideo(video: Video) {
    selectedVideo = video;
  }
</script>

<div class="md:min-h-screen bg-gray-50">
  <div class="flex w-full flex-col lg:flex-row">
    <div class="w-full lg:w-4/5 flex flex-col md:p-3 bg-yellow-200">
      <div class="bg-slate-100 md:rounded-xl rounded-b-xl mx-5">
        <div class="rounded-xl p-3 w-full flex">
          <input 
            type="text"
            bind:value={searchTerm}
            placeholder="Cari video..."
            class="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 md:text-base text-sm md:mt-0 mt-2"
          />
        </div>
      

        <div class="rounded-xl md:p-5 flex items-center justify-center">
          {#if selectedVideo}
            <div class="w-full">
              <video 
                src={selectedVideo.url} 
                controls 
                class="w-full"
              >
                <track kind="captions">
                Your browser does not support the video tag.
              </video>
            </div>
          {:else}
            <div class="text-gray-500 my-10 hidden md:flex">
              Pilih video untuk dimainkan
            </div>
            <div class="text-gray-500 md:hidden flex justify-center m-3 p-5 rounded-2xl bg-white">
              <img src="/page-videopelatihan-selamatdatang.png" alt="Selamat Datang" class="w-1/6 h-auto">
              <div class="flex flex-col justify-center pl-4">
                <div class="font-bold text-2xl">Selamat datang!</div>
                <div>Pilih video untuk dimainkan</div>
              </div>
            </div>
          {/if}
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-5 bg-white-200 mt-5 rounded-t-3xl">
        {#each filteredVideos as video (video.id)}
          <button 
            class="flex flex-col bg-yellow-100 p-2 cursor-pointer hover:bg-slate-100 transition-colors rounded-3xl shadow-lg"
            on:click={() => playVideo(video)}
            on:keydown={(e) => e.key === 'Enter' && playVideo(video)}
          >
            <div class="w-full aspect-video bg-gray-200 rounded-t-3xl">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                class="w-full object-cover rounded-t-3xl"
              />
            </div>
              <div class="flex flex-col w-full rounded-b-3xl bg-yellow-100">
                <div class="font-bold md:text-base text-sm bg-yellow-800 py-2 text-white">{video.title}</div>
                <div class="p-2 italic">Durasi: {video.duration}</div>
              </div>
          </button>
        {/each}
      </div>
      <a href="/pendaftaran" class="bg-yellow-400 mx-auto w-full text-center font-bold py-3 2xl hover:bg-yellow-400 md:hidden mt-20">
        Pendaftaran
      </a>
    </div>

    <div class="w-full lg:w-1/4 md:flex md:flex-col bg-slate-200 hidden">
      <div class="bg-white p-5 lg:p-10 flex flex-col rounded-b-3xl mx-3 ">
        <div class="flex justify-center">
          <img src="/page-videopelatihan-selamatdatang.png" alt="Selamat Datang" class="w-full max-w-[300px] h-auto">
        </div>
        <div class="text-center mt-6 font-bold text-xl lg:text-2xl">Selamat Datang</div>
      </div>
      
      <div class="p-5 justify-center flex py-5 lg:py-10">
        <a href="/pendaftaran" class="bg-yellow-200 w-5/6 rounded-full text-center font-bold py-3 lg:py-4 text-xl lg:text-2xl hover:bg-yellow-400 shadow-lg">
          Pendaftaran
        </a>
      </div>

      <div class="p-3 flex flex-col rounded-3xl bg-white mx-3 ">
        <div class="text-center font-bold text-2xl lg:text-3xl my-3 lg:my-5">
          Kontak kami
        </div>

        <!-- Social Media Links -->
        {#each [
          { 
            href: 'https://www.instagram.com/lubkita.id',
            icon: '/page-videopelatihan-instagram-icon.png',
            alt: 'Instagram',
            title: 'lubkita.id',
            text: 'Follow kami di Instagram'
          },
          {
            href: 'https://www.tiktok.com/@lubkita.id',
            icon: '/page-videopelatihan-tiktok-icon.png',
            alt: 'TikTok',
            title: 'lubkita.id',
            text: 'Follow kami di TikTok!'
          },
          {
            href: 'https://wa.me/6282177726868',
            icon: '/page-videopelatihan-whatsappcolor-icon.png',
            alt: 'Whatsapp',
            title: '+62 82177726868',
            text: 'Hubungi kami via WhatsApp!'
          },
          {
            href: 'https://www.lubkita.com',
            icon: '/page-videopelatihan-website-icon.png',
            alt: 'website',
            title: 'lubkita.com',
            text: 'Kunjungi website kami!'
          }
        ] as link} 
          <a 
            href={link.href}
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex cursor-pointer hover:bg-gray-50 transition-all transform hover:-translate-y-1 border-y border-gray-300 py-10"
          >
            <div class="aspect-square w-1/3  flex flex-col justify-center mx-auto">
              <img src={link.icon} alt={link.alt} class="w-16 object-cover mx-auto">
            </div>
            <div class="flex flex-col justify-center w-2/3 md:p-1">
              <div class="font-bold md:text-lg text-sm">{link.title}</div>
              <div class="md:text-lg text-sm">{link.text}</div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  input, textarea {
    @apply p-3;
  }
</style>